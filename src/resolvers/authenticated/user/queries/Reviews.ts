import { Ctx, Query, Resolver, UseMiddleware } from 'type-graphql';

import type IContext from '@/apollo/context/IContext';
import { User } from '@/entities/User';
import { isAuthenticated } from '@/middlewares/isAuthenticated';

@Resolver(User)
export default class ReviewsQueryResolver {
    @UseMiddleware(isAuthenticated)
    @Query(() => User, { description: '현재 접속자의 리뷰 목록을 조회합니다' })
    async myReviews(
        @Ctx()
        { verifiedUser: { id } }: IContext,
    ): Promise<User | undefined> {
        const result = await User.findOne({
            where: { id },
            relations: ['cutReviews', 'cutReviews.cut', 'cutReviews.cut.film'],
        });

        return result;
    }
}
