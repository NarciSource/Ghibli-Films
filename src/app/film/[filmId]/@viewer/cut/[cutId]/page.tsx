import CutDetail from '../../_components/CutDetail';

export default async function Page({ params }: { params: Promise<{ cutId: string }> }) {
  const { cutId } = await params;

  return <CutDetail cutId={Number(cutId)} />;
}
