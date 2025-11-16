import type { ApolloClient, NormalizedCacheObject } from "@apollo/client";

export default function dehydrate(client: ApolloClient<NormalizedCacheObject>) {
    return JSON.parse(JSON.stringify(client.cache.extract()));
}
