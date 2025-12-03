import { FaCheck, FaCircle, FaRegCircle } from 'react-icons/fa';
import { PiFunctionBold } from 'react-icons/pi';
import { Card, Flex, HStack, Separator, Text, VStack } from '@chakra-ui/react';

import PageTreeCard from './PageTreeCard';

export default function RevalidateControl() {
  return (
    <Card.Root variant='outline' p={5}>
      <Card.Title m={5}>정적 페이지 갱신</Card.Title>
      <Card.Description>클릭 시 선택한 페이지의 정적 페이지를 즉시 갱신합니다.</Card.Description>

      <Card.Body>
        <PageTreeCard />
      </Card.Body>

      <Separator />

      <Card.Footer fontSize='sm' mt={5}>
        <VStack align='start' gap={1}>
          <Flex w='full' align='center' justify='space-between'>
            <HStack>
              <FaRegCircle />
              <Text>(Static) 정적 사전 렌더링</Text>
            </HStack>
            <Refresh />
          </Flex>

          <Flex w='full' align='center' justify='space-between'>
            <HStack>
              <FaCircle />
              <Text>(SSG) generateStaticParams 기반 정적 HTML</Text>{' '}
            </HStack>
            <Refresh />
          </Flex>

          <Flex w='full' align='center' justify='space-between'>
            <HStack>
              <PiFunctionBold />
              <Text>(Dynamic) 요청 시 서버 렌더링</Text>
            </HStack>
          </Flex>
        </VStack>
      </Card.Footer>
    </Card.Root>
  );
}

const Refresh = () => (
  <HStack ml={10}>
    <FaCheck color='green' />
    <Text>갱신 가능</Text>
  </HStack>
);
