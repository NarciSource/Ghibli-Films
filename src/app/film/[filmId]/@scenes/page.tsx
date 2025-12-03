import { Text } from '@chakra-ui/react';

import { createApolloClient } from '@/apollo/createApolloClient';
import { CutsDocument } from '@/graphql/api/hooks';
import type { CutsQuery } from '@/graphql/api/operations';
import CutList from './_components/CutList';

export default async function FilmCuts({ params }: { params: Promise<{ filmId: string }> }) {
  const { filmId } = await params;
  const apolloClient = await createApolloClient({});

  try {
    const { data } = await apolloClient.query<CutsQuery>({
      query: CutsDocument,
      variables: { filmId: Number(filmId) },
    });

    return <CutList cuts={data.cuts} />;
  } catch (error) {
    console.error(error);

    return <Text>영화 장면을 표시할 수 없습니다.</Text>;
  }
}
