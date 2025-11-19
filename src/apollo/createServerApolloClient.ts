import {
  ApolloClient,
  from,
  InMemoryCache,
  type NormalizedCacheObject,
  split,
} from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { Kind, OperationTypeNode } from 'graphql';

import { errorLink, httpUploadLink, wsLink } from './middleware';

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);

    return (
      definition.kind === Kind.OPERATION_DEFINITION &&
      definition.operation === OperationTypeNode.SUBSCRIPTION
    );
  },
  from([wsLink]),
  from([errorLink, httpUploadLink]),
);

export const createServerApolloClient = async (): Promise<ApolloClient<NormalizedCacheObject>> => {
  apolloClient = new ApolloClient({
    ssrMode: true,
    // 쿠키와 인증 정보를 함께 전송
    credentials: 'include',
    // 요청 타입에 따라 각 Link로 분기
    link: splitLink,
    // SSR 캐시를 hydrate
    cache: new InMemoryCache(),
  });
  return apolloClient;
};

export let apolloClient: ApolloClient<NormalizedCacheObject>;
