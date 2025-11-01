import {
  Button,
  ButtonGroup,
  FormControl,
  FormErrorMessage,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
} from '@chakra-ui/react';

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
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent as='form'>
        <ModalHeader>리뷰 등록</ModalHeader>
        <ModalBody>
          <FormControl>
            <Textarea placeholder='장면에 대한 개인적인 감상을 남겨주세요.' />
            <FormErrorMessage>{errors.cutReviewInput?.contents?.message}</FormErrorMessage>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <ButtonGroup>
            <Button colorScheme='gray' onClick={onClose}>
              취소
            </Button>
            <Button colorScheme='teal' type='submit' isDisabled={loading}>
              등록
            </Button>
          </ButtonGroup>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
