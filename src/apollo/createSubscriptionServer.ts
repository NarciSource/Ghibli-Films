import http from 'http';
import { GraphQLSchema, execute, subscribe } from 'graphql';
import { useServer } from 'graphql-ws/use/ws';
import { WebSocketServer } from 'ws';

import { verifyAccessToken } from 'auth/tokens';
import { parseBearerToken } from 'utils/parseBearerToken';

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
                // connectionParams에서 인증 헤더 추출
                const verifiedUser = verifyAccessToken(parseBearerToken(ctx.connectionParams));

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
