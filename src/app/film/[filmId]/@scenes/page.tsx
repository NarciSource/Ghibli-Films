import createApolloClient from '@/apollo/client/createApolloClient';
import { CutsDocument } from '@/graphql/anonymous/api/hooks';
import type { CutsQuery } from '@/graphql/anonymous/api/operations';
import CutList from './_components/CutList';

export default async function FilmCuts({ params }: { params: Promise<{ filmId: string }> }) {
  const { filmId } = await params;
  const apolloClient = await createApolloClient({ kind: 'anonymous' });

  const { data } = await apolloClient.query<CutsQuery>({
    query: CutsDocument,
    variables: { filmId: Number(filmId) },
  });

  return <CutList cuts={data.cuts} />;
}
