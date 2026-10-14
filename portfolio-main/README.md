# Crystalangel Mujawo — Portfolio

Personal developer portfolio built with **React** and **Vite**. Single page, no backend, ready for GitHub Pages.

## Run locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

## Customize later

Almost all copy lives in `src/data/site.js`:

- name, contact links, headline
- skills
- projects (add a live URL or GitHub URL when you have one)
- about paragraphs
- journal posts (set `draft: false` when a real article exists)

To add a new project, copy an existing object in `projects` and fill in your own details.

## Deploy to GitHub Pages

1. Create a GitHub repository (for example `crystalangel-portfolio`).
2. Push this folder to that repository.
3. In the repo settings, set Pages to deploy from GitHub Actions **or** run:

```bash
npm run build
```

Then upload the `dist` folder, or use:

```bash
npm run deploy
```

`vite.config.js` uses `base: './'` so the site works as a project page such as:

`https://crystalangel05.github.io/crystalangel-portfolio/`

If a project GitHub link 404s, update or remove it in `src/data/site.js`.
