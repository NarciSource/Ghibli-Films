import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-express';
import type { GraphQLSchema } from 'graphql';

import redis from '@/db/redis-client';
import createLoaders from '@/dataloaders/createLoader';
import type IContext from '../context/IContext';
import type { JwtVerifiedUser } from '../context/IContext';

export default function createApolloServer(
    schema: GraphQLSchema,
    isAnonymous: boolean,
): ApolloServer {
    return new ApolloServer({
        // 생성된 스키마와 그에 연결되어있는 리졸버를 통해 GraphQL 서버를 구성
        schema,
        plugins: [ApolloServerPluginLandingPageLocalDefault()],
        context: ({ req, res }: IContext) => {
            if (isAnonymous) {
                return { req, res, redis, loaders: createLoaders() };
            }

            // context에 인증값 추가
            let verified: JwtVerifiedUser;

            return { req, res, verifiedUser: verified, redis, loaders: createLoaders() };
        },
    });
}
