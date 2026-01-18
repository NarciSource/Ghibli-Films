import type { NonEmptyArray } from 'type-graphql';

import CutFieldResolver from '../fields/Cut';
import CutReviewFieldResolver from '../fields/CutReview';
import FilmFieldResolver from '../fields/Film';
import CutQueryResolver from './cut/CutQuery';
import CutsQueryResolver from './cut/CutsQuery';
import CutReviewQueryResolver from './cutReview/CutReviewQuery';
import FilmQueryResolver from './film/FilmQuery';
import FilmsQueryResolver from './film/FilmsQuery';

export default [
    FilmFieldResolver,
    FilmQueryResolver,
    FilmsQueryResolver,

    CutFieldResolver,
    CutQueryResolver,
    CutsQueryResolver,

    CutReviewFieldResolver,
    CutReviewQueryResolver,

    // biome-ignore lint/complexity/noBannedTypes: <>
] as NonEmptyArray<Function>;
