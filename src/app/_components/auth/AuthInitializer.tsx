'use client';

import { useEffect } from 'react';

import { useMeQuery } from '@/graphql/api/hooks';
import { type User, useAuthStore } from '@/store/useAuthStore';

// SSR에서 전달된 사용자 정보로 클라이언트 스토어를 초기화
export default function AuthInitializer({ user }: { user: User | null }) {
  const { setUser } = useAuthStore();
  const { data } = useMeQuery({ fetchPolicy: 'no-cache' });

  useEffect(() => {
    setUser(data?.me ?? user);
  }, [user, setUser, data]);

  return null;
}
