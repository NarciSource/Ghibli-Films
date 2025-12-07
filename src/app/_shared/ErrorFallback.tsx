import { useRouter } from 'next/navigation';
import { RiErrorWarningLine } from 'react-icons/ri';
import { Button, ButtonGroup, Flex, Heading, Icon, Separator, Stack, Text } from '@chakra-ui/react';
import { Tooltip } from '@chakra-ui/react/tooltip';

export interface ErrorFallbackProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ({ error, reset }: ErrorFallbackProps) {
  const router = useRouter();

  return (
    <Flex
      px={10}
      py={20}
      gap={20}
      boxShadow='md'
      align='center'
      justify='center'
      direction={{ base: 'column', md: 'row' }}
    >
      <Icon mb={{ base: 0, md: 50 }} boxSize={20}>
        <RiErrorWarningLine />
      </Icon>

      <Separator
        orientation={{ base: 'horizontal', md: 'vertical' }}
        height={{ base: '1px', md: '200px' }}
        width={{ base: '200px', md: '1px' }}
      />

      <Stack flexDir='column' gap={4} textAlign={{ base: 'center', md: 'start' }}>
        <Heading size='4xl'>문제가 발생했습니다</Heading>
        <Text color='gray.600'>
          <Tooltip content={error.message}>
            <Text as='span' textDecor='underline' cursor='help'>
              오류
            </Text>
          </Tooltip>
          가 발생했어요. 다시 시도하거나 다른 페이지로 이동해주세요.
        </Text>

        <ButtonGroup gap={3} mt={4} variant='outline' justify='center'>
          <Button colorPalette='teal' rounded='full' onClick={() => reset()}>
            다시 시도
          </Button>
          <Button rounded='full' onClick={() => router.back()}>
            뒤로 가기
          </Button>
        </ButtonGroup>
      </Stack>
    </Flex>
  );
}
