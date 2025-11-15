import jwt, { JwtPayload } from 'jsonwebtoken';

import IContext, { JwtVerifiedUser } from "apollo/IContext";
import { setAccessTokenHeader, setRefreshTokenHeader } from "auth/transport";
import { User } from "entities/User";
import { createAccessToken } from "./accessToken";
import { createRefreshToken } from "./refreshToken";

export async function refreshAccessToken(context: IContext) {
    const { req, res, redis } = context;

    const refreshToken = req.cookies['refreshToken'];
    if (!refreshToken) return null;

    let tokenData: JwtPayload = null;
    try {
        tokenData = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET_KEY) as JwtPayload;
    } catch (e) {
        console.error(e);
        return null;
    }
    const { userId } = tokenData as JwtVerifiedUser;

    const storedRefreshToken = await redis.get(String(userId));
    const user = await User.findOne({ where: { id: Number(userId) } });

    if (storedRefreshToken === refreshToken && user) {
        const newAccessToken = createAccessToken(user);
        const newRefreshToken = createRefreshToken(user);

        // 레디스 갱신
        await redis.set(String(user.id), newRefreshToken);
        // 응답 헤더 갱신
        setAccessTokenHeader(res, newAccessToken);
        setRefreshTokenHeader(res, newRefreshToken);
        // 인증 사용자 갱신
        context.verifiedUser = { userId };

        return true;
    }
    return null;
}
