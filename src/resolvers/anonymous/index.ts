import type { NonEmptyArray } from 'type-graphql';

import CutFieldResolver from './cut/fields/Cut';
import ReviewFieldResolver from './cut/fields/Review';
import CutQueryResolver from './cut/queries/Cut';
import CutReviewQueryResolver from './cut/queries/Review';
import FilmFieldResolver from './film/FilmField';
import FilmQueryResolver from './film/FilmQuery';
import LoginMutationResolver from './user/mutations/Login';
import SignupMutationResolver from './user/mutations/SignUp';

export default [
    FilmQueryResolver,
    FilmFieldResolver,

    CutQueryResolver,
    CutReviewQueryResolver,
    CutFieldResolver,
    ReviewFieldResolver,

    LoginMutationResolver,
    SignupMutationResolver,

    // biome-ignore lint/complexity/noBannedTypes: <>
] as NonEmptyArray<Function>;
