import NextLink from 'next/link';
import { Card, For, Image, LinkBox, LinkOverlay, SimpleGrid, Splitter } from '@chakra-ui/react';

import type { Cut, CutReview, Film } from '@/graphql/api/type';
import CutCard from './CutCard';

export default function FilmCard({
  film,
  cuts,
}: {
  film: Partial<Film>;
  cuts: { cut: Partial<Cut>; reviews: Partial<CutReview>[] }[];
}) {
  return (
    <Card.Root flexDirection='row' w='100%'>
      <Splitter.Root panels={[{ id: 'film' }, { id: 'cut' }]} defaultSize={[33, 66]}>
        <Splitter.Panel id='film'>
          <LinkBox as='article'>
            <Image align='top' p={2} objectFit='contain' src={film.posterImg} alt={film.title} />
            <LinkOverlay asChild>
              <NextLink href={`/film/${film.id}`} />
            </LinkOverlay>
          </LinkBox>
        </Splitter.Panel>

        <Splitter.ResizeTrigger id='film:cut' />

        <Splitter.Panel id='cut'>
          <Card.Body p={2}>
            <SimpleGrid columns={2} gap={2}>
              <For each={cuts}>
                {({ cut, reviews }) => <CutCard key={cut.id} cut={cut} reviews={reviews} />}
              </For>
            </SimpleGrid>
          </Card.Body>
        </Splitter.Panel>
      </Splitter.Root>
    </Card.Root>
  );
}
