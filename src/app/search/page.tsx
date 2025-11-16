'use server';

import { Box, Heading } from '@chakra-ui/react';

import { getPublicApolloClient } from '@/apollo/getPublicApolloClient';
import FilmList from '@/app/film/_components/FilmList';
import { FilmsDocument } from '@/graphql/api/hooks';
import type { FilmsQuery } from '@/graphql/api/operations';
import { ApolloWrapper } from '../_providers';

export default async function Search({ searchParams }: { searchParams: Promise<{ q: string }> }) {
  const { q } = await searchParams;
  const LIMIT = 6;
  // 서버에서 초기 데이터 요청
  const apolloClient = await getPublicApolloClient();

  await apolloClient.query<FilmsQuery>({
    query: FilmsDocument,
    variables: { limit: LIMIT, cursor: 1 },
  });

  // SSR에서 가져온 Apollo 캐시를 직렬화 전달
  const initApolloState = JSON.parse(JSON.stringify(apolloClient.cache.extract()));

  return (
    <ApolloWrapper initialApolloState={initApolloState}>
      <Box px={{ base: 4 }} pt='24'>
        <Heading size='lg'>검색결과</Heading>
        <FilmList search={q} />
      </Box>
    </ApolloWrapper>
  );
}
