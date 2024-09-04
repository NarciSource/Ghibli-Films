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
$ docker run -d \
  --name mysql-container \
  --env-file ./.env \
  -p ${MYSQL_PORT}:3306 \
  mysql:latest

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
