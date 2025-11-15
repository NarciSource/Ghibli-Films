import { fromPromise } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

import { RefreshAccessTokenDocument } from '@/graphql/api/hooks';
import { apolloClient } from '../createApolloClient';

const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
  if (graphQLErrors) {
    if (graphQLErrors.find((err) => err.message === 'access token expired')) {
      // 엑세스 토큰 만료시 리프레시 토큰으로 재발행 요청
      return fromPromise(apolloClient.mutate({ mutation: RefreshAccessTokenDocument }))
        .filter((result) => !!result)
        .flatMap(() => forward(operation));
    }

    graphQLErrors.forEach(({ message, locations, path }) => {
      console.log(`[GraphQL error]: ${operation.operationName}
                Message: ${message}, Query: ${(path ?? []).join('.')}, Location: ${JSON.stringify(locations)}`);
    });
  }
  if (networkError) {
    console.log(`[NetworkError]: ${operation.operationName}
            Message: ${networkError.message}`);
  }
});
export default errorLink;
