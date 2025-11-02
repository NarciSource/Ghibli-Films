import { InMemoryCache } from '@apollo/client';
import type { PaginatedFilms } from '@/graphql/api/type';

export const createApolloCache = (): InMemoryCache => {
  return new InMemoryCache({
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
};
