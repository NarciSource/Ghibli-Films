import { useApolloClient } from '@apollo/client';
import { Menu } from '@chakra-ui/react';

import { useLogoutMutation } from '@/graphql/api/hooks';
import { useAuthStore } from '@/app/_store/useAuthStore';

export default function LogoutItem({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  const [logout, { loading: logoutLoading }] = useLogoutMutation();
  const client = useApolloClient();
  const { setUser } = useAuthStore();

  async function onLogoutClick() {
    try {
      await logout();

      setUser(null);

      await client.resetStore(); // 아폴로 클라이언트 캐시 리셋
    } catch {}
  }

  return (
    <Menu.Item value='logout' cursor='pointer' onClick={onLogoutClick} disabled={logoutLoading}>
      {children}
    </Menu.Item>
  );
}
