'use client';

import NextImage from 'next/image';
import { useState } from 'react';
import {
  AspectRatio,
  For,
  LinkBox,
  LinkOverlay,
  Show,
  SimpleGrid,
  useDisclosure,
} from '@chakra-ui/react';

import type { CutsQuery } from '@/graphql/api/operations';
import FilmCutSlide from './FilmCutSlide';

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
          {(cut, index) => (
            <LinkBox key={cut.id} as='article'>
              <AspectRatio ratio={16 / 9} position='relative'>
                <LinkOverlay onClick={() => handleCutSelect(index)} cursor='pointer'>
                  <NextImage
                    src={cut.src}
                    alt={`장면-${cut.id}`}
                    fill
                    sizes='(max-width: 768px) 100vw, 33vw'
                  />
                </LinkOverlay>
              </AspectRatio>
            </LinkBox>
          )}
        </For>
      </SimpleGrid>

      <Show when={open}>
        <FilmCutSlide cuts={cuts} page={selectedCutId} open={open} onClose={onClose} />
      </Show>
    </>
  );
}
