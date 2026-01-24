import cookieParser from 'cookie-parser';
import express from 'express';

export default function createExpressApp(): express.Express {
    const app = express();

    // cookie-parser 미들웨어 추가
    app.use((_req, res, next) => {
        res.setHeader('Referrer-Policy', 'no-referrer');
        next();
    }, cookieParser());

    // 'uploads' 폴더를 정적 파일 제공 폴더로 설정
    app.use('/uploads', express.static('uploads'));

    // for healthcheck
    app.get('/', (_req, res) => {
        res.status(200).send('Ok');
    });

    return app;
}
