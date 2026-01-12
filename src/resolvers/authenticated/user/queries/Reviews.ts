import { Ctx, Query, Resolver, UseMiddleware } from 'type-graphql';

import type IContext from '@/apollo/IContext';
import { User } from '@/entities/User';
import { isAuthenticated } from '@/middlewares/isAuthenticated';

@Resolver(User)
export default class ReviewsQueryResolver {
    @UseMiddleware(isAuthenticated)
    @Query(() => User, { description: '현재 접속자의 리뷰 목록을 조회합니다' })
    async myReviews(
        @Ctx()
        context: IContext,
    ): Promise<User | undefined> {
        const result = await User.findOne({
            where: { id: context.verifiedUser.userId },
            relations: ['cutReviews', 'cutReviews.cut', 'cutReviews.cut.film'],
        });

        return result;
    }
}
