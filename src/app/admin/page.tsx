'use server';

import { cookies } from 'next/headers';
import { Heading, SimpleGrid, Text } from '@chakra-ui/react';

import { createApolloClient } from '@/apollo/createApolloClient';
import { MeDocument } from '@/graphql/api/hooks';
import type { MeQuery } from '@/graphql/api/operations';
import RevalidateControl from './_components/RevalidateControl';

export default async function AdminPage() {
  const apolloClient = await createApolloClient({});
  const cookie = await cookies();

  const { data } = await apolloClient.query<MeQuery>({
    query: MeDocument,
    fetchPolicy: 'no-cache',
    context: {
      cookie,
    },
  });

  if (!data.me?.isAdmin) {
    throw 'No Admin';
  }

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
