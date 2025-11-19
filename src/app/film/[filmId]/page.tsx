import { Box, Text } from '@chakra-ui/react';

import { createServerApolloClient } from '@/apollo/createServerApolloClient';
import { FilmDocument, FilmsDocument } from '@/graphql/api/hooks';
import type { FilmQuery, FilmsQuery } from '@/graphql/api/operations';
import FilmDetail from './_components/FilmDetail';
import { FilmCutList, FilmCutListLoader } from './_components/film-cut';

/**
 * 동적 경로에서 정적 페이지 설정을 위해
 * 빌드 시점에 동적 라우트의 모든 파라미터를 미리 생성.
 *
 * Next.js는 빌드 과정에서 이 함수를 자동으로 호출하며,
 * 반환된 params를 기반으로 각 동적 경로에 대한 정적 HTML 파일을 생성
 *
 * @returns 정적 페이지 생성을 위해 사용되는 `params` 형태의 파라미터 배열
 */
export async function generateStaticParams() {
  const Limit = 9999;
  const apolloClient = await createServerApolloClient();

  const { data } = await apolloClient.query<FilmsQuery>({
    query: FilmsDocument,
    variables: { limit: Limit },
  });

  return data.films.films.map((film) => ({
    filmId: film.id.toString(),
  }));
}

export default async function Film({ params }: { params: Promise<{ filmId: string }> }) {
  const { filmId } = await params;

  try {
    const apolloClient = await createServerApolloClient();

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
