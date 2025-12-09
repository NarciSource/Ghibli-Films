import type { Metadata } from 'next';

import { apolloClient } from '@/apollo/createApolloClient';
import { CutDocument } from '@/graphql/api/hooks';
import type { CutQuery } from '@/graphql/api/operations';
import CutDetail from '../../_components/CutDetail';

type PageParams = Promise<{ cutId: string }>;

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const { cutId } = await params;

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
