import { Heading } from '@chakra-ui/react';

import { createApolloClient } from '@/apollo/createApolloClient';
import { ApolloHydrate, dehydrate } from '@/apollo/hydrate';
import FilmList from '@/app/film/_components/FilmList';
import { FilmsDocument } from '@/graphql/api/hooks';
import type { FilmsQuery } from '@/graphql/api/operations';

const isBuild = process.env.NEXT_PHASE === 'phase-production-build';

export default async function Home() {
  const LIMIT = 6;
  // 서버에서 초기 데이터 요청
  const apolloClient = await createApolloClient({});

  // 빌드 후 패치
  if (!isBuild) {
    await apolloClient.query<FilmsQuery>({
      query: FilmsDocument,
      variables: {
        limit: LIMIT,
        cursor: 1,
      },
    });
  }

  // SSR에서 가져온 Apollo 캐시를 직렬화 전달
  const initApolloState = dehydrate(apolloClient);

  return (
    <>
      <Heading size='lg'>최고의 장면을 찾아보세요</Heading>
      <ApolloHydrate state={initApolloState}>
        <FilmList />
      </ApolloHydrate>
    </>
  );
}
