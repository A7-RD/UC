---
name: Safari Mobile Best Practices
overview: "Align the Urbano Cafe codebase with Safari and mobile viewport best practices: theme-color and iOS 26, viewport height units (svh/lvh), safe area insets (bottom only), and modal/full-height behavior."
todos: []
isProject: false
---

# Safari and Mobile Viewing Best Practices — Implementation Plan

## Current state

- **Already in place:** `viewport-fit=cover` and a single `theme-color` in [src/app/layout.jsx](src/app/layout.jsx); `body { background-color: var(--color-tangerine) }` in [src/app/globals.css](src/app/globals.css); Footer and Hero use `env(safe-area-inset-bottom)`; [NavWithMenusDrawer.jsx](src/components/NavWithMenusDrawer.jsx) resets `theme-color` when the menus drawer closes.
- **Gaps:** All full-height/screen usage is `100vh` or Tailwind `h-screen`/`min-h-screen`; modal open state does not set `body` background for iOS 26; MenusDrawer uses `88vh` and backdrop is `inset-0` without viewport-unit or JS hardening.

---

## 1. Theme color and body fallback

**File:** [src/app/layout.jsx](src/app/layout.jsx)

- Keep the single `theme-color` meta (current `#e34f25` is fine). No dark-mode variant.
- If the design ever uses a pure white bar, use `#FFFFFE` instead of `#FFFFFF` (Safari quirk).
- Keep `body` background as the fallback (already set in [src/app/globals.css](src/app/globals.css)); ensure it matches the primary “top of page” color so Safari inheritance is correct when meta is not applied (e.g. iOS 26).

**Optional (recommended for iOS 26):** Set the main page background on `html` and use `body` for overlay dimming when the drawer is open (see section 4).

---

## 2. Viewport height units — use `svh` by default

**Principle:** Use `100svh` (small viewport) for heroes and full-screen sections so layout doesn’t jump when the Safari UI shows/hides. Use `lvh` only where you need “always full coverage” (e.g. modal backdrop).

**2a. Theme / utilities** — [src/app/globals.css](src/app/globals.css)

- In `@theme`, add or override height so that “screen” means small viewport by default:
  - e.g. `--height-screen: 100svh` (and `--height-half-screen: 50svh` if you keep using it).
- If Tailwind v4 doesn’t ship `h-svh` / `min-h-svh`, add custom values (e.g. `--height-svh: 100svh`) and use them for full-height sections; otherwise use built-in `h-svh` / `min-h-svh` where available.

**2b. Replace `vh` / `h-screen` / `min-h-screen`**


| Location                                                 | Current                         | Change                                             |
| -------------------------------------------------------- | ------------------------------- | -------------------------------------------------- |
| [Hero.jsx](src/components/Hero.jsx)                      | `h-screen`                      | `h-svh` or equivalent (hero = full “first screen”) |
| [Contents.jsx](src/components/Contents.jsx)              | `min-h-screen`, `h-[75vh]`      | `min-h-svh`, `h-[75svh]`                           |
| [MenusDrawer.jsx](src/components/MenusDrawer.jsx)        | `min(88vh, 680px)` inline style | `min(88svh, 680px)`                                |
| [page.jsx](src/app/page.jsx)                             | `min-h-screen`                  | `min-h-svh`                                        |
| [design-system/page.jsx](src/app/design-system/page.jsx) | `min-h-screen`                  | `min-h-svh`                                        |
| [not-found.jsx](src/app/not-found.jsx)                   | `min-h-screen`                  | `min-h-svh`                                        |


**2c. Scroll threshold in NavWithMenusDrawer**

- [NavWithMenusDrawer.jsx](src/components/NavWithMenusDrawer.jsx) uses `window.scrollY >= window.innerHeight` to decide “scrolled past hero”. After the hero uses `100svh`, either:
  - Keep `innerHeight` (acceptable heuristic), or
  - Prefer measuring the hero node’s height (e.g. via ref + ResizeObserver) so the threshold stays correct for any future hero height changes.

---

## 3. Safe area insets

**Already done:** `viewport-fit=cover` in layout; Footer and Hero use `env(safe-area-inset-bottom)`. Nav padding is left as-is (no notch-related changes).

**Optional:** If any future layout is truly edge-to-edge in landscape (e.g. full-bleed to the device edges), add `padding-left: env(safe-area-inset-left); padding-right: env(safe-area-inset-right)` to the relevant wrapper. Current components do not require this.

---

## 4. Modals and full-height overlays (MenusDrawer + iOS 26)

**4a. Backdrop and panel height**

- **Backdrop** ([MenusDrawer.jsx](src/components/MenusDrawer.jsx)): It’s `fixed inset-0`. For reliable full-screen coverage when the address bar retracts, either:
  - Set height to `100lvh` via a class or inline style (e.g. `h-[100lvh]`), or
  - Use JS to set height to `window.outerHeight` when the drawer opens (spec’s suggestion for modals that must cover everything).
- **Panel:** Already changing `88vh` → `88svh` in step 2; no need for `lvh` on the panel.

**4b. iOS 26: body background when drawer is open**

- Spec: Put the main page background on `html`; when a full-height overlay opens, set `body` to a transparent dim (e.g. `background: rgba(0,0,0,0.4)`) so Safari’s top/bottom UI adapts correctly.
- **Implementation:**
  - In [globals.css](src/app/globals.css): give `html` the site’s default background (e.g. `var(--color-tangerine)`); keep `body` with a default that matches, or transparent if the main content is always on top.
  - In [MenusDrawer.jsx](src/components/MenusDrawer.jsx) (or a small wrapper/hook): when `isOpen` is true, set `document.body.style.backgroundColor` to the dim (e.g. `'rgba(0,0,0,0.4)'`); when false, restore to `''` or the default. Ensure this runs in the same open/close lifecycle as the existing overflow and theme-color logic in [NavWithMenusDrawer.jsx](src/components/NavWithMenusDrawer.jsx).
- **theme-color:** When the drawer is open, you may want to set `theme-color` to the drawer panel background (e.g. mist) so the status bar matches the overlay; the existing logic in NavWithMenusDrawer that restores theme-color on close should continue to reset it to the page theme.

---

## 5. TL;DR checklist (applied in this plan)

- Keep single `theme-color` meta (no dark mode). Avoid `#FFFFFF`; use `#FFFFFE` if you ever need white.
- Keep `body` (and optionally `html`) background as fallback for the bar.
- Replace `100vh` / `h-screen` / `min-h-screen` with `100svh` / `h-svh` / `min-h-svh` for heroes and full-screen sections.
- Use `100lvh` (or `window.outerHeight`) for the menus drawer backdrop.
- Keep `viewport-fit=cover` and existing `env(safe-area-inset-bottom)` on Footer/Hero; no nav padding changes.
- For iOS 26: main background on `html`; when the drawer is open, set `body` background to the dim and optionally adjust `theme-color` to the overlay.

---

## 6. Testing note

Validate on a real iPhone (and ideally an iPad) with Safari. Chrome DevTools’ mobile emulation does not accurately reproduce address bar show/hide and reflow; real device testing is required to confirm hero height, safe areas, and modal behavior.