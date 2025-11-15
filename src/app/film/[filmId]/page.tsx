'use server';

import { Box, Text } from '@chakra-ui/react';

import { getPublicApolloClient } from '@/apollo/getPublicApolloClient';
import FilmDetail from '@/app/_components/film/FilmDetail';
import { FilmCutList, FilmCutListLoader } from '@/app/_components/film-cut';
import { FilmDocument } from '@/graphql/api/hooks';
import type { FilmQuery } from '@/graphql/api/operations';

export default async function Film({ params }: { params: Promise<{ filmId: string }> }) {
  const { filmId } = await params;

  try {
    // 서버에서 데이터 패칭
    const apolloClient = await getPublicApolloClient();

    const { data } = await apolloClient.query<FilmQuery>({
      query: FilmDocument,
      variables: { filmId: Number(filmId) },
    });

    return (
      <Box px={{ base: 4 }}>
        {filmId && data?.film ? (
          <>
            <FilmDetail film={data.film} />
            <Box mt={12}>
              <FilmCutListLoader filmId={data.film.id}>
                {(cuts) => <FilmCutList cuts={cuts} />}
              </FilmCutListLoader>
            </Box>
          </>
        ) : (
          <Text>영화를 찾을 수 없습니다.</Text>
        )}
      </Box>
    );
  } catch (error) {
    console.error(error);

    return <Text>페이지를 표시할 수 없습니다.</Text>;
  }
}
