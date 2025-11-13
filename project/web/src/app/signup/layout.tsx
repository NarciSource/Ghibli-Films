import { Flex, Heading, Stack, Text } from '@chakra-ui/react';

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

        {children}
      </Stack>
    </Flex>
  );
}
