export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never;
};
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  Upload: { input: any; output: any };
};

export type CreateOrUpdateReviewInput = {
  /** 감상평 내용 */
  contents: Scalars['String']['input'];
  /** 명장면 번호 */
  cutId: Scalars['Int']['input'];
};

/** 명장면 */
export type Cut = {
  __typename?: 'Cut';
  /** 영화 */
  film?: Maybe<Film>;
  /** 영화 아이디 */
  filmId: Scalars['Int']['output'];
  /** 명장면 고유 아이디 */
  id: Scalars['Int']['output'];
  /** 좋아요 확인 */
  isVoted: Scalars['Boolean']['output'];
  /** 명장면 사진 주소 */
  src: Scalars['String']['output'];
  /** 좋아요 수 */
  votesCount: Scalars['Int']['output'];
};

/** 감상평 */
export type CutReview = {
  __typename?: 'CutReview';
  /** 감상평 내용 */
  contents: Scalars['String']['output'];
  /** 생성 일자 */
  createdAt: Scalars['String']['output'];
  /** 명장면 번호 */
  cutId: Scalars['Int']['output'];
  /** 감상평 고유 아이디 */
  id: Scalars['Int']['output'];
  /** 유저가 작성한 리뷰인지 여부 */
  isMine: Scalars['Boolean']['output'];
  /** 수정 일자 */
  updatedAt: Scalars['String']['output'];
  user: User;
};

/** 감독 */
export type Director = {
  __typename?: 'Director';
  /** 감독 고유 아이디 */
  id: Scalars['Int']['output'];
  /** 감독 이름 */
  name: Scalars['String']['output'];
};

/** 필드 에러 타입 */
export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

/** 영화 */
export type Film = {
  __typename?: 'Film';
  /** 영화 줄거리 및 설명 */
  description: Scalars['String']['output'];
  /** 감독 */
  director: Director;
  /** 제작자 고유 아이디 */
  directorId: Scalars['Int']['output'];
  /** 영화 장르 */
  genre: Scalars['String']['output'];
  /** 영화 고유 아이디 */
  id: Scalars['Int']['output'];
  /** 포스터 이미지 URL */
  posterImg: Scalars['String']['output'];
  /** 개봉일 */
  releaseDate: Scalars['String']['output'];
  /** 영화 러닝 타임, minute */
  runningTime: Scalars['Float']['output'];
  /** 영화 부제목 */
  subtitle?: Maybe<Scalars['String']['output']>;
  /** 영화 제목 */
  title: Scalars['String']['output'];
};

export type LoginInput = {
  emailOrUsername: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

/** 로그인 반환 데이터 */
export type LoginResponse = FieldError | User;

export type Mutation = {
  __typename?: 'Mutation';
  createNotification: Notification;
  createOrUpdateReview?: Maybe<CutReview>;
  deleteReview: Scalars['Boolean']['output'];
  login: LoginResponse;
  logout: Scalars['Boolean']['output'];
  refreshAccessToken?: Maybe<Scalars['Boolean']['output']>;
  signUp: User;
  uploadProfileImage: Scalars['Boolean']['output'];
  vote: Scalars['Boolean']['output'];
};

export type MutationCreateNotificationArgs = {
  text: Scalars['String']['input'];
  userId: Scalars['Int']['input'];
};

export type MutationCreateOrUpdateReviewArgs = {
  cutReviewInput: CreateOrUpdateReviewInput;
};

export type MutationDeleteReviewArgs = {
  id: Scalars['Int']['input'];
};

export type MutationLoginArgs = {
  loginInput: LoginInput;
};

export type MutationSignUpArgs = {
  signUpInput: SignUpInput;
};

export type MutationUploadProfileImageArgs = {
  file: Scalars['Upload']['input'];
};

export type MutationVoteArgs = {
  cutId: Scalars['Int']['input'];
};

/** 알림 */
export type Notification = {
  __typename?: 'Notification';
  /** 작성 날짜 */
  createdAt: Scalars['String']['output'];
  /** 알림 고유 아이디 */
  id: Scalars['Int']['output'];
  /** 알림 메시지 */
  text: Scalars['String']['output'];
  /** 수정 날짜 */
  updatedAt: Scalars['String']['output'];
  /** 유저 아이디 */
  userId: Scalars['Int']['output'];
};

/** 페이지네이션 */
export type PaginatedFilms = {
  __typename?: 'PaginatedFilms';
  /** 커서 */
  cursor?: Maybe<Scalars['Int']['output']>;
  /** 영화 리스트 */
  films: Array<Film>;
};

export type Query = {
  __typename?: 'Query';
  /** 특정 장면을 조회합니다. */
  cut?: Maybe<Cut>;
  /** 장면의 감상평을 조회합니다. */
  cutReviews: Array<CutReview>;
  /** 장면 목록을 조회합니다. */
  cuts: Array<Cut>;
  /** 특정 영화를 상세히 조회합니다. */
  film?: Maybe<Film>;
  /** 영화 목록을 페이지네이션하여 조회합니다. */
  films: PaginatedFilms;
  /** 현재 접속자의 정보를 조회합니다. */
  me?: Maybe<User>;
  /** 세션에 해당되는 유저의 모든 알림을 가져옵니다. */
  notifications: Array<Notification>;
};

export type QueryCutArgs = {
  cutId: Scalars['Int']['input'];
};

export type QueryCutReviewsArgs = {
  cutId: Scalars['Int']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: Scalars['Int']['input'];
};

export type QueryCutsArgs = {
  filmId: Scalars['Int']['input'];
};

export type QueryFilmArgs = {
  filmId: Scalars['Int']['input'];
};

export type QueryFilmsArgs = {
  cursor?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type SignUpInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type Subscription = {
  __typename?: 'Subscription';
  newNotification: Notification;
};

/** 유저 고유 아이디 */
export type User = {
  __typename?: 'User';
  /** 생성일자 */
  createdAt: Scalars['String']['output'];
  /** 유저 이메일 */
  email: Scalars['String']['output'];
  /** 식별자 */
  id: Scalars['Int']['output'];
  /** 유저 프로필 사진 경로 */
  profileImage?: Maybe<Scalars['String']['output']>;
  /** 수정일자 */
  updatedAt: Scalars['String']['output'];
  /** 유저 이름 */
  username: Scalars['String']['output'];
};
