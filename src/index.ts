import http from 'node:http';
import dotenv from 'dotenv';
import 'reflect-metadata';

dotenv.config();

import { createDB } from '@/db/db-client';
import registerGraphQLMiddlewares from './apollo/registerMiddlewares';
import setupApolloServer from './apollo/setupApollo';
import createExpressApp from './express/createExpressApp';

async function bootstrap() {
    // DB 설정
    await createDB();

    // Express 설정
    const app = createExpressApp();

    // HTTP 서버 생성
    const httpServer = http.createServer(app);

    // GraphQL 미들웨어 추가
    registerGraphQLMiddlewares(app);

    // Apollo 서버 설정
    await setupApolloServer(app, httpServer);

    // HTTP 서버 시작
    startHttpServer(httpServer);
}

function startHttpServer(httpServer: http.Server) {
    // HTTP 서버 리스닝
    const PORT = process.env.PORT || 4000;

    httpServer.listen(PORT, () => {
        if (process.env.NODE_ENV !== 'production') {
            console.log(`
                server started on => http://localhost:${PORT}
                graphql playground => http://localhost:${PORT}/graphql
                graphql schema => http://localhost:${PORT}/voyager
            `);
        } else {
            console.log(`Production server Started...`);
        }
    });
}

bootstrap().catch((err) => {
    console.error('Server bootstrap failed', err);
    process.exit(1);
});
