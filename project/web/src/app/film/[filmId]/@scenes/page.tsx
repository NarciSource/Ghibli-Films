import { createApolloClient } from '@/apollo/createApolloClient';
import { CutsDocument } from '@/graphql/api/hooks';
import type { CutsQuery } from '@/graphql/api/operations';
import CutList from './_components/CutList';

export default async function FilmCuts({ params }: { params: Promise<{ filmId: string }> }) {
  const { filmId } = await params;
  const apolloClient = await createApolloClient({});

  const { data } = await apolloClient.query<CutsQuery>({
    query: CutsDocument,
    variables: { filmId: Number(filmId) },
  });

  return <CutList cuts={data.cuts} />;
}
