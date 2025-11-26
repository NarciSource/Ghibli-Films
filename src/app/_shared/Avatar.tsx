import { forwardRef } from 'react';
import { Avatar as ChakraAvatar } from '@chakra-ui/react';

import type { MeQuery } from '@/graphql/api/operations';

type RenameKey<T, OldKey extends keyof T, NewKey extends string> = {
  [K in keyof T as K extends OldKey ? NewKey : K]: T[K];
};

type Props = RenameKey<ChakraAvatar.RootProps, 'id', 'avatarId'> & Partial<MeQuery['me']>;

export default forwardRef<HTMLDivElement, Props>(
  ({ avatarId, isAdmin, username, profileImage, ...props }, ref) => {
    return (
      <ChakraAvatar.Root ref={ref} size='sm' {...{ ...props, id: avatarId }}>
        <ChakraAvatar.Fallback name={username} />
        <ChakraAvatar.Image src={`${process.env.NEXT_PUBLIC_APP_API_HOST}/${profileImage}`} />
      </ChakraAvatar.Root>
    );
  },
);
