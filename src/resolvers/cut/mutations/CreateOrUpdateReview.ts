import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from 'type-graphql';

import type IContext from '@/apollo/IContext';
import { CutReview } from '@/entities/CutReview';
import { CutVote } from '@/entities/CutVote';
import NotificationMutationResolver from '@/resolvers/notification/NotificationMutation';
import { isAuthenticated } from '@/middlewares/isAuthenticated';
import type { CreateOrUpdateReviewInput } from '../type';

@Resolver(CutReview)
export default class CreateOrUpdateReviewMutationResolver {
    @Mutation(() => CutReview, { nullable: true })
    @UseMiddleware(isAuthenticated)
    async createOrUpdateReview(
        @Arg('cutReviewInput') cutReviewInput: CreateOrUpdateReviewInput,
        @Ctx() { verifiedUser }: IContext,
    ) {
        const { cutId, contents } = cutReviewInput;
        const { userId } = verifiedUser;

        if (!verifiedUser) {
            return null;
        }

        // 이전 감상평 조회
        const prevCutReview = await CutReview.findOne({
            where: { cutId, user: { id: userId } },
            relations: ['user'],
        });

        if (prevCutReview) {
            // 이미 작성한 감상평이 있으면 수정
            prevCutReview.contents = contents;
            await prevCutReview.save();
            return prevCutReview;
        }

        // 감상평 생성
        const cutReview = CutReview.create({ contents, cutId, user: { id: userId } });
        await cutReview.save();

        // 새로운 감상평이 등록되었음을 알림
        await this.notifyUsersAboutNewReview(cutId, userId);

        return cutReview;
    }

    private async notifyUsersAboutNewReview(cutId: number, excludingUserId: number) {
        // 해당 명장면에 투표한 모든 사용자에게 알림 전송
        const votes = await CutVote.find({ where: { cutId } });

        const notificationResolver = new NotificationMutationResolver();
        for (const vote of votes.filter((v) => v.userId !== excludingUserId)) {
            await notificationResolver.createNotification(
                vote.userId,
                '투표한 명장면에 새로운 감상평이 등록되었습니다.',
            );
        }
    }
}
