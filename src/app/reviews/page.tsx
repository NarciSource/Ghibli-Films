'use client';

import { Box, Heading } from '@chakra-ui/react';

import { useMyReviewsQuery } from '@/graphql/api/hooks';
import ReviewCard from './_components/ReviewCard';
import groupReviewsByFilm from './_lib/groupReviewsByFilm';

export default function Reviews() {
  const { data, loading } = useMyReviewsQuery();

  if (!data) return null;

  const cutReviews = data.myReviews.cutReviews;
  const reviewsByFilm = groupReviewsByFilm(cutReviews);

  return (
    !loading && (
      <Box px={4}>
        <Heading size='lg' mb={8}>
          나의 감상평 모아보기
        </Heading>

        {reviewsByFilm.map(({ film, cuts }) => (
          <ReviewCard key={film.id} film={film} cuts={cuts} />
        ))}
      </Box>
    )
  );
}
