import type http from 'node:http';
import { parse } from 'cookie';
import { execute, type GraphQLSchema, subscribe } from 'graphql';
import { useServer } from 'graphql-ws/use/ws';
import { WebSocketServer } from 'ws';

import { verifyAccessToken } from '@/auth/tokens';

export default function createSubscriptionServer(schema: GraphQLSchema, server: http.Server) {
    const wsServer = new WebSocketServer({
        server, // 동일한 http.Server에 붙이기
        path: '/graphql', // ApolloServer의 path와 동일하게 맞추기
    });

    // graphql-ws 서버 생성
    return useServer(
        {
            schema,
            execute,
            subscribe,
            context: (ctx) => {
                const cookies = getCookieFromRawHeaders(ctx.extra.request.rawHeaders);

                const accessToken = cookies.accessToken;

                const verifiedUser = verifyAccessToken(accessToken);

                return { verifiedUser };
            },
            onConnect: () => {
                console.log('Client connected for subscriptions');
            },
            onDisconnect: () => {
                console.log('Client disconnected from subscriptions');
            },
        },
        wsServer,
    );
}

function getCookieFromRawHeaders(rawHeaders: string[]) {
    const cookieIndex = rawHeaders.findIndex((h) => h.toLowerCase() === 'cookie');
    if (cookieIndex === -1) return {};

    const cookieHeader = rawHeaders[cookieIndex + 1] || '';
    return parse(cookieHeader);
}
