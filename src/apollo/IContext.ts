import { Request, Response } from 'express';
import { JwtVerifiedUser } from '../utils/jwt-auth';
import redis from '../redis/redis-client';
import createLoaders from '../dataloader/createLoader';

export default interface IContext {
    req: Request;
    res: Response;
    verifiedUser: JwtVerifiedUser;
    redis: typeof redis;
    loaders: ReturnType<typeof createLoaders>;
}
