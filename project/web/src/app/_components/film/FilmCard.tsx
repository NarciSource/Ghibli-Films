import {
  AspectRatio,
  Box,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useColorModeValue } from '@/components/ui/color-mode';
import type { FilmsQuery } from '@/graphql/api/operations';

interface FilmCardProps {
  film: FilmsQuery['films']['films'][0];
}

export default function FilmCard({ film }: FilmCardProps): React.ReactElement {
  return (
    <LinkBox as='article' my={6}>
      <Box maxW='300px' w='full' rounded='md' px={{ base: 1, md: 3 }} pt={3} overflow='hidden'>
        <Box bg='gray.100' mt={-3} mx={-3} mb={2} pos='relative'>
          <AspectRatio ratio={2 / 3}>
            <Image src={film.posterImg} />
          </AspectRatio>
        </Box>
        <Stack>
          <LinkOverlay asChild>
            <NextLink href={`/film/${film.id}`}>
              <Heading
                color={useColorModeValue('gray.700', 'white')}
                fontSize='xl'
                fontFamily='body'
              >
                {film.title}
              </Heading>
            </NextLink>
          </LinkOverlay>
          <Text fontSize='sm' color='grey.500' truncate>
            {film.subtitle ? film.subtitle : <>&nbsp;</>}
          </Text>
        </Stack>
        <Stack gap={0} fontSize='sm' mt={2}>
          <Text as='time' truncate color='gray.500'>
            {`${film.releaseDate} ${film.runningTime}분`}
          </Text>
          <Text truncate>{film.director.name}</Text>
        </Stack>
      </Box>
    </LinkBox>
  );
}
