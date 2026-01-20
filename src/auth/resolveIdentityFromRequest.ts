import jwt from 'jsonwebtoken';

import { parseBearerToken } from '@/utils/parseBearerToken';
import type { IdentityInput } from './IdentityInput';
import type { IdToken } from './IdToken';

export function resolveIdentityFromRequest(req: {
    headers?: Record<string, any>;
}): IdentityInput | undefined {
    const authHeader = req.headers?.authorization;

    const token = parseBearerToken({ authorization: authHeader });
    const decoded = jwt.decode(token) as IdToken | null;

    if (!decoded?.sub) return undefined;

    return {
        sub: decoded.sub,
        username: decoded.preferred_username,
        email: decoded.email,
    };
}
