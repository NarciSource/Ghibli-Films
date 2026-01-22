import { FaHeart } from 'react-icons/fa';
import { Button, Text } from '@chakra-ui/react';
import { toaster } from '@chakra-ui/react/toaster';

import { anonymousClient } from '@/apollo/client/createApolloClient';
import { CutDocument } from '@/graphql/anonymous/api/hooks';
import { useVoteMutation } from '@/graphql/authenticated/api/hooks';
import { useIsLoggedIn } from '@/app/_store/useAuthStore';

export default function CutVote({ cutId, votesCount }: { cutId: number; votesCount: number }) {
  const isLoggedIn = useIsLoggedIn();

  const [vote, { loading: voteLoading }] = useVoteMutation({
    variables: { cutId },
    // 캐시 조절
    update: () => {
      anonymousClient.refetchQueries({
        include: [CutDocument],
      });
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
      bg='pink.500'
      aria-label='like-this-cut-button'
      loading={voteLoading}
      onClick={showVoteResult}
    >
      <FaHeart />
      <Text>{votesCount}</Text>
    </Button>
  );
}
