import { Button, CloseButton, Dialog, Portal } from '@chakra-ui/react';

export default function FilmCutReviewRegisterModal({
  isOpen,
  onClose,
}: {
  cutId: number;
  isOpen: boolean;
  onClose: () => void;
}): React.ReactElement {
  const errors: any = {};
  const loading = false;

  return (
    <Dialog.Root lazyMount open={isOpen}>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>리뷰 등록</Dialog.Title>
            </Dialog.Header>

            <Dialog.Body>장면에 대한 개인적인 감상을 남겨주세요.</Dialog.Body>

            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant='outline' onClick={onClose}>
                  취소
                </Button>
              </Dialog.ActionTrigger>
              <Button>등록</Button>
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
