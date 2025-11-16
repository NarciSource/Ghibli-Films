'use client';

import NextLink from 'next/link';
import {
  Button,
  Menu,
  MenuContent,
  MenuPositioner,
  MenuTrigger,
  Portal,
  Stack,
} from '@chakra-ui/react';

import Avatar from '@/app/_shared/Avatar';
import { useIsLoggedIn } from '@/app/_store/useAuthStore';
import { useMeQuery } from '@/graphql/api/hooks';
import type { MeQuery } from '@/graphql/api/operations';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import LogoutItem from './LogoutItem';
import Notification from "./notification/Notification"
import ProfileImageItem from './ProfileImageItem';

export default function UserMenu(): React.ReactElement {
  const isLoggedIn = useIsLoggedIn();
  const { data } = useMeQuery({ skip: !isLoggedIn });

  return isLoggedIn ? (
    <Stack justify='flex-end' alignItems='center' direction='row' gap={3}>
      <ColorModeSwitcher />

      <Notification />

      <Menu.Root>
        <MenuTrigger asChild>
          <Button variant='plain'>
            <Avatar {...data?.me} />
          </Button>
        </MenuTrigger>

        <Portal>
          <MenuPositioner>
            <MenuContent>
              <ProfileImageItem {...(data?.me as NonNullable<MeQuery['me']>)} />

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
