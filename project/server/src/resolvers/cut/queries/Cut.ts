import { Arg, Int, Query, Resolver } from 'type-graphql';
import { Cut } from 'entities/Cut';
import { Film } from 'entities/Film';

@Resolver(Cut)
export default class CutQueryResolver {
    @Query(() => [Cut], { description: '장면 목록을 조회합니다.' })
    async cuts(
        @Arg('filmId', () => Int)
        filmId: Film['id'],
    ): Promise<Cut[]> {
        return await Cut.find({ where: { filmId } });
    }

    @Query(() => Cut, { nullable: true, description: '특정 장면을 조회합니다.' })
    async cut(
        @Arg('cutId', () => Int)
        id: number,
    ): Promise<Cut> {
        return await Cut.findOne({ where: { id } });
    }
}
