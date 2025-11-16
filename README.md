## 폴더 구조

```
web
├─ .env # 환경변수
├─ biome.json # 린터, 포맷터 통합
├─ next.config.ts # Next.js 설정
├─ package.json # 패키지 의존성 관리
└─ tsconfig.json # ts 컴파일러 설정
├─ codegen.yml # GraphQL 코드 생성기
├─ README.md
├─ public
│  └─ logo.svg
└─ src
   ├─ apollo # 아폴로 클라이언트 설정
   │  ├─ createApolloCache.ts
   │  ├─ createApolloClient.ts
   │  ├─ getPublicApolloClient.ts
   │  ├─ hydrate # 아폴로 SSR-CSR 하이드레이션
   │  │  ├─ index.ts
   │  │  ├─ Hydrate.tsx
   │  │  └─ dehydrate.ts
   │  └─ middleware # 아폴로 미들웨어
   │     ├─ index.ts
   │     ├─ httpUploadLink.ts
   │     ├─ webSocketLink.ts
   │     └─ errorLink.ts
   ├─ graphql # GraphQL API
   │  ├─ api
   │  │  ├─ type.ts
   │  │  ├─ operations.ts
   │  │  └─ hooks.ts
   │  ├─ queries
   │  │  ├─ me.graphql
   │  │  ├─ film.graphql
   │  │  ├─ films.graphql
   │  │  ├─ cut.graphql
   │  │  ├─ cuts.graphql
   │  │  └─ notifications.graphql
   │  ├─ mutations
   │  │  ├─ login.graphql
   │  │  ├─ logout.graphql
   │  │  ├─ signup.graphql
   │  │  ├─ uploadProfileImage.graphql
   │  │  ├─ createOrUpdateReview.graphql
   │  │  ├─ deleteReview.graphql
   │  │  └─ vote.graphql
   │  └─ subscriptions
   │     └─ newNotification.graphql
   ├─ app
   │  ├─ favicon.ico
   │  ├─ globals.css
   │  ├─ _providers # 프로바이더
   │  │  ├─ AuthInitializer.tsx
   │  │  └─ ClientProviders.tsx
   │  ├─ _store # 상태 저장소
   │  │  └─ useAuthStore.ts
   │  ├─ _shared # 공용 컴포넌트
   │  │  └─ Avatar.tsx
   │  ├─ layout.tsx # 공용 레이아웃
   │  ├─ _layout # 레이아웃 컴포넌트
   │  │  └─ nav
   │  │     ├─ index.ts
   │  │     ├─ Navbar.tsx
   │  │     ├─ SearchBar.tsx
   │  │     ├─ ColorModeSwitcher.tsx
   │  │     ├─ EntryActionButton.tsx
   │  │     ├─ UserMenu.tsx
   │  │     ├─ LogoutItem.tsx
   │  │     ├─ ProfileImageItem.tsx
   │  │     └─ notification
   │  │        ├─ Notification.tsx
   │  │        ├─ NotificationItem.tsx
   │  │        └─ useRealtimeAlarm.ts
   │  ├─ (browse)
   │  │  ├─ layout.tsx
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
   │  └─ film
   │     ├─ _components
   │     │  ├─ FilmCard.tsx
   │     │  └─ FilmList.tsx
   │     └─ [filmId]
   │        ├─ page.tsx
   │        └─ _components
   │           ├─ film-cut
   │           │  ├─ index.ts
   │           │  ├─ FilmCutDetail.tsx
   │           │  ├─ FilmCutList.tsx
   │           │  ├─ FilmCutListLoader.tsx
   │           │  ├─ FilmCutModal.tsx
   │           │  ├─ FilmCutReview.tsx
   │           │  ├─ FilmCutReviewDeleteAlert.tsx
   │           │  ├─ FilmCutReviewRegisterModal.tsx
   │           │  └─ FilmCutVote.tsx
   │           └─ FilmDetail.tsx
   └─ shared # 서드파티 컴포넌트
      └─ ui
         └─ chakra
            ├─ color-mode.tsx
            ├─ provider.tsx
            ├─ toaster.tsx
            └─ tooltip.tsx
```
