import { forwardRef } from 'react';
import { LuArrowLeft, LuArrowRight } from 'react-icons/lu';
import { v4 as uuidv4 } from 'uuid';
import {
  Carousel,
  type CarouselRootProps,
  For,
  IconButton,
  type IconButtonProps,
} from '@chakra-ui/react';

import LazySlide from './LazySlide';

export default function CutSlide({
  children,
  ...props
}: CarouselRootProps & {
  children: React.ReactNode;
}) {
  const actionButtonStyle = {
    top: '50%',
    transform: 'auto',
    translateY: 'calc(-1 * var(--chakra-spacing-32))',
  };

  return (
    <Carousel.Root {...props}>
      <Carousel.Control justifyContent='center' gap='4'>
        <Carousel.PrevTrigger asChild>
          <ActionButton direction='left' {...actionButtonStyle}>
            <LuArrowLeft />
          </ActionButton>
        </Carousel.PrevTrigger>

        <Carousel.ItemGroup>
          <For each={Array(props.slideCount).fill(0)}>
            {(_, index) => (
              <Carousel.Item key={uuidv4()} index={index}>
                <LazySlide index={index}>{children}</LazySlide>
              </Carousel.Item>
            )}
          </For>
        </Carousel.ItemGroup>

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
