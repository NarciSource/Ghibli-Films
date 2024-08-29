import { Resolver, Root, Subscription } from "type-graphql";
import { Notification } from "../../entities/Notification";

@Resolver(Notification)
export default class NotificationSubscriptionResolver {
    @Subscription({ topics: "NOTIFICATION_CREATED" })
    newNotification(@Root() notification: Notification): Notification {
        console.log("New notification received:", notification);
        return notification;
    }
}
