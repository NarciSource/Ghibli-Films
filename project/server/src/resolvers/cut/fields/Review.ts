import { Ctx, FieldResolver, Resolver, Root } from 'type-graphql';

import type IContext from '@/apollo/IContext';
import { CutReview } from '@/entities/CutReview';
import { User } from '@/entities/User';

@Resolver(CutReview)
export default class ReviewFieldResolver {
    @FieldResolver(() => User, { description: '유저' })
    async user(@Root() cutReview: CutReview): Promise<User> {
        return await User.findOne({ where: { id: cutReview.userId } });
    }

    @FieldResolver(() => Boolean, { description: '유저가 작성한 리뷰인지 여부' })
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
