'use client';

import { Box, Flex } from '@chakra-ui/react';
import { useColorModeValue } from '@/components/ui/color-mode';
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
