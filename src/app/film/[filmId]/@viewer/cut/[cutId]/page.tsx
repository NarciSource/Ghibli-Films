import { Text } from '@chakra-ui/react';

import { createApolloClient } from '@/apollo/createApolloClient';
import { CutsDocument } from '@/graphql/api/hooks';
import type { CutsQuery } from '@/graphql/api/operations';
import CutModal from '../../_components/CutModal';
import CutSlide from '../../_components/CutSlide';

export default async function Page({ params }: { params: Promise<{ cutId: string }> }) {
  const { cutId } = await params;
  const apolloClient = await createApolloClient({});

  try {
    const { data } = await apolloClient.query<CutsQuery>({
      query: CutsDocument,
      variables: { filmId: Number(cutId) },
    });

    return (
      <CutModal>
        <CutSlide items={data.cuts} page={Number(cutId)} />
      </CutModal>
    );
  } catch (error) {
    console.error(error);

    return <Text>영화 장면을 표시할 수 없습니다.</Text>;
  }
}
