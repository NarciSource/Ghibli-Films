import { useCarouselContext } from '@chakra-ui/react';

export default function LazySlide({
  index,
  children,
}: {
  index: number;
  children: React.ReactNode;
}) {
  const NearSize = 2; // 미리 로딩할 범위
  const carousel = useCarouselContext();

  const active = carousel.page;
  const isNear = Math.abs(index - active) <= NearSize;

  if (!isNear) {
    return null;
  }

  return children;
}
