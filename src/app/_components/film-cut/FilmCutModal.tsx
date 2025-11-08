import { Center, CloseButton, Dialog, Portal, Spinner, useBreakpointValue } from '@chakra-ui/react';

import { useCutQuery } from '@/graphql/api/hooks';
import FilmCutDetail from './FilmCutDetail';

interface FilmCutModalProps {
  open: boolean;
  onClose: () => void;
  cutId: number;
}

export default function FilmCutModal({
  open,
  onClose,
  cutId,
}: FilmCutModalProps): React.ReactElement {
  const { loading, data } = useCutQuery({ variables: { cutId } });
  // 화면 가로 크기에 따라 다른 변수를 할당
  const modalSize = useBreakpointValue({ base: 'full', md: 'xl' });

  return (
    <Dialog.Root lazyMount open={open} onOpenChange={onClose}>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content maxW={modalSize}>
            <Dialog.Header>
              <Dialog.Title>{data?.cut?.film?.title}</Dialog.Title>
            </Dialog.Header>

            <Dialog.Body>
              {loading && (
                <Center py={4}>
                  <Spinner />
                </Center>
              )}
              {!loading && !data && <Center>데이터를 불러오지 못했습니다.</Center>}
              {data?.cut && <FilmCutDetail {...data.cut} reviews={data.cutReviews} />}
            </Dialog.Body>

            <Dialog.CloseTrigger asChild>
              <CloseButton size='sm' />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}
