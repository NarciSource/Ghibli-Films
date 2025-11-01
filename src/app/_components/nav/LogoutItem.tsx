import { MenuItem } from '@chakra-ui/react';

export default function LogoutItem(): React.ReactElement {
  async function onLogoutClick() {
    try {
      localStorage.removeItem('access_token');
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <MenuItem value='' onClick={onLogoutClick}>
      로그아웃
    </MenuItem>
  );
}
