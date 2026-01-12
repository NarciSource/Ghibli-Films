import type http from 'node:http';
import type express from 'express';
import type { GraphQLSchema } from 'graphql';

import anonymousResolvers from '@/resolvers/anonymous';
import authenticatedResolvers from '@/resolvers/authenticated';
import createApolloServer from './createApolloServer';
import createSchema from './createSchema';
import createSubscriptionServer from './createSubscriptionServer';

export default async function setupApolloServer(app: express.Express, httpServer: http.Server) {
    // GraphQL 스키마 생성
    const anonymousSchema = await createSchema(anonymousResolvers);
    const authenticatedSchema = await createSchema(authenticatedResolvers);

    // WebSocket 기반 Subscription 서버 생성
    createSubscriptionServer(authenticatedSchema, httpServer);

    // 엔드포인트 두 개에 각각 Apollo 서버 마운트
    await mountApolloServer(app, {
        schema: anonymousSchema,
        path: '/graphql/anonymous',
        isAnonymous: true,
    });

    await mountApolloServer(app, {
        schema: authenticatedSchema,
        path: '/graphql',
        isAnonymous: false,
    });
}

interface MountApolloOptions {
    schema: GraphQLSchema;
    path: string;
    isAnonymous: boolean;
}

export async function mountApolloServer(
    app: express.Express,
    { schema, path, isAnonymous }: MountApolloOptions,
) {
    // Apollo 서버 생성
    const apolloServer = createApolloServer(schema, isAnonymous);

    // 서버 시작
    await apolloServer.start();

    // 미들웨어 적용
    apolloServer.applyMiddleware({
        app,
        path,
        cors: {
            origin: [process.env.DOMAIN, 'https://studio.apollographql.com'],
            credentials: true,
        },
    });
}
