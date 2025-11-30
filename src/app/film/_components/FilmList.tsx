'use client';

import { v4 as uuidv4 } from 'uuid';
import { Box, For, Show, SimpleGrid, Skeleton } from '@chakra-ui/react';

import { useFilmsQuery } from '@/graphql/api/hooks';
import { useInfiniteScroll } from '../_hooks/useInfiniteScroll';
import FilmCard from './FilmCard';

export default function FilmList({ search }: { search?: string }): React.ReactElement {
  // 데이터 패칭
  const LIMIT = 6;
  const { data, loading, error, fetchMore } = useFilmsQuery({
    variables: { limit: LIMIT, cursor: 1, search },
  });

  const onLoadMore = () =>
    fetchMore({
      variables: { limit: LIMIT, cursor: data?.films.cursor },
    });

  const { ref } = useInfiniteScroll({
    loading,
    hasMore: !!data?.films.cursor,
    onLoadMore,
  });

  if (error) return <p>{error.message}</p>;

  return (
    <SimpleGrid columns={[1, 2, null, 3]} gap={[2, null, 10]}>
      <Show
        when={!loading && data ? data : null}
        fallback={
          <For each={Array(6).fill(0)}>{() => <Skeleton key={uuidv4()} height={400} />}</For>
        }
      >
        {(data) => (
          <For each={data.films.films}>
            {(film, i) => (
              <Box key={film.id}>
                {/* 리스트 끝까지 가기 전에 로딩 트리거 지점 */}
                <Show when={i === data.films.films.length - LIMIT / 2}>
                  <Box ref={ref} style={{ height: 1 }} />
                </Show>
                <FilmCard film={film} />
              </Box>
            )}
          </For>
        )}
      </Show>
    </SimpleGrid>
  );
}
