import NextLink from 'next/link';
import {
  Box,
  Card,
  Image,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Splitter,
  Stack,
  Text,
} from '@chakra-ui/react';

import type { Cut, CutReview, Film } from '@/graphql/api/type';

export default function ReviewCard({
  film,
  cuts,
}: {
  film: Partial<Film>;
  cuts: { cut: Partial<Cut>; reviews: Partial<CutReview>[] }[];
}) {
  return (
    <Card.Root flexDirection='row' w='100%'>
      <Splitter.Root panels={[{ id: 'film' }, { id: 'cut' }]} defaultSize={[34, 66]}>
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
              {cuts.map(({ cut, reviews }) => (
                <Stack key={cut.id} gap={0}>
                  <Image src={cut.src} />

                  <Stack>
                    {reviews.map((review) => (
                      <Box key={review.id} p={3} shadow='sm'>
                        <Text>{review.contents}</Text>
                      </Box>
                    ))}
                  </Stack>
                </Stack>
              ))}
            </SimpleGrid>
          </Card.Body>
        </Splitter.Panel>
      </Splitter.Root>
    </Card.Root>
  );
}
