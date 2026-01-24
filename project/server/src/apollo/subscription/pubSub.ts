import { createPubSub } from '@graphql-yoga/subscription';

import type { Notification } from '@/entities/Notification';

export default createPubSub<{
    NOTIFICATION_CREATED: [Notification]; // payload 타입 정의
}>();
