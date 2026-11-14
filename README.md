# Portfolio

Personal portfolio site, built with React, Vite and Framer Motion, deployed with GitHub Pages.

Live at: https://dinesh-0707.github.io/portfolio/

## Develop

    npm install
    npm run dev

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes `dist/` to GitHub Pages.
In the repository settings, Pages > Build and deployment > Source must be set to "GitHub Actions".

## Layout

- `src/sections/` one component per page section
- `src/motion.jsx` Framer Motion scroll reveal and count-up numbers
- `public/assets/` images and certificates

`scripts/wake_streamlit.py` (run every 6 hours by GitHub Actions) keeps the
Streamlit demos linked from the site awake.
