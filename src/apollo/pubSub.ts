import { createPubSub } from "@graphql-yoga/subscription";
import { Notification } from "../entities/Notification";

export const pubSub = createPubSub<{
    NOTIFICATION_CREATED: [Notification]; // payload 타입 정의
}>();
