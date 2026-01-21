export interface IdToken {
    exp: number;
    iat: number;
    iss: string;
    aud: string | string[];
    sub: string;

    typ?: 'ID';

    email?: string;
    preferred_username?: string;
    roles?: string[];
}
