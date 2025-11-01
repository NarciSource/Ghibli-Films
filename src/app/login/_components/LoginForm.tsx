import { Box, Button, Field, Input, Separator, Stack } from '@chakra-ui/react';
import { useColorModeValue } from '@/components/ui/color-mode';

export default function LoginForm(): React.ReactElement {
  return (
    <Box rounded='lg' bg={useColorModeValue('white', 'gray.700')} boxShadow='lg' p={8}>
      <Stack as='form' gap={4}>
        <Field.Root>
          <Field.Label>이메일 또는 아이디</Field.Label>
          <Input type='emailOrUsername' placeholder='example@example.com' />
          <Field.ErrorText>에러 메시지</Field.ErrorText>
        </Field.Root>

        <Field.Root>
          <Field.Label>비밀번호</Field.Label>
          <Input type='password' placeholder='8자 이상의 영문, 숫자, 특수문자' />
          <Field.ErrorText>에러 메시지</Field.ErrorText>
        </Field.Root>

        <Separator />
        <Button type='submit' colorPalette='teal'>
          로그인
        </Button>
      </Stack>
    </Box>
  );
}
