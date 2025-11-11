'use client';

import { ApolloProvider, type NormalizedCacheObject } from '@apollo/client';

import { createApolloClient } from '@/apollo/createApolloClient';

export default function ApolloWrapper({
  children,
  initialApolloState,
}: {
  children: React.ReactNode;
  initialApolloState?: NormalizedCacheObject;
}) {
  const apolloClient = createApolloClient({ initialApolloState });

  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
}
