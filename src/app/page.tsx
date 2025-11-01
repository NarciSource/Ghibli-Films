import { Heading } from '@chakra-ui/react';
import FilmList from './_components/film/FilmList';

export default function Home() {
  return (
    <>
      <Heading size='lg'>최고의 장면을 찾아보세요</Heading>
      <FilmList />
    </>
  );
}
