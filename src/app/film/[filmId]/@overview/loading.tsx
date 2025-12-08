import { AspectRatio, Box, Flex, For, HStack, Skeleton, SkeletonText, Tag } from '@chakra-ui/react';

export default function Loading() {
  return (
    <Flex mt={12} flexDirection={{ base: 'column', md: 'row' }} alignItems='center'>
      <Box w={{ base: '100%', md: '250px' }}>
        <AspectRatio ratio={2 / 3}>
          <Skeleton borderRadius={20} />
        </AspectRatio>
      </Box>

      <Flex
        w='100%'
        flex={1}
        ml={{ base: 0, md: 6 }}
        flexDirection='column'
        alignContent='column'
        justify='center'
        alignItems='flex-start'
        gap={2}
      >
        <Flex mt={2}>
          <For each={Array(5).fill(0)}>
            {() => (
              <Skeleton key={Math.random()} loading={true} asChild>
                <Tag.Root mr={2} size='sm'>
                  <Tag.Label>TagLab</Tag.Label>
                </Tag.Root>
              </Skeleton>
            )}
          </For>
        </Flex>

        <SkeletonText h={10} w='30%' mb={4} noOfLines={1} />
        <SkeletonText h={6} w='80%' noOfLines={1} />
        <HStack h={8} w='full' gap={2}>
          <Skeleton h={8} w='20%' />
          <Skeleton h={8} w='10%' />
        </HStack>
        <SkeletonText h={120} w='70%' noOfLines={1} />
      </Flex>
    </Flex>
  );
}
