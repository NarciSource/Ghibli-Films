import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-express';
import { GraphQLSchema } from 'graphql';

import { verifyAccessToken } from 'auth/tokens';
import createLoaders from 'dataloaders/createLoader';
import redis from 'redis/redis-client';
import { parseBearerToken } from 'utils/parseBearerToken';
import IContext, { JwtVerifiedUser } from './IContext';

export default function createApolloServer(schema: GraphQLSchema): ApolloServer {
    return new ApolloServer({
        // 생성된 스키마와 그에 연결되어있는 리졸버를 통해 GraphQL 서버를 구성
        schema,
        plugins: [ApolloServerPluginLandingPageLocalDefault()],
        context: ({ req, res }: IContext) => {
            // context에 인증값 추가
            let verified: JwtVerifiedUser;
            try {
                verified = verifyAccessToken(parseBearerToken(req.headers));
            } catch {
                verified = null;
            }
            return { req, res, verifiedUser: verified, redis, loaders: createLoaders() };
        },
    });
}
