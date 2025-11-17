import type { Request, Response } from 'express';

import type redis from '@/db/redis-client';
import type createLoaders from '@/dataloaders/createLoader';
import type { User } from '@/entities/User';

export interface JwtVerifiedUser {
    userId: User['id'];
}

export default interface IContext {
    req: Request & {
        cookies: {
            accessToken?: string;
            refreshToken?: string;
        };
    };
    res: Response;
    verifiedUser: JwtVerifiedUser;
    redis: typeof redis;
    loaders: ReturnType<typeof createLoaders>;
}
