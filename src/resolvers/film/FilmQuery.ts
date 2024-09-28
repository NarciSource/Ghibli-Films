import { Arg, Int, Query, Resolver } from 'type-graphql';
import { getEsClient } from 'db/es-client';
import { Film } from 'entities/Film';
import { PaginatedFilms } from 'entities/PaginatedFilm';

@Resolver(Film) // 인자: 오브젝트타입
export default class FilmQueryResolver {
    // 영화 리스트
    @Query(() => PaginatedFilms, { description: '영화 목록을 페이지네이션하여 조회합니다.' })
    async films(
        @Arg('limit', () => Int, { nullable: true, defaultValue: 6 })
        limit?: number,
        @Arg('cursor', () => Int, { nullable: true, defaultValue: 1 })
        cursor?: Film['id'],
        @Arg('search', () => String, { nullable: true })
        search?: string,
    ): Promise<PaginatedFilms> {
        const esClient = getEsClient();
        let films: Film[] = [];

        if (!search) {
            // rdb
            const qb = Film.createQueryBuilder('film')
                .orderBy('film.id', 'ASC')
                .take(limit + 1);

            // 커서 기반 페이지네이션
            if (cursor) {
                qb.where('film.id >= :cursor', { cursor });
            }

            films = await qb.getMany();
        } else {
            // 검색어 있을 시 elasticsearch 역색인으로 검색
            const result = await esClient.search({
                index: 'film',
                query: {
                    multi_match: {
                        query: search,
                        fields: ['title', 'subtitle', 'description', 'genre', 'releaseDate.text'],
                    },
                },
            });
            const hits = result.hits.hits;

            films = hits.map(({ _source }) => _source as Film);
        }

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
    @Query(() => Film, { nullable: true, description: '특정 영화를 상세히 조회합니다.' })
    async film(
        @Arg('filmId', () => Int)
        id: number,
    ): Promise<Film> {
        return await Film.findOne({ where: { id } });
    }
}
