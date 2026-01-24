import * as Apollo from '@apollo/client';
import { gql } from '@apollo/client';

import type * as Ops from './operations';

const defaultOptions = {} as const;

export const CreateOrUpdateCutReviewDocument = gql`
    mutation createOrUpdateCutReview($cutReviewInput: CreateOrUpdateCutReviewInput!) {
  createOrUpdateCutReview(cutReviewInput: $cutReviewInput) {
    id
    contents
    cutId
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
export type CreateOrUpdateCutReviewMutationFn = Apollo.MutationFunction<
  Ops.CreateOrUpdateCutReviewMutation,
  Ops.CreateOrUpdateCutReviewMutationVariables
>;

/**
 * __useCreateOrUpdateCutReviewMutation__
 *
 * To run a mutation, you first call `useCreateOrUpdateCutReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrUpdateCutReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrUpdateCutReviewMutation, { data, loading, error }] = useCreateOrUpdateCutReviewMutation({
 *   variables: {
 *      cutReviewInput: // value for 'cutReviewInput'
 *   },
 * });
 */
export function useCreateOrUpdateCutReviewMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Ops.CreateOrUpdateCutReviewMutation,
    Ops.CreateOrUpdateCutReviewMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    Ops.CreateOrUpdateCutReviewMutation,
    Ops.CreateOrUpdateCutReviewMutationVariables
  >(CreateOrUpdateCutReviewDocument, options);
}
export type CreateOrUpdateCutReviewMutationHookResult = ReturnType<
  typeof useCreateOrUpdateCutReviewMutation
>;
export type CreateOrUpdateCutReviewMutationResult =
  Apollo.MutationResult<Ops.CreateOrUpdateCutReviewMutation>;
export type CreateOrUpdateCutReviewMutationOptions = Apollo.BaseMutationOptions<
  Ops.CreateOrUpdateCutReviewMutation,
  Ops.CreateOrUpdateCutReviewMutationVariables
>;
export const DeleteCutReviewDocument = gql`
    mutation deleteCutReview($deleteCutReviewId: Int!) {
  deleteCutReview(id: $deleteCutReviewId)
}
    `;
export type DeleteCutReviewMutationFn = Apollo.MutationFunction<
  Ops.DeleteCutReviewMutation,
  Ops.DeleteCutReviewMutationVariables
>;

/**
 * __useDeleteCutReviewMutation__
 *
 * To run a mutation, you first call `useDeleteCutReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCutReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCutReviewMutation, { data, loading, error }] = useDeleteCutReviewMutation({
 *   variables: {
 *      deleteCutReviewId: // value for 'deleteCutReviewId'
 *   },
 * });
 */
export function useDeleteCutReviewMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Ops.DeleteCutReviewMutation,
    Ops.DeleteCutReviewMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<Ops.DeleteCutReviewMutation, Ops.DeleteCutReviewMutationVariables>(
    DeleteCutReviewDocument,
    options,
  );
}
export type DeleteCutReviewMutationHookResult = ReturnType<typeof useDeleteCutReviewMutation>;
export type DeleteCutReviewMutationResult = Apollo.MutationResult<Ops.DeleteCutReviewMutation>;
export type DeleteCutReviewMutationOptions = Apollo.BaseMutationOptions<
  Ops.DeleteCutReviewMutation,
  Ops.DeleteCutReviewMutationVariables
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
export const MeDocument = gql`
    query me {
  me {
    id
    isAdmin
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
// @ts-ignore
export function useMeSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<Ops.MeQuery, Ops.MeQueryVariables>,
): Apollo.UseSuspenseQueryResult<Ops.MeQuery, Ops.MeQueryVariables>;
export function useMeSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<Ops.MeQuery, Ops.MeQueryVariables>,
): Apollo.UseSuspenseQueryResult<Ops.MeQuery | undefined, Ops.MeQueryVariables>;
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
export const MyReviewsDocument = gql`
    query myReviews {
  myReviews {
    cutReviews {
      id
      contents
      createdAt
      updatedAt
      cut {
        id
        src
        film {
          id
          title
          posterImg
        }
      }
    }
  }
}
    `;

/**
 * __useMyReviewsQuery__
 *
 * To run a query within a React component, call `useMyReviewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyReviewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyReviewsQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyReviewsQuery(
  baseOptions?: Apollo.QueryHookOptions<Ops.MyReviewsQuery, Ops.MyReviewsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<Ops.MyReviewsQuery, Ops.MyReviewsQueryVariables>(
    MyReviewsDocument,
    options,
  );
}
export function useMyReviewsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Ops.MyReviewsQuery, Ops.MyReviewsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<Ops.MyReviewsQuery, Ops.MyReviewsQueryVariables>(
    MyReviewsDocument,
    options,
  );
}
// @ts-ignore
export function useMyReviewsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<Ops.MyReviewsQuery, Ops.MyReviewsQueryVariables>,
): Apollo.UseSuspenseQueryResult<Ops.MyReviewsQuery, Ops.MyReviewsQueryVariables>;
export function useMyReviewsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<Ops.MyReviewsQuery, Ops.MyReviewsQueryVariables>,
): Apollo.UseSuspenseQueryResult<Ops.MyReviewsQuery | undefined, Ops.MyReviewsQueryVariables>;
export function useMyReviewsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<Ops.MyReviewsQuery, Ops.MyReviewsQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<Ops.MyReviewsQuery, Ops.MyReviewsQueryVariables>(
    MyReviewsDocument,
    options,
  );
}
export type MyReviewsQueryHookResult = ReturnType<typeof useMyReviewsQuery>;
export type MyReviewsLazyQueryHookResult = ReturnType<typeof useMyReviewsLazyQuery>;
export type MyReviewsSuspenseQueryHookResult = ReturnType<typeof useMyReviewsSuspenseQuery>;
export type MyReviewsQueryResult = Apollo.QueryResult<
  Ops.MyReviewsQuery,
  Ops.MyReviewsQueryVariables
>;
export const NotificationsDocument = gql`
    query notifications {
  notifications {
    id
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
// @ts-ignore
export function useNotificationsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    Ops.NotificationsQuery,
    Ops.NotificationsQueryVariables
  >,
): Apollo.UseSuspenseQueryResult<Ops.NotificationsQuery, Ops.NotificationsQueryVariables>;
export function useNotificationsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<Ops.NotificationsQuery, Ops.NotificationsQueryVariables>,
): Apollo.UseSuspenseQueryResult<
  Ops.NotificationsQuery | undefined,
  Ops.NotificationsQueryVariables
>;
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
export const NewNotificationDocument = gql`
    subscription newNotification {
  newNotification {
    id
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
