'use server';

import { Text } from '@chakra-ui/react';

import { getPublicApolloClient } from '@/apollo/getPublicApolloClient';
import { CutsDocument } from '@/graphql/api/hooks';
import type { CutsQuery } from '@/graphql/api/operations';

export default async function FilmCutListLoader({
  filmId,
  children,
}: {
  filmId: number;
  children: (cuts: CutsQuery['cuts']) => React.ReactNode;
}) {
  const apolloClient = await getPublicApolloClient();

  try {
    const { data } = await apolloClient.query<CutsQuery>({
      query: CutsDocument,
      variables: { filmId },
    });

    return <>{children(data.cuts)}</>;
  } catch (error) {
    console.error(error);

    return <Text>영화 장면을 표시할 수 없습니다.</Text>;
  }
}
