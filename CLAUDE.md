# neon-sandbox

## Purpose

This is Andri's personal learning sandbox — a place to build random things to learn frontend techniques: animations, custom hooks (e.g. `useDebounce`), views, interaction patterns. It is not a product and has no team; optimize for learning value and code quality, not shipping.

Each experiment should still feel like part of one app. Visual consistency across pages matters more than in a typical sandbox.

## Design direction

Sunset beach club: a beach right after sundown — open-air club on the sand, neon glow bracelets, lasers syncing with music, warm wind. Warm and festive, not cold cyberpunk.

- Dark theme (flagship): midnight indigo / deep violet-blue backgrounds, never true black, with a subtle warm horizon glow low on the page. Neon accents like glow bracelets: hot magenta/pink, aqua-cyan, warm amber/coral. Glows are soft and ambient by default, saturated only on interaction (hover, active, focus).
- Light theme: the same beach at golden hour — pale sand and peach/coral tones, same accents deepened for contrast. Toggling themes should feel like the same place at two times of evening.

The app has a light/dark `ThemeToggle` (defaults to the system preference on first visit) and both variants must stay in sync. The palette and day/night toggle are settled and liked — evolve the layout and tone around them.

### Feel and layout (important — this is where designs have gone wrong before)

This must NOT look like an everyday SaaS product page trying to sell something. No marketing hero, no feature-benefit grids, no calls-to-action tone. The design has gone in that direction once and was rejected.

Instead, the page should feel like a personal workshop / playground that invites tinkering: Andri should land on it and feel like the site wants him to interact, build, and add new things. At the same time it shouldn't address him directly (no "welcome back, Andri") — it will eventually be deployed for other people to enjoy exploring too. Think: a well-kept workbench or gallery of experiments that makes both its owner and a visitor want to poke at things.

The layout's job is organizing and displaying components built for fun — some large, some small. Favor structures that handle heterogeneous exhibit sizes (e.g. a masonry/mosaic arrangement where each experiment gets the space it needs) over uniform marketing card grids. Experiments are the content, shown as themselves — interactive where possible — not described in sales copy.

Rules that keep styling unified:

- All colors, shadows, and glows come from CSS custom properties defined in `src/styles.css` (`:root`, `:root[data-theme="dark"]`, and the `prefers-color-scheme` fallback block). Never hardcode colors inside components — add a token if one is missing.
- Shared visual primitives (cards, nav links, kickers, animations) live as classes in `src/styles.css`; components combine them with Tailwind utilities.
- New pages render inside the shared shell (`src/routes/__root.tsx` → `src/app/App.tsx`: collapsible sidebar "shelf" + scrollable main pane), so they inherit the frame automatically.
- Experiments are registered in `src/experiments.ts` (index, title, group, status, route). The sidebar and home page both render from this registry — adding an entry there is how something appears in the app.

The implemented look comes from the `HomeScene` design in the "Neandron Design System" project on claude.ai/design (project id `095af710-c352-4292-a59b-770d8f528ce4`) — consult it before redesigning the shell or home page.

## Stack

- TanStack Start (React 19, SSR) with TanStack Router file-based routing. Routes are files in `src/routes/`; `src/routeTree.gen.ts` is generated — never edit it by hand (`pnpm generate-routes`, though the Vite dev server regenerates it automatically).
- TanStack Query, provided via `src/integrations/tanstack-query/root-provider.tsx`.
- Tailwind CSS v4 (configured via `@theme` in `src/styles.css`, no tailwind.config file), `@tailwindcss/typography`, lucide-react for icons.
- Vitest + Testing Library for tests, ESLint (TanStack config) + Prettier.
- Package manager: pnpm. Import alias: `#/*` → `./src/*`.

## Commands

- `pnpm dev` — dev server on port 3000
- `pnpm test` — run Vitest
- `pnpm lint` / `pnpm format` / `pnpm check`

## Code structure (firm preferences — follow these)

- One component per file, and the file is named after the component. Multiple components in one file are acceptable only rarely, when they are super closely related and only one of them — the main component — is exported. Default to separate files even then.
- `src/routes/` holds only thin TanStack Router route files: route config plus an imported view component. No UI code in route files.
- `src/routes/__root.tsx` only configures the app — the document shell (`<head>`, body classes), the pre-hydration theme script, global contexts/providers, devtools — and calls the app entry point. It builds no layout itself.
- `src/app/` is the application package: `App.tsx` is the entry point that builds the layout; layout-only components live beside it in dedicated subfolders (e.g. `src/app/sidebar/`).
- Each view/page lives in its own dedicated package under `src/views/<view>/` (e.g. `src/views/home/`), containing its main `<Name>View.tsx` and its private subcomponents, grouped in subfolders where helpful (e.g. `src/views/home/exhibits/`).
- `src/components/` is only for components genuinely shared across packages; `src/hooks/` for shared hooks.
- Imports: use the `#/` alias when importing across packages, relative paths within a package.
- Use direct type imports instead of accessing types via namespace (e.g. React.ReactNode vs ReactNode + type import) unless 3 or more types have been imported from the same namespace in one file.

## Theming mechanics

Theme is resolved before hydration by an inline script in `__root.tsx` (localStorage `theme` = `light` | `dark`, falling back to `prefers-color-scheme` when unset), which sets `data-theme` on `<html>` and `color-scheme`. `ThemeToggle` switches between the two. Keep this mechanism when changing styles.

## Conventions for new experiments

- Add a thin route file under `src/routes/` per experiment, put its view in `src/views/<name>/`, and register it in `src/experiments.ts` (set its `to` and status) so it shows up on the shelf.
- Reusable hooks go in `src/hooks/`, shared components in `src/components/`.
- Prefer small self-contained experiments over frameworks-within-the-framework.
