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
        // 쿼리 빌더
        const qb = Film.createQueryBuilder('film')
            .orderBy('film.id', 'ASC')
            .take(limit + 1);

        // 검색어 있을 시 elasticsearch 역색인으로 검색
        if (search) {
            const ids = await this.searchFilmIdsES(search);

            if (ids.length > 0) {
                qb.where('film.id IN (:...ids)', { ids });
            } else {
                qb.where('1 = 0');
            }
        }

        // 커서 기반 페이지네이션
        if (cursor) {
            qb.andWhere('film.id >= :cursor', { cursor });
        }

        // 데이터 추출
        const films = await qb.getMany();

        // 커서 업데이트
        let nextCursor: number = null;
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

    // 검색어 기반 영화 ID조회
    async searchFilmIdsES(search: string): Promise<number[]> {
        const esClient = getEsClient();

        const query = {
            bool: {
                should: [
                    {
                        multi_match: {
                            query: search,
                            fields: [
                                'title',
                                'subtitle',
                                'description',
                                'genre',
                                'releaseDate.text',
                            ],
                        },
                    },
                    {
                        nested: {
                            path: 'director',
                            query: {
                                match: { 'director.name': search },
                            },
                        },
                    },
                ],
            },
        };

        const result = await esClient.search({
            index: 'film',
            _source: false,
            query,
        });
        const ids = result.hits.hits.map((hit) => Number(hit._id));

        return ids;
    }
}
