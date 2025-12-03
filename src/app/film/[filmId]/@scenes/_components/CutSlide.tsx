import { Carousel, For } from '@chakra-ui/react';

import CutDetail from './CutDetail';
import CutSlideOverlay from './CutSlideOverlay';
import LazySlide from './LazySlide';

export default function CutSlide({
  items,
  page,
}: {
  items: { id: number; src: string }[];
  page: number;
}) {
  return (
    <CutSlideOverlay slideCount={items.length} defaultPage={page}>
      <Carousel.ItemGroup>
        <For each={items}>
          {({ id }, index) => (
            <Carousel.Item key={id} index={index}>
              <LazySlide index={index}>
                <CutDetail cutId={id} />
              </LazySlide>
            </Carousel.Item>
          )}
        </For>
      </Carousel.ItemGroup>
    </CutSlideOverlay>
  );
}
