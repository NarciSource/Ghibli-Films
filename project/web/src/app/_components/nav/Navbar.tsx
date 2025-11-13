'use client';

import Image from 'next/image';
import NextLink from 'next/link';
import { Box, Link as ChakraLink, Flex } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react/color-mode';

import SearchBar from './SearchBar';
import UserMenu from './UserMenu';

export default function Navbar() {
  return (
    <Box
      zIndex={10}
      position='fixed'
      w='100%'
      bg={useColorModeValue('white', 'gray.800')}
      borderBottom={1}
      borderStyle='solid'
      borderColor={useColorModeValue('gray.200', 'gray.700')}
      py={{ base: 2 }}
      px={{ base: 4 }}
    >
      <Flex
        color={useColorModeValue('gray.600', 'white')}
        maxW='960px'
        minH='60px'
        align='center'
        m='auto'
      >
        <Flex flex={{ base: 1, md: 'auto' }}>
          <ChakraLink
            fontFamily='heading'
            fontWeight='bold'
            color={useColorModeValue('gray.800', 'white')}
            asChild
          >
            <NextLink href='/'>
              <Image src='/logo.svg' alt='logo' width={50} height={50} />
              Ghibli Best Cuts
            </NextLink>
          </ChakraLink>
        </Flex>

        <SearchBar />

        <UserMenu />
      </Flex>
    </Box>
  );
}
