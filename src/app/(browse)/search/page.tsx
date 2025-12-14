import type { Metadata } from 'next';
import { Heading } from '@chakra-ui/react';

import FilmList from '@/app/film/_components/FilmList';

export const dynamic = 'force-dynamic';

const CDN_URL = process.env.NEXT_PUBLIC_CDN_URL ?? '';
type PageParams = Promise<{ q: string }>;

export async function generateMetadata({
  searchParams,
}: {
  searchParams: PageParams;
}): Promise<Metadata> {
  const { q } = await searchParams;

  return {
    title: `검색결과: ${q} | Ghibli Best Cuts`,
    description: `검색결과: ${q}`,
    openGraph: {
      title: `검색결과: ${q} | Ghibli Best Cuts`,
      description: `검색결과: ${q}`,
      images: [{ url: `${CDN_URL}/thumbnail.png`, alt: 'Thumbnail' }],
    },
  };
}

export default async function Search({ searchParams }: { searchParams: PageParams }) {
  const { q } = await searchParams;

  return (
    <>
      <Heading size='lg'>검색결과</Heading>
      <FilmList search={q} />
    </>
  );
}
