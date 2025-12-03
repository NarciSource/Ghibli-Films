import { Box } from '@chakra-ui/react';

/**
 * 동적 경로에서 정적 페이지 설정을 위해
 * 빌드 시점에 동적 라우트의 모든 파라미터를 미리 생성.
 *
 * Next.js는 빌드 과정에서 이 함수를 자동으로 호출하며,
 * 반환된 params를 기반으로 각 동적 경로에 대한 정적 HTML 파일을 생성
 *
 * @returns 정적 페이지 생성을 위해 사용되는 `params` 형태의 파라미터 배열
 */
export async function generateStaticParams() {
  return [];
}

export default async function Layout({
  overview,
  scenes,
}: {
  overview: React.ReactNode;
  scenes: React.ReactNode;
}) {
  return (
    <Box px={4} gap={12}>
      {overview}
      {scenes}
    </Box>
  );
}
