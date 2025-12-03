import { Show, Text } from '@chakra-ui/react';

import { createApolloClient } from '@/apollo/createApolloClient';
import { FilmDocument } from '@/graphql/api/hooks';
import type { FilmQuery } from '@/graphql/api/operations';
import FilmDetail from './_components/FilmDetail';

export default async function FilmOverview({ params }: { params: Promise<{ filmId: string }> }) {
  const { filmId } = await params;
  const apolloClient = await createApolloClient({});

  try {
    const { data } = await apolloClient.query<FilmQuery>({
      query: FilmDocument,
      variables: { filmId: Number(filmId) },
    });

    return (
      <Show when={data.film} fallback={<Text>영화를 찾을 수 없습니다.</Text>}>
        {(film) => <FilmDetail film={film} />}
      </Show>
    );
  } catch (error) {
    console.error(error);

    return <Text>페이지를 표시할 수 없습니다.</Text>;
  }
}
