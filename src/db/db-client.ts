import { DataSource } from 'typeorm';
import { CutReview } from '../entities/CutReview';
import { CutVote } from '../entities/CutVote';
import { Notification } from '../entities/Notification';
import { User } from '../entities/User';

export const createDB = async (): Promise<DataSource> =>
    new DataSource({
        type: 'mysql',
        host: process.env.MYSQL_HOST,
        port: Number(process.env.MYSQL_PORT),
        database: process.env.MYSQL_DATABASE,
        username: process.env.MYSQL_USERNAME,
        password: process.env.MYSQL_PASSWORD,
        logging: !(process.env.NODE_ENV === 'production'),
        synchronize: true,
        entities: [User, CutVote, CutReview, Notification],
    }).initialize();
