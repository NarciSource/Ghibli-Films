'use client';

import NextImage from 'next/image';
import { AspectRatio, Box, For, Stack, useDisclosure } from '@chakra-ui/react';

import type { Cut, CutReview } from '@/graphql/api/type';
import { FilmCutReview, FilmCutReviewDeleteAlert, FilmCutReviewRegisterModal } from './cut-review';

export default function CutCard({
  cut,
  reviews,
}: {
  cut: Partial<Cut>;
  reviews: Partial<CutReview>[];
}) {
  const reviewRegisterDialog = useDisclosure();
  const deleteAlert = useDisclosure();

  return (
    <Stack key={cut.id} gap={0}>
      <AspectRatio ratio={16 / 9}>
        <NextImage src={cut.src!} alt='장면 이미지' fill sizes='(max-width: 768px) 100vw, 33vw' />
      </AspectRatio>

      <Stack>
        <For each={reviews}>
          {(review) => (
            <Box key={review.id}>
              <FilmCutReview
                cutReview={{ ...review, isMine: true }}
                onEditClick={reviewRegisterDialog.onOpen}
                onDeleteClick={deleteAlert.onOpen}
              />

              <FilmCutReviewRegisterModal
                cutId={cut.id!}
                isOpen={reviewRegisterDialog.open}
                onClose={reviewRegisterDialog.onClose}
              />

              <FilmCutReviewDeleteAlert
                target={{ id: review.id! }}
                isOpen={deleteAlert.open}
                onClose={deleteAlert.onClose}
              />
            </Box>
          )}
        </For>
      </Stack>
    </Stack>
  );
}
