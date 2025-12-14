import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  reactCompiler: true,
  experimental: {
    optimizePackageImports: ['@chakra-ui/react'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.ghibli.jp',
      },
    ],
  },
  assetPrefix: process.env.NEXT_PUBLIC_CDN_URL ?? '',
};

export default nextConfig;
