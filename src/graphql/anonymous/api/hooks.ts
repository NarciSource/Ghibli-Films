import * as Apollo from '@apollo/client';
import { gql } from '@apollo/client';

import type * as Ops from './operations';

const defaultOptions = {} as const;

export const LoginDocument = gql`
    mutation Login($loginInput: LoginInput!) {
  login(loginInput: $loginInput) {
    ... on FieldError {
      field
      message
    }
    ... on User {
      id
      isAdmin
      username
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
// @ts-ignore
export function useCutSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<Ops.CutQuery, Ops.CutQueryVariables>,
): Apollo.UseSuspenseQueryResult<Ops.CutQuery, Ops.CutQueryVariables>;
export function useCutSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<Ops.CutQuery, Ops.CutQueryVariables>,
): Apollo.UseSuspenseQueryResult<Ops.CutQuery | undefined, Ops.CutQueryVariables>;
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
// @ts-ignore
export function useCutsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<Ops.CutsQuery, Ops.CutsQueryVariables>,
): Apollo.UseSuspenseQueryResult<Ops.CutsQuery, Ops.CutsQueryVariables>;
export function useCutsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<Ops.CutsQuery, Ops.CutsQueryVariables>,
): Apollo.UseSuspenseQueryResult<Ops.CutsQuery | undefined, Ops.CutsQueryVariables>;
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
// @ts-ignore
export function useFilmSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<Ops.FilmQuery, Ops.FilmQueryVariables>,
): Apollo.UseSuspenseQueryResult<Ops.FilmQuery, Ops.FilmQueryVariables>;
export function useFilmSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<Ops.FilmQuery, Ops.FilmQueryVariables>,
): Apollo.UseSuspenseQueryResult<Ops.FilmQuery | undefined, Ops.FilmQueryVariables>;
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
// @ts-ignore
export function useFilmsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<Ops.FilmsQuery, Ops.FilmsQueryVariables>,
): Apollo.UseSuspenseQueryResult<Ops.FilmsQuery, Ops.FilmsQueryVariables>;
export function useFilmsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<Ops.FilmsQuery, Ops.FilmsQueryVariables>,
): Apollo.UseSuspenseQueryResult<Ops.FilmsQuery | undefined, Ops.FilmsQueryVariables>;
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
