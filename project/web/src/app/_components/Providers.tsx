'use client';

import { ApolloProvider } from '@apollo/client';
import { useEffect, useState } from 'react';
import { createApolloClient } from '@/apollo/createApolloClient';
import { Provider as ChakraProvider } from '@/components/ui/provider';

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
