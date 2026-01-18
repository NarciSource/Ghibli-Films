import { User } from '@/entities/User';

export interface ResolveUserInput {
    sub?: string;
    email?: string;
}

export async function resolveVerifiedUser({ sub, email }: ResolveUserInput) {
    if (!sub) {
        return undefined;
    }

    let user = await User.findOne({ where: { sub } });

    if (!user) {
        // Just-in-Time Provisioning
        user = User.create({
            sub,
            email,
            isAdmin: false,
            username: email ? email.split('@')[0] : 'Unnamed',
        });
        await user.save();
    }

    return user;
}
