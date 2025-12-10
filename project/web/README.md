## 라우터 구조

```
Route (app)
├─ 📁 (browse)
│  ├─ 📁 (home)
│  │  └─ ○ /
│  └─ ƒ /search
├─ 📁 (authentication)
│  ├─ ○ /login
│  └─ ○ /logout
├─ 📁 (personal)
│  └─ ƒ /reviews
├─ ● /film/[filmId]
│  ├─ ƒ /cut/[cutId]
│  └─ ƒ /(.)cut/[cutId]
├─ ƒ /admin
└─ ○ /sitemap.xml

○  (Static)   prerendered as static content
●  (SSG)      prerendered as static HTML (uses generateStaticParams)
ƒ  (Dynamic)  server-rendered on demand
```

## 폴더 구조

```
web
├─ .env # 환경변수
├─ biome.json # 린터, 포맷터 통합
├─ next.config.ts # Next.js 설정
├─ package.json # 패키지 의존성 관리
├─ tsconfig.json # ts 컴파일러 설정
├─ codegen.yml # GraphQL 코드 생성기
├─ README.md
├─ public
│  ├─ logo.svg
│  └─ thumbnail.png
└─ src
   ├─ apollo # 아폴로 클라이언트 설정
   │  ├─ createApolloCache.ts # 캐시 설정
   │  ├─ createApolloLink.ts # 링크 설정
   │  ├─ createApolloClient.ts # 클라이언트 생성
   │  ├─ hydrate # 아폴로 SSR-CSR 하이드레이션
   │  │  ├─ index.ts
   │  │  ├─ Hydrate.tsx
   │  │  └─ dehydrate.ts
   │  └─ middleware # 아폴로 미들웨어(링크 파이프라인)
   │     ├─ index.ts
   │     ├─ httpUploadLink.ts # HTTP 전송+파일 업로드 링크 
   │     ├─ dynamicCookieLink.ts # 쿠키 삽입 링크
   │     ├─ webSocketLink.ts # WS 전송 링크
   │     └─ errorLink.ts # 에러 처리 링크
   ├─ graphql # GraphQL API
   │  ├─ api
   │  │  ├─ type.ts
   │  │  ├─ operations.ts
   │  │  └─ hooks.ts # GraphQL 훅
   │  ├─ queries # 쿼리
   │  │  ├─ me.graphql
   │  │  ├─ myReviews.graphql
   │  │  ├─ film.graphql
   │  │  ├─ films.graphql
   │  │  ├─ cut.graphql
   │  │  ├─ cuts.graphql
   │  │  └─ notifications.graphql
   │  ├─ mutations # 뮤테이션
   │  │  ├─ login.graphql
   │  │  ├─ logout.graphql
   │  │  ├─ signup.graphql
   │  │  ├─ uploadProfileImage.graphql
   │  │  ├─ createOrUpdateReview.graphql
   │  │  ├─ deleteReview.graphql
   │  │  └─ vote.graphql
   │  └─ subscriptions # 구독
   │     └─ newNotification.graphql
   ├─ app
   │  ├─ favicon.ico
   │  ├─ globals.css
   │  ├─ sitemap.ts # 사이트맵
   │  ├─ _providers # 프로바이더
   │  │  ├─ AuthInitializer.tsx
   │  │  └─ ClientProviders.tsx
   │  ├─ _store # 상태 저장소
   │  │  └─ useAuthStore.ts
   │  ├─ _shared # 공용 컴포넌트
   │  │  ├─ Avatar.tsx
   │  │  └─ ErrorFallback.tsx
   │  ├─ layout.tsx # 공용 레이아웃
   │  ├─ _layout # 레이아웃 컴포넌트
   │  │  └─ nav
   │  │     ├─ index.ts
   │  │     ├─ Navbar.tsx
   │  │     ├─ SearchBar.tsx
   │  │     ├─ ColorModeSwitcher.tsx
   │  │     ├─ EntryActionButton.tsx
   │  │     ├─ userMenu
   │  │     │  ├─ LogoutItem.tsx
   │  │     │  ├─ ProfileImageItem.tsx
   │  │     │  └─ UserMenu.tsx
   │  │     └─ notification
   │  │        ├─ Notification.tsx
   │  │        ├─ NotificationItem.tsx
   │  │        └─ useRealtimeAlarm.ts
   │  ├─ error.tsx # 에러 페이지
   │  ├─ (browse)
   │  │  ├─ layout.tsx
   │  │  ├─ loading.tsx
   │  │  ├─ (home) # 기본 페이지
   │  │  │  └─ page.tsx
   │  │  └─ search
   │  │     └─ page.tsx
   │  ├─ (authentication)
   │  │  ├─ layout.tsx
   │  │  ├─ _components
   │  │  │  └─ CommonLayout.tsx
   │  │  ├─ login
   │  │  │  ├─ page.tsx
   │  │  │  └─ _components
   │  │  │     └─ LoginForm.tsx
   │  │  └─ signup
   │  │     ├─ page.tsx
   │  │     └─ _components
   │  │        └─ SignUpForm.tsx
   │  ├─ (personal)
   │  │  └─ reviews
   │  │     ├─ loading.tsx
   │  │     ├─ error.tsx
   │  │     ├─ page.tsx
   │  │     ├─ _lib
   │  │     │  └─ groupReviewsByFilm.ts
   │  │     └─ _components
   │  │        ├─ FilmCard.tsx
   │  │        ├─ CutCard.tsx
   │  │        └─ cut-review
   │  │           ├─ index.ts
   │  │           ├─ FilmCutReview.tsx
   │  │           ├─ FilmCutReviewDeleteAlert.tsx
   │  │           └─ FilmCutReviewRegisterModal.tsx
   │  ├─ film
   │  │  ├─ _hooks
   │  │  │  └─ useInfiniteScroll.tsx
   │  │  ├─ _components
   │  │  │  ├─ FilmCard.tsx
   │  │  │  └─ FilmList.tsx
   │  │  └─ [filmId]
   │  │     ├─ layout.tsx
   │  │     ├─ page.tsx
   │  │     ├─ _store
   │  │     │  └─ useCutsStore.ts
   │  │     ├─ @overview # 병렬 라우터
   │  │     │  ├─ default.tsx
   │  │     │  ├─ loading.tsx
   │  │     │  ├─ page.tsx
   │  │     │  └─ _components
   │  │     │     └─ FilmDetail.tsx
   │  │     ├─ @scenes
   │  │     │  ├─ default.tsx
   │  │     │  ├─ loading.tsx
   │  │     │  ├─ page.tsx
   │  │     │  └─ _components
   │  │     │     └─ CutList.tsx
   │  │     └─ @viewer
   │  │        ├─ default.tsx
   │  │        ├─ loading.tsx
   │  │        ├─ cut
   │  │        │  └─ [cutId]
   │  │        │     └─ page.tsx
   │  │        ├─ (.)cut # 가로채기 라우터
   │  │        │  ├─ layout.tsx
   │  │        │  └─ [cutId]
   │  │        │     ├─ error.tsx
   │  │        │     ├─ loading.tsx
   │  │        │     ├─ page.tsx
   │  │        │     └─ _components
   │  │        │        ├─ CutModal.tsx
   │  │        │        ├─ CutSlide.tsx
   │  │        │        └─ LazySlide.tsx
   │  │        └─ _components
   │  │           ├─ CutDetail.tsx
   │  │           ├─ CutVote.tsx
   │  │           └─ Loading.tsx
   │  └─ admin
   │     ├─ page.tsx
   │     ├─ error.tsx
   │     ├─ _actions # 서버 액션
   │     │  └─ revalidateAction.ts
   │     └─ _components
   │        ├─ PageTreeCard.tsx
   │        ├─ PageTreeCardItem.tsx
   │        ├─ RevalidateControl.tsx
   │        └─ AnimationCheck.tsx
   └─ shared
      ├─ ui
      │  └─ chakra # 서드파티 컴포넌트
      │     ├─ color-mode.tsx
      │     ├─ provider.tsx
      │     ├─ toaster.tsx
      │     └─ tooltip.tsx
      └─ util
         └─ defaultDict.ts # 기본값 자동 딕셔너리 자료구조
```
