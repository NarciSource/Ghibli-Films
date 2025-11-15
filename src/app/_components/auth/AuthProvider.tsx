'use server';

import { cookies } from 'next/headers';

import AuthClientInitializer from './AuthInitializer';

export default async function AuthProvider({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken')?.value;
  // 엑세스토큰 유무로 사용자 임시 초기화
  const user = accessToken ? { id: 0, username: 'A' } : null;

  return (
    <>
      <AuthClientInitializer user={user} />
      {children}
    </>
  );
}
