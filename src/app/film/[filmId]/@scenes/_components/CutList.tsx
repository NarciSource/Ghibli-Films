'use client';

import NextImage from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AspectRatio, For, SimpleGrid } from '@chakra-ui/react';

import type { CutsQuery } from '@/graphql/api/operations';

export default function CutList({ cuts }: { cuts: CutsQuery['cuts'] }) {
  const pathname = usePathname();

  return (
    <SimpleGrid my={4} columns={[1, 2, null, 3]} gap={[2, null, 8]}>
      <For each={cuts}>
        {(cut, nth) => (
          <AspectRatio key={cut.id} ratio={16 / 9} position='relative'>
            <Link href={{ pathname: `${pathname}/cut/${cut.id}`, query: { nth } }} prefetch={false}>
              <NextImage
                src={cut.src}
                alt={`장면-${cut.id}`}
                fill
                sizes='(max-width: 768px) 100vw, 33vw'
              />
            </Link>
          </AspectRatio>
        )}
      </For>
    </SimpleGrid>
  );
}
