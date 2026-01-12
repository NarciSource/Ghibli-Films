import type express from 'express';
import type { GraphQLSchema } from 'graphql';

import createApolloServer from './createApolloServer';

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
