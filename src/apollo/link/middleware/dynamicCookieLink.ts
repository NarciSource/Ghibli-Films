import { ApolloLink } from '@apollo/client';

const dynamicCookieLink = new ApolloLink((operation, forward) => {
  // 서버 컨텍스트에서 쿠키 가져오기
  const cookie = operation.getContext().cookie;
  operation.setContext({
    headers: {
      ...operation.getContext().headers,
      cookie,
    },
  });
  return forward(operation);
});

export default dynamicCookieLink;
