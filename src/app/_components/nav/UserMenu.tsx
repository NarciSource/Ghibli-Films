'use client';

import {
  Avatar,
  Button,
  Menu,
  MenuContent,
  MenuPositioner,
  MenuTrigger,
  Portal,
  Stack,
} from '@chakra-ui/react';
import { useEffect, useMemo, useState } from 'react';
import NextLink from 'next/link';
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
    <Stack justify='flex-end' alignItems='center' direction='row' gap={3}>
      <ColorModeSwitcher />

      <Notification />

      <Menu.Root>
        <MenuTrigger asChild>
          <Avatar.Root size='sm'>
            <Avatar.Fallback name='profile image' />
            <Avatar.Image src={''} mr={4} cursor='pointer' />
          </Avatar.Root>
        </MenuTrigger>

        <Portal>
          <MenuPositioner>
            <MenuContent>
              <ProfileImageItem profileImage='/test' username='test' email='test@test' />

              <LogoutItem />
            </MenuContent>
          </MenuPositioner>
        </Portal>
      </Menu.Root>
    </Stack>
  ) : (
    <Stack justify='flex-end' direction='row' gap='6'>
      <ColorModeSwitcher />

      <Button fontSize='sm' fontWeight='400' variant='ghost' asChild>
        <NextLink href='/login'>로그인</NextLink>
      </Button>

      <Button
        display={{ base: 'none', md: 'inline-flex' }}
        fontSize='sm'
        fontWeight='600'
        colorPalette='teal'
        asChild
      >
        <NextLink href='/signup'>시작하기</NextLink>
      </Button>
    </Stack>
  );
}
