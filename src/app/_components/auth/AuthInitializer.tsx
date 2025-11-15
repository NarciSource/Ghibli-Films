'use client';

import { useEffect } from 'react';

import { useMeQuery } from '@/graphql/api/hooks';
import { useAuthStore } from '@/store/useAuthStore';

export default function AuthInitializer() {
  const { setUser } = useAuthStore();
  const { data } = useMeQuery({ fetchPolicy: 'no-cache' });

  useEffect(() => {
    setUser(data?.me ?? null);
  }, [data, setUser]);

  return null;
}
