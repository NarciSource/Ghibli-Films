import { Arg, Int, Query, Resolver } from 'type-graphql';

import { Cut } from '@/entities/Cut';
import type { Film } from '@/entities/Film';

@Resolver(Cut)
export default class CutsQueryResolver {
    @Query(() => [Cut], { description: '장면 목록을 조회합니다.' })
    async cuts(
        @Arg('filmId', () => Int)
        filmId: Film['id'],
    ): Promise<Cut[]> {
        return Cut.find({ where: { filmId } });
    }
}
