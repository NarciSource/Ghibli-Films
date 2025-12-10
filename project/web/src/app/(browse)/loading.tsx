import { v4 as uuidv4 } from 'uuid';
import { AspectRatio, Box, For, SimpleGrid, Skeleton, SkeletonText, Stack } from '@chakra-ui/react';

export default function Loading() {
  return (
    <>
      <Skeleton h='32px' w='250px' mb={4} />
      <SimpleGrid columns={[1, 2, null, 3]} my={6} gap={[2, null, 10]}>
        <For each={Array(12).fill(0)}>
          {() => (
            <Box
              key={uuidv4()}
              maxW='300px'
              w='full'
              rounded='md'
              px={{ base: 1, md: 3 }}
              pt={3}
              overflow='hidden'
            >
              <Box bg='gray.100' mt={-3} mx={-3} mb={2} pos='relative'>
                <AspectRatio ratio={2 / 3}>
                  <Skeleton borderRadius={20} />
                </AspectRatio>
              </Box>

              <Stack gap={2}>
                <SkeletonText h={8} w='60%' noOfLines={1} />
                <SkeletonText h={6} w='100%' noOfLines={1} />
              </Stack>

              <Stack gap={1} mt={4} fontSize='sm'>
                <SkeletonText h={4} w='50%' noOfLines={1} />
                <SkeletonText h={4} w='40%' noOfLines={1} />
              </Stack>
            </Box>
          )}
        </For>
      </SimpleGrid>
    </>
  );
}
