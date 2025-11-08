import { Box, Heading } from '@chakra-ui/react';

import FilmList from './_components/film/FilmList';

export default function Home() {
  return (
    <Box px={{ base: 4 }}>
      <Heading size='lg'>최고의 장면을 찾아보세요</Heading>
      <FilmList />
    </Box>
  );
}
