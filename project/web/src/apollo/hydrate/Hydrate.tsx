'use client';

import { type ApolloClient, ApolloProvider, type NormalizedCacheObject } from '@apollo/client';
import { useEffect, useState } from 'react';

import { createApolloClient } from '@/apollo/createApolloClient';

export default function Hydrate({
  children,
  state,
}: {
  children: React.ReactNode;
  state?: NormalizedCacheObject;
}) {
  const [apolloClient, setClient] = useState<ApolloClient<NormalizedCacheObject>>();

  useEffect(() => {
    createApolloClient({ state }).then(setClient);
  }, [state]);

  if (!apolloClient) return null;

  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
}
