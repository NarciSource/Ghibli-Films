import { Text } from '@chakra-ui/react';

import { createApolloClient } from '@/apollo/createApolloClient';
import { CutsDocument } from '@/graphql/api/hooks';
import type { CutsQuery } from '@/graphql/api/operations';
import CutDetail from '../../_components/CutDetail';
import CutModal from './_components/CutModal';
import CutSlide from './_components/CutSlide';

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ filmId: string; cutId: string }>;
  searchParams: Promise<{ nth?: string }>;
}) {
  const { filmId } = await params;
  const { nth } = await searchParams;
  const apolloClient = await createApolloClient({});

  try {
    const { data } = await apolloClient.query<CutsQuery>({
      query: CutsDocument,
      variables: { filmId: Number(filmId) },
    });

    return (
      <CutModal>
        <CutSlide itemSize={data.cuts.length} page={Number(nth)}>
          {(nth) => <CutDetail cutId={data.cuts[nth].id} />}
        </CutSlide>
      </CutModal>
    );
  } catch (error) {
    console.error(error);

    return <Text>영화 장면을 표시할 수 없습니다.</Text>;
  }
}
