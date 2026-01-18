import type { NonEmptyArray } from 'type-graphql';

import CutFieldResolver from '../fields/Cut';
import CutReviewFieldResolver from '../fields/CutReview';
import FilmFieldResolver from '../fields/Film';
import VoteCutMutationResolver from './cut/VoteMutation';
import CreateOrUpdateCutReviewMutationResolver from './cutReview/CreateOrUpdateMutation';
import DeleteCutReviewMutationResolver from './cutReview/DeleteMutation';
import NotificationMutationResolver from './notification/NotificationMutation';
import NotificationQueryResolver from './notification/NotificationQuery';
import NotificationSubscriptionResolver from './notification/NotificationSubscription';
import MeQueryResolver from './user/MeQuery';
import MyReviewsQueryResolver from './user/MyReviewsQuery';
import UploadProfileImageMutationResolver from './user/UploadProfileImageMutation';

export default [
    CutFieldResolver,
    VoteCutMutationResolver,

    CutReviewFieldResolver,
    CreateOrUpdateCutReviewMutationResolver,
    DeleteCutReviewMutationResolver,

    FilmFieldResolver,

    MeQueryResolver,
    MyReviewsQueryResolver,
    UploadProfileImageMutationResolver,

    NotificationQueryResolver,
    NotificationMutationResolver,
    NotificationSubscriptionResolver,

    // biome-ignore lint/complexity/noBannedTypes: <>
] as NonEmptyArray<Function>;
