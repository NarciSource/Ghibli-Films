import jwt from 'jsonwebtoken';

import { JwtVerifiedUser } from 'apollo/IContext';
import { User } from 'entities/User';

export const createRefreshToken = (user: User): string => {
    const userData: JwtVerifiedUser = { userId: user.id };
    const refreshToken = jwt.sign(userData, process.env.JWT_REFRESH_SECRET_KEY, {
        expiresIn: '14d',
    });

    return refreshToken;
};
