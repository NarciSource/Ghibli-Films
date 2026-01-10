import { Button, Group } from '@chakra-ui/react';

export default function EntryActionButton() {
  const redirectUri = `${process.env.NEXT_PUBLIC_APP_API_HOST}/oauth2/start?rd=/`;

  return (
    <Group>
      <Button
        display={{ base: 'none', md: 'inline-flex' }}
        fontSize='sm'
        fontWeight='600'
        colorPalette='teal'
        asChild
      >
        <a href={redirectUri}>시작하기</a>
      </Button>
    </Group>
  );
}
