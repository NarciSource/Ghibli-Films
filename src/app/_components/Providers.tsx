'use client';

import { ApolloProvider } from '@apollo/client';
import { useEffect, useState } from 'react';
import { Provider as ChakraProvider } from '@chakra-ui/react/provider';

import { createApolloClient } from '@/apollo/createApolloClient';

const apolloClient = createApolloClient();

export default function Providers({ children }: { children: React.ReactNode }) {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null;
  }

  return (
    <ApolloProvider client={apolloClient}>
      <ChakraProvider>{children}</ChakraProvider>
    </ApolloProvider>
  );
}
