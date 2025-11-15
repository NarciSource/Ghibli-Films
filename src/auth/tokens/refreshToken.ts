import jwt from 'jsonwebtoken';
import type { StringValue } from 'ms';

import type { JwtVerifiedUser } from 'apollo/IContext';
import type { User } from 'entities/User';

export const createRefreshToken = (user: User): string => {
    const userData: JwtVerifiedUser = { userId: user.id };
    const refreshToken = jwt.sign(userData, process.env.JWT_REFRESH_SECRET_KEY, {
        expiresIn: process.env.JWT_REFRESH_EXPIRES_IN as StringValue ?? '14d',
    });

    return refreshToken;
};
