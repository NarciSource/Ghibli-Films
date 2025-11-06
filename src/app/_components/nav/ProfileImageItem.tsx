import { Box, Flex, Text } from '@chakra-ui/react';
import type { ChangeEvent } from 'react';
import { useUploadProfileImageMutation } from '@/graphql/api/hooks';
import type { MeQuery } from '@/graphql/api/operations';
import Avatar from '../auth/Avatar';

export default function ProfileImageItem({
  profileImage,
  username,
  email,
}: NonNullable<MeQuery['me']>): React.ReactElement {
  const [upload] = useUploadProfileImageMutation();

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
    <Flex px={2} pt={2} pb={4}>
      <label htmlFor='upload-profile-image' title='프로필 이미지 수정'>
        <input
          id='upload-profile-image'
          type='file'
          accept='image/*'
          hidden
          onChange={handleImageUpload}
        />
        <Avatar username={username} profileImage={profileImage} mr={4} cursor='pointer' />
      </label>

      <Box>
        <Text fontWeight='bold'>{username}</Text>
        <Text>{email}</Text>
      </Box>
    </Flex>
  );
}
