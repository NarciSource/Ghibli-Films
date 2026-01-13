import { ApolloClient, type NormalizedCacheObject } from '@apollo/client';

import createApolloLink from '../link/createApolloLink';
import type { ClientKind } from './ClientContext';
import createApolloCache from './createApolloCache';

/**
 * @param initialApolloState
 *   - 서버에서 SSR로 GraphQL 데이터를 미리 가져온 후,
 *     client.cache.extract()로 추출한 캐시 객체를 전달.
 *   - 클라이언트 ApolloClient가 해당 상태로 초기화(hydrate)되어
 *     페이지 로딩 시 이미 SSR 데이터가 캐시에서 바로 사용.
 *   - 전달하지 않으면 클라이언트는 빈 캐시 상태로 시작하여,
 *     첫 렌더링 시 useQuery가 네트워크 요청.
 */
export default async function createApolloClient({
  state,
  kind = 'authenticated',
}: {
  state?: NormalizedCacheObject;
  kind?: ClientKind;
}): Promise<ApolloClient<NormalizedCacheObject>> {
  const isServer = typeof window === 'undefined';

  const client = kind === 'anonymous' ? anonymousClient : authenticatedClient;

  if (client) return client;

  const apolloClient = new ApolloClient({
    link: await createApolloLink({ kind, isServer }),
    // SSR 캐시를 hydrate
    cache: await createApolloCache(state),
  });

  if (kind === 'anonymous') {
    anonymousClient = apolloClient;
  } else {
    authenticatedClient = apolloClient;
  }

  return apolloClient;
}

// 싱글톤
export let authenticatedClient: ApolloClient<NormalizedCacheObject>;
export let anonymousClient: ApolloClient<NormalizedCacheObject>;
