import { FaHeart } from 'react-icons/fa';
import { Button, Text } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react/color-mode';
import { toaster } from '@chakra-ui/react/toaster';

import { CutDocument, useVoteMutation } from '@/graphql/api/hooks';
import type { CutQuery, CutQueryVariables } from '@/graphql/api/operations';
import { useIsLoggedIn } from '@/app/_store/useAuthStore';

export default function CutVote({
  cutId,
  isVoted,
  votesCount,
}: {
  cutId: number;
  isVoted: boolean;
  votesCount: number;
}) {
  const votedButtonColor = useColorModeValue('gray.500', 'gray.400');
  const isLoggedIn = useIsLoggedIn();

  const [vote, { loading: voteLoading }] = useVoteMutation({
    variables: { cutId },
    // 캐시 조절
    update: (cache, fetchResult) => {
      // 쿼리 캐시 데이터 조회
      const currentCut = cache.readQuery<CutQuery, CutQueryVariables>({
        query: CutDocument,
        variables: { cutId },
      });

      if (currentCut?.cut) {
        if (fetchResult.data?.vote) {
          // 쿼리 캐시 데이터 덮어쓰기
          cache.writeQuery<CutQuery, CutQueryVariables>({
            query: CutDocument,
            variables: { cutId: currentCut.cut.id },
            data: {
              __typename: 'Query',
              ...currentCut,
              cut: {
                ...currentCut.cut,
                votesCount: isVoted ? currentCut.cut.votesCount - 1 : currentCut.cut.votesCount + 1,
                isVoted: !isVoted,
              },
            },
          });
        }
      }
    },
  });

  const showVoteResult = () => {
    if (isLoggedIn) {
      vote();
    } else {
      toaster.create({
        type: 'warning',
        description: '좋아요 표시는 로그인 후 가능합니다.',
      });
    }
  };

  return (
    <Button
      color={isVoted ? 'pink.400' : votedButtonColor}
      aria-label='like-this-cut-button'
      loading={voteLoading}
      onClick={showVoteResult}
    >
      <FaHeart />
      <Text>{votesCount}</Text>
    </Button>
  );
}
