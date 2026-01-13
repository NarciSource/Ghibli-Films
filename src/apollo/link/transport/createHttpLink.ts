import { HttpLink } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';

import type { ClientContext } from '../../client/ClientContext';
import resolveGraphQLEndpoint from '../../endpoint/resolveGraphQLEndpoint';

export default function createHttpLink({ kind, isServer }: ClientContext) {
  const isAnonymous = kind === 'anonymous';

  const uri = resolveGraphQLEndpoint({ kind, isServer });

  return isAnonymous
    ? new HttpLink({ uri, fetch, credentials: 'include' })
    : createUploadLink({ uri, fetch, credentials: 'include' });
}
