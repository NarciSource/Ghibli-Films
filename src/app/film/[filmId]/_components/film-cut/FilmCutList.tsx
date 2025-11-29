'use client';

import { useState } from 'react';
import LazyLoad from 'react-lazyload';
import {
  Box,
  For,
  Image,
  LinkBox,
  LinkOverlay,
  Show,
  SimpleGrid,
  useDisclosure,
} from '@chakra-ui/react';

import type { CutsQuery } from '@/graphql/api/operations';
import FilmCutModal from './FilmCutModal';

export default function FilmCutList({ cuts }: { cuts: CutsQuery['cuts'] }) {
  const { open, onOpen, onClose } = useDisclosure();
  const [selectedCutId, setSelectedCutId] = useState<number>(0);
  const handleCutSelect = (cutId: number) => {
    onOpen();
    setSelectedCutId(cutId);
  };

  return (
    <>
      <SimpleGrid my={4} columns={[1, 2, null, 3]} gap={[2, null, 8]}>
        <For each={cuts}>
          {(cut) => (
            <LazyLoad once key={cut.id} height='200px'>
              <LinkBox as='article'>
                <Box>
                  <LinkOverlay onClick={() => handleCutSelect(cut.id)} cursor='pointer'>
                    <Image src={cut.src} />
                  </LinkOverlay>
                </Box>
              </LinkBox>
            </LazyLoad>
          )}
        </For>
      </SimpleGrid>

      <Show when={open}>
        <FilmCutModal open={open} onClose={onClose} cutId={selectedCutId} />
      </Show>
    </>
  );
}
