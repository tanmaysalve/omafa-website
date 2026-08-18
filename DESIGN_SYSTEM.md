# OMAFA Design System Extraction

## Reference scope
The supplied HTTrack archive contains six route pages: `/`, `/about`, `/programs`, `/coaches`, `/gallery`, `/contact`. It is a built React/Tailwind site rather than a traditional multi-page static site, so the rebuild uses the rendered HTML plus compiled CSS/route chunks as reference material rather than mechanically porting the bundle.

## Color tokens (extracted)
- Background: `oklch(14% .01 20)`
- Foreground: `oklch(98% .003 60)`
- Card: `oklch(18% .012 25)`
- Primary/red: `oklch(55% .22 25)`
- Secondary: `oklch(22% .02 30)`
- Muted: `oklch(22% .015 30)`
- Muted text: `oklch(70% .02 60)`
- Gold/accent: `oklch(78% .15 82)`
- Border: `oklch(28% .02 30)`
- Gold gradient: `linear-gradient(135deg, oklch(78% .15 82), oklch(65% .18 60))`
- Red gradient: `linear-gradient(135deg, oklch(55% .22 25), oklch(35% .18 25))`
- Hero gradient: `linear-gradient(135deg, oklch(14% .01 20) 0%, oklch(20% .05 25) 50%, oklch(14% .01 20) 100%)`

## Typography
- Body: Inter, weights 400/500/600/700
- Display/navigation: Oswald, weights 400/600/700
- Display tracking is frequently wide (`tracking-wider` / `tracking-widest`).
- Large display headings use Oswald with tight leading.
- The archive contained no local font binaries, so the original Google Fonts family declaration is preserved in `src/styles/fonts.css`.

## Layout
- Primary container: Tailwind `max-w-7xl` (80rem / 1280px)
- Standard horizontal padding: `px-4`, `sm:px-6`
- Main section rhythm: commonly `py-16`, `py-20`, `sm:py-24`
- Card grid: 1 column mobile, 2 columns medium, 4 columns on large screens for programs.
- Header: 64px sticky bar, translucent dark background and backdrop blur.
- Border radius: predominantly `rounded-sm` (~2px), with sharp martial-arts editorial styling.
- Borders: thin muted borders; gold/red used for emphasis.
- Buttons: red gradient + red glow; hover translates upward 2px and increases glow.

## Responsive behavior
- Desktop navigation appears at `lg` and above; mobile menu below `lg`.
- Program cards: 1 → 2 → 4 columns.
- Coaches: stacked mobile, split image/content from `md`.
- Gallery: 1 → 2 → 3 CSS columns.
- Hero heading scales from 5xl to 7xl on the home page.

## Interaction inventory
- Sticky header and mobile navigation drawer.
- Route navigation via React Router.
- Gallery hover zoom/overlay.
- FAQ disclosure using native `details` elements.
- WhatsApp floating action button.
- Phone and email links.
- Free-trial form validated with Zod and React Hook Form, then composed into a WhatsApp message.
