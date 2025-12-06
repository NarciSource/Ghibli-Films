'use client';

import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { Text } from '@chakra-ui/react';

import { useCutsStore } from '../../../_store/useCutsStore';
import CutDetail from '../../_components/CutDetail';
import CutModal from './_components/CutModal';
import CutSlide from './_components/CutSlide';

export default function Page() {
  const { cutId } = useParams();
  const nth = useSearchParams().get('nth');
  const navigate = useRouter();

  const { cuts } = useCutsStore.getState();

  const onPageChange = ({ page }: { page: number }) => {
    navigate.replace(`./${cuts[page].id}?nth=${page}`);
  };

  try {
    return (
      <CutModal>
        <CutSlide slideCount={cuts.length} defaultPage={Number(nth)} onPageChange={onPageChange}>
          <CutDetail cutId={Number(cutId)} />
        </CutSlide>
      </CutModal>
    );
  } catch (error) {
    console.error(error);

    return <Text>영화 장면을 표시할 수 없습니다.</Text>;
  }
}
