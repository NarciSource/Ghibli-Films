'use server';

import { Box } from '@chakra-ui/react';

import { createApolloClient } from '@/apollo/createApolloClient';
import { ApolloHydrate, dehydrate } from '@/apollo/hydrate';
import { FilmsDocument } from '@/graphql/api/hooks';
import type { FilmsQuery } from '@/graphql/api/operations';

type LayoutProps = {
  children: React.ReactNode;
  searchParams?: { q?: string };
};

export default async function BrowseLayout({ children, searchParams }: LayoutProps) {
  const LIMIT = 6;
  // 서버에서 초기 데이터 요청
  const apolloClient = await createApolloClient({});

  await apolloClient.query<FilmsQuery>({
    query: FilmsDocument,
    variables: {
      limit: LIMIT,
      cursor: 1,
      search: searchParams?.q ?? undefined,
    },
  });

  // SSR에서 가져온 Apollo 캐시를 직렬화 전달
  const initApolloState = dehydrate(apolloClient);

  return (
    <ApolloHydrate state={initApolloState}>
      <Box px={{ base: 4 }}>{children}</Box>
    </ApolloHydrate>
  );
}
