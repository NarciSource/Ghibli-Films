import { Ctx, Query, Resolver, UseMiddleware } from 'type-graphql';

import type IContext from '@/apollo/IContext';
import { User } from '@/entities/User';
import { isAuthenticated } from '@/middlewares/isAuthenticated';

@Resolver(User)
export default class MeQueryResolver {
    @UseMiddleware(isAuthenticated)
    @Query(() => User, { nullable: true, description: '현재 접속자의 정보를 조회합니다.' })
    async me(
        @Ctx()
        context: IContext,
    ): Promise<User | undefined> {
        return User.findOne({ where: { id: context.verifiedUser.userId } });
    }
}
