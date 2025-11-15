import { Request } from 'express';
import { MiddlewareFn } from 'type-graphql';

import { JwtVerifiedUser } from 'apollo/IContext';
import { verifyAccessToken } from 'auth/tokens';
import { parseBearerToken } from 'utils/parseBearerToken';

export const isAuthenticated: MiddlewareFn<{ verifiedUser: JwtVerifiedUser; req: Request }> = (
    { context },
    next,
) => {
    verifyAccessToken(parseBearerToken(context.req.headers));

    return next();
};
