import { Heading, Stack, Text } from '@chakra-ui/react';

export default function LoginFormLayout({ children }: { children: React.ReactElement }): React.ReactElement {
    return (
        <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
            <Stack align="center">
                <Heading fontFamily="4xl">계정 로그인</Heading>
                <Text fontSize="lg" color="gray.600">
                    감상평과 좋아요를 남기세요!
                </Text>
            </Stack>

            {children}
        </Stack>
    );
}
