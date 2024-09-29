import http from 'http';
import 'reflect-metadata';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import express from 'express';
import { graphqlUploadExpress } from 'graphql-upload';
import { express as voyagerMiddleware } from 'graphql-voyager/middleware';

dotenv.config();

import createApolloServer from 'apollo/createApolloServer';
import createSchema from 'apollo/createSchema';
import createSubscriptionServer from 'apollo/createSubscriptionServer';
import { createDB } from 'db/db-client';

async function main() {
    // DB 설정
    await createDB();

    // Express 설정
    const app = express();

    app.use((req, res, next) => {
        res.setHeader('Referrer-Policy', 'no-referrer');
        next();
    }, cookieParser()); // cookie-parser 미들웨어 추가

    app.use(express.static('public')); // 'public' 폴더를 정적 파일 제공 폴더로 설정
    app.use(graphqlUploadExpress({ maxFileSize: 1024 * 1000 * 5, maxFiles: 1 })); // graphql-upload 미들웨어 추가

    app.use('/voyager', voyagerMiddleware({ endpointUrl: '/graphql' })); // voyager 스키마 다이어그램

    app.get('/', (req, res) => {
        res.status(200).send('Ok'); // for healthcheck
    });

    // Apollo 설정
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    const httpServer = http.createServer(app); // HTTP 서버 생성

    const schema = await createSchema(); // GraphQL 스키마 생성

    createSubscriptionServer(schema, httpServer); // WebSocket 기반 Subscription 서버 생성

    const apolloServer = createApolloServer(schema); // HTTP 기반 서버 생성
    await apolloServer.start();

    apolloServer.applyMiddleware({
        app,
        cors: {
            origin: [process.env.DOMAIN, 'https://studio.apollographql.com'],
            credentials: true,
        },
    }); // CORS 설정

    // HTTP 서버 리스닝
    httpServer.listen(process.env.PORT || 4000, () => {
        if (process.env.NODE_ENV !== 'production') {
            console.log(`
                server started on => http://localhost:4000
                graphql playground => http://localhost:4000/graphql
                graphql schema => http://localhost:4000/voyager
            `);
        } else {
            console.log(`Production server Started...`);
        }
    });
}

main().catch((err) => console.error(err));
