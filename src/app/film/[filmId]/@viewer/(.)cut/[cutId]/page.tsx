'use client';

import { useSearchParams } from 'next/navigation';
import { Text } from '@chakra-ui/react';

import { useCutsStore } from '../../../_store/useCutsStore';
import CutDetail from '../../_components/CutDetail';
import CutModal from './_components/CutModal';
import CutSlide from './_components/CutSlide';

export default function Page() {
  const nth = useSearchParams().get('nth');

  const { cuts } = useCutsStore.getState();

  try {
    return (
      <CutModal>
        <CutSlide itemSize={cuts.length} page={Number(nth)}>
          {(nth) => <CutDetail cutId={cuts[nth].id} />}
        </CutSlide>
      </CutModal>
    );
  } catch (error) {
    console.error(error);

    return <Text>영화 장면을 표시할 수 없습니다.</Text>;
  }
}
