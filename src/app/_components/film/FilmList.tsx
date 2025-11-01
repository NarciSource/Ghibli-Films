'use client';

import { Box, SimpleGrid, Skeleton } from '@chakra-ui/react';
import { Waypoint } from 'react-waypoint';
import { v4 as uuidv4 } from 'uuid';
import FilmCard from './FilmCard';

export default function FilmList({ search }: { search?: string }): React.ReactElement {
  const LIMIT = 6;
  const data: any = null;
  const loading = false;
  const error = { message: 'Error occurred' };

  if (error) return <p>{error.message}</p>;

  return (
    <SimpleGrid columns={[2, null, 3]} spacing={[2, null, 10]}>
      {loading && new Array(6).fill(0).map(() => <Skeleton key={uuidv4()} height='400px' />)}
      {!loading &&
        data &&
        data.films.films.map((film: any, i: number) => (
          <Box key={film.id}>
            {data.films.cursor && i === data.films.films.length - LIMIT / 2 && (
              /* 4번째 데이터에서 Waypoint 엮임 */
              <Waypoint />
            )}
            <FilmCard film={film} />
          </Box>
        ))}
    </SimpleGrid>
  );
}
