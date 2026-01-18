import { Arg, Int, Query, Resolver } from 'type-graphql';

import { Cut } from '@/entities/Cut';

@Resolver(Cut)
export default class CutQueryResolver {
    @Query(() => Cut, { nullable: true, description: '특정 장면을 조회합니다.' })
    async cut(
        @Arg('cutId', () => Int)
        id: number,
    ): Promise<Cut> {
        return Cut.findOne({ where: { id } });
    }
}
