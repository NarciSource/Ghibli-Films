import { FaHeart } from 'react-icons/fa';
import {
  AspectRatio,
  Box,
  Button,
  Flex,
  For,
  HStack,
  Separator,
  SimpleGrid,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Text,
} from '@chakra-ui/react';

export default function Loading() {
  return (
    <Box>
      <AspectRatio ratio={16 / 9}>
        <Skeleton />
      </AspectRatio>

      <Box p={10} bg='white'>
        <Flex justify='space-between' alignItems='center'>
          <SkeletonText h={8} w='20%' noOfLines={1} />
          <HStack gap={1} alignItems='center'>
            <Skeleton loading={true} asChild>
              <Button color='pink.400' aria-label='like-this-cut-button'>
                <FaHeart />
                <Text>0</Text>
              </Button>
            </Skeleton>

            <Skeleton loading={true} asChild>
              <Button colorPalette='teal'>감상 남기기</Button>
            </Skeleton>
          </HStack>
        </Flex>

        <Box mt={6}>
          <SimpleGrid mt={3} gap={4} columns={{ base: 1, sm: 2 }}>
            <For each={Array(2).fill(0)}>
              {() => (
                <Box borderRadius='lg' shadow='sm' p={2}>
                  <Flex p={1} justifyContent='space-between'>
                    <SkeletonCircle size='40px' />

                    <Skeleton h={10} w='30%' mb={4} />
                  </Flex>

                  <Separator />

                  <Box mt={2} p={2}>
                    <SkeletonText h={6} w='80%' noOfLines={3} />
                  </Box>
                </Box>
              )}
            </For>
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
}
