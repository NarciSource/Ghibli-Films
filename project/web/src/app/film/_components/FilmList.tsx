'use client';

import { Waypoint } from 'react-waypoint';
import { v4 as uuidv4 } from 'uuid';
import { Box, SimpleGrid, Skeleton } from '@chakra-ui/react';

import { useFilmsQuery } from '@/graphql/api/hooks';
import FilmCard from './FilmCard';

export default function FilmList({ search }: { search?: string }): React.ReactElement {
  const LIMIT = 6;
  const { data, loading, error, fetchMore } = useFilmsQuery({
    variables: { limit: LIMIT, cursor: 1, search },
  });

  if (error) return <p>{error.message}</p>;

  return (
    <SimpleGrid columns={[2, null, 3]} gap={[2, null, 10]}>
      {loading && new Array(6).fill(0).map(() => <Skeleton key={uuidv4()} height='400px' />)}
      {!loading &&
        data &&
        data.films.films.map((film, i) => (
          <Box key={film.id}>
            {data.films.cursor && i === data.films.films.length - LIMIT / 2 && (
              /* 4번째 데이터에서 Waypoint 엮임 */
              <Waypoint
                onEnter={() => {
                  fetchMore({
                    variables: { limit: LIMIT, cursor: data.films.cursor },
                  });
                }}
              />
            )}
            <FilmCard film={film} />
          </Box>
        ))}
    </SimpleGrid>
  );
}
