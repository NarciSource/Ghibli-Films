'use client';

import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import LoginForm from './_components/LoginForm';

export default function Login(): React.ReactElement {
  return (
    <Box bg={useColorModeValue('gray.50', 'gray.800')}>
      <Flex align='center' justify='center'>
        <LoginForm />
      </Flex>
    </Box>
  );
}
