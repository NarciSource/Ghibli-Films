import type { Metadata } from 'next';
import './globals.css';

import { Box, Flex } from '@chakra-ui/react';
import { Toaster } from '@chakra-ui/react/toaster';

import { Navbar } from './_layout/nav';
import ClientProviders from './_providers/ClientProviders';

const CDN_URL = process.env.NEXT_PUBLIC_CDN_URL ?? '';

export const metadata: Metadata = {
  title: 'Ghibli Best Cuts',
  description: '지브리 명장면 프로젝트',
  openGraph: {
    title: 'Ghibli Best Cuts',
    description: '지브리 명장면 프로젝트',
    images: [{ url: `${CDN_URL}/thumbnail.png'`, alt: 'Thumbnail' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko' suppressHydrationWarning>
      <body>
        <ClientProviders>
          <Flex justify='center'>
            <Navbar />
          </Flex>
          <Box px={{ base: 4 }} pt='24' mx='auto' maxW='960px' minH='100vh' w='100%'>
            {children}
          </Box>
          <Toaster />
        </ClientProviders>
      </body>
    </html>
  );
}
