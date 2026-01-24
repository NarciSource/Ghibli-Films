import { Ctx, FieldResolver, Resolver, Root } from 'type-graphql';

import type IContext from '@/apollo/context/IContext';
import { CutReview } from '@/entities/CutReview';
import { User } from '@/entities/User';

@Resolver(CutReview)
export default class CutReviewFieldResolver {
    @FieldResolver(() => User, { description: '유저' })
    async user(@Root() { userId: id }: CutReview): Promise<User> {
        return User.findOne({ where: { id } });
    }

    @FieldResolver(() => Boolean, { description: '유저가 작성한 리뷰인지 여부' })
    isMine(
        @Root()
        cutReview: CutReview,
        @Ctx()
        { verifiedUser }: IContext,
    ): boolean {
        return cutReview.userId === verifiedUser?.id;
    }
}
