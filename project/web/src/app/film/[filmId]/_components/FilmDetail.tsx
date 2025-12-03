import NextImage from 'next/image';
import {
  AspectRatio,
  Box,
  Image as ChakraImage,
  Flex,
  For,
  Heading,
  Tag,
  Text,
} from '@chakra-ui/react';

import type { FilmQuery } from '@/graphql/api/operations';

interface FilmDetailProps {
  film?: FilmQuery['film'];
}

export default function FilmDetail({ film }: FilmDetailProps): React.ReactElement {
  return (
    <Flex mt={12} flexDirection={{ base: 'column', md: 'row' }} alignItems='center'>
      <Box w={{ base: '100%', md: '250px' }}>
        <AspectRatio ratio={2 / 3}>
          <ChakraImage fit='cover' borderRadius={20} asChild>
            <NextImage
              src={film?.posterImg ?? '/default-poster.png'}
              alt={film?.title ?? '기본 이미지'}
              priority
              fill
              sizes='(max-width: 768px) 100vw, 250px'
            />
          </ChakraImage>
        </AspectRatio>
      </Box>

      <Flex
        flex={1}
        ml={{ base: 0, md: 6 }}
        flexDirection='column'
        alignContent='column'
        justify='center'
        alignItems='flex-start'
      >
        <Flex mt={2}>
          <For each={film?.genre.split(',')}>
            {(genre) => (
              <Tag.Root key={genre} mr={2} size='sm'>
                <Tag.Label>{genre}</Tag.Label>
              </Tag.Root>
            )}
          </For>
        </Flex>
        <Heading mb={4}>
          {film?.title}
          {film?.releaseDate ? ` ${new Date(film?.releaseDate).getFullYear()}` : null}
        </Heading>
        <Heading size='md' mb={2}>
          {film?.subtitle}
        </Heading>
        <Text mb={2}>
          {film?.director.name} / {film ? `${film?.runningTime} 분` : ''}
        </Text>
        <Text fontSize='sm'>{film?.description}</Text>
      </Flex>
    </Flex>
  );
}
