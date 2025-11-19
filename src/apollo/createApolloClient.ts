import { ApolloClient, type NormalizedCacheObject } from '@apollo/client';

import { createApolloCache } from './createApolloCache';
import { createLink } from './createApolloLink';

/**
 * @param initialApolloState
 *   - 서버에서 SSR로 GraphQL 데이터를 미리 가져온 후,
 *     client.cache.extract()로 추출한 캐시 객체를 전달.
 *   - 클라이언트 ApolloClient가 해당 상태로 초기화(hydrate)되어
 *     페이지 로딩 시 이미 SSR 데이터가 캐시에서 바로 사용.
 *   - 전달하지 않으면 클라이언트는 빈 캐시 상태로 시작하여,
 *     첫 렌더링 시 useQuery가 네트워크 요청.
 */
export const createApolloClient = async ({
  state,
}: {
  state?: NormalizedCacheObject;
}): Promise<ApolloClient<NormalizedCacheObject>> => {
  if (!apolloClient) {
    apolloClient = new ApolloClient({
      // 쿠키와 인증 정보를 함께 전송
      credentials: 'include',
      // 요청 타입에 따라 각 Link로 분기
      link: await createLink(),
      // SSR 캐시를 hydrate
      cache: await createApolloCache(state),
    });
  }
  return apolloClient;
};

// 싱글톤
export let apolloClient: ApolloClient<NormalizedCacheObject>;
