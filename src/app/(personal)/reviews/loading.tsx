import { v4 as uuidv4 } from 'uuid';
import {
  AspectRatio,
  Box,
  Card,
  Flex,
  For,
  Heading,
  HStack,
  Separator,
  SimpleGrid,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Splitter,
  Stack,
} from '@chakra-ui/react';

export default function Loading() {
  return (
    <Box px={4}>
      <Heading mb={8} size='lg'>
        나의 감상평 모아보기
      </Heading>

      <For each={Array(2).fill(0)}>
        {() => (
          <Card.Root flexDirection='row' w='100%'>
            <Splitter.Root panels={[{ id: 'film' }, { id: 'cut' }]} defaultSize={[33, 66]}>
              <Splitter.Panel id='film'>
                <AspectRatio m={2} ratio={2 / 3}>
                  <Skeleton borderRadius={20} />
                </AspectRatio>
              </Splitter.Panel>

              <Splitter.ResizeTrigger id='film:cut' />

              <Splitter.Panel id='cut'>
                <Card.Body p={2}>
                  <SimpleGrid columns={2} gap={2}>
                    <For each={Array(4).fill(0)}>
                      {() => (
                        <Stack key={uuidv4()} gap={0}>
                          <AspectRatio ratio={16 / 9}>
                            <Skeleton />
                          </AspectRatio>

                          <Stack>
                            <For each={Array(1).fill(0)}>
                              {() => (
                                <Box key={uuidv4()}>
                                  <Box borderRadius='lg' shadow='sm' p={2}>
                                    <Flex h='30px' p={1} justifyContent='space-between'>
                                      <SkeletonText w='80px' ml={2} flex={1} noOfLines={1} />

                                      <HStack gap={2}>
                                        <SkeletonCircle size='24px' />
                                        <SkeletonCircle size='24px' />
                                      </HStack>
                                    </Flex>

                                    <Separator />

                                    <SkeletonText mt={2} noOfLines={2} />
                                  </Box>
                                </Box>
                              )}
                            </For>
                          </Stack>
                        </Stack>
                      )}
                    </For>
                  </SimpleGrid>
                </Card.Body>
              </Splitter.Panel>
            </Splitter.Root>
          </Card.Root>
        )}
      </For>
    </Box>
  );
}
