import { Heading } from '@chakra-ui/react';

import FilmList from '@/app/film/_components/FilmList';

export default async function Search({ searchParams }: { searchParams: Promise<{ q: string }> }) {
  const { q } = await searchParams;

  return (
    <>
      <Heading size='lg'>검색결과</Heading>
      <FilmList search={q} />
    </>
  );
}
