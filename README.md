# 스튜디오 지브리 영화의 명장면 감상평 서비스

**GraphQL** 학습을 목적으로 제작된 웹 서비스.
REST API의 오버페칭/언더페칭 문제를 해결하기 위해 GraphQL을 도입하고, Apollo + Express를 기반으로 구현.  
또한, Elastic Stack(Elasticsearch, Logstash, Kibana) 을 도입하여 MySQL 데이터를 실시간으로 동기화하고,  
Elasticsearch 기반의 고성능 검색 기능과 Kibana를 통한 데이터 시각화 및 분석 환경을 제공.

_GraphQL과 타입스크립트로 개발하는 웹 서비스_ (저자: 강화수)에서 제공하는 [🔗예제 프로젝트](https://github.com/hwasurr/graphql-book-fullstack-project)를 바탕으로 함.

## 기술스택

[![graphql](https://img.shields.io/badge/GraphQL-E10098?style=flat-square&logo=graphql&logoColor=white)](https://graphql.org/)
[![apollo](https://img.shields.io/badge/Apollo-311C87?style=flat-square&logo=apollographql&logoColor=white)](https://www.apollographql.com/)
[![keycloak](https://img.shields.io/badge/Keycloak-4D4D4D?style=flat-square&logo=keycloak&logoColor=white)](https://www.keycloak.org/)  
[![express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white)](https://expressjs.com/ko/)
[![nodejs](https://img.shields.io/badge/Node.js-5FA04E?style=flat-square&logo=nodedotjs&logoColor=white)](https://nodejs.org/ko/)
[![typeorm](https://img.shields.io/badge/TypeORM-FE0803?style=flat-square&logo=typeorm&logoColor=white)](https://typeorm.io/)  
[![mysql](https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![redis](https://img.shields.io/badge/Redis-FF4438?style=flat-square&logo=redis&logoColor=white)](https://redis.io/)
[![elasticsearch](https://img.shields.io/badge/Elasticsearch-005571?style=flat-square&logo=elasticsearch&logoColor=white)](https://www.elastic.co/kr/elasticsearch)
[![logstash](https://img.shields.io/badge/Logstash-005571?style=flat-square&logo=logstash&logoColor=white)](https://www.elastic.co/kr/logstash)
[![kibana](https://img.shields.io/badge/Kibana-005571?style=flat-square&logo=kibana&logoColor=white)](https://www.elastic.co/kr/kibana)  
[![nextjs](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![svelte](https://img.shields.io/badge/Svelte-FF3E00?style=flat-square&logo=svelte&logoColor=white)](https://svelte.dev/)
[![zustand](https://img.shields.io/badge/🐻_Zustand-F56D2E?style=flat-square&logoColor=white)](https://zustand-demo.pmnd.rs/)
[![chakra ui](https://img.shields.io/badge/Chakra_UI-1BB2A9?style=flat-square&logo=chakraui&logoColor=white)](https://chakra-ui.com/)
[![keycloakify](https://img.shields.io/badge/⚛️_Keycloakify-4D4D4D?style=flat-square&logoColor=white)](https://www.keycloakify.dev/)  
[![voyager](https://img.shields.io/badge/🛰️Voyager-548f9e?style=flat-square&logoColor=white)](https://github.com/APIs-guru/graphql-voyager)
[![biome](https://img.shields.io/badge/Biome-60A5FA?style=flat-square&logo=biome&logoColor=white)](https://biomejs.dev/)
[![typescript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)  
[![traefik](https://img.shields.io/badge/Traefik-24A1C1?style=flat-square&logo=traefikproxy&logoColor=white)](https://traefik.io/traefik)
[![docker-compose](https://img.shields.io/badge/Docker_Compose-2AB4FF.svg?logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MjMgNjY1Ij4KICA8cGF0aCBmaWxsPSIjZmNmY2ZjIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00MTggMWMtNiAxLTkgMy0xMyA4LTQgMy00IDMtMTAgMS0xMi02LTYwIDAtNjYgOC01IDYtMTEgNDQtOCA1MGwyMyAxN2M3IDQgNyA2IDIgNy0yMyAzLTM3IDI5LTI5IDUyIDMgOSAzIDktMTAgNi0xOS01LTI0LTYtNDUtNS00NyAwLTg2IDE4LTEwOSA1MGExMzUgMTM1IDAgMCAwLTI0IDY0Yy0zIDI4IDIgNDggMTcgNzJsMjIgMjdjNDAgNDQgNDEgNjYgMyA5MS00NSAzMC0xMDQgMTktMTA2LTIwLTEtMTYgNC0yOSAxNy01MiAxMy0yNCAxNC0zMyAzLTUybDEzLThjMjQtMTIgMjItOSAyMy0zNCAwLTIyIDItMjAtMjMtMzAtMTgtNi0yMC02LTQwLTEtMjggOS00MCAxNC00MSAxOCAwIDItMSAzLTIgMy03IDAtMTQgMTItMTUgMjUtMSAyMSA2IDI5IDMwIDM2IDMwIDkgMzUgMjQgMTkgNDktMzYgNTMtMzIgMTAyIDExIDEyMSAzNSAxNiA3NCAxMyAxMTktOWwxMS01IDMgMzJjMCAzNC00MCAzOC04OSA4bC0xNi0xMGMtNTEtMjktMTAyIDI0LTY2IDcwIDE1IDIwIDQyIDIxIDQ2IDIgMi04IDAtMTEtMTAtMTktMTYtMTItMTctMjQtMi0yNyA1LTEgMjYgOCAyOCAxMmwzNCAyOSAyMCAxMiAyMCA4YzM2IDEzIDgyLTE1IDgyLTUwIDAtMTAgMC0xMCA2LTUgMTAgMTAgMTggMTYgMjMgMTkgNiAzIDYgNCAxIDctNSAyLTUgMi01IDctMSA4IDEgMjkgNCAzMyA0IDcgNjMgNDYgNjkgNDYgMyAwIDQ4LTI1IDUxLTI5IDItMSAzLTM0IDEtMzZsLTE2LTljLTE2LTgtMTYtOC05LTEwIDE5LTcgMzctMjcgNDMtNDdsNS0xYTE2NSAxNjUgMCAwIDAgNjAtMTNjOSAwIDM0LTIyIDQwLTM0bDQtOGM0LTcgNi0yNiA2LTU2IDAtMjkgMS0yNy0xMC0yOS02LTItOC0zLTEzLTgtMzAtMjktNzktMjMtOTYgMTAtMyA3LTMgNy04IDlzLTYgNS01IDE3djE1YzEgMTQgNCAxNiAzNCAyOGwxMiA2YzcgMyA3IDMgMzAtNyA4LTMgOS0zIDkgMS02IDIyLTY0IDQyLTczIDI0YTg3IDg3IDAgMCAwLTYzLTQyYy04IDAtOCAwIDYtMTFhNzM2IDczNiAwIDAgMCA4NS04OWwzLTVjMTktMzEgMjEtNzMgMy0xMDctNy0xNS0yMy0zNS0zNi00OC0zOS0zNi00Ni00Ny0zOC02MiA0LTggMTUtMTcgMjAtMTVhNDUyIDQ1MiAwIDAgMCA1NS0xMmMxMS00IDEzLTUgMTQtMTAgMC00IDItNyA5LTE0IDI0LTI2LTgtODAtNDMtNzFNMjI4IDMzNGMxIDEgMCAxLTEgMS0yMCAwLTI4IDMyLTEyIDQyIDE3IDkgMzctMyAzNy0yMiAwLTctNy0xNy0xMS0xN3YtMWMzLTIgMC0zLTctNGwtNiAxbTU0IDgtNCAxYy0yMiAzLTI1IDM5LTMgNDQgMjQgNSA0MS0yMSAyNS0zOGwtNS0zdi0zYy0xLTItMTQtMy0xMy0xbS00OSAxMjBjLTYgNy05IDE0LTkgMjQgMCA4IDEgMTIgMyA2IDItMTIgOC0yOCAxMy0zM3YtM2MtMSAwLTQgMi03IDZtOTcgNGMwIDIgMjMgMTcgMjcgMTcgMiAwIDEtMy00LTctOS03LTIzLTEzLTIzLTEwbS01NCA2Yy0yMSA1MSAyOSA5NiA3MyA2NyA4LTYgOC03LTEtOC0zOS0zLTYzLTIzLTY2LTU0LTItMTItMy0xMy02LTUiLz4KPC9zdmc+Cg==&style=flat-square&logoColor=black)](https://docs.docker.com/compose/)
[![docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=Docker&logoColor=white)](https://www.docker.com/)
[![nginx](https://img.shields.io/badge/NGINX-009639?style=flat-square&logo=nginx&logoColor=white)](https://nginx.org/)  

## 스크린샷


| ![films-day](https://github.com/user-attachments/assets/7c071968-0f43-4a72-82f4-d06029c3a3f8) | ![films-night](https://github.com/user-attachments/assets/996ec4fb-bbb3-4b72-88ab-eae7c5980e7b) |
| --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| ![scene](https://github.com/user-attachments/assets/584f2688-83b0-4ec0-adbb-d45d296090eb)     | ![search](https://github.com/user-attachments/assets/59b73f10-650f-486e-8be8-1298c9f7271d)      |
| ![reviews](https://github.com/user-attachments/assets/22f9634c-69e5-43da-8969-ffbfff6fad0a)   | ![admin](https://github.com/user-attachments/assets/3c824c02-ff8b-4d88-adf3-aec58a15ba36)       |
| ![signup](https://github.com/user-attachments/assets/304b2852-4ed7-46ff-8760-10fb773deaeb)    | ![login](https://github.com/user-attachments/assets/5c386794-61c3-4fa7-b2ae-e5ea48583607)       |

## 다이어그램

### Architecture Diagram

![Architecture Diagram](https://github.com/user-attachments/assets/d7c6ad10-c954-4055-8d9c-cf06138e70f5)

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
    - **CDN** (Nginx 기반): 정적 자산 배포 및 캐싱, 접근 속도 최적화
    - **Chakra UI**: 웹 UI 구성 및 스타일링
- 데이터 흐름
    1. 클라이언트에서 Apollo Client로 GraphQL 요청 전송
    2. Apollo Server + Express에서 요청 처리 후 비즈니스 로직 실행
    3. MySQL/Elasticsearch/Redis에서 필요한 데이터 조회 또는 저장
        1. MySQL에 저장된 데이터는 Logstash 파이프라인을 통해 수집·정제되어 Elasticsearch로 동기화
    4. 서버에서 처리된 데이터를 GraphQL Response로 클라이언트에 반환

## 서브 프로젝트

| 프로젝트       | 저장소                                                                                               | 설명                       | 버전   |
| -------------- | ---------------------------------------------------------------------------------------------------- | -------------------------- | ------ |
| Backend        | [/Ghibli-Films/tree/server](https://github.com/NarciSource/Ghibli-Films/tree/server)                 | Apollo + Express 기반 서버 | v1.5.0 |
| Frontend       | [/Ghibli-Films/tree/web](https://github.com/NarciSource/Ghibli-Films/tree/web)                       | Next.js 클라이언트         | v2.7.0 |
| Keycloak-theme | [/Ghibli-Films/tree/keycloak-theme](https://github.com/NarciSource/Ghibli-Films/tree/keycloak-theme) | Keycloak 테마              | -      |
| Infra          | [/Ghibli-Films/tree/main/infra](https://github.com/NarciSource/Ghibli-Films/tree/main/infra)         | 인프라 관리                | -      |

## 폴더 구조

<details>
<summary>열기</summary>

```
Ghibli-Films
├─ README.md
├─ .env # 환경변수
├─ package.json # 패키지 의존성 관리
│  └─ package-lock.json
├─ codegen.yml # GraphQL 스키마 추출기
├─ docker-compose.yml # 종합 도커 컴포즈
├─ docs
│  └─ index.html # gh-pages용 웹페이지
├─ infra # 인프라 관리
│  ├─ docker-compose.yml # 인프라 도커 컴포즈
│  ├─ gateway # 게이트웨이 설정
│  │  └─ traefik.yml
│  ├─ oauth2-proxy # 인증 게이트웨이 설정
│  │  ├─ entrypoint.sh
│  │  └─ config.sh
│  ├─ keycloak # 인증 프로바이더 설정
│  │  ├─ keycloak.conf
│  │  └─ realm-dev.json
│  ├─ cdn
│  │  └─ nginx.conf
│  ├─ rdb/sql # DDL/DML
│  │  ├─ 01.ddl.sql
│  │  ├─ 02.directors.sql
│  │  ├─ 03.films.sql
│  │  └─ 04.cuts.sql
│  ├─ elasticsearch # 인덱스 템플릿 초기화
│  │  ├─ create_index_templates.sh
│  │  └─ templates
│  │     └─ film-template.json
│  └─ logstash # ETL 파이프라인
│     ├─ mysql-connector-j-9.4.0.jar
│     └─ sync_rdb_to_es.conf
└─ project # 프로젝트
   ├─ server
   ├─ web
   └─ keycloak-theme
```

</details>

## 실행 방법

```sh
$ git clone https://github.com/NarciSource/Ghibli-Films

$ cd Ghibli-Films

$ docker-compose up -d
```

## 접속 안내

| 환경               | URL                                          |
| ------------------ | -------------------------------------------- |
| web                | <http://host.docker.internal:8080/>          |
| traefik dashboard  | <http://host.docker.internal:8080/dashboard> |
| keycloak admin     | <http://host.docker.internal:8080/auth>      |
| server healthcheck | <http://localhost:4000>                      |
| graphql schema     | <http://localhost:4000/voyager>⁠             |
| graphql playground | <http://localhost:4000/graphql>⁠             |
| elasticsearch ui   | <http://localhost:5601>⁠                     |
| cdn                | <http://localhost:8081>⁠                     |
