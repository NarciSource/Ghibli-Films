import { from, split } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { Kind, OperationTypeNode } from 'graphql';

import type { ClientContext } from '../client/ClientContext';
import dynamicCookieLink from './middleware/dynamicCookieLink';
import errorLink from './middleware/errorLink';
import createHttpLink from './transport/createHttpLink';
import createWsLink from './transport/createWsLink';

export default function createApolloLink({ kind, isServer }: ClientContext) {
  const isAnonymous = kind === 'anonymous';

  const httpLink = createHttpLink({ kind, isServer });
  const wsLink = createWsLink();

  if (isAnonymous) {
    return from([errorLink, httpLink]);
  }

  const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      const isSubscription =
        definition.kind === Kind.OPERATION_DEFINITION &&
        definition.operation === OperationTypeNode.SUBSCRIPTION;

      return isSubscription;
    },
    from([wsLink]),
    from([errorLink, dynamicCookieLink, httpLink]),
  );

  return splitLink;
}
