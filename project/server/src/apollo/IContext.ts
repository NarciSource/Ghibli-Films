import { Request, Response } from 'express';
import createLoaders from 'dataloaders/createLoader';
import redis from 'redis/redis-client';
import { JwtVerifiedUser } from 'utils/jwt-auth';

export default interface IContext {
    req: Request;
    res: Response;
    verifiedUser: JwtVerifiedUser;
    redis: typeof redis;
    loaders: ReturnType<typeof createLoaders>;
}
