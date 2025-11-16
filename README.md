## 구현 사항

### 토큰 저장 방식의 보안적 재설계

| 인증 방식 | 저장 위치 | 장점 | 단점 / 보안 문제 | 사용 이유 / 특징 |
| --- | --- | --- | --- | --- |
| **쿠키 기반<br>(세션 쿠키)** | 쿠키 | - 브라우저가 자동으로 서버에 전송<br>- 서버에서 세션 관리 가능 | - XSS 공격 시 JS로 쿠키 탈취 가능<br>- 다른 도메인에서 접근 가능<br>- 세션 탈취 위험<br>- CSRF 공격 가능 | - 전통적 방식<br>- 서버 중심 인증<br>- 취약점 존재 |
| **로컬스토리지 기반<br>(JWT)** | localStorage | - 서버 상태 관리 불필요<br>- SPA 친화적<br>- 프론트에서 토큰 갱신 제어 가능 | - XSS 공격 시 토큰 탈취 가능<br>- 민감정보 노출 위험 | - SPA와 stateless JWT 환경에 맞춰 편의성 강조<br>- 보안 취약 |
| **쿠키 기반<br>(JWT + HttpOnly 쿠키)** ✅ | Secure 쿠키 + HttpOnly | - XSS 공격 안전<br>- CSRF 보호 가능<br>- SPA에서도 자동 전송<br>- 서버 상태 최소화 가능 | - CORS/서브도메인 설정 필요<br>- 클라이언트에서 토큰 직접 접근 불가<br>- 갱신 로직 필요 | - SPA 친화 + 보안 확보<br>- 로컬스토리지 사용 후 보안 문제로 회귀 |

## 폴더 구조

```
server
├─ .babelrc # 트랜스컴파일러
├─ .env # 환경변수
├─ biome.json # 린터, 포맷터 통합
├─ package.json # 패키지 의존성 관리
├─ tsconfig.json # ts 컴파일러 설정
├─ README.md
└─ src
   ├─ index.ts
   ├─ apollo # 아폴로 서버 설정
   │  ├─ createApolloServer.ts # graphql 서버 구성
   │  ├─ createSubscriptionServer.ts # graphql-ws 서버 구성
   │  ├─ IContext.ts # 컨텍스트 인터페이스
   │  ├─ createSchema.ts # 리졸버 스키마 생성
   │  └─ pubSub.ts # 구독 알림 이벤트 발생용 pub/sub
   ├─ middlewares # 아폴로 미들웨어
   │  ├─ isAuthenticated.ts # 사용자 인증 확인
   │  └─ refreshAccessToken.ts
   ├─ db # 데이터베이스 구성
   │  ├─ db-client.ts
   │  ├─ es-client.ts
   │  └─ redis-client.ts
   ├─ entities # 엔터티 모델
   │  ├─ User.ts
   │  ├─ User.Error.ts
   │  ├─ Film.ts
   │  ├─ PaginatedFilm.ts
   │  ├─ Cut.ts
   │  ├─ CutReview.ts
   │  ├─ CutVote.ts
   │  ├─ Director.ts
   │  └─ Notification.ts
   ├─ auth
   │  ├─ tokens # 토큰 관리
   │  │  ├─ index.ts
   │  │  ├─ accessToken.ts
   │  │  └─ refreshToken.ts
   │  └─ transport.ts
   ├─ dataloaders # 요청 단위 쿼리 배치
   │  ├─ createLoader.ts
   │  └─ cutVoteLoader.ts
   ├─ resolvers # GraphQL 리졸버
   │  ├─ index.ts
   │  ├─ user
   │  │  ├─ type.ts
   │  │  ├─ queries
   │  │  │  └─ Me.ts
   │  │  └─ mutations
   │  │     ├─ Login.ts
   │  │     ├─ Logout.ts
   │  │     ├─ SignUp.ts
   │  │     └─ UploadProfileImage.ts
   │  ├─ film
   │  │  ├─ FilmField.ts
   │  │  └─ FilmQuery.ts
   │  ├─ cut
   │  │  ├─ type.ts
   │  │  ├─ queries
   │  │  │  ├─ Cut.ts
   │  │  │  └─ Review.ts
   │  │  ├─ fields
   │  │  │  ├─ Cut.ts
   │  │  │  └─ Review.ts
   │  │  └─ mutations
   │  │     ├─ CreateOrUpdateReview.ts
   │  │     ├─ DeleteReview.ts
   │  │     └─ Vote.ts
   │  └─ notification
   │     ├─ NotificationQuery.ts
   │     ├─ NotificationMutation.ts
   │     └─ NotificationSubscription.ts
   └─ utils
      └─ parseBearerToken.ts
```