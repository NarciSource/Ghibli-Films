import type express from 'express';
import { graphqlUploadExpress } from 'graphql-upload';
import { express as voyagerMiddleware } from 'graphql-voyager/middleware';

export default function registerGraphQLMiddlewares(app: express.Express) {
    app.use(
        graphqlUploadExpress({
            maxFileSize: 1024 * 1000 * 5,
            maxFiles: 1,
        }),
    );

    app.use('/voyager', voyagerMiddleware({ endpointUrl: '/graphql' }));
}
