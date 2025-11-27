import { DataSource } from 'typeorm';

import { Cut } from '@/entities/Cut';
import { CutReview } from '@/entities/CutReview';
import { CutVote } from '@/entities/CutVote';
import { Director } from '@/entities/Director';
import { Film } from '@/entities/Film';
import { Notification } from '@/entities/Notification';
import { User } from '@/entities/User';

export const createDB = async (): Promise<DataSource> => {
    for (let i = 0; i < 10; i++) {
        try {
            const dataSource = new DataSource({
                type: 'mysql',
                host: process.env.MYSQL_HOST,
                port: Number(process.env.MYSQL_PORT),
                database: process.env.MYSQL_DATABASE,
                username: process.env.MYSQL_USERNAME,
                password: process.env.MYSQL_PASSWORD,
                logging: process.env.NODE_ENV !== 'production',
                synchronize: false,
                entities: [
                    Director,
                    Film,
                    Cut,
                    User,
                    CutVote,
                    CutReview,
                    Notification,
                ],
            });

            await dataSource.initialize(); // ← 핵심
            return dataSource;

        } catch {
            console.log(`DB not ready (attempt ${i + 1}/10)`);

            await new Promise((r) => setTimeout(r, 3000));
        }
    }

    throw new Error('DB connection failed');
};