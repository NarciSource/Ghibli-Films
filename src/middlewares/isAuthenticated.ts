import { MiddlewareFn } from 'type-graphql';

import IContext, { JwtVerifiedUser } from 'apollo/IContext';
import { verifyAccessToken } from 'auth/tokens';

export const isAuthenticated: MiddlewareFn<{
    verifiedUser: JwtVerifiedUser;
    req: IContext['req'];
}> = ({ context: { req } }, next) => {
    verifyAccessToken(req.cookies['accessToken']);

    return next();
};
