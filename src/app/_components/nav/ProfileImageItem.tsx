import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import type { ChangeEvent } from 'react';
import { useUploadProfileImageMutation } from '@/graphql/api/hooks';
import type { MeQuery } from '@/graphql/api/operations';

export default function ProfileImageItem({
  profileImage,
  username,
  email,
}: NonNullable<MeQuery['me']>): React.ReactElement {
  const [upload] = useUploadProfileImageMutation();
  const profileImageSrc = `${process.env.NEXT_PUBLIC_APP_API_HOST}/${profileImage}`;

  async function handleImageUpload(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      const file = e.target.files[0];

      await upload({
        variables: { file },
        update: (cache) => cache.evict({ fieldName: 'me' }),
      });
    }
  }

  return (
    <Flex px={4} pt={2} pb={4}>
      <label htmlFor='upload-profile-image'>
        <input
          id='upload-profile-image'
          type='file'
          accept='image/*'
          hidden
          onChange={handleImageUpload}
        />
        <Avatar.Root size='md'>
          <Avatar.Fallback name='profile image' />
          <Avatar.Image src={profileImageSrc} mr={4} />
        </Avatar.Root>
      </label>

      <Box>
        <Text fontWeight='bold'>{username}</Text>
        <Text>{email}</Text>
      </Box>
    </Flex>
  );
}
