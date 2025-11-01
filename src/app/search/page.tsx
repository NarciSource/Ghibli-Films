'use client';

import { Heading } from '@chakra-ui/react';
import FilmList from '@/app/_components/film/FilmList';

export default function Search(): React.ReactElement {
  return (
    <>
      <Heading size='lg'>검색결과</Heading>
      <FilmList />
    </>
  );
}
