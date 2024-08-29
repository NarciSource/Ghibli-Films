import { useServer } from "graphql-ws/use/ws";
import { WebSocketServer } from "ws";
import { GraphQLSchema, execute, subscribe } from "graphql";
import http from "http";

export default async function createSubscriptionServer(schema: GraphQLSchema, server: http.Server) {
    const wsServer = new WebSocketServer({
        server, // 동일한 http.Server에 붙이기
        path: "/graphql", // ApolloServer의 path와 동일하게 맞추기
    });

    // graphql-ws 서버 생성
    return useServer(
        {
            schema,
            execute,
            subscribe,
            onConnect: async () => {
                console.log("Client connected for subscriptions");
            },
            onDisconnect: async () => {
                console.log("Client disconnected from subscriptions");
            },
        },
        wsServer
    );
}
