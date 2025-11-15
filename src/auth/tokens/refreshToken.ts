import jwt, { TokenExpiredError } from 'jsonwebtoken';
import type Redis from 'ioredis';
import type { StringValue } from 'ms';

import { AuthenticationError } from 'apollo-server-core';
import type { JwtVerifiedUser } from 'apollo/IContext';
import type { User } from 'entities/User';

export const createRefreshToken = (user: User): string => {
    const userData: JwtVerifiedUser = { userId: user.id };
    const refreshToken = jwt.sign(userData, process.env.JWT_REFRESH_SECRET_KEY, {
        expiresIn: process.env.JWT_REFRESH_EXPIRES_IN as StringValue ?? '14d',
    });

    return refreshToken;
};

export async function verifyRefreshToken(refreshToken: string, redis: Redis): Promise<JwtVerifiedUser> {
    if (refreshToken) {
        try {
            const { userId } = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET_KEY) as JwtVerifiedUser;

            const storedRefreshToken = await redis.get(String(userId));

            if (storedRefreshToken === refreshToken) {
                return { userId };
            }
            else {
                throw new AuthenticationError('not matching');
            }
        } catch (error) {
            if (error instanceof TokenExpiredError) {
                console.error('refresh token expired at', error.expiredAt);
            } else {
                console.error('JWT verification failed', error);
            }
            throw new AuthenticationError('refresh token expired', { code: 'EXPIRED_TOKEN' });
        }
    } else {
        throw new AuthenticationError('unauthenticated');
    }
}
