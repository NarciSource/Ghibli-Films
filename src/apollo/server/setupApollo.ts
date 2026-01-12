import type http from 'node:http';
import type express from 'express';

import anonymousResolvers from '@/resolvers/anonymous';
import authenticatedResolvers from '@/resolvers/authenticated';
import createSchema from '../schema/createSchema';
import createSubscriptionServer from '../subscription/createSubscriptionServer';
import { mountApolloServer } from './mountApolloServer';

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
