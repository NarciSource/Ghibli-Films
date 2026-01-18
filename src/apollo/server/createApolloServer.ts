import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-express';
import type { GraphQLSchema } from 'graphql';

import redis from '@/db/redis-client';
import { resolveVerifiedUser } from '@/auth/resolveVerifiedUser';
import createLoaders from '@/dataloaders/createLoader';
import type IContext from '../context/IContext';

export default function createApolloServer(schema: GraphQLSchema): ApolloServer {
    return new ApolloServer({
        // 생성된 스키마와 그에 연결되어있는 리졸버를 통해 GraphQL 서버를 구성
        schema,
        plugins: [ApolloServerPluginLandingPageLocalDefault()],
        context: async ({ req, res }): Promise<IContext> => {
            const sub = req.headers['x-auth-request-user'] as string | undefined;
            const email = req.headers['x-auth-request-email'] as string | undefined;

            const verifiedUser = await resolveVerifiedUser({ sub, email });

            return {
                req,
                res,
                verifiedUser,
                redis,
                loaders: createLoaders(),
            };
        },
    });
}
