import createApolloClient from '@/apollo/client/createApolloClient';
import { FilmDocument } from '@/graphql/anonymous/api/hooks';
import type { FilmQuery } from '@/graphql/anonymous/api/operations';
import FilmDetail from './_components/FilmDetail';

export default async function FilmOverview({ params }: { params: Promise<{ filmId: string }> }) {
  const { filmId } = await params;
  const apolloClient = createApolloClient({ kind: 'anonymous' });

  const {
    data: { film },
  } = await apolloClient.query<FilmQuery>({
    query: FilmDocument,
    variables: { filmId: Number(filmId) },
  });

  return <FilmDetail film={film} />;
}
