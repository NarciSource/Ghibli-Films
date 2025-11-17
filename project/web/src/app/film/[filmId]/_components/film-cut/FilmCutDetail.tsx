import {
  AspectRatio,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

import type { CutQuery } from '@/graphql/api/operations';
import FilmCutReview from './FilmCutReview';
import FilmCutReviewDeleteAlert from './FilmCutReviewDeleteAlert';
import FilmCutReviewRegisterModal from './FilmCutReviewRegisterModal';
import FilmCutVote from './FilmCutVote';

type FilmCutDetailProps = Exclude<CutQuery['cut'], null | undefined> & {
  reviews: CutQuery['cutReviews'];
};

export default function FilmCutDetail({
  id: cutId,
  src: cutImg,
  isVoted = false,
  votesCount = 0,
  reviews,
}: FilmCutDetailProps): React.ReactElement {
  const reviewRegisterDialog = useDisclosure();
  const deleteAlert = useDisclosure();

  return (
    <Box>
      <AspectRatio ratio={16 / 9}>
        <Image src={cutImg} objectFit='cover' />
      </AspectRatio>

      <Box py={4}>
        <Flex justify='space-between' alignItems='center'>
          <Heading size='sm'>{cutId}번째 사진</Heading>
          <HStack gap={1} alignItems='center'>
            <FilmCutVote cutId={cutId} isVoted={isVoted} votesCount={votesCount} />

            <Button colorPalette='teal' onClick={reviewRegisterDialog.onOpen}>
              감상 남기기
            </Button>
          </HStack>
        </Flex>

        <Box mt={6}>
          {!reviews?.length ? (
            <Center minH={100}>
              <Text>제일 먼저 감상을 남겨보세요!</Text>
            </Center>
          ) : (
            <SimpleGrid mt={3} gap={4} columns={{ base: 1, sm: 2 }}>
              {reviews.map((review) => (
                <FilmCutReview
                  key={review.id}
                  {...review}
                  onEditClick={reviewRegisterDialog.onOpen}
                  onDeleteClick={deleteAlert.onOpen}
                />
              ))}
            </SimpleGrid>
          )}
        </Box>
      </Box>

      <FilmCutReviewRegisterModal
        cutId={cutId}
        isOpen={reviewRegisterDialog.open}
        onClose={reviewRegisterDialog.onClose}
      />

      <FilmCutReviewDeleteAlert
        target={reviews.find((review) => review.isMine)}
        isOpen={deleteAlert.open}
        onClose={deleteAlert.onClose}
      />
    </Box>
  );
}
