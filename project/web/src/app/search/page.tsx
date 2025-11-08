'use client';

import { Box, Heading } from '@chakra-ui/react';
import { useSearchParams } from 'next/navigation';
import FilmList from '@/app/_components/film/FilmList';

export default function Search(): React.ReactElement {
  const searchParams = useSearchParams();
  const q = searchParams.get('q') ?? undefined;

  return (
    <Box px={{ base: 4 }} pt='24'>
      <Heading size='lg'>검색결과</Heading>
      <FilmList search={q} />
    </Box>
  );
}
