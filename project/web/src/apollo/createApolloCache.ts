import { InMemoryCache, type NormalizedCacheObject } from '@apollo/client';
import { LocalStorageWrapper, persistCache } from 'apollo3-cache-persist';

import type { PaginatedFilms } from '@/graphql/api/type';

export const createApolloCache = async (
  initialApolloState: NormalizedCacheObject = {},
): Promise<InMemoryCache> => {
  const cache = new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          films: {
            keyArgs: ['search'],
            merge: (
              existing: PaginatedFilms | undefined,
              incoming: PaginatedFilms,
            ): PaginatedFilms => ({
              cursor: incoming.cursor,
              films: existing ? [...existing.films, ...incoming.films] : incoming.films,
            }),
          },
        },
      },
    },
  });

  if (typeof window !== 'undefined') {
    // 캐시를 영속화: localStorage와 동기화
    await persistCache({
      cache,
      storage: new LocalStorageWrapper(window.localStorage),
    });
  }

  // 이전 캐시 상태를 추출
  const existingCache = cache.extract();
  // 캐시에 데이터가 비어있으면, 전달 받은 초기 상태로 초기화
  if (Object.keys(existingCache).length === 0) {
    cache.restore(initialApolloState);
  }

  return cache;
};
