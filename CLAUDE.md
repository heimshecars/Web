# Heimshe Cars — Web (dispatch & back office)

Heimshe Cars is a UK minicab firm (4 drivers to start). This repo is the **desktop staff app**: dispatch, jobs, drivers, earnings/commission, leaderboard, settings. Staff only — no customer-facing pages.

Sibling repos:
- `heimshecars/Phone` — the driver app, run on company-owned Android tablets (and phones). Same design system.
- `heimshecars/Server` — Supabase database, backend functions, integrations (phone hotline, card machine). Read its README for the business rules.

## Stack
Next.js 16 (App Router) · React 19 · TypeScript · CSS Modules · lucide icons (via registry) · static export.

## Non-negotiable rules

### 1. Design system — `src/design-system/` (read its README)
- Raw values (colours, sizes, fonts, radii, shadows, z-index, breakpoints) live **only** in `tokens.css`.
- Motion (durations, easings, keyframes) lives **only** in `animations.css`.
- No hex/rgb/oklch, no `px`/`rem`, no raw font sizes anywhere else. No `style={…}`. No direct `lucide-react` imports.
- Build pages from design-system components (`Stack`, `Grid`, `Card`, `Text`, `Heading`, `Button`, `DataTable`, …). If something is missing, add it to the design system (component + catalogue section on `/design-system`), don't style it inline in a page.
- Every data view must handle **loading** (skeleton), **empty** (`EmptyState`) and **error** (`ErrorState`). `DataTable` and `StatCard` have these built in.
- `npm run lint` enforces all of this. It must pass.
- **The design system is shared with Phone.** After changing anything in `src/design-system/`, copy it to Phone (`cd ../Phone && npm run ds:sync`) in the same piece of work.

### 2. App shell — `src/shell/` + `src/app/(shell)/layout.tsx`
- Header, sidebar and content area. The shell is a layout, so Next.js keeps it mounted: navigating swaps **only** the page inside `<main>`.
- New pages go in `src/app/(shell)/<route>/page.tsx` and get a nav entry in `src/shell/navigation.ts`.
- Never put page-specific content (titles, filters, page actions) in the header or sidebar — that would make them change per page. Page titles/actions go in the page via `PageHeader`.
- `(shell)/template.tsx` plays the page-enter animation; `(shell)/loading.tsx` and `(shell)/error.tsx` render inside the content area only.

### 3. Everything is pre-rendered (static export)
- `output: "export"` — `npm run build` writes plain HTML for every route to `out/`.
- So: no server-only features (no `cookies()`, `headers()`, server actions, dynamic route handlers, ISR). Dynamic routes need `generateStaticParams`.
- Live data is fetched **in the browser** from Supabase (row-level security protects it) once the backend exists.

## Money
Store amounts in **pence** (integers). Format with `formatMoney()` from `src/lib/format.ts`.

## Commands
- `npm run dev` — dev server
- `npm run lint` — ESLint + Stylelint (design-system rules)
- `npm run typecheck`
- `npm run build` — static export to `out/`
- `npm run check` — all of the above
