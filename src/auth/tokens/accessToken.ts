import { AuthenticationError } from 'apollo-server-core';
import jwt, { TokenExpiredError } from 'jsonwebtoken';

import { JwtVerifiedUser } from 'apollo/IContext';
import { User } from 'entities/User';

export function createAccessToken(user: User): string {
    const userData: JwtVerifiedUser = { userId: user.id };
    const accessToken = jwt.sign(userData, process.env.JWT_SECRET_KEY, { expiresIn: '10m' });

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
            throw new AuthenticationError('access token expired');
        }
    } else {
        throw new AuthenticationError('unauthenticated');
    }
}
