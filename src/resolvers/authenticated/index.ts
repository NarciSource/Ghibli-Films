import type { NonEmptyArray } from 'type-graphql';

import CreateOrUpdateReviewMutationResolver from './cut/mutations/CreateOrUpdateReview';
import DeleteReviewMutationResolver from './cut/mutations/DeleteReview';
import VoteMutationResolver from './cut/mutations/Vote';
import NotificationMutationResolver from './notification/NotificationMutation';
import NotificationQueryResolver from './notification/NotificationQuery';
import NotificationSubscriptionResolver from './notification/NotificationSubscription';
import LogoutMutationResolver from './user/mutations/Logout';
import UploadProfileImageMutationResolver from './user/mutations/UploadProfileImage';
import MeQueryResolver from './user/queries/Me';
import ReviewsQueryResolver from './user/queries/Reviews';

export default [
    VoteMutationResolver,
    CreateOrUpdateReviewMutationResolver,
    DeleteReviewMutationResolver,

    MeQueryResolver,
    LogoutMutationResolver,
    UploadProfileImageMutationResolver,
    ReviewsQueryResolver,

    NotificationQueryResolver,
    NotificationMutationResolver,
    NotificationSubscriptionResolver,

    // biome-ignore lint/complexity/noBannedTypes: <>
] as NonEmptyArray<Function>;
