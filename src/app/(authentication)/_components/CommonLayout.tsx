import { Flex, Heading, Stack, Text } from '@chakra-ui/react';

export default function CommonLayout({
  children,
  title,
  subtitle,
}: {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}) {
  return (
    <Stack gap={8} mx='auto' maxW='lg' py={12} px={6}>
      <Stack align='center'>
        <Heading fontSize='4xl'>{title}</Heading>
        <Text fontSize='lg' color='gray.600'>
          {subtitle}
        </Text>
      </Stack>

      <Flex align='center' justify='center'>
        {children}
      </Flex>
    </Stack>
  );
}
