import { Avatar, Box, Flex, HStack, IconButton, Separator, Text } from '@chakra-ui/react';
import { MdDelete, MdEdit } from 'react-icons/md';
import { Tooltip } from '@/components/ui/tooltip';

type FilmCutReviewProps = {
  user: { username: string };
  contents: string;
  isMine: boolean;
} & { onEditClick: () => void; onDeleteClick: () => void };

export default function FilmCutReview({
  user: { username: author },
  contents,
  isMine,
  onEditClick,
  onDeleteClick,
}: FilmCutReviewProps): React.ReactElement {
  return (
    <Box borderWidth='thin' borderRadius='lg' shadow='sm' p={2} minH={150}>
      <Flex p={2} justifyContent='space-between'>
        <HStack>
          <Avatar.Root size='sm'>
            <Avatar.Fallback name={author} />
            <Avatar.Image src={''} mr={4} cursor='pointer' />
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
