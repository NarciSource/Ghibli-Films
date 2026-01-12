import { Arg, Ctx, Int, Mutation, Resolver, UseMiddleware } from 'type-graphql';

import type IContext from '@/apollo/IContext';
import { CutReview } from '@/entities/CutReview';
import { isAuthenticated } from '@/middlewares/isAuthenticated';

@Resolver(CutReview)
export default class DeleteReviewMutationResolver {
    @Mutation(() => Boolean)
    @UseMiddleware(isAuthenticated)
    async deleteReview(
        @Arg('id', () => Int)
        id: number,
        @Ctx()
        { verifiedUser }: IContext,
    ): Promise<boolean> {
        const result = await CutReview.delete({ id, userId: verifiedUser.userId });

        if (result.affected && result.affected > 0) {
            return true;
        }
        return false;
    }
}
