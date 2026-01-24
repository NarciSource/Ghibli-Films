import type { MetadataRoute } from 'next/types';

import createApolloClient from '@/apollo/client/createApolloClient';
import { FilmsDocument } from '@/graphql/anonymous/api/hooks';
import type { FilmsQuery } from '@/graphql/anonymous/api/operations';

const APP_URL = process.env.APP_URL ?? 'http://localhost:3000';

export const dynamic = 'force-dynamic';

export default async function Sitemap(): Promise<MetadataRoute.Sitemap> {
  const apolloClient = createApolloClient({ kind: 'anonymous' });

  const {
    data: { films },
  } = await apolloClient.query<FilmsQuery>({
    query: FilmsDocument,
    variables: { limit: 100, offset: 0 },
  });

  return [
    {
      url: APP_URL,
      lastModified: new Date(),
    },
    ...films.films.map((film) => ({
      url: `${APP_URL}/film/${film.id}`,
      lastModified: new Date(),
    })),
  ];
}
