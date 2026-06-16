# Westar Farms Website — Claude Config

## Project Overview
Static marketing website for Westar Farms, an Ottawa-area equestrian facility and horse show operation founded in 1984. Hosted on GitHub Pages (future). No backend, no database.

## Tech Stack
- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS v3 with a custom design-token config (see `tailwind.config.js`)
- **Routing**: React Router v6 (hash-based for GitHub Pages compatibility)
- **Testing**: Vitest (unit) + Playwright (UI/layout verification)
- **Language**: TypeScript
- **Package manager**: npm

## Repository Layout
```
westar_farms_site/
├── public/
│   ├── images/          # Photos and static assets
│   └── logo.png         # Primary logo
├── src/
│   ├── components/      # Shared UI components (Navbar, Footer, etc.)
│   ├── pages/           # Top-level route/section components
│   ├── sections/        # Sub-sections used within pages
│   ├── data/            # Static content data files (shows, news, etc.)
│   ├── styles/          # Global CSS, @layer base overrides
│   └── main.tsx
├── tests/
│   └── playwright/      # Playwright e2e tests per page
├── design_resources/    # Client-supplied PDFs, images, layout mockups
├── CLAUDE.md
├── SPEC.md
├── tailwind.config.js
├── vite.config.ts
└── playwright.config.ts
```

## Design System

### Colors (defined in tailwind.config.js as custom tokens)
| Token         | Hex       | Usage                                      |
|---------------|-----------|--------------------------------------------|
| `brand-red`   | `#cb2e2e` | Primary — CTAs, accent borders, headings   |
| `brand-gray`  | `#6b7280` | Secondary — body text, subtle dividers     |
| `brand-dark`  | `#1a1a1a` | Near-black for headings on light bg        |
| `brand-light` | `#f8f6f3` | Warm off-white for section backgrounds     |
| `brand-white` | `#ffffff` | Card surfaces, nav background              |

### Typography
- **Display / Hero headings**: Playfair Display (serif) — conveys heritage and elegance
- **Section headings**: Playfair Display, weights 400–700
- **Body / UI text**: Inter (sans-serif) — clean and readable
- **Nav items**: Inter Medium, tracked slightly wide (letter-spacing: 0.05em)
- Load both via Google Fonts in `index.html`

### Logo
- Source: `design_resources/logo.png` (white variant — use on dark backgrounds)
- Copy to `public/logo.png` and `public/logo-dark.png` when a dark version is available
- Never stretch; always preserve aspect ratio
- Minimum display width: 120px

### Visual Principles
**Aesthetic target**: "Elevated classic equestrian" — not a generic bootstrap site, not an ultra-modern tech site. Think: a well-produced printed show program translated to the web. Heritage, warmth, and quality — with clean modern layout and typography.

- **No Bootstrap / no generic component libraries** — custom Tailwind components only
- Serif headings (Playfair Display) give heritage character; sans-serif body (Inter) keeps it readable and clean
- Hero sections: full-viewport-height with large equestrian photography, text overlay — photography is the primary visual element
- Generous whitespace; let photography breathe
- Subtle warm off-white (`brand-light`) alternating section backgrounds — never stark white/gray tech-site contrast
- `brand-red` used sparingly as an accent — borders, underlines, CTA buttons, category pills
- Decorative elements: thin horizontal rules, small ornamental separators — restrained, not fussy
- Smooth CSS transitions on interactive elements (nav dropdowns, hover states)
- Section headings have a short decorative red underline rule (4px, 48px wide)
- Cards have soft shadows and rounded corners — approachable, not clinical
- Photography should feel like it belongs to the place: gardens, maple trees, horses in action, riders competing

## Navigation Architecture
See `SPEC.md` for full nav tree. Implementation:
- Sticky top navbar, transparent on hero / solid white on scroll
- Dropdown menus on hover (desktop) / accordion (mobile)
- Mobile: hamburger menu with full-screen slide-in panel
- Smooth-scroll to anchor sections on same page

## Spec Sync Rule (CRITICAL)
`SPEC.md` is the single source of truth and must be kept in a state where the entire project could be rebuilt from scratch using only that file. After every feature addition or modification:
1. Update the relevant section in `SPEC.md` to reflect the current state (not the intended state)
2. Mark completed items with `[x]` in the implementation phases
3. Add any new decisions, content, or component details discovered during implementation
4. Remove or update stale content that no longer matches the codebase

Do not skip this step. The spec is updated as part of the same commit as the feature.

## Development Workflow

### Running locally
```bash
npm run dev        # Vite dev server at http://localhost:5173
npm run build      # Production build → dist/
npm run preview    # Preview production build
```

### Testing
```bash
npm run test              # Vitest unit tests
npm run test:e2e          # Playwright tests (requires dev server running)
npm run test:e2e:ui       # Playwright UI mode
```

**Testing rules:**
- Write a Playwright test for every new page or major section added
- Tests must verify: layout structure, key text content, responsive breakpoints (mobile 375px, tablet 768px, desktop 1280px)
- Run Playwright before marking any UI task complete
- Vitest for utility functions and data helpers

### Code conventions
- Functional components with TypeScript; no class components
- Props typed with inline interfaces, not separate type files unless shared
- No `any` types
- CSS via Tailwind utility classes; no inline `style=` except for dynamic values (e.g., background images from data)
- Component files: PascalCase (`ShowCard.tsx`); hooks: camelCase (`useScrollSpy.ts`)
- Data files in `src/data/` are plain TypeScript objects/arrays — no fetching

## Content Rules
- All copy sourced from `SPEC.md` and `design_resources/` PDFs — do not invent facts
- Fields marked `??` in source docs are placeholders; render them as visible TODOs in dev, empty/omitted in production build
- External links (sport associations, entry systems) open in `target="_blank" rel="noopener noreferrer"`
- Phone/email in Contact section are placeholder until client provides; leave as `[TBD]`

## GitHub Pages (Future)
- Set `base` in `vite.config.ts` to the repo name when deploying
- Use hash routing (`createHashRouter`) to avoid 404s on direct URL access
- Deploy via GitHub Actions on push to `main`
