import { Arg, Int, Mutation, Resolver, UseMiddleware } from "type-graphql";
import { isAuthenticated } from "../../middlewares/isAuthenticated";
import { Notification } from "../../entities/Notification";
import { pubSub } from "../../apollo/pubSub";

@Resolver(Notification)
export default class NotificationMutationResolver {
    @UseMiddleware(isAuthenticated)
    @Mutation(() => Notification)
    async createNotification(
        @Arg("userId", () => Int)
        userId: number,
        @Arg("text", () => String)
        text: string
    ): Promise<Notification> {
        const notification = await Notification.create({
            userId,
            text,
        }).save();

        // 알림 생성 후 구독자에게 알림 이벤트 발행
        pubSub.publish("NOTIFICATION_CREATED", notification);

        return notification;
    }
}
