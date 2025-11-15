'use client';

import { useEffect } from 'react';

import { useMeQuery } from '@/graphql/api/hooks';
import { useAuthStore } from '@/store/useAuthStore';

export default function AuthInitializer() {
  const { setUser } = useAuthStore();
  const { data, loading } = useMeQuery({ fetchPolicy: 'no-cache' });

  useEffect(() => {
    if (!loading) {
      setUser(data?.me ?? null);
    }
  }, [loading, data, setUser]);

  return null;
}
