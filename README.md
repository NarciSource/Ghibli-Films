# 스튜디오 지브리 영화의 명장면 감상평 서비스

**GraphQL** 학습을 목적으로 제작된 웹 서비스.
REST API의 오버페칭/언더페칭 문제를 해결하기 위해 GraphQL을 도입하고, Apollo + Express를 기반으로 구현.  
또한, Elastic Stack(Elasticsearch, Logstash, Kibana) 을 도입하여 MySQL 데이터를 실시간으로 동기화하고,  
Elasticsearch 기반의 고성능 검색 기능과 Kibana를 통한 데이터 시각화 및 분석 환경을 제공.

_GraphQL과 타입스크립트로 개발하는 웹 서비스_ (저자: 강화수)에서 제공하는 [🔗예제 프로젝트](https://github.com/hwasurr/graphql-book-fullstack-project)를 바탕으로 함.

## 기술스택

[![graphql](https://img.shields.io/badge/GraphQL-E10098?style=flat&logo=graphql&logoColor=white)](https://graphql.org/)
[![apollo](https://img.shields.io/badge/Apollo-311C87?style=flat&logo=apollographql&logoColor=white)](https://www.apollographql.com/)
[![elasticstack](https://img.shields.io/badge/Elastic_Stack-005571?style=flat&logo=elasticstack&logoColor=white)](https://www.elastic.co/elastic-stack)  
[![express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)](https://expressjs.com/ko/)
[![nodejs](https://img.shields.io/badge/Node.js-5FA04E?style=flat&logo=nodedotjs&logoColor=white)](https://nodejs.org/ko/)
[![typeorm](https://img.shields.io/badge/TypeORM-FE0803?style=flat&logo=typeorm&logoColor=white)](https://typeorm.io/)  
[![nextjs](https://img.shields.io/badge/Next.js-000000?style=flat&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![zustand](https://img.shields.io/badge/🐻_Zustand-F56D2E?style=flat&logoColor=white)](https://zustand-demo.pmnd.rs/)
[![chakra ui](https://img.shields.io/badge/Chakra_UI-1BB2A9?style=flat&logo=chakraui&logoColor=white)](https://chakra-ui.com/)  
[![elasticsearch](https://img.shields.io/badge/Elasticsearch-005571?style=flat&logo=elasticsearch&logoColor=white)](https://www.elastic.co/kr/elasticsearch)
[![logstash](https://img.shields.io/badge/Logstash-005571?style=flat&logo=logstash&logoColor=white)](https://www.elastic.co/kr/logstash)
[![kibana](https://img.shields.io/badge/Kibana-005571?style=flat&logo=kibana&logoColor=white)](https://www.elastic.co/kr/kibana)
[![mysql](https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![redis](https://img.shields.io/badge/Redis-FF4438?style=flat&logo=redis&logoColor=white)](https://redis.io/)  
[![biome](https://img.shields.io/badge/Biome-60A5FA?style=flat&logo=biome&logoColor=white)](https://biomejs.dev/)
[![typescript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)  
[![docker-compose](https://img.shields.io/badge/Docker_Compose-2AB4FF.svg?logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MjMgNjY1Ij4KICA8cGF0aCBmaWxsPSIjZmNmY2ZjIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00MTggMWMtNiAxLTkgMy0xMyA4LTQgMy00IDMtMTAgMS0xMi02LTYwIDAtNjYgOC01IDYtMTEgNDQtOCA1MGwyMyAxN2M3IDQgNyA2IDIgNy0yMyAzLTM3IDI5LTI5IDUyIDMgOSAzIDktMTAgNi0xOS01LTI0LTYtNDUtNS00NyAwLTg2IDE4LTEwOSA1MGExMzUgMTM1IDAgMCAwLTI0IDY0Yy0zIDI4IDIgNDggMTcgNzJsMjIgMjdjNDAgNDQgNDEgNjYgMyA5MS00NSAzMC0xMDQgMTktMTA2LTIwLTEtMTYgNC0yOSAxNy01MiAxMy0yNCAxNC0zMyAzLTUybDEzLThjMjQtMTIgMjItOSAyMy0zNCAwLTIyIDItMjAtMjMtMzAtMTgtNi0yMC02LTQwLTEtMjggOS00MCAxNC00MSAxOCAwIDItMSAzLTIgMy03IDAtMTQgMTItMTUgMjUtMSAyMSA2IDI5IDMwIDM2IDMwIDkgMzUgMjQgMTkgNDktMzYgNTMtMzIgMTAyIDExIDEyMSAzNSAxNiA3NCAxMyAxMTktOWwxMS01IDMgMzJjMCAzNC00MCAzOC04OSA4bC0xNi0xMGMtNTEtMjktMTAyIDI0LTY2IDcwIDE1IDIwIDQyIDIxIDQ2IDIgMi04IDAtMTEtMTAtMTktMTYtMTItMTctMjQtMi0yNyA1LTEgMjYgOCAyOCAxMmwzNCAyOSAyMCAxMiAyMCA4YzM2IDEzIDgyLTE1IDgyLTUwIDAtMTAgMC0xMCA2LTUgMTAgMTAgMTggMTYgMjMgMTkgNiAzIDYgNCAxIDctNSAyLTUgMi01IDctMSA4IDEgMjkgNCAzMyA0IDcgNjMgNDYgNjkgNDYgMyAwIDQ4LTI1IDUxLTI5IDItMSAzLTM0IDEtMzZsLTE2LTljLTE2LTgtMTYtOC05LTEwIDE5LTcgMzctMjcgNDMtNDdsNS0xYTE2NSAxNjUgMCAwIDAgNjAtMTNjOSAwIDM0LTIyIDQwLTM0bDQtOGM0LTcgNi0yNiA2LTU2IDAtMjkgMS0yNy0xMC0yOS02LTItOC0zLTEzLTgtMzAtMjktNzktMjMtOTYgMTAtMyA3LTMgNy04IDlzLTYgNS01IDE3djE1YzEgMTQgNCAxNiAzNCAyOGwxMiA2YzcgMyA3IDMgMzAtNyA4LTMgOS0zIDkgMS02IDIyLTY0IDQyLTczIDI0YTg3IDg3IDAgMCAwLTYzLTQyYy04IDAtOCAwIDYtMTFhNzM2IDczNiAwIDAgMCA4NS04OWwzLTVjMTktMzEgMjEtNzMgMy0xMDctNy0xNS0yMy0zNS0zNi00OC0zOS0zNi00Ni00Ny0zOC02MiA0LTggMTUtMTcgMjAtMTVhNDUyIDQ1MiAwIDAgMCA1NS0xMmMxMS00IDEzLTUgMTQtMTAgMC00IDItNyA5LTE0IDI0LTI2LTgtODAtNDMtNzFNMjI4IDMzNGMxIDEgMCAxLTEgMS0yMCAwLTI4IDMyLTEyIDQyIDE3IDkgMzctMyAzNy0yMiAwLTctNy0xNy0xMS0xN3YtMWMzLTIgMC0zLTctNGwtNiAxbTU0IDgtNCAxYy0yMiAzLTI1IDM5LTMgNDQgMjQgNSA0MS0yMSAyNS0zOGwtNS0zdi0zYy0xLTItMTQtMy0xMy0xbS00OSAxMjBjLTYgNy05IDE0LTkgMjQgMCA4IDEgMTIgMyA2IDItMTIgOC0yOCAxMy0zM3YtM2MtMSAwLTQgMi03IDZtOTcgNGMwIDIgMjMgMTcgMjcgMTcgMiAwIDEtMy00LTctOS03LTIzLTEzLTIzLTEwbS01NCA2Yy0yMSA1MSAyOSA5NiA3MyA2NyA4LTYgOC03LTEtOC0zOS0zLTYzLTIzLTY2LTU0LTItMTItMy0xMy02LTUiLz4KPC9zdmc+Cg==&style=flat&logoColor=black)](https://docs.docker.com/compose/)
[![docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=Docker&logoColor=white)](https://www.docker.com/)
[![nginx](https://img.shields.io/badge/NGINX-009639?style=flat&logo=nginx&logoColor=white)](https://nginx.org/)

## 스크린샷

| ![films-day](https://github.com/user-attachments/assets/7c071968-0f43-4a72-82f4-d06029c3a3f8) | ![films-night](https://github.com/user-attachments/assets/996ec4fb-bbb3-4b72-88ab-eae7c5980e7b) |
| --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| ![search](https://github.com/user-attachments/assets/59b73f10-650f-486e-8be8-1298c9f7271d)    | ![scene](https://github.com/user-attachments/assets/584f2688-83b0-4ec0-adbb-d45d296090eb)       |
| ![reviews](https://github.com/user-attachments/assets/22f9634c-69e5-43da-8969-ffbfff6fad0a)   | ![admin](https://github.com/user-attachments/assets/3c824c02-ff8b-4d88-adf3-aec58a15ba36)       |
| ![signup](https://github.com/user-attachments/assets/304b2852-4ed7-46ff-8760-10fb773deaeb)    | ![login](https://github.com/user-attachments/assets/5c386794-61c3-4fa7-b2ae-e5ea48583607)       |

## 다이어그램

### Architecture Diagram

![Architecture Diagram](https://github.com/user-attachments/assets/c2f61824-7a92-4b2b-ad73-032a7bd85f81)

- 백엔드
    - **Apollo Server**: Express 플러그인으로 GraphQL query, mutation, resolver 처리
    - **Express**: 웹 서버 및 미들웨어 관리
    - **비즈니스 로직**: 클라이언트 요청을 받아 MySQL과 Redis에 데이터 저장 및 캐싱
    - **MySQL**: 영속적 데이터 저장 (영화, 명장면, 감상평)
    - **Redis**: 캐싱 및 성능 최적화
    - **Elasticsearch**: 검색 엔진, 영화 데이터에 대한 텍스트 검색 지원
    - **Logstash**: 데이터 파이프라인, MySQL에서 Elasticsearch로 동기화
    - **Kibana**: Elasticsearch 데이터를 시각화, 검색/로그 분석 및 모니터링 대시보드 제공
- 프론트엔드
    - **Apollo Client**: GraphQL 쿼리/뮤테이션 전송, 클라이언트 캐싱, 데이터 페칭
    - **Nest.js**: SSR, SSG UI 렌더링 및 상태 관리
    - **Chakra UI**: 웹 UI 구성 및 스타일링
- 데이터 흐름
    1. 클라이언트에서 Apollo Client로 GraphQL 요청 전송
    2. Apollo Server + Express에서 요청 처리 후 비즈니스 로직 실행
    3. MySQL/Elasticsearch/Redis에서 필요한 데이터 조회 또는 저장
        1. MySQL에 저장된 데이터는 Logstash 파이프라인을 통해 수집·정제되어 Elasticsearch로 동기화
    4. 서버에서 처리된 데이터를 GraphQL Response로 클라이언트에 반환

### GraphQL Schema Diagram

> GraphQL Voyager는 GraphQL 스키마를 시각적으로 탐색하고 구조를 이해할 수 있도록 돕는 정적/인터랙티브 시각화 도구  
> 타입과 타입 간 참조를 그래프 형태로 표현

| [![voyager](https://github.com/user-attachments/assets/f6981b18-d39a-449d-a7d2-97598ebf481f)](https://narcisource.github.io/Ghibli-Films/) |
| ------------------------------------------------------------------------------------------------------------------------------------------ |
| [GraphQL Voyager 바로가기](https://narcisource.github.io/Ghibli-Films/)                                                                    |

```mermaid
classDiagram
    direction LR

    %% 타입 %%
    class Cut {
      +film : Film
      +filmId : Int!
      +id : Int!
      +isVoted : Boolean!
      +src : String!
      +votesCount : Int!
    }
    class CutReview {
      +contents : String!
      +createdAt : String!
      +cutId : Int!
      +id : Int!
      +isMine : Boolean!
      +updatedAt : String!
      +user : User!
    }
    class Director {
      +id : Int!
      +name : String!
    }
    class FieldError {
      +field : String!
      +message : String!
    }
    class Film {
      +description : String!
      +director : Director!
      +directorId : Int!
      +genre : String!
      +id : Int!
      +posterImg : String!
      +releaseDate : String!
      +runningTime : Float!
      +subtitle : String
      +title : String!
    }
    class LoginResponse {
      <<union>>
    }
    class Mutation:::root {
      +createNotification : Notification!
      +createOrUpdateReview : CutReview
      +deleteReview : Boolean!
      +login : LoginResponse!
      +logout : Boolean!
      +refreshAccessToken : RefreshAccessTokenResponse
      +signUp : User!
      +uploadProfileImage : Boolean!
      +vote : Boolean!
    }
    class Notification {
      +createdAt : String!
      +id : Int!
      +text : String!
      +updatedAt : String!
      +userId : Int!
    }
    class PaginatedFilms {
      +cursor : Int
      +films : [Film!]!
    }
    class Query:::root {
      +cut : Cut
      +cutReviews : [CutReview!]!
      +cuts : [Cut!]!
      +film : Film
      +films : PaginatedFilms!
      +me : User
      +notifications : [Notification!]!
    }
    class RefreshAccessTokenResponse {
      +accessToken : String!
    }
    class Subscription:::root {
      +newNotification : Notification!
    }
    class User {
      +createdAt : String!
      +email : String!
      +id : Int!
      +profileImage : String
      +updatedAt : String!
      +username : String!
    }
    class UserWithToken {
      +accessToken : String!
      +user : User!
    }

    %% 관계 %%
    Cut --> Film
    CutReview --> User
    Film --> Director
    LoginResponse --> FieldError
    LoginResponse --> UserWithToken
    UserWithToken --> User
    PaginatedFilms --> Film
    Query --> Cut
    Query --> CutReview
    Query --> PaginatedFilms
    Query --> Film
    Query --> User
    Query --> Notification
    Mutation --> Notification
    Mutation --> LoginResponse
    Mutation --> User
    Mutation --> CutReview
    Mutation --> RefreshAccessTokenResponse
    Subscription --> Notification

    %% 스타일링 %%
    classDef root fill:#EEE
```

### Entity Relationship Diagram

```mermaid
erDiagram
    direction LR

    FILM {
        int id PK
        int directorId FK
        string title
        string subtitle
        string genre
        int runningTime
        string description
        string posterImg
        string releaseDate
    }

    CUT {
        int id PK
        int filmId FK
        string src
    }

    CUT_REVIEW {
        int id PK
        int cutId FK
        int userId FK
        string contents
        datetime createdAt
        datetime updatedAt
    }

    CUT_VOTE {
        int userId PK, FK
        int cutId PK, FK
    }

    USER {
        int id PK
        string username
        string email
        string password
        string profileImage
        datetime createdAt
        datetime updatedAt
    }

    DIRECTOR {
        int id PK
        string name
    }

    %% 관계 정의
    DIRECTOR ||--o{ FILM : "directs"

    FILM ||--o{ CUT : "has"

    USER ||--o{ CUT_REVIEW : "writes"
    USER ||--o{ CUT_VOTE : "votes"

    CUT ||--o{ CUT_REVIEW : "has"
    CUT ||--o{ CUT_VOTE : "has"
```

| 테이블         | 설명                                                               | 관계                            |
| -------------- | ------------------------------------------------------------------ | ------------------------------- |
| **FILM**       | 영화 정보 테이블 (제목, 감독, 장르, 상영시간, 포스터, 개봉년도 등) |
| **CUT**        | 영화의 명장면 테이블 (영화ID, 사진URL)                             | FILM과 1:N 관계                 |
| **CUT_REVIEW** | 명장면 감상평 테이블 (명장면ID, 사용자ID, 감상평)                  | CUT과 USER와 각각 N:1 관계      |
| **CUT_VOTE**   | 명장면 투표 저장 테이블 (명장면ID, 사용자ID)                       | CUT과 USER의 다대다 관계 테이블 |
| **USER**       | 사용자 정보 테이블 (유저이름, 비밀번호)                            |
| **DIRECTOR**   | 감독 정보 테이블                                                   |

### Comparison Flowchart

```mermaid
flowchart LR
    subgraph REST
        rest_client[Client] -->|GET /film/:id| rest_api[REST API]
        rest_client -->|GET /cut/:id/reviews| rest_api
        rest_client -->|GET /review/:id/user| rest_api
        rest_api --> db[(Database)]
    end

    subgraph GraphQL
        graph_client[Client] -->|"POST /graphql {film{cuts{reviews{user}}}}"| graph_api[GraphQL API]
        graph_api --> db
    end
```

| REST                                      | GraphQL                                                    |
| ----------------------------------------- | ---------------------------------------------------------- |
| 여러 엔드포인트 호출 필요                 | 단일 엔드포인트(/graphql)에서 요청 처리                    |
| 오버페칭/언더페칭 발생                    | 클라이언트가 원하는 데이터 구조를 직접 정의                |
| 요청 횟수가 늘어나 네트워크 효율 하락     | 한 번의 요청으로 필요한 데이터만 가져와 응답 사이즈를 감소 |
| 역방향 탐색을 하려면 별도 엔드포인트 필요 | 그래프 모델 기반으로 양방향 탐색의 자유로움                |

GraphQL 쿼리 예시

```js
{
  film(id: 1) {
    title
    cuts {
      votesCount
      reviews {
        contents
        user {
          username
          email
        }
      }
    }
  }
}
```

## 폴더 구조

<details>
<summary>열기</summary>

```
Ghibli-Films
├─ .env # 환경변수
├─ package.json # 패키지 의존성 관리
│  └─ package-lock.json
├─ codegen.yml # GraphQL 스키마 추출기
├─ README.md
├─ docker-compose.yml # 도커 컴포즈
│  ├─ Dockerfile.server
│  └─ Dockerfile.web
│     └─ nginx.conf
├─ docs
│  └─ index.html
├─ infra # 인프라 관리
│  ├─ rdb/sql # DDL/DML
│  │  ├─ 01.ddl.sql
│  │  ├─ 02.directors.sql
│  │  ├─ 03.films.sql
│  │  └─ 04.cuts.sql
│  ├─ elasticsearch # 인덱스 템플릿 초기화
│  │  ├─ create_index_templates.sh
│  │  └─ templates
│  │     └─ film-template.json
│  └─ logstash # ETL
│     ├─ mysql-connector-j-9.4.0.jar
│     └─ sync_rdb_to_es.conf
└─ project # 프로젝트
   ├─ server
   └─ web
```

</details>

## 서브 프로젝트

| 프로젝트 | 저장소                                                                               | 설명                       | 버전   |
| -------- | ------------------------------------------------------------------------------------ | -------------------------- | ------ |
| Backend  | [/Ghibli-Films/tree/server](https://github.com/NarciSource/Ghibli-Films/tree/server) | Apollo + Express 기반 서버 | v1.4.0 |
| Frontend | [/Ghibli-Films/tree/web](https://github.com/NarciSource/Ghibli-Films/tree/web)       | Next.js 클라이언트         | v2.6.0 |

## 실행 방법

```sh
$ docker-compose up -d
```

## 접속 안내

| 환경               | URL                              |
| ------------------ | -------------------------------- |
| web                | <http://localhost:3000>          |
| server healthcheck | <http://localhost:4000>          |
| graphql schema     | <http://localhost:4000/voyager>⁠ |
| graphql playground | <http://localhost:4000/graphql>⁠ |
| elasticsearch ui   | <http://localhost:5601>⁠         |
