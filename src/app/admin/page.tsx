import { Heading, SimpleGrid } from '@chakra-ui/react';

import RevalidateControl from './_components/RevalidateControl';

export default function AdminPage() {
  return (
    <>
      <Heading size='3xl' mb={70}>
        관리자 페이지
      </Heading>

      <SimpleGrid columns={[2, null, 1]} gap={[2, null, 10]} m={50}>
        <RevalidateControl />
      </SimpleGrid>
    </>
  );
}
