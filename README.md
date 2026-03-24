# Codex Foundation

Official website for the Codex Foundation — [codex-foundation.org](https://codex-foundation.org).

## Stack

- [Astro 5](https://astro.build) — static site generator, zero client-side JS
- [pnpm](https://pnpm.io) — package manager
- [Vitest](https://vitest.dev) — unit tests with 100% coverage enforcement

## Development

```bash
pnpm install
pnpm dev        # http://localhost:4321
```

## Testing

```bash
pnpm test       # run tests
pnpm coverage   # run tests with coverage report
```

## Build

```bash
pnpm build      # output to dist/
pnpm preview    # preview production build locally
```

## Deployment

The site is deployed to GitHub Pages via GitHub Actions on every push to `main`. The pipeline runs tests, builds the site, and deploys automatically.

To deploy manually: **Actions → Deploy to GitHub Pages → Run workflow**.
