import { Arg, Int, Query, Resolver } from 'type-graphql';

import { Film } from '@/entities/Film';

@Resolver(Film) // 인자: 오브젝트타입
export default class FilmQueryResolver {
    // 영화 상세
    @Query(() => Film, { nullable: true, description: '특정 영화를 상세히 조회합니다.' })
    async film(
        @Arg('filmId', () => Int)
        id: number,
    ): Promise<Film> {
        return Film.findOne({ where: { id } });
    }
}
