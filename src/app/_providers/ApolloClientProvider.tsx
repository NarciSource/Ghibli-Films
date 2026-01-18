'use client';

import { ApolloProvider } from '@apollo/client';

import createApolloClient from '@/apollo/client/createApolloClient';

export default function ApolloClientProvider({
  kind,
  children,
}: {
  kind: 'authenticated' | 'anonymous';
  children: React.ReactNode;
}) {
  const apolloClient = createApolloClient({ kind });

  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
}
