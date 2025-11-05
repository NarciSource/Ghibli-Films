'use client';

import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { useColorModeValue } from '@/components/ui/color-mode';

export default function SignUpFormLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <Flex h='100vh'>
      <Stack gap={8} mx='auto' maxW='lg' py={12} px={6}>
        <Stack align='center'>
          <Heading fontSize='4xl'>계정 생성</Heading>
          <Text fontSize='lg' color='gray.600'>
            환영합니다!
          </Text>
        </Stack>

        <Box rounded='lg' bg={useColorModeValue('white', 'gray.700')} boxShadow='lg' p={8}>
          {children}
        </Box>
      </Stack>
    </Flex>
  );
}
