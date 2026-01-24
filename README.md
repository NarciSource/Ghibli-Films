## 구현 사항

### 토큰 저장 방식의 보안적 재설계

#### 인증 방식 비교

| 인증 방식 | 저장 위치 | 장점 | 단점 / 보안 문제 | 사용 이유 / 특징 |
| --- | --- | --- | --- | --- |
| **쿠키 기반<br>(세션 쿠키)** | 쿠키 | - 브라우저가 자동으로 서버에 전송<br>- 서버에서 세션 관리 가능 | - XSS 공격 시 JS로 쿠키 탈취 가능<br>- 다른 도메인에서 접근 가능<br>- 세션 탈취 위험<br>- CSRF 공격 가능 | - 전통적 방식<br>- 서버 중심 인증<br>- 취약점 존재 |
| **로컬스토리지 기반<br>(JWT)** | localStorage | - SPA 친화적<br>- 서버 상태 관리 불필요<br>- 프론트에서 토큰 갱신 제어 가능 | - XSS 공격 시 토큰 탈취 가능<br>- 민감정보 노출 위험 | - SPA와 stateless JWT 환경에 맞춰 편의성 강조<br>- 보안 취약 |
| **쿠키 기반<br>(JWT + HttpOnly 쿠키)** | Secure 쿠키 + HttpOnly | - BFF 친화적<br>- 서버 상태 최소화 가능<br>- XSS 공격 안전<br>- CSRF 보호 가능 | - CORS/서브도메인 설정 필요<br>- 클라이언트에서 토큰 직접 접근 불가<br>- 갱신 로직 필요 | - 로컬스토리지 사용 후 보안 문제로 회귀 |
| **OIDC 기반 인증<br>(Keycloak + OAuth2-Proxy)** ✅ | **인증 프록시 내부 세션** | - OIDC 표준 준수<br>- 브라우저에 토큰 미노출<br>- XSS에 강함<br>- 중앙 인증/인가 가능 | - 인프라 복잡도 증가<br>- 프록시 구성 필요 | - 보안 최우선<br>- SPA/MSA에 적합한 권장 구조 |

#### 보안 관점에서의 주요 차이
| 항목 | JWT + HttpOnly 쿠키 | OIDC 기반 인증 ✅ |
| --- | --- | --- |
| 토큰 노출 범위 | 브라우저 쿠키에 JWT 저장<br>(JS 접근 불가) | 브라우저에는 **프록시 세션 쿠키만 저장**<br>OIDC 토큰은 프록시 내부에만 존재 |
| 브라우저 JS 접근 | 불가 (HttpOnly) | 불가 (HttpOnly) |
| 애플리케이션 서버의 토큰 인식 | **직접 토큰 검증 필요** | **토큰 자체를 알 필요 없음** |
| 토큰 검증 주체 | 애플리케이션 서버 | oauth2-proxy |
| 인가 정책 위치 | 애플리케이션 코드 | IdP(Keycloak) + OAuth2-Proxy |
| 로그아웃 처리 | 애플리케이션별 구현 | 프록시 + IdP 기반 중앙 제어 |
| 토큰 회전/만료 | 애플리케이션 책임 | IdP 책임 (프록시는 위임) |
| 아키텍처 친화성 | BFF 친화적 | Gateway / Zero Trust / MSA 친화적 |
| 보안 경계 | 앱 내부에 인증 로직 포함 | **인증 경계가 앱 외부로 분리** |

## 폴더 구조

```
server
├─ README.md
├─ .env # 환경변수
├─ .babelrc # 트랜스컴파일러
├─ biome.json # 린터, 포맷터 통합
├─ package.json # 패키지 의존성 관리
├─ tsconfig.json # ts 컴파일러 설정
├─ codegen.yml # 스키마 파일저장
├─ Dockerfile # 도커파일
├─ graphql # GraphQL 스키마
│  ├─ anonymousSchema.graphql
│  └─ authenticatedSchema.graphql
└─ src
   ├─ index.ts
   ├─ express # 익스프레스 서버 설정
   │  └─ createExpressApp.ts
   ├─ apollo # 아폴로 서버 설정
   │  ├─ index.ts
   │  ├─ context # 컨텍스트 타입 정의
   │  │  ├─ IContext.ts
   │  │  └─ WsContext.ts
   │  ├─ schema
   │  │  └─ createSchema.ts # 리졸버 스키마 생성
   │  ├─ server
   │  │  ├─ setupApollo.ts # graphql 서버 구성
   │  │  ├─ mountApolloServer.ts
   │  │  ├─ createApolloServer.ts
   │  │  └─ registerMiddlewares.ts
   │  └─ subscription
   │     ├─ createSubscriptionServer.ts # graphql-ws 서버 구성
   │     └─ pubSub.ts # 구독 알림 이벤트
   ├─ auth
   │  ├─ IdToken.ts # ID토큰 타입
   │  ├─ IdentityInput.ts # 토큰 데이터 타입
   │  ├─ resolveIdentityFromRequest.ts # 토큰 분석
   │  └─ resolveVerifiedUser.ts # 계정 연동
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
   ├─ dataloaders # 요청 단위 쿼리 배치
   │  ├─ createLoader.ts
   │  └─ cutVoteLoader.ts
   ├─ resolvers # GraphQL 리졸버
   │  ├─ fields
   │  │  ├─ Film.ts
   │  │  ├─ Cut.ts
   │  │  └─ CutReview.ts
   │  ├─ anonymous
   │  │  ├─ index.ts
   │  │  ├─ film
   │  │  │  ├─ FilmQuery.ts
   │  │  │  └─ FilmsQuery.ts
   │  │  ├─ cut
   │  │  │  ├─ CutQuery.ts
   │  │  │  └─ CutsQuery.ts
   │  │  └─ cutReview
   │  │     ├─ type.ts
   │  │     └─ CutReviewQuery.ts
   │  └─ authenticated
   │     ├─ index.ts
   │     ├─ user
   │     │  ├─ MeQuery.ts
   │     │  ├─ MyReviewsQuery.ts
   │     │  └─ UploadProfileImageMutation.ts
   │     ├─ cut
   │     │  └─ VoteMutation.ts
   │     ├─ cutReview
   │     │  ├─ type.ts
   │     │  ├─ CreateOrUpdateMutation.ts
   │     │  └─ DeleteMutation.ts
   │     └─ notification
   │        ├─ NotificationQuery.ts
   │        ├─ NotificationMutation.ts
   │        └─ NotificationSubscription.ts
   └─ utils
      └─ parseBearerToken.ts
```
