import http from 'http';
import 'reflect-metadata';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import express from 'express';
import { graphqlUploadExpress } from 'graphql-upload';

dotenv.config();

import createApolloServer from 'apollo/createApolloServer';
import createSchema from 'apollo/createSchema';
import createSubscriptionServer from 'apollo/createSubscriptionServer';
import { createDB } from 'db/db-client';

async function main() {
    await createDB();
    const app = express();
    app.use((req, res, next) => {
        res.setHeader('Referrer-Policy', 'no-referrer');
        next();
    }, cookieParser()); // cookie-parser 미들웨어 추가

    app.use(express.static('public')); // 'public' 폴더를 정적 파일 제공 폴더로 설정
    app.use(graphqlUploadExpress({ maxFileSize: 1024 * 1000 * 5, maxFiles: 1 })); // graphql-upload 미들웨어 추가

    app.get('/', (req, res) => {
        res.status(200).send(); // for healthcheck
    });

    const httpServer = http.createServer(app);

    const schema = await createSchema();
    createSubscriptionServer(schema, httpServer);
    const apolloServer = createApolloServer(schema);
    await apolloServer.start();
    apolloServer.applyMiddleware({
        app,
        cors: {
            origin: [process.env.DOMAIN, 'https://studio.apollographql.com'],
            credentials: true,
        },
    });

    httpServer.listen(process.env.PORT || 4000, () => {
        if (process.env.NODE_ENV !== 'production') {
            console.log(`
                server started on => http://localhost:4000
                graphql playground => http://localhost:4000/graphql`);
        } else {
            console.log(`Production server Started...`);
        }
    });
}

main().catch((err) => console.error(err));
