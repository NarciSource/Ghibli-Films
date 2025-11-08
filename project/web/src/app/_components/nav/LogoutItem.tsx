import { useApolloClient } from '@apollo/client';
import { MenuItem } from '@chakra-ui/react';
import { useLogoutMutation } from '@/graphql/api/hooks';
import { useAuthStore } from '@/store/useAuthStore';

export default function LogoutItem(): React.ReactElement {
  const [logout, { loading: logoutLoading }] = useLogoutMutation();
  const client = useApolloClient();
  const { updateAccessToken } = useAuthStore();

  async function onLogoutClick() {
    try {
      await logout();

      updateAccessToken(null);

      await client.resetStore(); // 아폴로 클라이언트 캐시 리셋
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <MenuItem value='' cursor='pointer' onClick={onLogoutClick} disabled={logoutLoading}>
      로그아웃
    </MenuItem>
  );
}
