import type { Request, Response } from 'express';

import type redis from '@/db/redis-client';
import type createLoaders from '@/dataloaders/createLoader';
import type { User } from '@/entities/User';

export default interface IContext {
    req: Request;
    res?: Response;
    verifiedUser?: User;
    redis?: typeof redis;
    loaders?: ReturnType<typeof createLoaders>;
}
