'use client';

import { Provider as ChakraProvider } from '@chakra-ui/react/provider';

import ApolloClientProvider from './ApolloClientProvider';
import AuthInitializer from './AuthInitializer';

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ApolloClientProvider kind='authenticated'>
      <ChakraProvider>
        <AuthInitializer />
        {children}
      </ChakraProvider>
    </ApolloClientProvider>
  );
}
