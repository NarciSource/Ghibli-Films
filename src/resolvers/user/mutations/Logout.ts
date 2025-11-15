import { Resolver, Mutation, Ctx } from 'type-graphql';
import IContext from 'apollo/IContext';

import { setAccessTokenHeader, setRefreshTokenHeader } from 'auth/transport';
import { User } from 'entities/User';

@Resolver(User)
export default class LogoutMutationResolver {
    @Mutation(() => Boolean)
    async logout(
        @Ctx()
        { verifiedUser, res, redis }: IContext,
    ): Promise<boolean> {
        setAccessTokenHeader(res, '');
        setRefreshTokenHeader(res, '');

        if (verifiedUser) {
            await redis.del(String(verifiedUser.userId));
        }
        return true;
    }
}
