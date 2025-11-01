import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import type { ChangeEvent } from 'react';

export default function ProfileImageItem({
  profileImage,
  username,
  email,
}: {
  profileImage: string;
  username: string;
  email: string;
}): React.ReactElement {
  const profileImageSrc = `${process.env.REACT_APP_API_HOST}/${profileImage}`;

  async function handleImageUpload(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      const file = e.target.files[0];
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
          <Avatar.Image src={profileImageSrc} mr={4} cursor='pointer' />
        </Avatar.Root>
      </label>

      <Box>
        <Text fontWeight='bold'>{username}</Text>
        <Text>{email}</Text>
      </Box>
    </Flex>
  );
}
