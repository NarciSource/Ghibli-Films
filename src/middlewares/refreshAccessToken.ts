import type IContext from '@/apollo/IContext';
import { createAccessToken } from '@/auth/tokens/accessToken';
import { createRefreshToken, verifyRefreshToken } from '@/auth/tokens/refreshToken';
import { setAccessTokenHeader, setRefreshTokenHeader } from '@/auth/transport';
import { User } from '@/entities/User';

export async function refreshAccessToken(context: IContext) {
    const { req, res, redis } = context;

    const refreshToken = req.cookies.refreshToken;

    const { userId } = await verifyRefreshToken(refreshToken, redis);

    // 데이터베이스 검사
    const user = await User.findOne({ where: { id: Number(userId) } });
    if (!user) return;

    // 토큰 재발행
    const newAccessToken = createAccessToken(user);
    const newRefreshToken = createRefreshToken(user);

    // 레디스 갱신
    await redis.set(String(user.id), newRefreshToken);
    // 응답 헤더 갱신
    setAccessTokenHeader(res, newAccessToken);
    setRefreshTokenHeader(res, newRefreshToken);
    // 인증 사용자 갱신
    context.verifiedUser = { userId };
}
