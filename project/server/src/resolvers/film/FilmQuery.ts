import { Resolver, Query, Arg, Int } from 'type-graphql';
import { Film } from 'entities/Film';
import { PaginatedFilms } from 'entities/PaginatedFilm';

@Resolver(Film) // 인자: 오브젝트타입
export default class FilmQueryResolver {
    // 영화 리스트
    @Query(() => PaginatedFilms)
    async films(
        @Arg('limit', () => Int, { nullable: true, defaultValue: 6 })
        limit?: number,
        @Arg('cursor', () => Int, { nullable: true, defaultValue: 1 })
        cursor?: Film['id'],
    ): Promise<PaginatedFilms> {
        const qb = Film.createQueryBuilder('film')
            .orderBy('film.id', 'ASC')
            .take(limit + 1);

        // 커서 기반 페이지네이션
        if (cursor) {
            qb.where('film.id >= :cursor', { cursor });
        }

        const films = await qb.getMany();

        let nextCursor: number | null = null;
        if (films.length > limit) {
            nextCursor = films.pop().id + 1;
        }

        return {
            films,
            cursor: nextCursor,
        };
    }

    // 영화 상세
    @Query(() => Film, { nullable: true })
    async film(
        @Arg('filmId', () => Int)
        id: number,
    ): Promise<Film> {
        return await Film.findOne({ where: { id } });
    }
}
