import { Button, CloseButton, Dialog, Field, Portal, Textarea } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { toaster } from '@/components/ui/toaster';
import { CutDocument, useCreateOrUpdateReviewMutation } from '@/graphql/api/hooks';
import type {
  CreateOrUpdateReviewMutationVariables,
  CutQuery,
  CutQueryVariables,
} from '@/graphql/api/operations';

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
  } = useForm<CreateOrUpdateReviewMutationVariables>({
    defaultValues: { cutReviewInput: { cutId } },
  });

  const [mutation, { loading }] = useCreateOrUpdateReviewMutation();
  function onSubmit(formData: CreateOrUpdateReviewMutationVariables) {
    mutation({
      variables: formData,
      update: (cache, fetchResult) => {
        // 쿼리 캐시 데이터 조회
        const currentCut = cache.readQuery<CutQuery, CutQueryVariables>({
          query: CutDocument,
          variables: { cutId },
        });

        if (currentCut?.cutReviews)
          if (fetchResult.data?.createOrUpdateReview) {
            const isEdited = currentCut.cutReviews.some(
              (review) => review.id === fetchResult.data?.createOrUpdateReview?.id,
            );
            // 수정된 리뷰가 존재할 경우 해당 리뷰 캐시 데이터 삭제
            if (isEdited) {
              cache.evict({ id: `CutReview:${fetchResult.data?.createOrUpdateReview?.id}` });
            }

            // 쿼리 캐시 데이터 덮어쓰기
            cache.writeQuery<CutQuery, CutQueryVariables>({
              query: CutDocument,
              data: {
                ...currentCut,
                cutReviews: isEdited
                  ? [...currentCut.cutReviews]
                  : [fetchResult.data.createOrUpdateReview, ...currentCut.cutReviews.slice(0, 1)],
              },
              variables: { cutId },
            });
          }
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
