'use client';

import { useRouter } from 'next/navigation';
import { cloneElement } from 'react';
import { FiMaximize } from 'react-icons/fi';
import {
  type ButtonProps,
  CloseButton,
  Dialog,
  IconButton,
  type IconButtonProps,
  Portal,
} from '@chakra-ui/react';

export default function CutModal({ children }: { children: React.ReactNode }): React.ReactElement {
  const router = useRouter();

  return (
    <Dialog.Root lazyMount open={true} onOpenChange={() => router.back()} size='xl'>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content bg='transparent' shadow='none'>
            <Dialog.Header></Dialog.Header>

            <Dialog.Body p={0}>{children}</Dialog.Body>

            <Dialog.CloseTrigger title='닫기' top='0' insetEnd='0' asChild>
              <CloseButton bg='white' size='sm' />
            </Dialog.CloseTrigger>

            <HardRefreshTrigger title='전체화면' top='0' insetEnd='12'>
              <MaximizeButton />
            </HardRefreshTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}

interface HardRefreshTriggerProps extends Omit<ButtonProps, 'children'> {
  children: React.ReactElement<ButtonProps>;
  onBeforeRefresh?: () => void;
}

const HardRefreshTrigger = ({
  children,
  onBeforeRefresh,
  ...restProps
}: HardRefreshTriggerProps) => {
  const defaultProps = {
    position: 'absolute',
  };

  return cloneElement(children, {
    ...defaultProps,
    ...restProps,
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
      children.props.onClick?.(e);
      onBeforeRefresh?.();
      // 하드 네비게이션으로 새로 로드
      window.location.href = window.location.pathname;
    },
  });
};

const MaximizeButton = (props: Omit<IconButtonProps, 'children'>) => (
  <IconButton aria-label='Maximize' bg='white' size='sm' variant='ghost' {...props}>
    <FiMaximize />
  </IconButton>
);
