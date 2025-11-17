import { AuthenticationError } from 'apollo-server-core';
import jwt, { TokenExpiredError } from 'jsonwebtoken';
import type { StringValue } from 'ms';

import type { JwtVerifiedUser } from '@/apollo/IContext';
import type { User } from '@/entities/User';

export function createAccessToken(user: User): string {
    const userData: JwtVerifiedUser = { userId: user.id };
    const accessToken = jwt.sign(userData, process.env.JWT_SECRET_KEY, {
        expiresIn: (process.env.JWT_ACCESS_EXPIRES_IN as StringValue) ?? '10m',
    });

    return accessToken;
}

export function verifyAccessToken(accessToken?: string): JwtVerifiedUser {
    if (accessToken) {
        try {
            const verified = jwt.verify(accessToken, process.env.JWT_SECRET_KEY) as JwtVerifiedUser;
            return verified;
        } catch (error) {
            if (error instanceof TokenExpiredError) {
                console.error('access_token expired at', error.expiredAt);
            } else {
                console.error('JWT verification failed', error);
            }
            throw new AuthenticationError('access token expired', { code: 'EXPIRED_TOKEN' });
        }
    } else {
        throw new AuthenticationError('unauthenticated');
    }
}
