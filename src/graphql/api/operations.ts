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
    user: { __typename?: 'User'; email: string; username: string };
  } | null;
};

export type DeleteReviewMutationVariables = Types.Exact<{
  deleteReviewId: Types.Scalars['Int']['input'];
}>;

export type DeleteReviewMutation = { __typename?: 'Mutation'; deleteReview: boolean };

export type UploadProfileImageMutationVariables = Types.Exact<{
  file: Types.Scalars['Upload']['input'];
}>;

export type UploadProfileImageMutation = { __typename?: 'Mutation'; uploadProfileImage: boolean };

export type VoteMutationVariables = Types.Exact<{
  cutId: Types.Scalars['Int']['input'];
}>;

export type VoteMutation = { __typename?: 'Mutation'; vote: boolean };

export type CutQueryVariables = Types.Exact<{
  cutId: Types.Scalars['Int']['input'];
}>;

export type CutQuery = {
  __typename?: 'Query';
  cut?: {
    __typename?: 'Cut';
    id: number;
    src: string;
    votesCount: number;
    isVoted: boolean;
    film?: { __typename?: 'Film'; id: number; title: string } | null;
  } | null;
  cutReviews: Array<{
    __typename?: 'CutReview';
    id: number;
    contents: string;
    createdAt: string;
    updatedAt: string;
    isMine: boolean;
    user: { __typename?: 'User'; email: string; username: string; profileImage?: string | null };
  }>;
};

export type CutsQueryVariables = Types.Exact<{
  filmId: Types.Scalars['Int']['input'];
}>;

export type CutsQuery = {
  __typename?: 'Query';
  cuts: Array<{ __typename?: 'Cut'; id: number; src: string }>;
};

export type FilmQueryVariables = Types.Exact<{
  filmId: Types.Scalars['Int']['input'];
}>;

export type FilmQuery = {
  __typename?: 'Query';
  film?: {
    __typename?: 'Film';
    id: number;
    title: string;
    subtitle?: string | null;
    description: string;
    genre: string;
    runningTime: number;
    posterImg: string;
    releaseDate: string;
    director: { __typename?: 'Director'; id: number; name: string };
  } | null;
};

export type FilmsQueryVariables = Types.Exact<{
  limit?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  cursor?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  search?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;

export type FilmsQuery = {
  __typename?: 'Query';
  films: {
    __typename?: 'PaginatedFilms';
    cursor?: number | null;
    films: Array<{
      __typename?: 'Film';
      id: number;
      title: string;
      subtitle?: string | null;
      runningTime: number;
      releaseDate: string;
      posterImg: string;
      director: { __typename?: 'Director'; name: string };
    }>;
  };
};

export type LoginMutationVariables = Types.Exact<{
  loginInput: Types.LoginInput;
}>;

export type LoginMutation = {
  __typename?: 'Mutation';
  login:
    | { __typename?: 'FieldError'; field: string; message: string }
    | {
        __typename?: 'UserWithToken';
        accessToken: string;
        user: { __typename?: 'User'; id: number; username: string };
      };
};

export type LogoutMutationVariables = Types.Exact<{ [key: string]: never }>;

export type LogoutMutation = { __typename?: 'Mutation'; logout: boolean };

export type MeQueryVariables = Types.Exact<{ [key: string]: never }>;

export type MeQuery = {
  __typename?: 'Query';
  me?: {
    __typename?: 'User';
    id: number;
    username: string;
    email: string;
    profileImage?: string | null;
  } | null;
};

export type NotificationsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type NotificationsQuery = {
  __typename?: 'Query';
  notifications: Array<{
    __typename?: 'Notification';
    id: number;
    userId: number;
    text: string;
    createdAt: string;
    updatedAt: string;
  }>;
};

export type RefreshAccessTokenMutationVariables = Types.Exact<{ [key: string]: never }>;

export type RefreshAccessTokenMutation = {
  __typename?: 'Mutation';
  refreshAccessToken?: { __typename?: 'RefreshAccessTokenResponse'; accessToken: string } | null;
};

export type SignUpMutationVariables = Types.Exact<{
  signUpInput: Types.SignUpInput;
}>;

export type SignUpMutation = {
  __typename?: 'Mutation';
  signUp: {
    __typename?: 'User';
    email: string;
    username: string;
    createdAt: string;
    updatedAt: string;
    id: number;
  };
};

export type NewNotificationSubscriptionVariables = Types.Exact<{ [key: string]: never }>;

export type NewNotificationSubscription = {
  __typename?: 'Subscription';
  newNotification: {
    __typename?: 'Notification';
    id: number;
    userId: number;
    text: string;
    createdAt: string;
    updatedAt: string;
  };
};
