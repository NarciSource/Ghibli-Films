import type { ClientContext } from '../client/ClientContext';

const GRAPHQL_URI_TABLE = {
  server: {
    anonymous: `${process.env.APP_API_HOST}/graphql/anonymous`,
    authenticated: `${process.env.APP_API_HOST}/graphql`,
  },
  client: {
    anonymous: `${process.env.NEXT_PUBLIC_APP_API_HOST}/graphql/anonymous`,
    authenticated: `${process.env.NEXT_PUBLIC_APP_API_HOST}/graphql`,
  },
} as const;

export default function resolveGraphQLEndpoint({ kind, isServer }: ClientContext) {
  return GRAPHQL_URI_TABLE[isServer ? 'server' : 'client'][kind];
}
