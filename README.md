# Heimshe Cars — Web

Desktop dispatch & back-office app for Heimshe Cars (staff only).

```bash
npm install
npm run dev        # http://localhost:3000
npm run check      # typecheck + lint + static build
```

- **Design system:** `src/design-system/` — one palette (`tokens.css`), one animation file (`animations.css`), every UI element in `components/`. Browse it live at `/design-system`.
- **App shell:** header + sidebar + content. Only the content area changes when you navigate.
- **Static:** every page is pre-rendered to HTML in `out/` — deploy it to any static host (e.g. Vercel).

See `CLAUDE.md` for the rules every change must follow.
