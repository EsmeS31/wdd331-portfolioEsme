# wdd331-portfolioEsme
**Student:** Esme Sanchez
**Semester:** Fall 2026
**Live Site:** [View Site](https://esmes31.github.io/wdd331-portfolioEsme/)
## About
This repository is my portfolio for WDD 331R: Advanced CSS.
Each week I add new pages and styles as I work through the course
assignments. The site deploys automatically to GitHub Pages on
every push to main.

## Theme and Colors
The site supports light and dark themes, with a system option that follows
the visitor's device preference. Use the theme control on any page to choose
a preference; the selection is saved between visits.

Shared seed colors, the `oklch()` accent ramp, and light/dark semantic tokens
for all pages are defined in [`css/tokens/colors.css`](css/tokens/colors.css).
Spacing, typography, radius, transition, icon, and focus tokens live in
[`css/tokens/variables.css`](css/tokens/variables.css). Assignment stylesheets
reuse these shared tokens, with aliases where needed for existing styles.

## Typography System
The shared stylesheet uses a minor-third modular type scale (ratio 1.2) based
on a 1rem / 16px body size. Eight scale steps run from `--font-size-xs` through
`--font-size-4xl`; the display steps use `clamp()` so they grow smoothly from
360px to 1440px viewport widths. Semantic role tokens such as
`--font-size-body`, `--font-size-heading-lg`, and `--font-size-display` map
those steps to their purpose. Body and heading line heights are separately
tuned in the same token file. DM Sans is loaded for headings with
`display=swap` and a system sans-serif fallback; body copy stays in the
system sans-serif stack for comfortable reading.

## Pages
- [Home](index.html)
- [Custom Properties and Nesting](unit-1/custom-properties/index.html)
- [Layered Components](unit-2/layered-components/index.html)
- [Temple Factoids](unit-2/postcss-demo/index.html)
- [Visual Effects](unit-3/visual-effects/index.html)
- [Editorial Layout](unit-4/grid-layouts/editorial.html)
- [Card Grid](unit-4/grid-layouts/cards.html)
- [Container Queries](unit-4/advanced/container-demo.html)
- [Sticky Sidebar](unit-4/advanced/sticky-demo.html)
