export function parseBearerToken({ authorization }: { authorization?: string }) {
    return authorization?.replace('Bearer ', '') ?? '';
}
