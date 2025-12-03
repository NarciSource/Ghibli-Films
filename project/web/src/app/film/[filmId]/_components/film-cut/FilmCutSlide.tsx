import { Carousel, For } from '@chakra-ui/react';

import FilmCutDetail from './FilmCutDetail';
import FilmCutSlideOverlay from './FilmCutSlideOverlay';
import LazySlide from './LazySlide';

export default function FilmCutSlide({
  items,
  page,
}: {
  items: { id: number; src: string }[];
  page: number;
}) {
  return (
    <FilmCutSlideOverlay slideCount={items.length} defaultPage={page}>
      <Carousel.ItemGroup>
        <For each={items}>
          {({ id }, index) => (
            <Carousel.Item key={id} index={index}>
              <LazySlide index={index}>
                <FilmCutDetail cutId={id} />
              </LazySlide>
            </Carousel.Item>
          )}
        </For>
      </Carousel.ItemGroup>
    </FilmCutSlideOverlay>
  );
}
