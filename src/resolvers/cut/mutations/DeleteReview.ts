import { Mutation, Arg, Resolver, Int, Ctx } from 'type-graphql';
import IContext from '../../../apollo/IContext';
import { CutReview } from '../../../entities/CutReview';

@Resolver(CutReview)
export default class DeleteReviewMutationResolver {
    @Mutation(() => Boolean)
    async deleteReview(
        @Arg('id', () => Int)
        id: number,
        @Ctx()
        { verifiedUser }: IContext,
    ): Promise<boolean> {
        const result = await CutReview.delete({ id, user: { id: verifiedUser.userId } });

        if (result.affected && result.affected > 0) {
            return true;
        }
        return false;
    }
}
