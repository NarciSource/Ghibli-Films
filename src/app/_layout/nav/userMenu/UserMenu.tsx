'use client';

import NextLink from 'next/link';
import { BsFillChatSquareQuoteFill } from 'react-icons/bs';
import { RiAdminFill, RiLogoutBoxRLine } from 'react-icons/ri';
import {
  Button,
  Menu,
  MenuContent,
  MenuPositioner,
  MenuTrigger,
  Portal,
  Separator,
  Show,
} from '@chakra-ui/react';

import type { MeQuery } from '@/graphql/api/operations';
import Avatar from '@/app/_shared/Avatar';
import { useAuthStore } from '@/app/_store/useAuthStore';
import LogoutItem from './LogoutItem';
import ProfileImageItem from './ProfileImageItem';

export default function UserMenu(): React.ReactElement {
  const { user } = useAuthStore();

  return (
    <Menu.Root>
      <MenuTrigger asChild>
        <Button variant='plain'>
          <Avatar {...user} />
        </Button>
      </MenuTrigger>

      <Portal>
        <MenuPositioner>
          <MenuContent>
            <ProfileImageItem {...(user as NonNullable<MeQuery['me']>)} />

            <Separator />

            <Menu.Item value='reviews' cursor='pointer' asChild>
              <NextLink href='/reviews'>
                <BsFillChatSquareQuoteFill />
                나의 감상평
              </NextLink>
            </Menu.Item>

            <Show when={user?.isAdmin}>
              <Menu.Item value='admin' cursor='pointer' asChild>
                <NextLink href='/admin'>
                  <RiAdminFill />
                  관리자 설정
                </NextLink>
              </Menu.Item>
            </Show>

            <LogoutItem>
              <RiLogoutBoxRLine />
              로그아웃
            </LogoutItem>
          </MenuContent>
        </MenuPositioner>
      </Portal>
    </Menu.Root>
  );
}
