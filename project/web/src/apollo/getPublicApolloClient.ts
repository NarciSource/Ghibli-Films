import { ApolloClient, HttpLink, InMemoryCache, type NormalizedCacheObject } from '@apollo/client';

/**
 * 서버 사이드 공용 아폴로 클라이언트
 *
 * 서버 프로세스 전체에서 공유되는 데이터 전용 Apollo Client 인스턴스를 반환.
 * - 서버 메모리에 상주하는 싱글톤 인스턴스로 구현되어,
 *   동일 서버 프로세스 내에서 캐시(InMemoryCache)가 지속적으로 유지된다.
 * - 동일한 GraphQL 쿼리에 대한 결과를 서버 메모리에서 재사용할 수 있어
 *   빈번한 요청에 대해 서버-API 간 트래픽을 줄이고 성능을 향상한다.
 */
export function getPublicApolloClient() {
  if (!apolloClient) {
    apolloClient = new ApolloClient({
      ssrMode: true, // SSR 모드

      link: new HttpLink({
        uri: `${process.env.APP_API_HOST}/graphql`,
        fetch,
      }),
      cache: new InMemoryCache(),
    });
  }
  return apolloClient;
}

let apolloClient: ApolloClient<NormalizedCacheObject>;
