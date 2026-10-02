# J. Manjunath Portfolio — Vercel Ready

This folder is the deployment-ready Vite portfolio. Desktop styles are preserved; the final responsive layer focuses on tablet, mobile, small-phone and short-landscape behavior.

## Local test

```bash
npm ci
npm run build
npm run preview
```

Open the Vite preview URL (normally `http://localhost:4173/`).

## Vercel

Import the GitHub repository and deploy with:

- Framework: Vite
- Root Directory: `./`
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm ci`

No environment variables are required by the static portfolio unless you add them later.
