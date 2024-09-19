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
[![typescript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat&logo=eslint&logoColor=white)](https://eslint.org/)
[![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=flat&logo=prettier&logoColor=black)](https://prettier.io/)

## 스크린샷

| ![films-day](https://github.com/user-attachments/assets/f51933fc-d577-45a7-9613-2838a6539aa7) | ![films-night](https://github.com/user-attachments/assets/b65b66e4-3c8d-4fa1-92eb-f4aac2a6ecf8) |
| --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| ![scene](https://github.com/user-attachments/assets/a9fb5fbd-fa36-4d2c-9f03-ccf79eed4b0b)     | ![login](https://github.com/user-attachments/assets/9ca0e3df-14f7-4aaf-af29-31d35aa24e3b)       |

## 다이어그램

### Architecture Diagram

![architecture](https://github.com/user-attachments/assets/e5906f10-f27b-429f-8594-1377ed1a9e0a)

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

## 실행 방법

### 서버

#### 환경변수 설정 (/project/server/.env)

```dotenv
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_DATABASE=ghibli_graphql
MYSQL_USERNAME=root
MYSQL_PASSWORD=pswd
MYSQL_ROOT_PASSWORD=pswd

JWT_SECRET_KEY=secret-key
JWT_REFRESH_SECRET_KEY=refresh-key

DOMAIN=http://localhost:3000
PORT=4000

REDIS_HOST=localhost
REDIS_PORT=6379
```

#### 컨테이너 및 로컬 서버 실행

```sh
$ cd project/server
$ export $(cat .env | xargs)

# mysql 실행
$ MSYS_NO_PATHCONV=1 \
  docker run -d \
  --name mysql-container \
  --env-file ./.env \
  -e LC_ALL=C.UTF-8 \
  -v ./src/data:/docker-entrypoint-initdb.d \
  -p ${MYSQL_PORT}:3306 \
  -d mysql:latest

# redis 실행
$ docker run -d \
  --name redis-container \
  --env-file ./.env \
  -p ${REDIS_PORT}:6379 \
  redis:latest

# 서버 실행
$ npm run dev
```

### 클라이언트

#### 환경변수 설정 (/project/web/.env)

```dotenv
REACT_APP_API_HOST=http://localhost:4000
PORT=3000
```

#### 프론트엔드 개발 서버 실행

```sh
$ cd project/web

$ npm run start
```
