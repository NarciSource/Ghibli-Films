'use client';

import { Box, Spinner, Text } from '@chakra-ui/react';
import { useParams } from 'next/navigation';
import FilmDetail from '@/app/_components/film/FilmDetail';
import FilmCutList from '@/app/_components/film-cut/FilmCutList';
import { useFilmQuery } from '@/graphql/api/hooks';

export default function Film(): React.ReactElement {
  const { filmId } = useParams();
  const { data, loading, error } = useFilmQuery({
    variables: { filmId: Number(filmId) },
  });

  return (
    <Box px={{ base: 4 }}>
      {loading && <Spinner />}
      {error && <Text>페이지를 표시할 수 없습니다.</Text>}
      {filmId && data?.film ? (
        <>
          <FilmDetail film={data.film} />
          <Box mt={12}>
            <FilmCutList filmId={data.film.id} />
          </Box>
        </>
      ) : (
        <Text>페이지를 표시할 수 없습니다.</Text>
      )}
    </Box>
  );
}
