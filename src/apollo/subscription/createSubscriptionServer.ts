import type http from 'node:http';
import { execute, type GraphQLSchema, subscribe } from 'graphql';
import { useServer } from 'graphql-ws/use/ws';
import { WebSocketServer } from 'ws';

import { resolveVerifiedUser } from '@/auth/resolveVerifiedUser';
import type IContext from '../context/IContext';
import type { WsContext } from '../context/WsContext';

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
            context: async ({ extra: { request: req } }: WsContext): Promise<IContext> => {
                const sub = req.headers['x-auth-request-user'] as string | undefined;
                const email = req.headers['x-auth-request-email'] as string | undefined;

                const verifiedUser = await resolveVerifiedUser({ sub, email });

                return {
                    req,
                    verifiedUser,
                };
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
