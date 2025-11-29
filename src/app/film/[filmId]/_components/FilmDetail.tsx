import { Box, Flex, For, Heading, Image, Tag, Text } from '@chakra-ui/react';

import type { FilmQuery } from '@/graphql/api/operations';

interface FilmDetailProps {
  film?: FilmQuery['film'];
}

export default function FilmDetail({ film }: FilmDetailProps): React.ReactElement {
  return (
    <Flex mt={12} flexDirection={{ base: 'column', md: 'row' }} alignItems='center'>
      <Box maxW='250px' flex={1}>
        <Image src={film?.posterImg} borderRadius={20} />
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
