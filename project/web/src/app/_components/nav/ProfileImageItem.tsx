import { Box, FileUpload, Flex, Text } from '@chakra-ui/react';
import { useUploadProfileImageMutation } from '@/graphql/api/hooks';
import type { MeQuery } from '@/graphql/api/operations';
import Avatar from '../auth/Avatar';

export default function ProfileImageItem({
  profileImage,
  username,
  email,
}: NonNullable<MeQuery['me']>): React.ReactElement {
  const [upload] = useUploadProfileImageMutation();

  async function handleImageUpload({ acceptedFiles }: { acceptedFiles: File[] }) {
    if (acceptedFiles) {
      const file = acceptedFiles[0];

      await upload({
        variables: { file },
        update: (cache) => cache.evict({ fieldName: 'me' }),
      });
    }
  }

  return (
    <Flex px={2} pb={4}>
      <FileUpload.Root
        accept={['image/*']}
        title='프로필 이미지 수정'
        onFileChange={handleImageUpload}
      >
        <FileUpload.HiddenInput />
        <FileUpload.Trigger asChild>
          <Avatar {...{ profileImage, username }} my={2} mr={4} cursor='pointer' />
        </FileUpload.Trigger>
      </FileUpload.Root>

      <Box>
        <Text fontWeight='bold'>{username}</Text>
        <Text>{email}</Text>
      </Box>
    </Flex>
  );
}
