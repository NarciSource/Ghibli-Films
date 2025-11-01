'use client';

import { Box, Flex } from '@chakra-ui/react';
import { useColorModeValue } from '@/components/ui/color-mode';
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
