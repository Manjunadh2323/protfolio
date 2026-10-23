# Manjunath Portfolio — Cleaned Project

This version removes the duplicate `public/html`, `public/js`, and `public/images` trees that were out of sync with the source files. The existing `public` folder is retained only for unique static assets such as favicons, icons, and the resume PDF.

## Run locally

1. Install Node.js (LTS).
2. Open this folder in a terminal.
3. Run `npm install` (or `npm ci` if you want to use the included lockfile).
4. Run `npm run dev`.
5. For a production build, run `npm run build`.

The Vite configuration builds `index.html` and each HTML page inside `html/`, using the same root `css/`, `js/`, and `images/` folders.

## Know More page

Open `/html/about1.html` locally. The page uses `css/about1.css`, `js/about1.js`, and `images/childhood.jpg.jpeg`.
