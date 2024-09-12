import { Ctx, Query, Resolver, UseMiddleware } from 'type-graphql';
import IContext from '../../apollo/IContext';
import { Notification } from '../../entities/Notification';
import { isAuthenticated } from '../../middlewares/isAuthenticated';

@Resolver(Notification)
export default class NotificationQueryResolver {
    @Query(() => [Notification], {
        description: '세션에 해당되는 유저의 모든 알림을 가져옵니다.',
    })
    @UseMiddleware(isAuthenticated)
    async notifications(@Ctx() { verifiedUser }: IContext): Promise<Notification[]> {
        return await Notification.find({
            where: { userId: verifiedUser.userId },
            order: { createdAt: 'DESC' },
        });
    }
}
