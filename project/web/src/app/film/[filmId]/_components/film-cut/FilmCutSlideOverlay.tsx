import { forwardRef, type ReactNode } from 'react';
import { LuArrowLeft, LuArrowRight } from 'react-icons/lu';
import { Carousel, IconButton, type IconButtonProps } from '@chakra-ui/react';

export default function FilmCutSlideOverlay({
  slideCount,
  defaultPage,
  children,
}: {
  slideCount: number;
  defaultPage: number;
  children: ReactNode;
}) {
  const actionButtonStyle = {
    top: '50%',
    transform: 'auto',
    translateY: 'calc(-1 * var(--chakra-spacing-32))',
  };

  return (
    <Carousel.Root slideCount={slideCount} defaultPage={defaultPage}>
      <Carousel.Control justifyContent='center' gap='4'>
        <Carousel.PrevTrigger asChild>
          <ActionButton direction='left' {...actionButtonStyle}>
            <LuArrowLeft />
          </ActionButton>
        </Carousel.PrevTrigger>

        {children}

        <Carousel.NextTrigger asChild>
          <ActionButton direction='right' {...actionButtonStyle}>
            <LuArrowRight />
          </ActionButton>
        </Carousel.NextTrigger>
      </Carousel.Control>
    </Carousel.Root>
  );
}

interface ActionButtonProps extends IconButtonProps {
  direction?: 'left' | 'right';
}

const ActionButton = forwardRef<HTMLButtonElement, ActionButtonProps>(function ActionButton(
  { direction, ...props },
  ref,
) {
  const insetMap = {
    left: { insetStart: 4 },
    right: { insetEnd: 4 },
  } as const;

  const inset = direction ? (insetMap[direction] ?? {}) : {};

  return (
    <IconButton
      {...inset}
      {...props}
      ref={ref}
      size='xs'
      variant='outline'
      rounded='full'
      position='absolute'
      zIndex='1'
      bg='bg'
    />
  );
});
