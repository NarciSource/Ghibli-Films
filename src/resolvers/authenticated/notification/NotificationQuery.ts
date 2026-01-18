import { Ctx, Query, Resolver, UseMiddleware } from 'type-graphql';

import type IContext from '@/apollo/context/IContext';
import { Notification } from '@/entities/Notification';
import { isAuthenticated } from '@/middlewares/isAuthenticated';

@Resolver(Notification)
export default class NotificationQueryResolver {
    @Query(() => [Notification], {
        description: '세션에 해당되는 유저의 모든 알림을 가져옵니다.',
    })
    @UseMiddleware(isAuthenticated)
    async notifications(
        @Ctx() { verifiedUser: { id: userId } }: IContext,
    ): Promise<Notification[]> {
        return Notification.find({
            where: { userId },
            order: { createdAt: 'DESC' },
        });
    }
}
