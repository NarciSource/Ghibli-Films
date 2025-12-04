'use client';

import { useRouter } from 'next/navigation';
import { CloseButton, Dialog, Portal } from '@chakra-ui/react';

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

            <Dialog.CloseTrigger asChild>
              <CloseButton size='sm' />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}
