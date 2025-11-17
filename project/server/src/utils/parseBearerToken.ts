import { AuthorizationError } from 'type-graphql';

export function parseBearerToken({ authorization }: { authorization?: string }) {
    try {
        return authorization.replace('Bearer ', '');
    } catch {
        throw new AuthorizationError('unauthenticated');
    }
}
