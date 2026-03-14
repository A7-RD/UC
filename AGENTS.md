# AGENTS.md

## Cursor Cloud specific instructions

**Urbano Cafe** — a Next.js 14 single-page landing site for a restaurant. No backend, no database, no environment variables required.

### Services

| Service | Command | Port |
|---|---|---|
| Next.js dev server | `npm run dev` | 3000 |

### Key commands

- **Dev server:** `npm run dev`
- **Build:** `npm run build`
- **Production preview:** `npm run start` (after build)

### Notes

- No ESLint or test configuration exists in this repo; `npm run build` is the primary correctness check.
- Tailwind CSS v4 is configured via `@tailwindcss/postcss` in `postcss.config.js` — there is no `tailwind.config.*` file.
- The homepage (`/`) is server-rendered dynamically (uses real-time open/closed status based on `America/Chicago` timezone). The `/design-system` page is static.
- Fonts load from Adobe Typekit CDN (`use.typekit.net`) and local OTF files in `public/assets/fonts/`. The site degrades gracefully if the CDN is unreachable.
