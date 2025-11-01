'use client';

import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import SignUpForm from './_components/SignUpForm';

export default function SignUp(): React.ReactElement {
  return (
    <Box bg={useColorModeValue('gray.50', 'gray.800')}>
      <Flex align='center' justify='center'>
        <SignUpForm />
      </Flex>
    </Box>
  );
}
