import { Avatar, Box, Flex, HStack, IconButton, Separator, Text } from '@chakra-ui/react';
import { useMemo } from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';
import { Tooltip } from '@/components/ui/tooltip';
import type { CutQuery } from '@/graphql/api/operations';

type FilmCutReviewProps = {
  user: NonNullable<CutQuery['cutReviews'][0]['user']>;
  contents: string;
  isMine: boolean;
} & { onEditClick: () => void; onDeleteClick: () => void };

export default function FilmCutReview({
  user: { username: author, profileImage },
  contents,
  isMine,
  onEditClick,
  onDeleteClick,
}: FilmCutReviewProps): React.ReactElement {
  const profileImageSrc = useMemo(
    () => (profileImage ? `${process.env.NEXT_PUBLIC_APP_API_HOST}/${profileImage}` : undefined),
    [profileImage],
  );

  return (
    <Box borderWidth='thin' borderRadius='lg' shadow='sm' p={2} minH={150}>
      <Flex p={2} justifyContent='space-between'>
        <HStack>
          <Avatar.Root size='sm'>
            <Avatar.Fallback name={author} />
            <Avatar.Image src={profileImageSrc} mr={4} cursor='pointer' />
          </Avatar.Root>
        </HStack>

        {isMine && (
          <HStack gap={0}>
            <Tooltip showArrow content='감상 수정'>
              <IconButton aria-label='edit-review' variant='ghost' size='sm' onClick={onEditClick}>
                <MdEdit />
              </IconButton>
            </Tooltip>
            <Tooltip showArrow content='감상 삭제'>
              <IconButton
                aria-label='delete-review'
                variant='ghost'
                size='sm'
                onClick={onDeleteClick}
              >
                <MdDelete />
              </IconButton>
            </Tooltip>
          </HStack>
        )}
      </Flex>
      <Separator />
      <Box mt={2} p={2}>
        <Text>{contents}</Text>
      </Box>
    </Box>
  );
}
