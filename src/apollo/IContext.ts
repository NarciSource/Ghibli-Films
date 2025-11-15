import { Request, Response } from 'express';
import createLoaders from 'dataloaders/createLoader';
import { User } from 'entities/User';
import redis from 'redis/redis-client';

export interface JwtVerifiedUser {
    userId: User['id'];
}

export default interface IContext {
    req: Request;
    res: Response;
    verifiedUser: JwtVerifiedUser;
    redis: typeof redis;
    loaders: ReturnType<typeof createLoaders>;
}
