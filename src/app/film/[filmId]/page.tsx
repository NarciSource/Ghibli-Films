import { Box, Spinner, Text } from '@chakra-ui/react';
import FilmDetail from '@/app/_components/film/FilmDetail';
import FilmCutList from '@/app/_components/film-cut/FilmCutList';

export default function Film(): React.ReactElement {
  const filmId = null;
  const loading = false;
  const error = null;
  const data: any = null;

  return (
    <>
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
    </>
  );
}
