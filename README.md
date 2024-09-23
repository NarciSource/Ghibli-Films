# 스튜디오 지브리 영화의 명장면 감상평 서비스

이 프로젝트는 **GraphQL** 학습을 목적으로 제작된 웹 서비스입니다.  
REST API의 오버페칭/언더페칭 문제 해결을 위해 GraphQL을 도입했고, Apollo Server + Express를 기반으로 구현.  
_GraphQL과 타입스크립트로 개발하는 웹 서비스_ (저자: 강화수)에서 제공하는 [🔗예제 프로젝트](https://github.com/hwasurr/graphql-book-fullstack-project)를 클론.

## 기술스택

[![graphql](https://img.shields.io/badge/GraphQL-E10098?style=flat&logo=graphql&logoColor=white)](https://graphql.org/)  
[![apollo](https://img.shields.io/badge/Apollo-311C87?style=flat&logo=apollographql&logoColor=white)](https://www.apollographql.com/)
[![express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)](https://expressjs.com/ko/)
[![mysql](https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![redis](https://img.shields.io/badge/Redis-FF4438?style=flat&logo=redis&logoColor=white)](https://redis.io/)
[![typeorm](https://img.shields.io/badge/TypeORM-FE0803?style=flat&logo=typeorm&logoColor=white)](https://typeorm.io/)  
[![react](https://img.shields.io/badge/React-191B1F?style=flat&logo=React&logoColor=61DAFB)](https://reactjs.org)
[![chakra ui](https://img.shields.io/badge/Chakra_UI-1BB2A9?style=flat&logo=chakraui&logoColor=white)](https://chakra-ui.com/)  
[![nodejs](https://img.shields.io/badge/Node.js-5FA04E?style=flat&logo=nodedotjs&logoColor=white)](https://nodejs.org/ko/)
[![typescript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![eslint](https://img.shields.io/badge/ESLint-4B32C3?style=flat&logo=eslint&logoColor=white)](https://eslint.org/)
[![prettier](https://img.shields.io/badge/Prettier-F7B93E?style=flat&logo=prettier&logoColor=black)](https://prettier.io/)  
[![docker-compose](https://img.shields.io/badge/Docker_Compose-2AB4FF.svg?logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MjMgNjY1Ij4KICA8cGF0aCBmaWxsPSIjZmNmY2ZjIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00MTggMWMtNiAxLTkgMy0xMyA4LTQgMy00IDMtMTAgMS0xMi02LTYwIDAtNjYgOC01IDYtMTEgNDQtOCA1MGwyMyAxN2M3IDQgNyA2IDIgNy0yMyAzLTM3IDI5LTI5IDUyIDMgOSAzIDktMTAgNi0xOS01LTI0LTYtNDUtNS00NyAwLTg2IDE4LTEwOSA1MGExMzUgMTM1IDAgMCAwLTI0IDY0Yy0zIDI4IDIgNDggMTcgNzJsMjIgMjdjNDAgNDQgNDEgNjYgMyA5MS00NSAzMC0xMDQgMTktMTA2LTIwLTEtMTYgNC0yOSAxNy01MiAxMy0yNCAxNC0zMyAzLTUybDEzLThjMjQtMTIgMjItOSAyMy0zNCAwLTIyIDItMjAtMjMtMzAtMTgtNi0yMC02LTQwLTEtMjggOS00MCAxNC00MSAxOCAwIDItMSAzLTIgMy03IDAtMTQgMTItMTUgMjUtMSAyMSA2IDI5IDMwIDM2IDMwIDkgMzUgMjQgMTkgNDktMzYgNTMtMzIgMTAyIDExIDEyMSAzNSAxNiA3NCAxMyAxMTktOWwxMS01IDMgMzJjMCAzNC00MCAzOC04OSA4bC0xNi0xMGMtNTEtMjktMTAyIDI0LTY2IDcwIDE1IDIwIDQyIDIxIDQ2IDIgMi04IDAtMTEtMTAtMTktMTYtMTItMTctMjQtMi0yNyA1LTEgMjYgOCAyOCAxMmwzNCAyOSAyMCAxMiAyMCA4YzM2IDEzIDgyLTE1IDgyLTUwIDAtMTAgMC0xMCA2LTUgMTAgMTAgMTggMTYgMjMgMTkgNiAzIDYgNCAxIDctNSAyLTUgMi01IDctMSA4IDEgMjkgNCAzMyA0IDcgNjMgNDYgNjkgNDYgMyAwIDQ4LTI1IDUxLTI5IDItMSAzLTM0IDEtMzZsLTE2LTljLTE2LTgtMTYtOC05LTEwIDE5LTcgMzctMjcgNDMtNDdsNS0xYTE2NSAxNjUgMCAwIDAgNjAtMTNjOSAwIDM0LTIyIDQwLTM0bDQtOGM0LTcgNi0yNiA2LTU2IDAtMjkgMS0yNy0xMC0yOS02LTItOC0zLTEzLTgtMzAtMjktNzktMjMtOTYgMTAtMyA3LTMgNy04IDlzLTYgNS01IDE3djE1YzEgMTQgNCAxNiAzNCAyOGwxMiA2YzcgMyA3IDMgMzAtNyA4LTMgOS0zIDkgMS02IDIyLTY0IDQyLTczIDI0YTg3IDg3IDAgMCAwLTYzLTQyYy04IDAtOCAwIDYtMTFhNzM2IDczNiAwIDAgMCA4NS04OWwzLTVjMTktMzEgMjEtNzMgMy0xMDctNy0xNS0yMy0zNS0zNi00OC0zOS0zNi00Ni00Ny0zOC02MiA0LTggMTUtMTcgMjAtMTVhNDUyIDQ1MiAwIDAgMCA1NS0xMmMxMS00IDEzLTUgMTQtMTAgMC00IDItNyA5LTE0IDI0LTI2LTgtODAtNDMtNzFNMjI4IDMzNGMxIDEgMCAxLTEgMS0yMCAwLTI4IDMyLTEyIDQyIDE3IDkgMzctMyAzNy0yMiAwLTctNy0xNy0xMS0xN3YtMWMzLTIgMC0zLTctNGwtNiAxbTU0IDgtNCAxYy0yMiAzLTI1IDM5LTMgNDQgMjQgNSA0MS0yMSAyNS0zOGwtNS0zdi0zYy0xLTItMTQtMy0xMy0xbS00OSAxMjBjLTYgNy05IDE0LTkgMjQgMCA4IDEgMTIgMyA2IDItMTIgOC0yOCAxMy0zM3YtM2MtMSAwLTQgMi03IDZtOTcgNGMwIDIgMjMgMTcgMjcgMTcgMiAwIDEtMy00LTctOS03LTIzLTEzLTIzLTEwbS01NCA2Yy0yMSA1MSAyOSA5NiA3MyA2NyA4LTYgOC03LTEtOC0zOS0zLTYzLTIzLTY2LTU0LTItMTItMy0xMy02LTUiLz4KPC9zdmc+Cg==&style=flat&logoColor=black)](https://docs.docker.com/compose/)
[![docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=Docker&logoColor=white)](https://www.docker.com/)
[![nginx](https://img.shields.io/badge/NGINX-009639?style=flat&logo=nginx&logoColor=white)](https://nginx.org/)

## 스크린샷

| ![films-day](https://github.com/user-attachments/assets/b66797c0-fbee-4510-b645-b3e573803c44) | ![films-night](https://github.com/user-attachments/assets/ed5caf66-c90a-4fff-84b7-7dfbb404f3e7) |
| --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| ![scene](https://github.com/user-attachments/assets/f5770559-1b4d-402e-a7a5-4a9a6edca8f5)     | ![login](https://github.com/user-attachments/assets/1e61fcf0-eece-4be1-8ad9-26c1ae00cc8a)       |

## 다이어그램

### Architecture Diagram

![architecture](https://github.com/user-attachments/assets/cc31ac82-2e73-4814-b0a6-2fa0e519ad7d)

- 백엔드
    - **Apollo Server**: Express 플러그인으로 GraphQL query, mutation, resolver 처리
    - **Express**: 웹 서버 및 미들웨어 관리
    - **비즈니스 로직**: 클라이언트 요청을 받아 MySQL과 Redis에 데이터 저장 및 캐싱
    - **MySQL**: 영속적 데이터 저장 (영화, 명장면, 감상평)
    - **Redis**: 캐싱 및 성능 최적화
- 프론트엔드
    - **Apollo Client**: GraphQL 쿼리/뮤테이션 전송, 클라이언트 캐싱, 데이터 페칭
    - **React**: UI 렌더링 및 상태 관리
    - **Chakra UI**: 웹 UI 구성 및 스타일링
- 데이터 흐름
    1. 클라이언트(React)에서 Apollo Client로 GraphQL 요청 전송
    2. Apollo Server + Express에서 요청 처리 후 비즈니스 로직 실행
    3. MySQL/Redis에서 필요한 데이터 조회 또는 저장
    4. 서버에서 처리된 데이터를 GraphQL Response로 클라이언트에 반환

### GraphQL Schema Diagram

> GraphQL Voyager는 GraphQL 스키마를 시각적으로 탐색하고 구조를 이해할 수 있도록 돕는 정적/인터랙티브 시각화 도구  
> 타입과 타입 간 참조를 그래프 형태로 표현

| [![voyager](https://github.com/user-attachments/assets/f6981b18-d39a-449d-a7d2-97598ebf481f)](https://narcisource.github.io/Ghibli-Films/) |
| ------------------------------------------------------------------------------------------------------------------------------------------ |
| [GraphQL Voyager 바로가기](https://narcisource.github.io/Ghibli-Films/)                                                                    |

![schema](https://github.com/user-attachments/assets/14e56fb8-25d4-4a0a-b06b-f16ff63dcec8)

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

## 실행 방법

### 도커 환경

```sh
# 도커 컴포즈로 일괄 실행
$ docker-compose up -d
```

### 로컬 환경

#### 의존 서비스 실행

```sh
$ export $(cat .env | xargs)

# mysql 실행
$ MSYS_NO_PATHCONV=1 \
  docker run \
  --name mysql-container \
  --env-file ./project/server/.env \
  -e LC_ALL=C.UTF-8 \
  -v ./data:/docker-entrypoint-initdb.d \
  -p ${MYSQL_PORT}:3306 \
  -d mysql:9.4.0

# redis 실행
$ MSYS_NO_PATHCONV=1 \
  docker run \
  --name redis-container \
  --env-file ./project/server/.env \
  -p ${REDIS_PORT}:6379 \
  -d redis:8.2.1
```

#### 서버 실행

```sh
$ npm i

$ npm run start:server
```

#### 클라이언트 개발 서버 실행

```sh
$ npm i

$ npm run start:web
```

## 접속 안내

| 환경               | URL                              |
| ------------------ | -------------------------------- |
| web                | <http://localhost:3000>          |
| server healthcheck | <http://localhost:4000>          |
| graphql schema     | <http://localhost:4000/voyager>⁠ |
| graphql playground | <http://localhost:4000/graphql>⁠ |
