import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { GraphQLSchema } from 'graphql';
import { verifyAccessTokenFromReqHeaders } from '../utils/jwt-auth';
import redis from '../redis/redis-client';
import IContext from './IContext';
import createLoaders from '../dataloader/createLoader';

export default async function createApolloServer(schema: GraphQLSchema): Promise<ApolloServer> {
    return new ApolloServer({
        // 생성된 스키마와 그에 연결되어있는 리졸버를 통해 GraphQL 서버를 구성
        schema,
        plugins: [ApolloServerPluginLandingPageLocalDefault()],
        context: ({ req, res }: IContext) => {
            // context에 인증값 추가
            const verified = verifyAccessTokenFromReqHeaders(req.headers);
            return { req, res, verifiedUser: verified, redis, loaders: createLoaders() };
        },
    });
}
