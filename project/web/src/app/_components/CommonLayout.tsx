'use client';

import { Box, Flex } from '@chakra-ui/react';
import { Toaster } from '@/components/ui/toaster';
import Navbar from './nav/Navbar';

export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Flex justify='center'>
        <Navbar />
      </Flex>
      <Box px={{ base: 4 }} pt='24' mx='auto' maxW='960px' minH='100vh' w='100%'>
        {children}
      </Box>
      <Toaster />
    </>
  );
}
