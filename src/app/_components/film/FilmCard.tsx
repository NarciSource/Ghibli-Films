import {
  AspectRatio,
  Box,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

interface FilmCardProps {
  film: {
    posterImg: string;
    title: string;
    subtitle?: string;
    releaseDate: string;
    runningTime: number;
    director: {
      name: string;
    };
  };
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
          <LinkOverlay>
            <Heading color={useColorModeValue('gray.700', 'white')} fontSize='xl' fontFamily='body'>
              {film.title}
            </Heading>
          </LinkOverlay>
          <Text fontSize='sm' color='grey.500' isTruncated>
            {film.subtitle ? film.subtitle : <>&nbsp;</>}
          </Text>
        </Stack>
        <Stack spacing={0} fontSize='sm' mt={2}>
          <Text as='time' dateTime={film.releaseDate} isTruncated color='gray.500'>
            {`${film.releaseDate} ${film.runningTime}분`}
          </Text>
          <Text isTruncated>{film.director.name}</Text>
        </Stack>
      </Box>
    </LinkBox>
  );
}
