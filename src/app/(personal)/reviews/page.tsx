'use server';

import { cookies } from 'next/headers';
import { Box, For, Heading, Text } from '@chakra-ui/react';

import { createApolloClient } from '@/apollo/createApolloClient';
import { MyReviewsDocument } from '@/graphql/api/hooks';
import type { MyReviewsQuery } from '@/graphql/api/operations';
import FilmCard from './_components/FilmCard';
import groupReviewsByFilm from './_lib/groupReviewsByFilm';

export default async function Reviews() {
  const apolloClient = await createApolloClient({});
  const cookie = await cookies();

  const { data } = await apolloClient.query<MyReviewsQuery>({
    query: MyReviewsDocument,
    fetchPolicy: 'no-cache',
    context: {
      cookie,
    },
  });

  const cutReviews = data.myReviews.cutReviews;
  const reviewsByFilm = groupReviewsByFilm(cutReviews);

  return (
    <Box px={4}>
      <Heading mb={8} size='lg'>
        나의 감상평 모아보기
      </Heading>

      <For each={reviewsByFilm}>
        {({ film, cuts }) => <FilmCard key={film.id} film={film} cuts={cuts} />}
      </For>
    </Box>
  );
}
