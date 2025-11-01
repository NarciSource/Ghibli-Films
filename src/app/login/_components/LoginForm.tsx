import {
  Box,
  Button,
  Divider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';

export default function LoginForm(): React.ReactElement {
  return (
    <Box rounded='lg' bg={useColorModeValue('white', 'gray.700')} boxShadow='lg' p={8}>
      <Stack as='form' spacing={4}>
        <FormControl>
          <FormLabel>이메일 또는 아이디</FormLabel>
          <Input type='emailOrUsername' placeholder='example@example.com' />
          <FormErrorMessage>{'에러 메시지'}</FormErrorMessage>
        </FormControl>

        <FormControl>
          <FormLabel>비밀번호</FormLabel>
          <Input type='password' placeholder='********' />
          <FormErrorMessage>{'에러 메시지'}</FormErrorMessage>
        </FormControl>

        <Divider />

        <Button type='submit' colorScheme='teal'>
          로그인
        </Button>
      </Stack>
    </Box>
  );
}
