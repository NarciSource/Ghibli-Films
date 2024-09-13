import http from 'http';
import { GraphQLSchema, execute, subscribe } from 'graphql';
import { useServer } from 'graphql-ws/use/ws';
import { WebSocketServer } from 'ws';
import { verifyAccessToken } from 'utils/jwt-auth';

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
                const authorization = ctx.connectionParams.Authorization as string;
                const token = authorization?.split(' ')?.[1];
                const verifiedUser = token ? verifyAccessToken(token) : null;

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
