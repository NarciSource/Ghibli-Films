import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from '@chakra-ui/react';
import type React from 'react';
import { useRef } from 'react';

export default function FilmCutReviewDeleteAlert({
  isOpen,
  onClose,
}: {
  target?: { id: number };
  isOpen: boolean;
  onClose: () => void;
}): React.ReactElement {
  const cancelRef = useRef<HTMLButtonElement>(null);

  return (
    <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader>감상 삭제</AlertDialogHeader>
          <AlertDialogBody>정말로 삭제하시겠습니까?</AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              취소
            </Button>
            <Button colorScheme='red' ml={3}>
              삭제
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}
