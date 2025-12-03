import type { MyReviewsQuery } from '@/graphql/api/operations';
import type { Cut, CutReview, Film } from '@/graphql/api/type';
import defaultDict from '@/shared/util/defaultDict';

export default function groupReviewsByFilm(cutReviews: MyReviewsQuery['myReviews']['cutReviews']) {
  const initGroups = defaultDict(() => ({
    film: {} as Partial<Film>,
    cuts: defaultDict(() => ({
      cut: {} as Partial<Cut>,
      reviews: [] as Partial<CutReview>[],
    })),
  }));

  const groups = cutReviews.reduce((acc, review) => {
    const { cut, ...restReview } = review;
    const { film, ...restCut } = cut;

    acc[film.id].film = film;
    acc[film.id].cuts[cut.id].cut = restCut;
    acc[film.id].cuts[cut.id].reviews.push(restReview);

    return acc;
  }, initGroups);

  return Object.values(groups).map(({ film, cuts }) => ({
    film: film,
    cuts: Object.values(cuts),
  }));
}
