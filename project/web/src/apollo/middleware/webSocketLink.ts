import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';

const httpUri = process.env.NEXT_PUBLIC_APP_API_HOST;
const wsUri = httpUri?.replace(/^http:\/\//, 'ws://').replace(/^https:\/\//, 'wss://');

const wsLink = new GraphQLWsLink(
  createClient({
    url: `${wsUri}/graphql`,
  }),
);

export default wsLink;
