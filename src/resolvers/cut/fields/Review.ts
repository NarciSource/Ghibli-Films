import { Ctx, FieldResolver, Resolver, Root } from 'type-graphql';
import IContext from '../../../apollo/IContext';
import { CutReview } from '../../../entities/CutReview';
import { User } from '../../../entities/User';

@Resolver(CutReview)
export default class ReviewFieldResolver {
    @FieldResolver(() => User)
    async user(@Root() cutReview: CutReview): Promise<User> {
        return await User.findOne({ where: { id: cutReview.userId } });
    }

    @FieldResolver(() => Boolean)
    isMine(
        @Root()
        cutReview: CutReview,
        @Ctx()
        { verifiedUser }: IContext,
    ): boolean {
        if (!verifiedUser) {
            return false;
        }
        return cutReview.userId === verifiedUser?.userId;
    }
}
