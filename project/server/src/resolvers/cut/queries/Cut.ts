import { Arg, Int, Query, Resolver } from 'type-graphql';
import { Cut } from 'entities/Cut';
import { Film } from 'entities/Film';

@Resolver(Cut)
export default class CutQueryResolver {
    @Query(() => [Cut])
    async cuts(
        @Arg('filmId', () => Int)
        filmId: Film['id'],
    ): Promise<Cut[]> {
        return await Cut.find({ where: { filmId } });
    }

    @Query(() => Cut, { nullable: true })
    async cut(
        @Arg('cutId', () => Int)
        id: number,
    ): Promise<Cut> {
        return await Cut.findOne({ where: { id } });
    }
}
