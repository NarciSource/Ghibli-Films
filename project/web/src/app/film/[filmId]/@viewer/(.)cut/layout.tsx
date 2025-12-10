'use client';

import { useRouter, useSearchParams } from 'next/navigation';

import { useCutsStore } from '../../_store/useCutsStore';
import CutModal from './[cutId]/_components/CutModal';
import CutSlide from './[cutId]/_components/CutSlide';

export default function Layout({ children }: { children: React.ReactNode }) {
  const nth = useSearchParams().get('nth');
  const navigate = useRouter();

  const { cuts } = useCutsStore.getState();

  const onPageChange = ({ page }: { page: number }) => {
    navigate.replace(`./${cuts[page].id}?nth=${page}`);
  };

  return (
    <CutModal>
      <CutSlide slideCount={cuts.length} defaultPage={Number(nth)} onPageChange={onPageChange}>
        {children}
      </CutSlide>
    </CutModal>
  );
}
