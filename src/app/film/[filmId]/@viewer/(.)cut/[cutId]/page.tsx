import { Text } from '@chakra-ui/react';

import { createApolloClient } from '@/apollo/createApolloClient';
import { CutsDocument } from '@/graphql/api/hooks';
import type { CutsQuery } from '@/graphql/api/operations';
import CutDetail from '../../_components/CutDetail';
import CutModal from './_components/CutModal';
import CutSlide from './_components/CutSlide';

export default async function Page({
  params,
}: {
  params: Promise<{ filmId: string; cutId: string }>;
}) {
  const { filmId, cutId } = await params;
  const apolloClient = await createApolloClient({});

  try {
    const { data } = await apolloClient.query<CutsQuery>({
      query: CutsDocument,
      variables: { filmId: Number(filmId) },
    });

    const page = data.cuts.findIndex((cut) => cut.id === Number(cutId));

    if (page === -1) {
      return <Text>존재하지 않는 장면입니다.</Text>;
    }

    return (
      <CutModal>
        <CutSlide itemSize={data.cuts.length} page={page}>
          {(nth) => <CutDetail cutId={data.cuts[nth].id} />}
        </CutSlide>
      </CutModal>
    );
  } catch (error) {
    console.error(error);

    return <Text>영화 장면을 표시할 수 없습니다.</Text>;
  }
}
