'use client';

import { useRouter } from 'next/navigation';
import { RiErrorWarningLine } from 'react-icons/ri';
import { Button, ButtonGroup, Flex, Heading, Icon, Separator, Stack, Text } from '@chakra-ui/react';

export default function ErrorPage() {
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
        <Heading size='4xl'>관리자 페이지</Heading>
        <Text color='gray.600'>관리자만 볼 수 있는 페이지입니다.</Text>

        <ButtonGroup gap={3} mt={4} variant='outline' justify='center'>
          <Button rounded='full' onClick={() => router.back()}>
            뒤로 가기
          </Button>
        </ButtonGroup>
      </Stack>
    </Flex>
  );
}
