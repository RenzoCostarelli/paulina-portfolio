# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Minimal Astro site (portfolio for Paulina), scaffolded from `pnpm create astro@latest -- --template minimal`. Currently just the starter skeleton — a single page at `src/pages/index.astro` with no components, layouts, or content collections yet.

Requires Node >=22.23.4. Not yet a git repository.

## Package manager

Always use `pnpm`, never `npm` or `yarn`.

## Commands

- `pnpm install` — install dependencies
- `pnpm dev` — start dev server at `localhost:4321`
- `pnpm build` — build production site to `./dist/`
- `pnpm preview` — preview the production build locally
- `pnpm astro check` — type-check `.astro` files
- `pnpm astro ...` — run other Astro CLI commands (e.g. `astro add` to add integrations)

There is no test suite and no lint command configured.

### Dev server

Start the dev server in background mode: `astro dev --background`. Manage it with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Architecture

Standard Astro file-based routing: any `.astro` or `.md` file under `src/pages/` becomes a route named after its file path. There is no `src/components/` yet, but that's the conventional place for Astro/React/Vue/Svelte/Preact components when added.

`tsconfig.json` extends `astro/tsconfigs/strict`.

Pages are in Spanish (`<html lang="es">`).

Styling is Tailwind CSS v4 via the `@tailwindcss/vite` plugin (configured in `astro.config.mjs`), not the deprecated `@astrojs/tailwind` integration. There is no `tailwind.config.js` — v4 is CSS-first. The stylesheet is `src/styles/global.css` (just `@import "tailwindcss";`); any page/layout that renders `<html>` must import it.

## Design rules

This is a minimalist site: white background, black text, nothing else.

- No transparent text (no `text-*/opacity`, no `text-transparent`).
- No gradients.
- No margins on any element. All spacing is owned by the parent container via `gap` (flex/grid) or `space-x-*`/`space-y-*` — never `m-*`/`mx-*`/`my-*` on a child to create space between siblings.

## Documentation

Consult these Astro guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
