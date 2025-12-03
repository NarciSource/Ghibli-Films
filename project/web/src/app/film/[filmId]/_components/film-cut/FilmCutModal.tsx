import { CloseButton, Dialog, Portal } from '@chakra-ui/react';

export default function FilmCutModal({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <Dialog.Root lazyMount open={open} onOpenChange={onClose} size='xl'>
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
