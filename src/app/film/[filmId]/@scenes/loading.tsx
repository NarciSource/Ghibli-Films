import { AspectRatio, For, SimpleGrid, Skeleton } from '@chakra-ui/react';

export default function Loading() {
  return (
    <SimpleGrid columns={[1, 2, null, 3]} gap={[2, null, 8]}>
      <For each={Array(12).fill(0)}>
        {() => (
          <AspectRatio ratio={16 / 9}>
            <Skeleton />
          </AspectRatio>
        )}
      </For>
    </SimpleGrid>
  );
}
