# Technical Requirements Document (TRD): CrewCut Documentation

**Project**: `docs.crewcut.in`  
**Parent Product**: CrewCut (`app.crewcut.in`)  
**Stack**: Astro v5 + Starlight  
**Hosting**: Vercel (Static Output)  
**Status**: Ready for Implementation  

---

## 1. System Architecture Overview

`docs.crewcut.in` is built as an ultra-fast, zero-runtime-overhead static documentation website using **Astro** and the **Starlight** documentation engine.

```
┌────────────────────────────────────────────────────────┐
│                   Vercel Global Edge                   │
│               (docs.crewcut.in / SSL / CDN)             │
└───────────────────────────┬────────────────────────────┘
                            │
            ┌───────────────┴───────────────┐
            ▼                               ▼
┌───────────────────────┐       ┌───────────────────────┐
│  Pre-rendered Static  │       │   Client-Side Search  │
│  HTML & CSS (Astro)   │       │       (Pagefind)      │
└───────────────────────┘       └───────────────────────┘
```

### Key Architectural Traits
- **Zero Server Costs & Zero Database**: Pure static site generation (SSG). Zero server-side cold starts or database query bottlenecks.
- **Client-Side Pagefind Search**: Embedded full-text search indexing runs at build time; searches occur instantly in the user's browser with zero cloud search costs.
- **Strict Separation from App API**: The docs repo has no direct coupling to the production Supabase or Bunny Stream APIs, ensuring 100% uptime even during application maintenance.

---

## 2. Technology Stack & Dependencies

| Layer | Technology | Justification |
|---|---|---|
| **Engine** | Astro (v5.x) | State-of-the-art static content engine with zero JS sent to client by default. |
| **Theme / Framework** | `@astrojs/starlight` | Official Astro documentation framework featuring built-in i18n, search, sidebar, TOC, and accessible semantics. |
| **Search** | Pagefind (bundled with Starlight) | Zero-config, offline-capable, lightning-fast static search without Algolia or external API keys. |
| **Components** | `.astro` & `.mdx` | Markdown with embedded UI components (badges, callout cards, feedback widget). |
| **Styling** | Vanilla CSS Tokens (`custom.css`) | Custom CSS overriding Starlight custom properties to strictly enforce CrewCut's monochrome dark palette. |
| **Deployment** | Vercel Static | Instant global deployment, edge caching, automated preview branches, and custom subdomain binding (`docs.crewcut.in`). |

---

## 3. Directory Structure

```
Crewcut-docs/
├── .vercel/                      # Vercel project configuration
├── public/                       # Static public assets
│   ├── favicon.svg               # Monochrome CrewCut favicon
│   └── crewcut-logo.png          # High-res monochrome logo
├── src/
│   ├── assets/                   # Optimized images and diagrams
│   ├── components/               # Custom MDX components
│   │   ├── FeedbackWidget.astro  # "Was this page helpful?" widget
│   │   └── PlanBadge.astro       # Visual plan tier badges (Free/Starter/etc.)
│   ├── content/
│   │   └── docs/                 # Documentation pages (MDX)
│   │       ├── getting-started/
│   │       ├── creator-guide/
│   │       ├── reviewer-guide/
│   │       ├── storage-bandwidth/
│   │       ├── plans-invoices/
│   │       └── troubleshooting/
│   │       └── index.mdx         # Documentation Home / Hub
│   ├── styles/
│   │   └── custom.css            # Grayscale / monochrome theme overrides
│   └── content.config.ts         # Astro content collections schema
├── docs/                         # Repository engineering docs (PRD, TRD, Brain)
│   ├── Brain.md
│   ├── PRD.md
│   └── TRD.md
├── astro.config.mjs              # Starlight & Astro configuration
├── DESIGN.md                     # Design contract and color tokens
├── PRODUCT.md                    # Product specifications
├── package.json                  # Scripts and dependencies
├── tsconfig.json                 # TypeScript strict configuration
└── vercel.json                   # Vercel static routing and security headers
```

---

## 4. Theme Configuration & Design Tokens

Starlight uses CSS custom properties defined on `:root` and `[data-theme='dark']`. We map these to CrewCut's monochrome dark palette:

```css
/* src/styles/custom.css */
:root {
  --sl-color-accent-low: #18181b;
  --sl-color-accent: #ffffff;
  --sl-color-accent-high: #e4e4e7;
  
  --sl-color-white: #fafafa;
  --sl-color-gray-1: #f4f4f5;
  --sl-color-gray-2: #e4e4e7;
  --sl-color-gray-3: #a1a1aa;
  --sl-color-gray-4: #71717a;
  --sl-color-gray-5: #27272a;
  --sl-color-gray-6: #18181b;
  --sl-color-black: #09090b;

  --sl-color-bg: #09090b;
  --sl-color-bg-nav: #09090b;
  --sl-color-bg-sidebar: #0e0e11;
  --sl-color-hairline: #27272a;
}

/* Enforce dark-mode first contrast */
html[data-theme='dark'] {
  color-scheme: dark;
}
```

---

## 5. Content Collections & Metadata Schema

All documentation files reside in `src/content/docs/` and adhere to Astro's content schema:

```typescript
// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({
    schema: docsSchema({
      extend: z.object({
        audience: z.enum(['creator', 'reviewer', 'all']).optional(),
        lastVerified: z.string().optional(),
      }),
    }),
  }),
};
```

### Frontmatter Standard
Every documentation page must include:
```yaml
---
title: "Uploading Videos via Resumable TUS"
description: "How CrewCut uses resumable chunk uploads to ensure rock-solid video uploads on Indian mobile networks."
sidebar:
  order: 1
---
```

---

## 6. Custom Interactive Components

### 6.1 "Was this page helpful?" (`FeedbackWidget.astro`)
- Injected at the bottom of each article before the footer pagination.
- Client-side interactive buttons (👍 Yes / 👎 No).
- Persists user vote to `localStorage` to prevent duplicate submissions.
- Emits a custom analytics event (optional PostHog or anonymous local ping).

### 6.2 Visual Tier Badges (`PlanBadge.astro`)
- Renders uniform, high-contrast badges for documentation references:
  - `<PlanBadge plan="Free" />` $\rightarrow$ `FREE (2 GB)`
  - `<PlanBadge plan="Starter" />` $\rightarrow$ `STARTER (₹199)`
  - `<PlanBadge plan="Plus" />` $\rightarrow$ `PLUS (₹499)`
  - `<PlanBadge plan="Studio" />` $\rightarrow$ `STUDIO (₹999)`

---

## 7. Build, Verification & Deployment Pipeline

### Commands
```bash
# Development server (http://localhost:4321)
npm run dev

# Production build (creates /dist directory)
npm run build

# Local preview of the production build
npm run preview
```

### Vercel Deployment Configuration (`vercel.json`)
```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "cleanUrls": true,
  "trailingSlash": false,
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
      ]
    }
  ]
}
```

---

## 8. Quality Gates & Verification Standards

Before any PR or commit is marked complete:
1. **Zero Build Warnings / Errors**: `npm run build` must complete cleanly with exit code 0.
2. **Pagefind Search Indexing**: Build logs must show full Pagefind index creation without malformed HTML warnings.
3. **Internal Link Integrity**: No dead links or broken anchors (`404` checks).
4. **Mobile Responsiveness**: Verified across viewports (360px mobile width, 768px tablet, 1280px+ desktop).
5. **No Hallucinated Scope**: Checked against `docs/Brain.md` to confirm only real v1 features are documented.
