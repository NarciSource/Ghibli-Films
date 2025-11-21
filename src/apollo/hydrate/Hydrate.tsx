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
  const [client, setClient] = useState<ApolloClient<NormalizedCacheObject> | null>(null);

  useEffect(() => {
    let mounted = true;

    createApolloClient({ state }).then((client) => {
      if (mounted) setClient(client);
    });

    return () => {
      mounted = false;
    };
  }, [state]);

  if (!client) {
    return null;
  }

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
