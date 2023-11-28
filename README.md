# corporate-library-web-frontend

Vite + Vue3 + TS + Tailwindcss + Vitest + Cypress

## 의존성 설치

_NodeJS 18 이상, `pnpm` 설치 필요_

```sh
pnpm install
```

## 로컬 실행

```sh
pnpm dev
```

## 타입 체크 후 프로덕션 빌드

```sh
pnpm build
```

## Unit Test with Vitest

```sh
pnpm test:unit
```

## Run End-to-End Tests with Cypress

```sh
pnpm test:e2e:dev
```
빌드 후 테스트

```sh
pnpm build
pnpm test:e2e
```
