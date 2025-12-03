import { MdDelete, MdEdit } from 'react-icons/md';
import { Box, Flex, HStack, IconButton, Separator, Show, Text } from '@chakra-ui/react';
import { Tooltip } from '@chakra-ui/react/tooltip';

import type { CutReview, User } from '@/graphql/api/type';
import Avatar from '@/app/_shared/Avatar';

type FilmCutReviewProps = {
  cutReview: Partial<CutReview>;
  user?: Partial<User>;
  onEditClick: () => void;
  onDeleteClick: () => void;
};

export default function FilmCutReview({
  user,
  cutReview: { contents, isMine, updatedAt },
  onEditClick,
  onDeleteClick,
}: FilmCutReviewProps): React.ReactElement {
  return (
    <Box borderRadius='lg' shadow='sm' p={2}>
      <Flex p={1} justifyContent='space-between'>
        <Show when={user}>
          <Avatar {...user} />
        </Show>

        <Text alignContent='center' fontSize='x-small'>
          {new Date(Number(updatedAt) ?? 0).toLocaleString()}
        </Text>

        <Show when={isMine}>
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
        </Show>
      </Flex>

      <Separator />

      <Box mt={2} p={2}>
        <Text>{contents}</Text>
      </Box>
    </Box>
  );
}
