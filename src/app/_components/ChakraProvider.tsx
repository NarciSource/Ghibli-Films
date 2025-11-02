'use client';

import { useEffect, useState } from 'react';
import { Provider } from '@/components/ui/provider';

export function ChakraProviders({ children }: { children: React.ReactNode }) {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null;
  }

  return <Provider>{children}</Provider>;
}
