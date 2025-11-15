import jwt, { JwtPayload } from 'jsonwebtoken';
import { Resolver, Mutation, Ctx } from 'type-graphql';

import IContext from 'apollo/IContext';
import { createAccessToken, createRefreshToken } from 'auth/tokens';
import { setAccessTokenHeader, setRefreshTokenHeader } from 'auth/transport';
import { User } from 'entities/User';

@Resolver(User)
export default class RefreshAccessTokenMutationResolver {
    @Mutation(() => Boolean, { nullable: true })
    async refreshAccessToken(
        @Ctx()
        { req, res, redis }: IContext,
    ): Promise<boolean> {
        const refreshToken = req.cookies['refreshToken'];
        if (!refreshToken) return null;

        let tokenData: JwtPayload = null;
        try {
            tokenData = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET_KEY) as JwtPayload;
        } catch (e) {
            console.error(e);
            return null;
        }
        const { userId } = tokenData as { userId: string };

        const storedRefreshToken = await redis.get(userId);
        const user = await User.findOne({ where: { id: Number(userId) } });

        if (storedRefreshToken === refreshToken && user) {
            const newAccessToken = createAccessToken(user);
            const newRefreshToken = createRefreshToken(user);

            await redis.set(String(user.id), newRefreshToken);

            setAccessTokenHeader(res, newAccessToken);
            setRefreshTokenHeader(res, newRefreshToken);

            return true;
        }
        return null;
    }
}
