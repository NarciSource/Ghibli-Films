'use client';

import { Button, Menu, MenuContent, MenuPositioner, MenuTrigger, Portal } from '@chakra-ui/react';

import Avatar from '@/app/_shared/Avatar';
import { useAuthStore } from '@/app/_store/useAuthStore';
import type { MeQuery } from '@/graphql/api/operations';
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

            <LogoutItem />
          </MenuContent>
        </MenuPositioner>
      </Portal>
    </Menu.Root>
  );
}
