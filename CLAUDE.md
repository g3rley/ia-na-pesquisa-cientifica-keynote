# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start Vite dev server (hot reload)
npm run build     # production build → dist/
npm run preview   # serve the production build locally
```

No linter or test suite is configured.

## Architecture

This is a plain-JavaScript, no-framework browser presentation ("keynote") about AI in scientific research, bundled with Vite.

### Rendering pipeline

`src/main.js` is the entry point. It imports the ordered `slides` array from `src/slides/index.js`, renders each slide as a `<div class="slide">` into `#deck`, then calls `initEngine()` and `initQuiz()`.

### Slide format

Every slide is a JS module that exports a single object:

```js
export default {
  id: 's1',        // unique DOM id
  html: `...`,     // raw HTML string injected into the slide div
};
```

To add a slide: create `src/slides/sNN-name.js`, then import and append it in `src/slides/index.js`. Slide order in the exported array is presentation order.

### Engine (`src/engine.js`)

Handles all navigation: arrow keys / Space, prev/next buttons, swipe (touch), and fullscreen toggle. State is a single `current` index; `goTo(n)` swaps the `.active` class and adds a brief `.exit-left` class for the slide-out animation.

### Quiz system (`src/quiz.js`)

Uses event delegation on `document` — one listener handles all `.quiz-opt` buttons across every quiz slide. Correct answer is flagged with `data-correct="true"` on the button. On click: all options are disabled, the correct one gains `.revealed-correct`, and the chosen button gets `.correct` or `.wrong`. Feedback text appears in `.quiz-feedback`.

Quiz slides come in pairs: `s04-quiz1` / `s05-gabarito1`, `s06-quiz2` / `s07-gabarito2`, `s08-quiz3` / `s09-gabarito3`.

### Styles

Three CSS files loaded in order by `main.js`:

| File | Purpose |
|---|---|
| `src/styles/variables.css` | CSS custom properties (palette, fonts) + base reset + typography + animations |
| `src/styles/engine.css` | Slide deck layout, slide positioning, progress bar, counter, nav buttons |
| `src/styles/components.css` | Reusable UI components: cards, callouts, timeline, quiz, pyramid, tool chips, etc. |

Design tokens (colors, fonts) live exclusively in `variables.css`; components reference them via `var(--*)`.
