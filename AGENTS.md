# Repository Guidelines

## Project Structure & Module Organization

- 루트 설정: `vite.config.ts`, `tsconfig.json`, `components.json`, `biome.json`.
- 소스: `src/` (엔트리 `main.tsx` → `app.tsx`).
- 페이지: `src/pages/` (`home.tsx`, `layout.tsx`).
- 섹션(도메인): `src/sections/` (예: `hero.tsx`, `career.tsx`, `project.tsx`, `education.tsx`, `certificate.tsx`, `sections.tsx`).
- 컴포넌트: `src/components/`
  - 레이아웃: `components/layout/` (예: `app-sidebar.tsx`, `footer.tsx`, `hamburger-toggle.tsx`)
  - 공통 UI 프리미티브: `components/ui/` (예: `button.tsx`, `badge.tsx`, `sidebar.tsx`)
- 자산: `src/assets/`(이미지·폰트), 정적: `public/`.
- 데이터/훅/유틸: `src/data/`, `src/hooks/`, `src/lib/`.
- 경로 별칭: `@/` 사용(예: `@/sections/hero`, `@/components/layout/app-sidebar`).

## Build, Test, and Development Commands

- `pnpm dev`: 개발 서버 실행(Vite, 기본 포트 5173).
- `pnpm build`: 타입체크(`tsc`) 후 프로덕션 빌드.
- `pnpm lint`: Biome로 코드 점검/자동 수정.
- `pnpm format`: Biome 포맷팅 적용.
- npm 사용 시 `pnpm` → `npm` 치환 가능.

## Coding Style & Naming Conventions

- 언어: TypeScript + React(TSX), 들여쓰기 2칸.
- 파일명: kebab-case(예: `app-sidebar.tsx`).
- 컴포넌트: PascalCase, 훅: `useXxx` 접두사.
- 스타일: Tailwind CSS(전역 `src/globals.css`).
- Lint/Format: `biome.json` 규칙 준수, `pnpm lint/format` 사용.

추가 규칙

- 섹션 id는 사이드바 해시와 1:1 매핑(`career`, `project`, `education`, `certificate`).
- 부드러운 스크롤: `html { scroll-behavior: smooth; }` + 사이드바 `scrollIntoView({ behavior: "smooth" })` 사용.

## Testing Guidelines

- 현재 테스트 프레임워크 미구성.
- 제안: Vitest + React Testing Library.
- 위치/이름: `src/**/*.{test,spec}.ts(x)`.
- 커버리지 목표 제안: 핵심 UI/로직 70%+.

## Commit & Pull Request Guidelines

- 커밋 메시지: Conventional Commits 권장 (내용 한글로 작성)
  - 예: `feat: scroll-top button 추가`, `fix: tooltip z-index`
- 브랜치: `feature/…`, `fix/…`, `chore/…`.
- PR 포함: 변경 요약, 동기, 관련 이슈, 스크린샷(UI 변경 시), 체크(`pnpm lint && pnpm build`).

## Security & Configuration Tips

- 비밀값 커밋 금지. Vite 환경변수는 `VITE_` 접두사 사용.
- 로컬 비밀: `.env.local` 사용, 샘플은 `.env.example`로 공유.
- 대용량 자산은 외부 스토리지/최적화 권장.

## Architecture Overview

- 스택: Vite + React 19 + TypeScript + Tailwind v4, Radix UI, Zustand.
- 흐름: `src/main.tsx` → `src/app.tsx` → `src/pages/` → `src/sections/` 및 `src/components/`.

UI 컬러 토큰

- Primary: `oklch(0.76 0.16 56)` (`--primary`, 대비 텍스트 `--primary-foreground: #0a0a0a`)
- Sidebar: 다크 배경(`--sidebar: #1d1f21`), 전경/액센트/보더 토큰은 `src/globals.css` 참조
