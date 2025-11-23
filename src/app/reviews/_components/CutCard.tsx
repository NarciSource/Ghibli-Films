'use client';

import { Box, Image, Stack, useDisclosure } from '@chakra-ui/react';

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
      <Image src={cut.src} />

      <Stack>
        {reviews.map((review) => (
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
        ))}
      </Stack>
    </Stack>
  );
}
