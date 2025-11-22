'use client';

import { Code } from '@chakra-ui/react';

import { useMyReviewsQuery } from '@/graphql/api/hooks';
import groupReviewsByFilm from './_lib/groupReviewsByFilm';

export default function Reviews() {
  const { data, loading } = useMyReviewsQuery();

  if (!data) return null;

  const cutReviews = data.myReviews.cutReviews;
  const reviewsByFilm = groupReviewsByFilm(cutReviews);

  return (
    !loading && (
      <Code p={4} display='block' whiteSpace='pre-wrap'>
        {JSON.stringify(reviewsByFilm, null, 2)}
      </Code>
    )
  );
}
