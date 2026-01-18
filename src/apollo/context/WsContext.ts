import type { Request } from 'express';
import type { Context as GraphqlWsContext } from 'graphql-ws';

export interface WsExtra {
    request: Request;
}

export type WsContext = GraphqlWsContext<any, WsExtra>;
