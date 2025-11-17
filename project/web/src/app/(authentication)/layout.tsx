import { Flex } from '@chakra-ui/react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Flex h='100vh'>{children}</Flex>;
}
