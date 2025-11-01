import {
  Button,
  Divider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
} from '@chakra-ui/react';

export default function SignUpForm(): React.ReactElement {
  return (
    <Stack as='form' spacing={4}>
      {/* 필드 유효성 검사, isInvalid 값으로 판단 */}
      <FormControl>
        {/* isInvalid = useForm의 errors값 */}
        <FormLabel>이메일</FormLabel>
        {/* register를 통해 input 필드를 reactForm에 등록 */}
        <Input type='email' placeholder='example@example.com' />
        {/* 유효성 검사 통과하지 못했을 때 에러 메시지 */}
        <FormErrorMessage>{'에러 메시지'}</FormErrorMessage>
      </FormControl>

      <FormControl>
        <FormLabel>아이디</FormLabel>
        <Input type='text' placeholder='example' />
        <FormErrorMessage>{'에러 메시지'}</FormErrorMessage>
      </FormControl>

      <FormControl>
        <FormLabel>비밀번호</FormLabel>
        <Input type='password' placeholder='8자 이상의 영문, 숫자, 특수문자' />
        <FormErrorMessage>{'에러 메시지'}</FormErrorMessage>
      </FormControl>

      <Divider />
      <Button type='submit' colorScheme='teal'>
        계정 생성
      </Button>
    </Stack>
  );
}
