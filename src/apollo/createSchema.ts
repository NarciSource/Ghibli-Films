import { GraphQLSchema } from 'graphql';
import { buildSchema } from 'type-graphql';
import resolvers from '../resolvers';
import { pubSub } from './pubSub';

export default async function createSchema(): Promise<GraphQLSchema> {
    return buildSchema({
        // 리졸버를 토대로 GraphQL 스키마를 자동으로 생성
        resolvers,
        // subscription을 위한 PubSub 인스턴스 주입
        pubSub,
    });
}
