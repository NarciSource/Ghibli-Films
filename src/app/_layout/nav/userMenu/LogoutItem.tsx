import { useApolloClient } from '@apollo/client';
import { useRouter } from 'next/navigation';
import { Menu } from '@chakra-ui/react';

import { useAuthStore } from '@/app/_store/useAuthStore';

export default function LogoutItem({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  const redirectUri = `${process.env.NEXT_PUBLIC_APP_API_HOST}/oauth2/sign_out?rd=/`;

  const router = useRouter();
  const client = useApolloClient();
  const { setUser } = useAuthStore();

  async function onLogoutClick() {
    try {
      router.push(redirectUri);

      setUser(null);

      await client.resetStore(); // 아폴로 클라이언트 캐시 리셋
    } catch {}
  }

  return (
    <Menu.Item value='logout' cursor='pointer' onClick={onLogoutClick}>
      {children}
    </Menu.Item>
  );
}
