import { Arg, Int, Mutation, Resolver } from 'type-graphql';

import pubSub from '@/apollo/subscription/pubSub';
import { Notification } from '@/entities/Notification';

@Resolver(Notification)
export default class NotificationMutationResolver {
    @Mutation(() => Notification)
    async createNotification(
        @Arg('userId', () => Int)
        userId: number,
        @Arg('text', () => String)
        text: string,
    ): Promise<Notification> {
        const notification = await Notification.create({
            userId,
            text,
        }).save();

        // 알림 생성 후 구독자에게 알림 이벤트 발행
        pubSub.publish('NOTIFICATION_CREATED', notification);

        return notification;
    }
}
