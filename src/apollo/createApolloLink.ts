import { from, split } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { Kind, OperationTypeNode } from 'graphql';

import {
  clientHttpUploadLink,
  dynamicCookieLink,
  errorLink,
  serverHttpUploadLink,
  wsLink,
} from './middleware';

export async function createLink() {
  const httpUploadLink =
    typeof window !== 'undefined' ? clientHttpUploadLink : serverHttpUploadLink;

  const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query);

      // subscription 요청인 경우 wsLink를 사용하고, 그 외에는 httpUploadLink를 사용
      return (
        definition.kind === Kind.OPERATION_DEFINITION &&
        definition.operation === OperationTypeNode.SUBSCRIPTION
      );
    },
    from([wsLink]),
    from([errorLink, dynamicCookieLink, httpUploadLink]),
  );

  return splitLink;
}
