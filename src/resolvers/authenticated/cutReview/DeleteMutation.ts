import { Arg, Ctx, Int, Mutation, Resolver } from 'type-graphql';

import type IContext from '@/apollo/context/IContext';
import { CutReview } from '@/entities/CutReview';

@Resolver(CutReview)
export default class DeleteCutReviewMutationResolver {
    @Mutation(() => Boolean)
    async deleteCutReview(
        @Arg('id', () => Int)
        id: number,
        @Ctx()
        { verifiedUser: { id: userId } }: IContext,
    ): Promise<boolean> {
        const result = await CutReview.delete({ id, userId });

        if (result.affected && result.affected > 0) {
            return true;
        }
        return false;
    }
}
