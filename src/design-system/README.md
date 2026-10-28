# Heimshe Cars design system

**Source of truth: `heimshecars/Web` → `src/design-system/`.**
The Phone repo holds a copy of this folder. Edit it here, then in Phone run `npm run ds:sync`.

| File | What lives there |
| --- | --- |
| `tokens.css` | The palette and every other raw value: colours, type sizes, weights, spacing, radii, shadows, control sizes, layout sizes, z-index, breakpoints. |
| `animations.css` | All motion: durations, easings, transition presets, keyframes, ready-made animations, reduced-motion switch. |
| `base.css` | Reset and element defaults (reads tokens). |
| `icons.ts` | The icon registry — the only file that imports icons. |
| `fonts.ts` | The brand typeface (Plus Jakarta Sans). |
| `components/` | Every UI element. Each is a `.tsx` + `.module.css` that uses tokens only. |
| `catalogue/` | The `/design-system` page (both apps render it) — every element and state, live. |
| `index.ts` | Import everything from `@/design-system`. |

## The rules (enforced by `npm run lint`)

1. **No raw values outside `tokens.css` / `animations.css`.** No hex, `rgb()`, `oklch()`, named colours, `px`/`rem`/`em`, raw font sizes or weights, raw z-index, raw radii, raw shadows.
2. **No inline styles.** No `style={…}` in TSX. Style with a CSS module that uses `var(--token)`.
3. **All motion from `animations.css`.** Components write `transition: var(--transition-…)` and `animation: var(--animate-…)`. `@keyframes` anywhere else is an error.
4. **Icons through the registry.** `<Icon name="jobs" />`. Importing `lucide-react` directly is an error.
5. **Variants are data attributes.** `<Button variant="primary">` renders `data-variant="primary"`; the CSS targets `.button[data-variant="primary"]`.
6. **Every new UI element goes in `components/`** and gets a section on the `/design-system` page.

## Token layers

- **Palette** (`--petrol-600`, `--sand-100`, …) — raw ramps. Only `tokens.css` uses them.
- **Semantic** (`--color-brand`, `--color-surface`, `--color-text-muted`, …) — what components use. Re-theme by pointing these at different palette steps.
- **Density**: `<html data-density="touch">` (Phone) swaps in bigger controls and hit targets — same look, finger-sized.

Breakpoints are `@custom-media` in `tokens.css`: write `@media (--bp-lg) { … }` in any CSS file.
