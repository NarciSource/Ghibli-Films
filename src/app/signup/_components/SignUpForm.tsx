import { Button, Field, Fieldset, Input, Separator, Stack } from '@chakra-ui/react';

export default function SignUpForm(): React.ReactElement {
  return (
    <Stack as='form' gap={4}>
      {/* 필드 유효성 검사, isInvalid 값으로 판단 */}
      <Fieldset.Root>
        <Field.Root>
          {/* isInvalid = useForm의 errors값 */}
          <Field.Label>이메일</Field.Label>
          {/* register를 통해 input 필드를 reactForm에 등록 */}
          <Input type='email' placeholder='example@example.com' />
          {/* 유효성 검사 통과하지 못했을 때 에러 메시지 */}
          <Field.ErrorText>에러 메시지</Field.ErrorText>
        </Field.Root>

        <Field.Root>
          <Field.Label>아이디</Field.Label>
          <Input placeholder='example' />
          <Field.ErrorText>에러 메시지</Field.ErrorText>
        </Field.Root>

        <Field.Root>
          <Field.Label>비밀번호</Field.Label>
          <Input type='password' placeholder='8자 이상의 영문, 숫자, 특수문자' />
          <Field.ErrorText>에러 메시지</Field.ErrorText>
        </Field.Root>

        <Separator />
        <Button type='submit' colorPalette='teal'>
          계정 생성
        </Button>
      </Fieldset.Root>
    </Stack>
  );
}
