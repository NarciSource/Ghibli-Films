import type * as Types from './type';

export type CreateOrUpdateReviewMutationVariables = Types.Exact<{
  cutReviewInput: Types.CreateOrUpdateReviewInput;
}>;

export type CreateOrUpdateReviewMutation = {
  __typename?: 'Mutation';
  createOrUpdateReview?: {
    __typename?: 'CutReview';
    id: number;
    contents: string;
    cutId: number;
    createdAt: string;
    updatedAt: string;
    isMine: boolean;
    user: { __typename?: 'User'; email: string; username: string; profileImage?: string | null };
  } | null;
};

export type DeleteReviewMutationVariables = Types.Exact<{
  deleteReviewId: Types.Scalars['Int']['input'];
}>;

export type DeleteReviewMutation = { __typename?: 'Mutation'; deleteReview: boolean };

export type LogoutMutationVariables = Types.Exact<{ [key: string]: never }>;

export type LogoutMutation = { __typename?: 'Mutation'; logout: boolean };

export type UploadProfileImageMutationVariables = Types.Exact<{
  file: Types.Scalars['Upload']['input'];
}>;

export type UploadProfileImageMutation = { __typename?: 'Mutation'; uploadProfileImage: boolean };

export type VoteMutationVariables = Types.Exact<{
  cutId: Types.Scalars['Int']['input'];
}>;

export type VoteMutation = { __typename?: 'Mutation'; vote: boolean };

export type MeQueryVariables = Types.Exact<{ [key: string]: never }>;

export type MeQuery = {
  __typename?: 'Query';
  me?: {
    __typename?: 'User';
    id: number;
    isAdmin: boolean;
    username: string;
    email: string;
    profileImage?: string | null;
  } | null;
};

export type MyReviewsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type MyReviewsQuery = {
  __typename?: 'Query';
  myReviews: {
    __typename?: 'User';
    cutReviews: Array<{
      __typename?: 'CutReview';
      id: number;
      contents: string;
      createdAt: string;
      updatedAt: string;
      cut: {
        __typename?: 'Cut';
        id: number;
        src: string;
        film: { __typename?: 'Film'; id: number; title: string; posterImg: string };
      };
    }>;
  };
};

export type NotificationsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type NotificationsQuery = {
  __typename?: 'Query';
  notifications: Array<{
    __typename?: 'Notification';
    id: number;
    text: string;
    createdAt: string;
    updatedAt: string;
  }>;
};

export type NewNotificationSubscriptionVariables = Types.Exact<{ [key: string]: never }>;

export type NewNotificationSubscription = {
  __typename?: 'Subscription';
  newNotification: {
    __typename?: 'Notification';
    id: number;
    text: string;
    createdAt: string;
    updatedAt: string;
  };
};
