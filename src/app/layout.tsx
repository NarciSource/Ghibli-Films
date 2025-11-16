import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

import { Box, Flex } from '@chakra-ui/react';
import { Toaster } from '@chakra-ui/react/toaster';

import { Navbar } from './_layout/nav';
import ClientProviders from './_providers/ClientProviders';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Ghibli Best Cuts',
  description: '지브리 명장면 프로젝트',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko' suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
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
