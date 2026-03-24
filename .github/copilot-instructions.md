# Copilot Instructions — Codex Foundation Website

## Commands

```bash
pnpm dev        # start dev server (http://localhost:4321)
pnpm build      # production build → dist/
pnpm preview    # preview the production build
pnpm test       # run all tests (vitest)
pnpm coverage   # run tests with 100% coverage report
```

**Run a single test file:**
```bash
pnpm vitest run src/__tests__/Nav.test.ts
```

## Architecture

This is a fully static **Astro 5** site with no SSR. Every page imports `BaseLayout.astro` and passes `title` and `description` props.

```
src/
├── styles/global.css        ← single CSS file — all design tokens + utilities
├── layouts/BaseLayout.astro ← HTML shell, Google Fonts, Nav + Footer wrapper
├── components/
│   ├── Nav.astro            ← sticky nav, CSS-only hamburger (checkbox trick)
│   └── Footer.astro        ← dark footer, grouped link columns
└── pages/                   ← one .astro file per route (flat, no subdirs)
    ├── index.astro
    ├── about.astro
    ├── projects.astro
    ├── governance.astro
    ├── community.astro
    └── contact.astro

public/                      ← logo kit (all SVG variants)
src/__tests__/               ← one test file per component/page
```

## Design System

All tokens are CSS custom properties in `global.css`:

| Token | Value | Use |
|---|---|---|
| `--color-ink` | `#0D0D0D` | backgrounds, text |
| `--color-parchment` | `#F5F0E8` | page background, light text |
| `--color-terracotta` | `#CC2200` | brand red — matches logo |
| `--color-gold` | `#B8963E` | dividers, column headings |
| `--color-sage` | `#5C6B5A` | accent sections |

**Fonts:** Cormorant Garamond (headings/display, weights 300–400) + DM Sans (body, weights 300–500) — loaded via Google Fonts in `BaseLayout.astro`.

**Utility classes:** `.container`, `.section`, `.btn-primary`, `.btn-outline`, `.divider`, `.page-header`, `.animate` + `.delay-1`–`.delay-5` (CSS fade-up stagger).

## Logo Assets

All SVGs live in `public/`. Use the right variant per context:

| File | Use |
|---|---|
| `codex-logo-horizontal-dark.svg` | Nav, Footer (dark backgrounds) |
| `codex-logo-horizontal.svg` | light backgrounds |
| `codex-logo-horizontal-red.svg` | light bg with red accent |
| `codex-icon-32.svg` | favicon (current `public/favicon.svg`) |
| `codex-icon-56.svg`, `codex-icon-80.svg` | larger icon contexts |
| `codex-logo-vertical.svg` | stacked/square layouts |

## Key Conventions

- **No JS** — interactivity (nav hamburger, animations) is CSS-only.
- **No Tailwind** — all styles in `global.css` or component `<style>` blocks.
- **Tests use Astro Container API** — `experimental_AstroContainer` from `astro/container` renders components to HTML strings for assertion; no browser/JSDOM needed.
- **100% coverage is enforced** — thresholds are set in `vitest.config.mjs`; adding logic without tests will fail CI.
- **One test file per source file** in `src/__tests__/`, named `<ComponentName>.test.ts`.
- **Active nav link** is determined by comparing `Astro.url.pathname` to each link's `href` inside `Nav.astro` — no client-side JS.

