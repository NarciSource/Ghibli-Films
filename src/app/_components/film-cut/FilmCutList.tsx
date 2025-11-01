'use client';

import {
  Box,
  Image,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Spinner,
  useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';
import LazyLoad from 'react-lazyload';
import FilmCutModal from './FilmCutModal';

export default function FilmCutList({ filmId }: { filmId: number }): React.ReactElement {
  const data: any = null;
  const loading = false;
  const { open, onOpen, onClose } = useDisclosure();
  const [selectedCutId, setSelectedCutId] = useState<number>(0);
  const handleCutSelect = (cutId: number) => {
    onOpen();
    setSelectedCutId(cutId);
  };

  return loading ? (
    <Box>
      <Spinner />
    </Box>
  ) : (
    <>
      <SimpleGrid my={4} columns={[1, 2, null, 3]} gap={[2, null, 8]}>
        {data?.cuts.map((cut: any) => (
          <LazyLoad once key={cut.id} height='200px'>
            <LinkBox as='article'>
              <Box>
                <LinkOverlay onClick={() => handleCutSelect(cut.id)} cursor='pointer'>
                  <Image src={cut.src} />
                </LinkOverlay>
              </Box>
            </LinkBox>
          </LazyLoad>
        ))}
      </SimpleGrid>
      {open && <FilmCutModal open={open} onClose={onClose} cutId={selectedCutId} />}
    </>
  );
}
