import { ApolloClient, from, type NormalizedCacheObject, split } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { Kind, OperationTypeNode } from 'graphql';
import { createApolloCache } from './createApolloCache';
import { authLink, errorLink, httpUploadLink, wsLink } from './middleware';

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
  from([authLink, errorLink, httpUploadLink]),
);

export const createApolloClient = (): ApolloClient<NormalizedCacheObject> => {
  apolloClient = new ApolloClient({ link: splitLink, cache: createApolloCache() });
  return apolloClient;
};

export let apolloClient: ApolloClient<NormalizedCacheObject>;
