import { MiddlewareFn } from 'type-graphql';

import IContext from 'apollo/IContext';
import { verifyAccessToken } from 'auth/tokens';
import { refreshAccessToken } from 'auth/tokens/refreshAccessToken';

export const isAuthenticated: MiddlewareFn<IContext> = async ({ context }, next) => {
    try {
        verifyAccessToken(context.req.cookies['accessToken']);
    } catch (error) {
        if (error.message === 'access token expired') {
            await refreshAccessToken(context);

            return next();
        }
    }
    return next();
};
