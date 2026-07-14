# Mateo Reyes — Video Editor Portfolio

A React + Vite portfolio site for a video editor, adapted from a creative-portfolio
layout brief and re-themed around video editing (documentary edits, music videos,
brand films). Dark cutting-room palette, timecode-style section markers, and a
play-button hover reveal on project thumbnails.

## Getting started

You need [Node.js](https://nodejs.org) 18+ installed.

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview   # preview the production build locally
```

## Project structure

```
src/
  components/       One component + one CSS Module per section
    Header.jsx / .module.css
    Hero.jsx / .module.css
    About.jsx / .module.css
    Projects.jsx / .module.css      ← project grid, hover play-button
    ProjectCase.jsx / .module.css   ← reusable case-study block (Background/Solution)
    Services.jsx / .module.css
    Footer.jsx / .module.css
  data/
    projects.js       All copy + image URLs live here — edit this file first
  hooks/
    useReveal.js       Scroll-reveal animation (IntersectionObserver)
  App.jsx
  index.css            Design tokens (colors, fonts, the .reveal utility)
index.html              Loads Google Fonts (Fraunces, Inter, IBM Plex Mono)
```

## Swapping in real images

Right now every image is a placeholder from **Lorem Picsum**
(`https://picsum.photos/seed/...`) — a free service made for exactly this
purpose, so nothing needs licensing before launch, but it's not the client's
real work.

To use real photos/stills:

1. Create a folder: `src/assets/images/`
2. Drop your files in, e.g. `src/assets/images/northlight-main.jpg`
3. In `src/data/projects.js`, import and swap the URL:

```js
import northlightMain from '../assets/images/northlight-main.jpg'
// then use northlightMain instead of img('northlight-main', 1000, 650)
```

Vite will bundle and optimize the image automatically. Do this for the hero
portrait (`Hero.jsx`), the about photo (`About.jsx`), and everything in
`src/data/projects.js`.

## Editing copy

- Name, tagline: `src/components/Header.jsx`, `Hero.jsx`
- Bio: `src/components/About.jsx`
- Project grid captions, case-study text (Background/Solution), service list:
  all in `src/data/projects.js`

## Notes

- Styling uses **CSS Modules** (`*.module.css`) — each class is scoped to its
  component automatically, no naming collisions.
- Animations respect `prefers-reduced-motion`.
- Layout is responsive down to mobile (grids collapse under ~800px / ~640px).
