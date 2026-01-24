import { useForm } from 'react-hook-form';
import { Button, CloseButton, Dialog, Field, Portal, Textarea } from '@chakra-ui/react';
import { toaster } from '@chakra-ui/react/toaster';

import { anonymousClient } from '@/apollo/client/createApolloClient';
import { CutDocument } from '@/graphql/anonymous/api/hooks';
import { useCreateOrUpdateCutReviewMutation } from '@/graphql/authenticated/api/hooks';
import type { CreateOrUpdateCutReviewMutationVariables } from '@/graphql/authenticated/api/operations';

export default function FilmCutReviewRegisterModal({
  cutId,
  isOpen,
  onClose,
}: {
  cutId: number;
  isOpen: boolean;
  onClose: () => void;
}): React.ReactElement {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateOrUpdateCutReviewMutationVariables>({
    defaultValues: { cutReviewInput: { cutId } },
  });

  const [mutation, { loading }] = useCreateOrUpdateCutReviewMutation();

  function onSubmit(formData: CreateOrUpdateCutReviewMutationVariables) {
    mutation({
      variables: formData,
      update: () => {
        anonymousClient.refetchQueries({
          include: [CutDocument],
        });
      },
    })
      .then(onClose)
      .catch(() => {
        toaster.create({ title: '리뷰 등록에 실패했습니다.', type: 'error' });
      });
  }

  return (
    <Dialog.Root lazyMount open={isOpen} onOpenChange={onClose}>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content as='form' onSubmit={handleSubmit(onSubmit)}>
            <Dialog.Header>
              <Dialog.Title>리뷰 등록</Dialog.Title>
            </Dialog.Header>

            <Dialog.Body>
              <Field.Root invalid={!!errors.cutReviewInput?.contents}>
                <Textarea
                  {...register('cutReviewInput.contents', {
                    required: { value: true, message: '리뷰 내용을 입력해주세요.' },
                    maxLength: { value: 500, message: '리뷰 내용은 500자 이내로 작성해주세요.' },
                  })}
                  placeholder='장면에 대한 개인적인 감상을 남겨주세요.'
                />
                <Field.ErrorText>{errors.cutReviewInput?.contents?.message}</Field.ErrorText>
              </Field.Root>
            </Dialog.Body>

            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant='subtle' colorPalette='gray'>
                  취소
                </Button>
              </Dialog.ActionTrigger>
              <Button colorPalette='teal' type='submit' disabled={loading}>
                등록
              </Button>
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
