import { Heading } from '@chakra-ui/react';

import FilmList from '@/app/film/_components/FilmList';

export default async function Home() {
  return (
    <>
      <Heading size='lg'>최고의 장면을 찾아보세요</Heading>
      <FilmList />
    </>
  );
}
