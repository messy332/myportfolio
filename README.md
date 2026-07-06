# My Portfolio

Personal portfolio built with TanStack Start, React, TypeScript, and Vite.

## Overview

This project presents a single-page portfolio with sections for the hero, experience, projects, skills, contact, and footer. It uses file-based routing through TanStack Start and a shared UI component set under `src/components`.

## Tech Stack

- TanStack Start
- TanStack Router
- React 19
- TypeScript
- Vite
- Tailwind CSS v4

## Getting Started

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

## Available Scripts

- `npm run dev` starts the development server.
- `npm run build` creates a production build.
- `npm run build:dev` builds the app in development mode.
- `npm run preview` previews the production build locally.
- `npm run lint` runs ESLint across the project.
- `npm run format` formats the codebase with Prettier.

## Project Structure

- `src/routes/` contains the TanStack Start routes.
- `src/components/portfolio/` contains the portfolio sections and page-level components.
- `src/components/ui/` contains reusable UI primitives.
- `src/lib/` contains shared utilities and error handling.
- `public/` contains static assets.

## Routing Notes

TanStack Start uses file-based routing. Every `.tsx` file inside `src/routes/` defines a route.

- `src/routes/index.tsx` is the home page.
- `src/routes/__root.tsx` is the app shell and must preserve `<Outlet />`.
- `src/routeTree.gen.ts` is auto-generated and should not be edited manually.

## Editing Notes

- Keep route files inside `src/routes/`.
- Use shared components from `src/components/portfolio/` for page sections.
- Update metadata in route files when changing page titles or descriptions.
