'use client';

import { type ApolloClient, ApolloProvider, type NormalizedCacheObject } from '@apollo/client';
import { useEffect, useState } from 'react';

import { createApolloClient } from '@/apollo/createApolloClient';

export default function ApolloWrapper({
  children,
  initialApolloState,
}: {
  children: React.ReactNode;
  initialApolloState?: NormalizedCacheObject;
}) {
  const [apolloClient, setClient] = useState<ApolloClient<NormalizedCacheObject>>();

  useEffect(() => {
    createApolloClient({ initialApolloState }).then(setClient);
  }, [initialApolloState]);

  if (!apolloClient) return null;

  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
}
