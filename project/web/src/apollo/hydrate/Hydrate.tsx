'use client';

import { ApolloProvider, type NormalizedCacheObject } from '@apollo/client';

import createApolloClient from '../client/createApolloClient';

export default function Hydrate({
  children,
  state,
}: {
  children: React.ReactNode;
  state?: NormalizedCacheObject;
}) {
  const apolloClient = createApolloClient({ state, kind: 'anonymous' });

  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
}
