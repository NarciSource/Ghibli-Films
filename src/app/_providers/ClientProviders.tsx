'use client';

import { useEffect, useState } from 'react';
import { Provider as ChakraProvider } from '@chakra-ui/react/provider';

import ApolloWrapper from './ApolloWrapper';

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  // 클라이언트에서 마운트 여부를 추적하는 상태값
  // false: SSR에서는 아직 렌더링하지 않음
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // 클라이언트에서 컴포넌트가 마운트되면 hydrated를 true로 설정
    setHydrated(true);
  }, []);

  if (!hydrated) {
    // SSR과 CSR 간의 hydration mismatch 방지
    return null;
  }

  return (
    <ApolloWrapper>
      <ChakraProvider>{children}</ChakraProvider>
    </ApolloWrapper>
  );
}
