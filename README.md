# Courthouse Computer Systems website

Corporate website for Courthouse Computer Systems, built with the Next.js App Router and statically rendered pages.

## Tech stack

- Next.js 16 and React 19
- TypeScript 6
- Tailwind CSS 4
- Framer Motion
- ESLint with the official Next.js rules

## Requirements

- Node.js 20.9 or newer (Node.js 22 LTS is recommended)
- npm 10 or newer

## Getting started

```bash
npm install
npm run dev
```

The development server is available at [http://localhost:3000](http://localhost:3000).

## Primary routes

- `/` — Home
- `/digitization` — Digitization Services
- `/software` — Software Solutions
- `/ai-automation` — Custom AI & Automation
- `/about` — About CCS

Unverified copy, external URLs, form endpoints, and historical assets are tracked in `CONTENT_REQUIRED.md`. Forms intentionally do not transmit information until approved secure endpoints are configured.

## Scripts

```bash
npm run dev        # Start the development server
npm run build      # Create a production build
npm run start      # Serve the production build
npm run lint       # Run ESLint
npm run typecheck  # Check TypeScript types
```

## Project structure

```text
public/            Static assets
src/app/           App Router pages and global styles
src/components/    Layout, motion, forms, and signature visuals
src/content/       Typed site copy, navigation, and placeholder data
```
