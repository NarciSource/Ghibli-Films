import type { Metadata } from 'next';

import { createApolloClient } from '@/apollo/createApolloClient';
import { FilmDocument } from '@/graphql/api/hooks';
import type { FilmQuery } from '@/graphql/api/operations';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ filmId: string }>;
}): Promise<Metadata> {
  const { filmId } = await params;
  const apolloClient = await createApolloClient({});

  const {
    data: { film },
  } = await apolloClient.query<FilmQuery>({
    query: FilmDocument,
    variables: { filmId: Number(filmId) },
  });

  return {
    title: `${film?.title} | Ghibli Best Cuts`,
    description: `${film?.director} 감독 작품`,
    openGraph: {
      title: `${film?.title} | Ghibli Best Cuts`,
      description: `${film?.director} 감독 작품`,
      images: [{ url: film?.posterImg ?? '', alt: film?.title }],
    },
  };
}

export default function Page() {
  return null;
}
