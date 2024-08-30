import { createClient } from "graphql-ws";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";

const httpUri = process.env.REACT_APP_API_HOST!;
const wsUri = httpUri.replace(/^http:\/\//, "ws://").replace(/^https:\/\//, "wss://");

const wsLink = new GraphQLWsLink(
    createClient({
        url: `${wsUri}/graphql`,
        // 웹소켓 연결 시 헤더에 토큰 포함
        // 링크 체인은 불가
        connectionParams: () => ({
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        }),
    })
);

export default wsLink;
