import { createApolloClient } from '@/apollo/createApolloClient';
import { FilmDocument } from '@/graphql/api/hooks';
import type { FilmQuery } from '@/graphql/api/operations';
import FilmDetail from './_components/FilmDetail';

export default async function FilmOverview({ params }: { params: Promise<{ filmId: string }> }) {
  const { filmId } = await params;
  const apolloClient = await createApolloClient({});

  const {
    data: { film },
  } = await apolloClient.query<FilmQuery>({
    query: FilmDocument,
    variables: { filmId: Number(filmId) },
  });

  return <FilmDetail film={film} />;
}
