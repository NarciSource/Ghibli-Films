import { MdDelete, MdEdit } from 'react-icons/md';
import { Box, Flex, HStack, IconButton, Separator, Text } from '@chakra-ui/react';
import { Tooltip } from '@chakra-ui/react/tooltip';

import Avatar from '@/app/_shared/Avatar';
import type { CutQuery } from '@/graphql/api/operations';

type FilmCutReviewProps = CutQuery['cutReviews'][0] & {
  onEditClick: () => void;
  onDeleteClick: () => void;
};

export default function FilmCutReview({
  user,
  contents,
  isMine,
  onEditClick,
  onDeleteClick,
}: FilmCutReviewProps): React.ReactElement {
  return (
    <Box borderWidth='thin' borderRadius='lg' shadow='sm' p={2} minH={150}>
      <Flex p={2} justifyContent='space-between'>
        <HStack>
          <Avatar {...user} />
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
