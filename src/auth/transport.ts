import { Response } from 'express';

export function setRefreshTokenHeader(res: Response, refreshToken: string): void {
    res.cookie('refreshToken', refreshToken, {
        httpOnly: true, // 클라이언트 js에서 접근을 막음
        secure: process.env.NODE_ENV === 'production', // https에서만 동작
        sameSite: 'lax',
        // strict: 같은 도메인만 가능
        // lax: 느슨하게, anchor, link 태그 또는 302 리다이렉트로 이동했을 때 가능
        // none: cross-site도 가능
    });
}

export function setAccessTokenHeader(res: Response, accessToken: string) {
    res.cookie('accessToken', accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 1000 * 60 * 10, // 10분
    });
}
