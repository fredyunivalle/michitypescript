# MichiEnglish App

MichiEnglish App is a React and TypeScript project built with Vite. It uses the Vite PWA plugin so the application can work offline and update automatically.

## Requirements

- [Node.js](https://nodejs.org/) 20
- npm (comes bundled with Node.js)

## Getting Started

Install the dependencies and start the development server:

```bash
npm install
npm run dev
```

## Available Commands

- `npm run build` – create a production build in the `dist` directory.
- `npm run preview` – preview the production build locally.
- `npm run lint` – run ESLint to check the codebase.
- `npm run test` – execute unit tests with Vitest.

## PWA Support

See `vite.config.ts` for how **vite-plugin-pwa** is configured. The service worker caches assets and data files so the app can be installed and used offline.

## Deployment

The GitHub Actions workflow at `.github/workflows/deploy.yaml` builds the project and deploys the contents of `dist` to GitHub Pages whenever changes are pushed to the `main` branch.

## Docker Usage (optional)

A simple `Dockerfile` is included. You can build and run it with:

```bash
docker build -t michienglish .
docker run -it michienglish
```

This image currently installs Node.js 20 and sets up a shell environment.
