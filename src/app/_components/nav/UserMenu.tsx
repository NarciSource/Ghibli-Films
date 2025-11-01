'use client';

import { Avatar, Button, Menu, MenuButton, MenuList, Stack } from '@chakra-ui/react';
import { useEffect, useMemo, useState } from 'react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import Notification from '../notification/Notification';
import LogoutItem from './LogoutItem';
import ProfileImageItem from './ProfileImageItem';

export default function UserMenu(): React.ReactElement {
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    setAccessToken(localStorage.getItem('access_token'));
  }, []);

  const isLoggedIn = useMemo(() => accessToken, [accessToken]);

  return isLoggedIn ? (
    <Stack justify='flex-end' alignItems='center' direction='row' spacing={3}>
      <ColorModeSwitcher />

      <Notification />

      <Menu>
        <MenuButton>
          <Avatar size='sm' />
        </MenuButton>
        <MenuList>
          <ProfileImageItem profileImage='/test' username='test' email='test@test' />

          <LogoutItem />
        </MenuList>
      </Menu>
    </Stack>
  ) : (
    <Stack justify='flex-end' direction='row' spacing='6'>
      <ColorModeSwitcher />

      <Button fontSize='sm' fontWeight='400' variant='link'>
        로그인
      </Button>

      <Button
        display={{ base: 'none', md: 'inline-flex' }}
        fontSize='sm'
        fontWeight='600'
        colorScheme='teal'
      >
        시작하기
      </Button>
    </Stack>
  );
}
