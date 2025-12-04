import { v4 as uuidv4 } from 'uuid';
import { Carousel, For } from '@chakra-ui/react';

import CutSlideOverlay from './CutSlideOverlay';
import LazySlide from './LazySlide';

export default function CutSlide({
  itemSize,
  page,
  children,
}: {
  itemSize: number;
  page: number;
  children: (id: number) => React.ReactNode;
}) {
  return (
    <CutSlideOverlay slideCount={itemSize} defaultPage={page}>
      <Carousel.ItemGroup>
        <For each={Array(itemSize).fill(0)}>
          {(_, index) => (
            <Carousel.Item key={uuidv4()} index={index}>
              <LazySlide index={index}>{children(index)}</LazySlide>
            </Carousel.Item>
          )}
        </For>
      </Carousel.ItemGroup>
    </CutSlideOverlay>
  );
}
