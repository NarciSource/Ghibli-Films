import * as Apollo from '@apollo/client';
import { gql } from '@apollo/client';

import type * as Ops from './operations';

const defaultOptions = {} as const;

export const CreateOrUpdateReviewDocument = gql`
    mutation createOrUpdateReview($cutReviewInput: CreateOrUpdateReviewInput!) {
  createOrUpdateReview(cutReviewInput: $cutReviewInput) {
    id
    contents
    cutId
    user {
      email
      username
    }
    createdAt
    updatedAt
    isMine
  }
}
    `;
export type CreateOrUpdateReviewMutationFn = Apollo.MutationFunction<
  Ops.CreateOrUpdateReviewMutation,
  Ops.CreateOrUpdateReviewMutationVariables
>;

/**
 * __useCreateOrUpdateReviewMutation__
 *
 * To run a mutation, you first call `useCreateOrUpdateReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrUpdateReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrUpdateReviewMutation, { data, loading, error }] = useCreateOrUpdateReviewMutation({
 *   variables: {
 *      cutReviewInput: // value for 'cutReviewInput'
 *   },
 * });
 */
export function useCreateOrUpdateReviewMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Ops.CreateOrUpdateReviewMutation,
    Ops.CreateOrUpdateReviewMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    Ops.CreateOrUpdateReviewMutation,
    Ops.CreateOrUpdateReviewMutationVariables
  >(CreateOrUpdateReviewDocument, options);
}
export type CreateOrUpdateReviewMutationHookResult = ReturnType<
  typeof useCreateOrUpdateReviewMutation
>;
export type CreateOrUpdateReviewMutationResult =
  Apollo.MutationResult<Ops.CreateOrUpdateReviewMutation>;
export type CreateOrUpdateReviewMutationOptions = Apollo.BaseMutationOptions<
  Ops.CreateOrUpdateReviewMutation,
  Ops.CreateOrUpdateReviewMutationVariables
>;
export const DeleteReviewDocument = gql`
    mutation deleteReview($deleteReviewId: Int!) {
  deleteReview(id: $deleteReviewId)
}
    `;
export type DeleteReviewMutationFn = Apollo.MutationFunction<
  Ops.DeleteReviewMutation,
  Ops.DeleteReviewMutationVariables
>;

/**
 * __useDeleteReviewMutation__
 *
 * To run a mutation, you first call `useDeleteReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteReviewMutation, { data, loading, error }] = useDeleteReviewMutation({
 *   variables: {
 *      deleteReviewId: // value for 'deleteReviewId'
 *   },
 * });
 */
export function useDeleteReviewMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Ops.DeleteReviewMutation,
    Ops.DeleteReviewMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<Ops.DeleteReviewMutation, Ops.DeleteReviewMutationVariables>(
    DeleteReviewDocument,
    options,
  );
}
export type DeleteReviewMutationHookResult = ReturnType<typeof useDeleteReviewMutation>;
export type DeleteReviewMutationResult = Apollo.MutationResult<Ops.DeleteReviewMutation>;
export type DeleteReviewMutationOptions = Apollo.BaseMutationOptions<
  Ops.DeleteReviewMutation,
  Ops.DeleteReviewMutationVariables
>;
export const UploadProfileImageDocument = gql`
    mutation uploadProfileImage($file: Upload!) {
  uploadProfileImage(file: $file)
}
    `;
export type UploadProfileImageMutationFn = Apollo.MutationFunction<
  Ops.UploadProfileImageMutation,
  Ops.UploadProfileImageMutationVariables
>;

/**
 * __useUploadProfileImageMutation__
 *
 * To run a mutation, you first call `useUploadProfileImageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadProfileImageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadProfileImageMutation, { data, loading, error }] = useUploadProfileImageMutation({
 *   variables: {
 *      file: // value for 'file'
 *   },
 * });
 */
export function useUploadProfileImageMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Ops.UploadProfileImageMutation,
    Ops.UploadProfileImageMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    Ops.UploadProfileImageMutation,
    Ops.UploadProfileImageMutationVariables
  >(UploadProfileImageDocument, options);
}
export type UploadProfileImageMutationHookResult = ReturnType<typeof useUploadProfileImageMutation>;
export type UploadProfileImageMutationResult =
  Apollo.MutationResult<Ops.UploadProfileImageMutation>;
export type UploadProfileImageMutationOptions = Apollo.BaseMutationOptions<
  Ops.UploadProfileImageMutation,
  Ops.UploadProfileImageMutationVariables
>;
export const VoteDocument = gql`
    mutation vote($cutId: Int!) {
  vote(cutId: $cutId)
}
    `;
export type VoteMutationFn = Apollo.MutationFunction<Ops.VoteMutation, Ops.VoteMutationVariables>;

/**
 * __useVoteMutation__
 *
 * To run a mutation, you first call `useVoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [voteMutation, { data, loading, error }] = useVoteMutation({
 *   variables: {
 *      cutId: // value for 'cutId'
 *   },
 * });
 */
export function useVoteMutation(
  baseOptions?: Apollo.MutationHookOptions<Ops.VoteMutation, Ops.VoteMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<Ops.VoteMutation, Ops.VoteMutationVariables>(VoteDocument, options);
}
export type VoteMutationHookResult = ReturnType<typeof useVoteMutation>;
export type VoteMutationResult = Apollo.MutationResult<Ops.VoteMutation>;
export type VoteMutationOptions = Apollo.BaseMutationOptions<
  Ops.VoteMutation,
  Ops.VoteMutationVariables
>;
export const CutDocument = gql`
    query cut($cutId: Int!) {
  cut(cutId: $cutId) {
    id
    src
    film {
      id
      title
    }
    votesCount
    isVoted
  }
  cutReviews(cutId: $cutId) {
    id
    contents
    user {
      email
      username
      profileImage
    }
    createdAt
    updatedAt
    isMine
  }
}
    `;

/**
 * __useCutQuery__
 *
 * To run a query within a React component, call `useCutQuery` and pass it any options that fit your needs.
 * When your component renders, `useCutQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCutQuery({
 *   variables: {
 *      cutId: // value for 'cutId'
 *   },
 * });
 */
export function useCutQuery(
  baseOptions: Apollo.QueryHookOptions<Ops.CutQuery, Ops.CutQueryVariables> &
    ({ variables: Ops.CutQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<Ops.CutQuery, Ops.CutQueryVariables>(CutDocument, options);
}
export function useCutLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Ops.CutQuery, Ops.CutQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<Ops.CutQuery, Ops.CutQueryVariables>(CutDocument, options);
}
export function useCutSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<Ops.CutQuery, Ops.CutQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<Ops.CutQuery, Ops.CutQueryVariables>(CutDocument, options);
}
export type CutQueryHookResult = ReturnType<typeof useCutQuery>;
export type CutLazyQueryHookResult = ReturnType<typeof useCutLazyQuery>;
export type CutSuspenseQueryHookResult = ReturnType<typeof useCutSuspenseQuery>;
export type CutQueryResult = Apollo.QueryResult<Ops.CutQuery, Ops.CutQueryVariables>;
export const CutsDocument = gql`
    query cuts($filmId: Int!) {
  cuts(filmId: $filmId) {
    id
    src
  }
}
    `;

/**
 * __useCutsQuery__
 *
 * To run a query within a React component, call `useCutsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCutsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCutsQuery({
 *   variables: {
 *      filmId: // value for 'filmId'
 *   },
 * });
 */
export function useCutsQuery(
  baseOptions: Apollo.QueryHookOptions<Ops.CutsQuery, Ops.CutsQueryVariables> &
    ({ variables: Ops.CutsQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<Ops.CutsQuery, Ops.CutsQueryVariables>(CutsDocument, options);
}
export function useCutsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Ops.CutsQuery, Ops.CutsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<Ops.CutsQuery, Ops.CutsQueryVariables>(CutsDocument, options);
}
export function useCutsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<Ops.CutsQuery, Ops.CutsQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<Ops.CutsQuery, Ops.CutsQueryVariables>(CutsDocument, options);
}
export type CutsQueryHookResult = ReturnType<typeof useCutsQuery>;
export type CutsLazyQueryHookResult = ReturnType<typeof useCutsLazyQuery>;
export type CutsSuspenseQueryHookResult = ReturnType<typeof useCutsSuspenseQuery>;
export type CutsQueryResult = Apollo.QueryResult<Ops.CutsQuery, Ops.CutsQueryVariables>;
export const FilmDocument = gql`
    query film($filmId: Int!) {
  film(filmId: $filmId) {
    id
    title
    subtitle
    description
    genre
    runningTime
    posterImg
    releaseDate
    director {
      id
      name
    }
  }
}
    `;

/**
 * __useFilmQuery__
 *
 * To run a query within a React component, call `useFilmQuery` and pass it any options that fit your needs.
 * When your component renders, `useFilmQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFilmQuery({
 *   variables: {
 *      filmId: // value for 'filmId'
 *   },
 * });
 */
export function useFilmQuery(
  baseOptions: Apollo.QueryHookOptions<Ops.FilmQuery, Ops.FilmQueryVariables> &
    ({ variables: Ops.FilmQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<Ops.FilmQuery, Ops.FilmQueryVariables>(FilmDocument, options);
}
export function useFilmLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Ops.FilmQuery, Ops.FilmQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<Ops.FilmQuery, Ops.FilmQueryVariables>(FilmDocument, options);
}
export function useFilmSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<Ops.FilmQuery, Ops.FilmQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<Ops.FilmQuery, Ops.FilmQueryVariables>(FilmDocument, options);
}
export type FilmQueryHookResult = ReturnType<typeof useFilmQuery>;
export type FilmLazyQueryHookResult = ReturnType<typeof useFilmLazyQuery>;
export type FilmSuspenseQueryHookResult = ReturnType<typeof useFilmSuspenseQuery>;
export type FilmQueryResult = Apollo.QueryResult<Ops.FilmQuery, Ops.FilmQueryVariables>;
export const FilmsDocument = gql`
    query Films($limit: Int, $cursor: Int, $search: String) {
  films(limit: $limit, cursor: $cursor, search: $search) {
    cursor
    films {
      id
      title
      subtitle
      runningTime
      director {
        name
      }
      releaseDate
      posterImg
    }
  }
}
    `;

/**
 * __useFilmsQuery__
 *
 * To run a query within a React component, call `useFilmsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFilmsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFilmsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      cursor: // value for 'cursor'
 *      search: // value for 'search'
 *   },
 * });
 */
export function useFilmsQuery(
  baseOptions?: Apollo.QueryHookOptions<Ops.FilmsQuery, Ops.FilmsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<Ops.FilmsQuery, Ops.FilmsQueryVariables>(FilmsDocument, options);
}
export function useFilmsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Ops.FilmsQuery, Ops.FilmsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<Ops.FilmsQuery, Ops.FilmsQueryVariables>(FilmsDocument, options);
}
export function useFilmsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<Ops.FilmsQuery, Ops.FilmsQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<Ops.FilmsQuery, Ops.FilmsQueryVariables>(FilmsDocument, options);
}
export type FilmsQueryHookResult = ReturnType<typeof useFilmsQuery>;
export type FilmsLazyQueryHookResult = ReturnType<typeof useFilmsLazyQuery>;
export type FilmsSuspenseQueryHookResult = ReturnType<typeof useFilmsSuspenseQuery>;
export type FilmsQueryResult = Apollo.QueryResult<Ops.FilmsQuery, Ops.FilmsQueryVariables>;
export const LoginDocument = gql`
    mutation Login($loginInput: LoginInput!) {
  login(loginInput: $loginInput) {
    ... on FieldError {
      field
      message
    }
    ... on UserWithToken {
      user {
        id
        username
      }
      accessToken
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<
  Ops.LoginMutation,
  Ops.LoginMutationVariables
>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      loginInput: // value for 'loginInput'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<Ops.LoginMutation, Ops.LoginMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<Ops.LoginMutation, Ops.LoginMutationVariables>(LoginDocument, options);
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<Ops.LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<
  Ops.LoginMutation,
  Ops.LoginMutationVariables
>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<
  Ops.LogoutMutation,
  Ops.LogoutMutationVariables
>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(
  baseOptions?: Apollo.MutationHookOptions<Ops.LogoutMutation, Ops.LogoutMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<Ops.LogoutMutation, Ops.LogoutMutationVariables>(
    LogoutDocument,
    options,
  );
}
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<Ops.LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<
  Ops.LogoutMutation,
  Ops.LogoutMutationVariables
>;
export const MeDocument = gql`
    query me {
  me {
    id
    username
    email
    profileImage
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(
  baseOptions?: Apollo.QueryHookOptions<Ops.MeQuery, Ops.MeQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<Ops.MeQuery, Ops.MeQueryVariables>(MeDocument, options);
}
export function useMeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Ops.MeQuery, Ops.MeQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<Ops.MeQuery, Ops.MeQueryVariables>(MeDocument, options);
}
export function useMeSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<Ops.MeQuery, Ops.MeQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<Ops.MeQuery, Ops.MeQueryVariables>(MeDocument, options);
}
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeSuspenseQueryHookResult = ReturnType<typeof useMeSuspenseQuery>;
export type MeQueryResult = Apollo.QueryResult<Ops.MeQuery, Ops.MeQueryVariables>;
export const NotificationsDocument = gql`
    query notifications {
  notifications {
    id
    userId
    text
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useNotificationsQuery__
 *
 * To run a query within a React component, call `useNotificationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useNotificationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNotificationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useNotificationsQuery(
  baseOptions?: Apollo.QueryHookOptions<Ops.NotificationsQuery, Ops.NotificationsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<Ops.NotificationsQuery, Ops.NotificationsQueryVariables>(
    NotificationsDocument,
    options,
  );
}
export function useNotificationsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Ops.NotificationsQuery,
    Ops.NotificationsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<Ops.NotificationsQuery, Ops.NotificationsQueryVariables>(
    NotificationsDocument,
    options,
  );
}
export function useNotificationsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<Ops.NotificationsQuery, Ops.NotificationsQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<Ops.NotificationsQuery, Ops.NotificationsQueryVariables>(
    NotificationsDocument,
    options,
  );
}
export type NotificationsQueryHookResult = ReturnType<typeof useNotificationsQuery>;
export type NotificationsLazyQueryHookResult = ReturnType<typeof useNotificationsLazyQuery>;
export type NotificationsSuspenseQueryHookResult = ReturnType<typeof useNotificationsSuspenseQuery>;
export type NotificationsQueryResult = Apollo.QueryResult<
  Ops.NotificationsQuery,
  Ops.NotificationsQueryVariables
>;
export const RefreshAccessTokenDocument = gql`
    mutation refreshAccessToken {
  refreshAccessToken {
    accessToken
  }
}
    `;
export type RefreshAccessTokenMutationFn = Apollo.MutationFunction<
  Ops.RefreshAccessTokenMutation,
  Ops.RefreshAccessTokenMutationVariables
>;

/**
 * __useRefreshAccessTokenMutation__
 *
 * To run a mutation, you first call `useRefreshAccessTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshAccessTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshAccessTokenMutation, { data, loading, error }] = useRefreshAccessTokenMutation({
 *   variables: {
 *   },
 * });
 */
export function useRefreshAccessTokenMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Ops.RefreshAccessTokenMutation,
    Ops.RefreshAccessTokenMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    Ops.RefreshAccessTokenMutation,
    Ops.RefreshAccessTokenMutationVariables
  >(RefreshAccessTokenDocument, options);
}
export type RefreshAccessTokenMutationHookResult = ReturnType<typeof useRefreshAccessTokenMutation>;
export type RefreshAccessTokenMutationResult =
  Apollo.MutationResult<Ops.RefreshAccessTokenMutation>;
export type RefreshAccessTokenMutationOptions = Apollo.BaseMutationOptions<
  Ops.RefreshAccessTokenMutation,
  Ops.RefreshAccessTokenMutationVariables
>;
export const SignUpDocument = gql`
    mutation signUp($signUpInput: SignUpInput!) {
  signUp(signUpInput: $signUpInput) {
    email
    username
    createdAt
    updatedAt
    id
  }
}
    `;
export type SignUpMutationFn = Apollo.MutationFunction<
  Ops.SignUpMutation,
  Ops.SignUpMutationVariables
>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      signUpInput: // value for 'signUpInput'
 *   },
 * });
 */
export function useSignUpMutation(
  baseOptions?: Apollo.MutationHookOptions<Ops.SignUpMutation, Ops.SignUpMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<Ops.SignUpMutation, Ops.SignUpMutationVariables>(
    SignUpDocument,
    options,
  );
}
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<Ops.SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<
  Ops.SignUpMutation,
  Ops.SignUpMutationVariables
>;
export const NewNotificationDocument = gql`
    subscription newNotification {
  newNotification {
    id
    userId
    text
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useNewNotificationSubscription__
 *
 * To run a query within a React component, call `useNewNotificationSubscription` and pass it any options that fit your needs.
 * When your component renders, `useNewNotificationSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewNotificationSubscription({
 *   variables: {
 *   },
 * });
 */
export function useNewNotificationSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    Ops.NewNotificationSubscription,
    Ops.NewNotificationSubscriptionVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSubscription<
    Ops.NewNotificationSubscription,
    Ops.NewNotificationSubscriptionVariables
  >(NewNotificationDocument, options);
}
export type NewNotificationSubscriptionHookResult = ReturnType<
  typeof useNewNotificationSubscription
>;
export type NewNotificationSubscriptionResult =
  Apollo.SubscriptionResult<Ops.NewNotificationSubscription>;
