import { createUploadLink } from 'apollo-upload-client';

const clientHttpUri = process.env.NEXT_PUBLIC_APP_API_HOST;
const serverHttpUri = process.env.APP_API_HOST;

export const clientHttpUploadLink = createUploadLink({
  uri: `${clientHttpUri}/graphql`,
  fetch,
  credentials: 'include', // 자격 증명 모드, 쿠키 전송
  // - same-origin : 같은 출처간 요청에만 인증정보를 담을 수 있다.
  // - include : 모든 요청에 인증정보를 담을 수 있다.
  // - omit : 모든 요청에 인증 정보를 담지 않는다.
});

export const serverHttpUploadLink = createUploadLink({
  uri: `${serverHttpUri}/graphql`,
  fetch,
  credentials: 'include',
});
