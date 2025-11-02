import { useApolloClient } from '@apollo/client';
import { MenuItem } from '@chakra-ui/react';
import { useLogoutMutation } from '@/graphql/api/hooks';

export default function LogoutItem(): React.ReactElement {
  const [logout, { loading: logoutLoading }] = useLogoutMutation();
  const client = useApolloClient();

  async function onLogoutClick() {
    try {
      await logout();

      localStorage.removeItem('access_token');

      await client.resetStore(); // 아폴로 클라이언트 캐시 리셋
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <MenuItem value='' onClick={onLogoutClick} disabled={logoutLoading}>
      로그아웃
    </MenuItem>
  );
}
