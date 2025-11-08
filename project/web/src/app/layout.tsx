import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

import CommonLayout from './_components/CommonLayout';
import ChakraProviders from './_components/Providers';

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
        <ChakraProviders>
          <CommonLayout>{children}</CommonLayout>
        </ChakraProviders>
      </body>
    </html>
  );
}
