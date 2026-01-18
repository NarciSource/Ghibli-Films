import type { Metadata } from 'next';

import createApolloClient from '@/apollo/client/createApolloClient';
import { FilmDocument } from '@/graphql/anonymous/api/hooks';
import type { FilmQuery } from '@/graphql/anonymous/api/operations';

export const dynamic = 'force-dynamic';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ filmId: string }>;
}): Promise<Metadata> {
  const { filmId } = await params;
  const apolloClient = createApolloClient({ kind: 'anonymous' });

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
