import type { Metadata } from 'next';

import createApolloClient from '@/apollo/client/createApolloClient';
import { CutDocument } from '@/graphql/anonymous/api/hooks';
import type { CutQuery } from '@/graphql/anonymous/api/operations';
import CutDetail from '../../_components/CutDetail';

type PageParams = Promise<{ cutId: string }>;

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const { cutId } = await params;
  const apolloClient = createApolloClient({ kind: 'authenticated' });

  const {
    data: { cut },
  } = await apolloClient.query<CutQuery>({
    query: CutDocument,
    variables: { cutId: Number(cutId) },
  });

  return {
    title: `${cut?.film?.title} > 장면 ${cutId} | Ghibli Best Cuts`,
    description: `${cut?.film?.title} > 장면 ${cutId}`,
    openGraph: {
      title: `${cut?.film?.title} > 장면 ${cutId} | Ghibli Best Cuts`,
      description: `${cut?.film?.title} > 장면 ${cutId}`,
      images: [{ url: cut?.src ?? '', alt: `장면 ${cutId}` }],
    },
  };
}

export default async function Page({ params }: { params: PageParams }) {
  const { cutId } = await params;

  return <CutDetail cutId={Number(cutId)} />;
}
