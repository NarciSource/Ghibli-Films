import type { NonEmptyArray } from 'type-graphql';

import CutFieldResolver from './cut/fields/Cut';
import ReviewFieldResolver from './cut/fields/Review';
import CreateOrUpdateReviewMutationResolver from './cut/mutations/CreateOrUpdateReview';
import DeleteReviewMutationResolver from './cut/mutations/DeleteReview';
import VoteMutationResolver from './cut/mutations/Vote';
import CutQueryResolver from './cut/queries/Cut';
import CutReviewQueryResolver from './cut/queries/Review';
import FilmFieldResolver from './film/FilmField';
import FilmQueryResolver from './film/FilmQuery';
import NotificationMutationResolver from './notification/NotificationMutation';
import NotificationQueryResolver from './notification/NotificationQuery';
import NotificationSubscriptionResolver from './notification/NotificationSubscription';
import LoginMutationResolver from './user/mutations/Login';
import LogoutMutationResolver from './user/mutations/Logout';
import SignupMutationResolver from './user/mutations/SignUp';
import UploadProfileImageMutationResolver from './user/mutations/UploadProfileImage';
import MeQueryResolver from './user/queries/Me';
import ReviewsQueryResolver from './user/queries/Reviews';

export default [
    FilmQueryResolver,
    FilmFieldResolver,

    CutQueryResolver,
    CutReviewQueryResolver,
    VoteMutationResolver,
    CreateOrUpdateReviewMutationResolver,
    DeleteReviewMutationResolver,
    CutFieldResolver,
    ReviewFieldResolver,

    MeQueryResolver,
    LoginMutationResolver,
    LogoutMutationResolver,
    SignupMutationResolver,
    UploadProfileImageMutationResolver,
    ReviewsQueryResolver,

    NotificationQueryResolver,
    NotificationMutationResolver,
    NotificationSubscriptionResolver,

    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
] as NonEmptyArray<Function>;
