import { Flex } from '@chakra-ui/react';

import LoginForm from './_components/LoginForm';

export default function Login(): React.ReactElement {
  return (
    <Flex align='center' justify='center'>
      <LoginForm />
    </Flex>
  );
}
