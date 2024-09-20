import { Field, Int, ObjectType } from 'type-graphql';
import { Film } from './Film';

@ObjectType({ description: '페이지네이션' })
export class PaginatedFilms {
    @Field(() => [Film], { description: '영화 리스트' })
    films: Film[];

    @Field(() => Int, { nullable: true, description: '커서' })
    cursor?: Film['id'] | null;
}
