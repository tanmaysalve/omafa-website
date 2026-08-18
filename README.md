# OMAFA React rebuild

A clean React + TypeScript + Vite reconstruction of the supplied HTTrack/reference website for Oriental Martial Arts & Fitness Academy (OMAFA).

## Source analysis

- Reference pages found: Home, About, Programs, Coaches, Gallery, Contact.
- Original display/body fonts: **Oswald** and **Inter** via Google Fonts. The HTTrack archive contained no `.woff`, `.woff2`, `.ttf`, or `.otf` font files, so `src/styles/fonts.css` preserves the original font families via the original Google Fonts import.
- Original design tokens were extracted from the supplied CSS: dark oklch surfaces, red primary, gold accent, gradients, borders and glow shadows.
- All bundled image assets were copied into `public/images` with stable, readable names.
- The original WhatsApp flow, telephone links, responsive navigation, gallery hover behavior, program cards and free-trial form behavior are rebuilt with React.

## Run

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Architecture

`src/components` contains shared UI and shell components; `src/pages` contains route-level pages; `src/data` contains page data; `src/styles` contains fonts, variables and global styles.

The form uses React Hook Form + Zod and submits to WhatsApp without requiring a backend.
