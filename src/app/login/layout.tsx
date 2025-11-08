'use client';

import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react/color-mode';

export default function LoginFormLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <Flex h='100vh'>
      <Stack gap={8} mx='auto' maxW='lg' py={12} px={6}>
        <Stack align='center'>
          <Heading fontSize='4xl'>계정 로그인</Heading>
          <Text fontSize='lg' color='gray.600'>
            감상평과 좋아요를 남기세요!
          </Text>
        </Stack>

        <Box rounded='lg' bg={useColorModeValue('white', 'gray.700')} boxShadow='lg' p={8}>
          {children}
        </Box>
      </Stack>
    </Flex>
  );
}
