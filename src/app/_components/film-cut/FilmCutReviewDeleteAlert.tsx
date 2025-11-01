import { Button, CloseButton, Dialog, Portal } from '@chakra-ui/react';
import type React from 'react';

export default function FilmCutReviewDeleteAlert({
  isOpen,
  onClose,
}: {
  target?: { id: number };
  isOpen: boolean;
  onClose: () => void;
}): React.ReactElement {
  return (
    <Dialog.Root lazyMount open={isOpen}>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>감상 삭제</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>정말로 삭제하시겠습니까?</Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant='outline' onClick={onClose}>
                  취소
                </Button>
              </Dialog.ActionTrigger>
              <Button>삭제</Button>
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              <CloseButton size='sm' />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}
