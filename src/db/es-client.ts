import { Client } from '@elastic/elasticsearch';

let esClient: Client | null = null;

export const getEsClient = () => {
    const host = process.env.ELASTIC_HOST;
    const port = process.env.ELASTIC_HTTP_PORT;
    const username = process.env.ELASTIC_USERNAME;
    const password = process.env.ELASTIC_PASSWORD;

    if (!esClient) {
        esClient = new Client({
            node: `http://${host}:${port}`,
            auth: { username, password },
        });
    }
    return esClient;
};
