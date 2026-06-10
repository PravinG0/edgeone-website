# EdgeOne – IoT Infrastructure & Edge Intelligence Platform

A marketing/product site for EdgeOne, an enterprise IoT infrastructure and edge intelligence platform.

## Run & Operate

- `pnpm --filter @workspace/edgeone run dev` — run the frontend (Vite, port assigned by workflow)
- `pnpm --filter @workspace/api-server run dev` — run the API server
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite + Tailwind CSS v3 + react-router-dom v7
- 3D: @react-three/fiber + @react-three/drei + three.js (IoT background animation)
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/edgeone/src/` — React frontend source
- `artifacts/edgeone/src/pages/` — all page components (Index, Platform, Solutions, Products, Industries, CaseStudies, About, Contact, Resources, IndustryDetail)
- `artifacts/edgeone/src/components/` — shared components (Navbar, Footer, Layout, HeroScene, IoTBackground, etc.)
- `artifacts/edgeone/src/index.css` — Tailwind v3 theme tokens (CSS variables)
- `artifacts/edgeone/tailwind.config.ts` — Tailwind v3 config with custom colors and animations
- `artifacts/edgeone/postcss.config.js` — PostCSS config (tailwindcss + autoprefixer)

## Architecture decisions

- Tailwind v3 with PostCSS (not @tailwindcss/vite) — project was imported with v3 config
- react-router-dom v7 for routing (BrowserRouter + Routes pattern)
- Three.js IoT background scene used on home page hero
- Frontend-only app; no backend API routes needed (static marketing site)

## Product

Multi-page marketing site for EdgeOne IoT platform with pages for Platform, Solutions, Products, Industries, Case Studies, Resources, About, and Contact.

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- Use postcss.config.js for Tailwind — do NOT switch to @tailwindcss/vite (breaks v3 config)
- react-router-dom uses BrowserRouter (not wouter) — App.tsx uses react-router-dom Routes

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
