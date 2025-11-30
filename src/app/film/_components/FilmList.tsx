'use client';

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { v4 as uuidv4 } from 'uuid';
import { Box, For, Show, SimpleGrid, Skeleton } from '@chakra-ui/react';

import { useFilmsQuery } from '@/graphql/api/hooks';
import FilmCard from './FilmCard';

export default function FilmList({ search }: { search?: string }): React.ReactElement {
  // 무한스크롤 트리거
  const { ref, inView } = useInView({
    root: null, // 스크린 기준
    rootMargin: '200px', // 뷰박스
    triggerOnce: false, // 무한스크롤
  });
  // 데이터 패칭
  const LIMIT = 6;
  const { data, loading, error, fetchMore } = useFilmsQuery({
    variables: { limit: LIMIT, cursor: 1, search },
  });

  // 무한 스크롤 트리거로 재패칭
  useEffect(() => {
    if (inView && data?.films.cursor) {
      fetchMore({
        variables: { limit: LIMIT, cursor: data.films.cursor },
      });
    }
  }, [inView, data?.films.cursor, fetchMore]);

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
                {data.films.cursor && i === data.films.films.length - LIMIT / 2 && (
                  <Box ref={ref} style={{ height: 1 }} />
                )}
                <FilmCard film={film} />
              </Box>
            )}
          </For>
        )}
      </Show>
    </SimpleGrid>
  );
}
