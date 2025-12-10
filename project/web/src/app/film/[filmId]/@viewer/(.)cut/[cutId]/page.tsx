import CutDetail from '../../_components/CutDetail';

type PageParams = Promise<{ cutId: string }>;

export default async function Page({ params }: { params: PageParams }) {
  const { cutId } = await params;

  return <CutDetail cutId={Number(cutId)} />;
}
