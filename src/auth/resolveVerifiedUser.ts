import { User } from '@/entities/User';
import type { IdentityInput } from './IdentityInput';

export async function resolveVerifiedUser({ sub, username, email }: IdentityInput) {
    if (!sub) {
        return undefined;
    }

    let user = await User.findOne({ where: { sub } });

    if (!user) {
        // Just-in-Time Provisioning
        user = User.create({
            sub,
            email,
            username,
        });
        await user.save();
    }

    return user;
}
