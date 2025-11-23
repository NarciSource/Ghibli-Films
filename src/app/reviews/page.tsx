'use client';

import { Box, Heading } from '@chakra-ui/react';

import { useMyReviewsQuery } from '@/graphql/api/hooks';
import FilmCard from './_components/FilmCard';
import groupReviewsByFilm from './_lib/groupReviewsByFilm';

export default function Reviews() {
  const { data, loading } = useMyReviewsQuery({ fetchPolicy: 'no-cache' });

  if (!data) return null;

  const cutReviews = data.myReviews.cutReviews;
  const reviewsByFilm = groupReviewsByFilm(cutReviews);

  return (
    !loading && (
      <Box px={4}>
        <Heading mb={8} size='lg'>
          나의 감상평 모아보기
        </Heading>

        {reviewsByFilm.map(({ film, cuts }) => (
          <FilmCard key={film.id} film={film} cuts={cuts} />
        ))}
      </Box>
    )
  );
}
