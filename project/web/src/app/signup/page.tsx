import { Flex } from '@chakra-ui/react';
import SignUpForm from './_components/SignUpForm';

export default function SignUp(): React.ReactElement {
  return (
    <Flex align='center' justify='center'>
      <SignUpForm />
    </Flex>
  );
}
