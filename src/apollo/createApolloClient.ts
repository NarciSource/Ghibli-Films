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

/**
 * @param initialApolloState
 *   - 서버에서 SSR로 GraphQL 데이터를 미리 가져온 후,
 *     client.cache.extract()로 추출한 캐시 객체를 전달.
 *   - 클라이언트 ApolloClient가 해당 상태로 초기화(hydrate)되어
 *     페이지 로딩 시 이미 SSR 데이터가 캐시에서 바로 사용.
 *   - 전달하지 않으면 클라이언트는 빈 캐시 상태로 시작하여,
 *     첫 렌더링 시 useQuery가 네트워크 요청.
 */
export const createApolloClient = ({
  initialApolloState,
}: {
  initialApolloState?: NormalizedCacheObject;
}): ApolloClient<NormalizedCacheObject> => {
  apolloClient = new ApolloClient({
    // 요청 타입에 따라 각 Link로 분기
    link: splitLink,
    // SSR 캐시를 hydrate
    cache: createApolloCache().restore(initialApolloState ?? {}),
  });
  return apolloClient;
};

export let apolloClient: ApolloClient<NormalizedCacheObject>;
