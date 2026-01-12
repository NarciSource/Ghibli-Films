import argon2 from 'argon2';
import { Arg, Mutation, Resolver } from 'type-graphql';

import { User } from '@/entities/User';
// biome-ignore lint/style/useImportType: <GraphQL schema generation requires runtime class import>
import { SignUpInput } from '../type';

@Resolver(User)
export default class SignupMutationResolver {
    @Mutation(() => User)
    async signUp(
        @Arg('signUpInput')
        signUpInput: SignUpInput,
    ): Promise<User> {
        const { email, password, username } = signUpInput;
        const hashedPassword = await argon2.hash(password);

        const newUser = User.create({
            email,
            password: hashedPassword,
            username,
        });

        await newUser.save();
        return newUser;
    }
}
