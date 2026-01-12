import { Resolver, Root, Subscription } from 'type-graphql';

import { Notification } from '@/entities/Notification';

interface UserPayload {
    userId: string;
}

@Resolver(Notification)
export default class NotificationSubscriptionResolver {
    @Subscription({
        topics: 'NOTIFICATION_CREATED',
        // 인증된 사용자만 구독 허용
        filter: ({
            payload,
            context: { verifiedUser },
        }: {
            payload: UserPayload;
            context: { verifiedUser: UserPayload };
        }) => {
            return payload?.userId === verifiedUser?.userId;
        },
    })
    newNotification(@Root() notification: Notification): Notification {
        console.log('New notification received:', notification);
        return notification;
    }
}
