import { forwardRef } from 'react';
import { LuArrowLeft, LuArrowRight } from 'react-icons/lu';
import {
  Carousel,
  CloseButton,
  Dialog,
  For,
  IconButton,
  type IconButtonProps,
  Portal,
} from '@chakra-ui/react';

import FilmCutDetail from './FilmCutDetail';

interface FilmCutModalProps {
  cuts: { id: number; src: string }[];
  page: number;
  open: boolean;
  onClose: () => void;
}

export default function FilmCutSlide({
  cuts,
  page,
  open,
  onClose,
}: FilmCutModalProps): React.ReactElement {
  const actionButtonStyle = {
    top: '50%',
    transform: 'auto',
    translateY: 'calc(-1 * var(--chakra-spacing-32))',
  };

  return (
    <Dialog.Root lazyMount open={open} onOpenChange={onClose} size='xl'>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content bg='transparent' shadow='none'>
            <Dialog.Header>
              {/* <Dialog.Title>{data?.cut?.film?.title}</Dialog.Title> */}
            </Dialog.Header>

            <Dialog.Body p={0}>
              <Carousel.Root slideCount={cuts.length} defaultPage={page}>
                <Carousel.Control justifyContent='center' gap='4'>
                  <Carousel.PrevTrigger asChild>
                    <ActionButton insetStart='4' {...actionButtonStyle}>
                      <LuArrowLeft />
                    </ActionButton>
                  </Carousel.PrevTrigger>

                  <Carousel.ItemGroup>
                    <For each={cuts}>
                      {({ id }, index) => (
                        <Carousel.Item key={id} index={index}>
                          <FilmCutDetail cutId={id} />
                        </Carousel.Item>
                      )}
                    </For>
                  </Carousel.ItemGroup>

                  <Carousel.NextTrigger asChild>
                    <ActionButton insetEnd='4' {...actionButtonStyle}>
                      <LuArrowRight />
                    </ActionButton>
                  </Carousel.NextTrigger>
                </Carousel.Control>
              </Carousel.Root>
            </Dialog.Body>

            <Dialog.CloseTrigger asChild>
              <CloseButton size='sm' />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}

const ActionButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  function ActionButton(props, ref) {
    return (
      <IconButton
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
  },
);
