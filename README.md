# Muhammad Ahmad — Portfolio

Dark-themed portfolio site for an AI / ML / Full Stack engineer. Built with Next.js, TypeScript, and Tailwind CSS.

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

## Project structure

```
src/
  app/           # layout, page, global styles
  components/    # UI sections and shared components
  lib/           # site data, hooks
public/
  resume.pdf     # served at /resume.pdf
```

## Content

Edit copy, projects, and links in `src/lib/data.ts`.  
Replace `public/resume.pdf` to update the downloadable resume.

## Deploy

Works on [Vercel](https://vercel.com) out of the box. Set the production domain in `src/app/layout.tsx` (`metadataBase`) after deploy.
