import { Box } from '@chakra-ui/react';

export default async function BrowseLayout({ children }: { children: React.ReactNode }) {
  return <Box px={{ base: 4 }}>{children}</Box>;
}
