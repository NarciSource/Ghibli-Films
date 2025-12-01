import NextImage from 'next/image';
import {
  AspectRatio,
  Box,
  Button,
  Center,
  Image as ChakraImage,
  Flex,
  For,
  Heading,
  HStack,
  Show,
  SimpleGrid,
  Spinner,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

import { useCutQuery } from '@/graphql/api/hooks';
import {
  FilmCutReview,
  FilmCutReviewDeleteAlert,
  FilmCutReviewRegisterModal,
} from '@/app/(personal)/reviews/_components/cut-review';
import FilmCutVote from './FilmCutVote';

export default function FilmCutDetail({ cutId }: { cutId: number }): React.ReactElement {
  const reviewRegisterDialog = useDisclosure();
  const deleteAlert = useDisclosure();
  const { loading, data } = useCutQuery({ variables: { cutId } });

  return (
    <Show
      when={!loading}
      fallback={
        <Center py={4}>
          <Spinner />
        </Center>
      }
    >
      <Show
        when={data?.cut ? { cut: data.cut, reviews: data.cutReviews } : null}
        fallback={<Center>데이터를 불러오지 못했습니다.</Center>}
      >
        {({ cut, reviews }) => (
          <Box>
            <AspectRatio ratio={16 / 9}>
              <ChakraImage objectFit='cover' asChild>
                <NextImage
                  src={cut.src}
                  alt={`장면-${cut.id}`}
                  sizes='(max-width: 768px) 100vw, 250px'
                  fill
                  priority
                />
              </ChakraImage>
            </AspectRatio>

            <Box p={10} bg='white'>
              <Flex justify='space-between' alignItems='center'>
                <Heading size='sm'>{cut.id}번째 사진</Heading>
                <HStack gap={1} alignItems='center'>
                  <FilmCutVote cutId={cut.id} isVoted={cut.isVoted} votesCount={cut.votesCount} />

                  <Button colorPalette='teal' onClick={reviewRegisterDialog.onOpen}>
                    감상 남기기
                  </Button>
                </HStack>
              </Flex>

              <Box mt={6}>
                <Show
                  when={reviews.length}
                  fallback={
                    <Center minH={100}>
                      <Text>제일 먼저 감상을 남겨보세요!</Text>
                    </Center>
                  }
                >
                  <SimpleGrid mt={3} gap={4} columns={{ base: 1, sm: 2 }}>
                    <For each={reviews}>
                      {({ user, ...review }) => (
                        <FilmCutReview
                          key={review.id}
                          cutReview={review}
                          user={user}
                          onEditClick={reviewRegisterDialog.onOpen}
                          onDeleteClick={deleteAlert.onOpen}
                        />
                      )}
                    </For>
                  </SimpleGrid>
                </Show>
              </Box>
            </Box>

            <FilmCutReviewRegisterModal
              cutId={cut.id}
              isOpen={reviewRegisterDialog.open}
              onClose={reviewRegisterDialog.onClose}
            />

            <FilmCutReviewDeleteAlert
              target={reviews.find((review) => review.isMine)}
              isOpen={deleteAlert.open}
              onClose={deleteAlert.onClose}
            />
          </Box>
        )}
      </Show>
    </Show>
  );
}
