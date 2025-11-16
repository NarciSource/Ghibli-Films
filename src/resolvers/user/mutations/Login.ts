import argon2 from 'argon2';
import { Arg, Ctx, Mutation, Resolver } from 'type-graphql';

import type IContext from '@/apollo/IContext';
import { createAccessToken, createRefreshToken } from '@/auth/tokens';
import { setAccessTokenHeader, setRefreshTokenHeader } from '@/auth/transport';
import { User } from '@/entities/User';
// biome-ignore lint/style/useImportType: <GraphQL schema generation requires runtime class import>
import { LoginInput, LoginResponse } from '../type';

@Resolver(User)
export default class LoginMutationResolver {
    @Mutation(() => LoginResponse)
    async login(
        @Arg('loginInput')
        { emailOrUsername, password }: LoginInput,
        @Ctx()
        { res, redis }: IContext,
    ): Promise<typeof LoginResponse> {
        // 유저 확인
        const user = await User.findOne({
            where: [{ email: emailOrUsername }, { username: emailOrUsername }],
        });
        const isValid = user && (await argon2.verify(user?.password, password));

        let response: typeof LoginResponse;
        if (isValid) {
            // JWT 토큰 발급
            const accessToken = createAccessToken(user);
            const refreshToken = createRefreshToken(user);

            // 리프레시 토큰 레디스 적재
            await redis.set(String(user.id), refreshToken);
            // 쿠키로 엑세스 토큰 및 리프레시 토큰 전송
            setAccessTokenHeader(res, accessToken);
            setRefreshTokenHeader(res, refreshToken);

            response = user;
        } else if (user) {
            response = { field: 'password', message: '비밀번호가 틀렸습니다.' };
        } else {
            response = { field: 'emailOrUsername', message: '해당하는 유저가 없습니다.' };
        }
        return response;
    }
}
