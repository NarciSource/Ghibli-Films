import { ApolloClient, HttpLink, InMemoryCache, type NormalizedCacheObject } from '@apollo/client';
import { cookies } from 'next/headers';

/**
 * 서버 사이드 공용 아폴로 클라이언트
 *
 * 서버 프로세스 전체에서 공유되는 데이터 전용 Apollo Client 인스턴스를 반환.
 * - 서버 메모리에 상주하는 싱글톤 인스턴스로 구현되어,
 *   동일 서버 프로세스 내에서 캐시(InMemoryCache)가 지속적으로 유지된다.
 * - 동일한 GraphQL 쿼리에 대한 결과를 서버 메모리에서 재사용할 수 있어
 *   빈번한 요청에 대해 서버-API 간 트래픽을 줄이고 성능을 향상한다.
 */
export async function getPublicApolloClient() {
  // 새로고침 시 브라우저 요청에 담긴 쿠키가 SSR 컨텍스트에 저장되고,
  // 저장된 요청 쿠키를 꺼내어 서버에서 바로 사용
  const cookieStore = await cookies();

  if (!apolloClient) {
    apolloClient = new ApolloClient({
      ssrMode: true, // SSR 모드

      link: new HttpLink({
        uri: `${process.env.APP_API_HOST}/graphql`,
        fetch,
        headers: {
          // 서버에서 fetch할 때 쿠키를 자동으로 보내지 않으므로 명시적으로 전달
          cookie: cookieStore.toString(),
        },
      }),
      cache: new InMemoryCache(),
    });
  }
  return apolloClient;
}

let apolloClient: ApolloClient<NormalizedCacheObject>;
