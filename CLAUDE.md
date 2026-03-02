# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

notJust.dev — a content platform for React Native & Expo tutorials. Built with **Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS**. Content is managed in **Notion** and rendered as MDX. Deployed on **AWS Amplify**.

## Commands

```bash
npm run dev          # Start dev server (localhost:3000)
npm run build        # Production build
npm run lint         # ESLint check
npm run lint-fix     # ESLint auto-fix
```

No test runner is configured. Prettier runs via Husky pre-commit hook.

## Architecture

### Routing (src/app/)

Uses Next.js App Router with **route groups** for layout separation:

- `(main)/` — Blog posts (`/blog/[slug]`), projects (`/projects/[slug]`), case studies, events, tags
- `(landings)/` — Landing pages (incubator, react-native-mastery, partnerships, podcast, newsletter) with minimal layouts
- `(tools)/` — Interactive tools (app-revenue-calculator)
- `(legal)/` — Legal/policy pages
- `bootcamp/` — Bootcamp section

### Content Pipeline

1. **Notion database** → `src/lib/notion/` queries posts, projects, case studies via `@notionhq/client`
2. **notion-to-md** converts Notion blocks to markdown
3. **MDX compilation** with rehype-slug, rehype-autolink-headings, remark-mdx-images
4. **Images** are copied from Notion's expiring URLs to **S3** (`src/lib/s3Client.ts`)
5. Pages use **ISR** with 10–60 second revalidation

Content types are defined by `PostType`: `'Blog' | 'Project' | 'Case study'` — all stored in the same Notion database, distinguished by a `Type` select property.

### Key Modules

- `src/lib/notion/` — Notion client, page parsing, MDX conversion
- `src/lib/convertkit/` — ConvertKit/Kit newsletter API integration
- `src/lib/authors.ts` — Author details from Notion relations
- `src/lib/s3Client.ts` — S3 media upload (copies Notion images to persistent storage)
- `src/lib/config.ts` — Site-wide constants (SEO defaults, social links, ConvertKit config)
- `src/components/ServerLayout.tsx` — Shared layout wrapper (Navbar, Footer, MaxWidthWrapper)
- `src/views/` — Page-specific view components composed in route pages

### Type Definitions

All in `src/types/` as `.d.ts` files: `Post`, `PostMeta`, `Author`, `Event`, `Broadcast`, `SocialMediaPlatform`.

### Path Aliases

- `@/*` → `./src/*`
- `@images/*` → `./public/images/*`

## Styling

Tailwind CSS with custom theme:
- **Primary**: `#ffe031` (yellow) | **Secondary**: `#8bd2bd` (teal)
- **Fonts**: Space Grotesk (headings, `font-display`), Inter (body, `font-body`)
- Dark background theme (`#0e0b00`)
- MDX-specific styles in `src/styles/mdx.css`

## Environment Variables

Required (see `.env.example`):
- `NOTION_KEY`, `NOTION_DATABASE`, `NOTION_EVENTS_DATABASE` — Notion CMS access
- `AWS_REGION`, `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `S3_BUCKET` — S3 media storage
- `KIT_API_KEY` — ConvertKit/Kit API
- `NEXT_PUBLIC_CONVERTKIT_FORM_*` — Newsletter form embedding
- `NEXT_PUBLIC_GTM` — Google Tag Manager ID
