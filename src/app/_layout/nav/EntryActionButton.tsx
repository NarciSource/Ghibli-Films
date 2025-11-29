import NextLink from 'next/link';
import { Button, Group } from '@chakra-ui/react';

export default function EntryActionButton() {
  return (
    <Group>
      <Button fontSize='sm' fontWeight='400' variant='ghost' asChild>
        <NextLink href='/login'>로그인</NextLink>
      </Button>
      <Button
        display={{ base: 'none', md: 'inline-flex' }}
        fontSize='sm'
        fontWeight='600'
        colorPalette='teal'
        asChild
      >
        <NextLink href='/signup'>시작하기</NextLink>
      </Button>
    </Group>
  );
}
