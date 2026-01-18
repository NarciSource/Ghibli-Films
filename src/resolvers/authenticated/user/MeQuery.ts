import { Ctx, Query, Resolver, UseMiddleware } from 'type-graphql';

import type IContext from '@/apollo/context/IContext';
import { User } from '@/entities/User';
import { isAuthenticated } from '@/middlewares/isAuthenticated';

@Resolver(User)
export default class MeQueryResolver {
    @Query(() => User, { nullable: true, description: '현재 접속자의 정보를 조회합니다.' })
    @UseMiddleware(isAuthenticated)
    async me(
        @Ctx()
        { verifiedUser: { id } }: IContext,
    ): Promise<User | undefined> {
        return User.findOne({ where: { id } });
    }
}
