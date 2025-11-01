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
  useColorModeValue,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { useMemo } from 'react';
import { FaHeart } from 'react-icons/fa';
import FilmCutReview from './FilmCutReview';
import FilmCutReviewDeleteAlert from './FilmCutReviewDeleteAlert';
import FilmCutReviewRegisterModal from './FilmCutReviewRegisterModal';

type FilmCutDetailProps = {
  id: number;
  src: string;
  isVoted?: boolean;
  votesCount?: number;
  reviews: any;
};

export default function FilmCutDetail({
  id: cutId,
  src: cutImg,
  isVoted = false,
  votesCount = 0,
  reviews,
}: FilmCutDetailProps): React.ReactElement {
  const toast = useToast();
  const reviewRegisterDialog = useDisclosure();
  const deleteAlert = useDisclosure();
  const votedButtonColor = useColorModeValue('gray.500', 'gray.400');

  const voteLoading = false;
  const accessToken = localStorage.getItem('access_token');
  const userData: any = null;
  const isLoggedIn = useMemo(() => {
    if (accessToken) {
      return userData?.me?.id;
    }
    return false;
  }, [accessToken]);

  const showVoteResult = () => {
    if (isLoggedIn) {
    } else {
      toast({
        status: 'warning',
        description: '좋아요 표시는 로그인 후 가능합니다.',
      });
    }
  };

  return (
    <Box>
      <AspectRatio ratio={16 / 9}>
        <Image src={cutImg} objectFit='cover' />
      </AspectRatio>

      <Box py={4}>
        <Flex justify='space-between' alignItems='center'>
          <Heading size='sm'>{cutId}번째 사진</Heading>
          <HStack spacing={1} alignItems='center'>
            <Button
              color={isVoted ? 'pink.400' : votedButtonColor}
              aria-label='like-this-cut-button'
              leftIcon={<FaHeart />}
              isLoading={voteLoading}
              onClick={showVoteResult}
            >
              <Text>{votesCount}</Text>
            </Button>
            <Button colorScheme='teal' onClick={reviewRegisterDialog.onOpen}>
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
            <SimpleGrid mt={3} spacing={4} columns={{ base: 1, sm: 2 }}>
              {reviews.map((review: { id: number }) => (
                <FilmCutReview
                  user={{ username: '' }}
                  contents={''}
                  isMine={false}
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
        isOpen={reviewRegisterDialog.isOpen}
        onClose={reviewRegisterDialog.onClose}
      />

      <FilmCutReviewDeleteAlert
        target={reviews.find((review: { isMine: any }) => review.isMine)}
        isOpen={deleteAlert.isOpen}
        onClose={deleteAlert.onClose}
      />
    </Box>
  );
}
