# Product Specification: CrewCut Documentation (`docs.crewcut.in`)

<!-- impeccable:product-schema 1 -->

## Platform

Web (Fast, responsive, static documentation website deployed at `docs.crewcut.in`).

## Users

1. **Video Creators & Editors**: Freelancers, studio owners, and creators in India using `app.crewcut.in` to deliver client video cuts. They need clear instructions on uploading via resumable TUS, organizing single-level folders, setting up shared playlists, configuring contributor uploads, and understanding storage/delivery bandwidth limits.
2. **Reviewers & Clients**: Directors, producers, marketing managers, and clients who receive a CrewCut review link. They need quick, reassuring guidance that they do **not** need an account, how to scrub and leave timestamped comments, and how to subscribe to update notifications.

## Product Purpose

`docs.crewcut.in` is the official user documentation and knowledge base for **CrewCut**. It provides clear, straightforward, zero-jargon guides that answer:
- How CrewCut works end-to-end (Upload $\rightarrow$ Share $\rightarrow$ Timestamped Feedback).
- How creators manage storage and bandwidth limits.
- How clients review cuts smoothly on desktop and mobile without signing up.
- How pricing, INR plans, and Razorpay invoices operate.

## Positioning

Minimalist, searchable, and lightning-fast documentation matching the sleek, dark, high-contrast aesthetic of CrewCut. It avoids robotic fluff and provides direct, actionable instructions with visual callout boxes and step-by-step walkthroughs.

## Operating Context

- **Parent Application**: `c:\Users\jigne\Projects\Crewcut` (`app.crewcut.in`), which runs on React, Vite, Supabase, and Bunny Stream.
- **Documentation Repo**: `c:\Users\jigne\Projects\Crewcut-docs` (`docs.crewcut.in`), powered by **Astro + Starlight**.
- **Deployment**: Static build hosted on Vercel at `docs.crewcut.in`.
- **Search**: Built-in client-side search powered by Pagefind (zero external SaaS dependencies).

## Capabilities & Constraints

- **Single Source of Truth**: All feature descriptions must match the actual implementation in `Crewcut` v1 (no hallucinated features like multi-user team seats, nested folders, canvas drawing, or automated version history stacks).
- **Tone**: Professional, punchy, clear, and tailored to Indian creative professionals (pricing in INR, GST considerations, mobile-first performance on Indian networks).
- **No Heavy Client Overhead**: Pure static HTML/CSS/minimal JS for blazing performance and instant search.

## Brand Commitments

- **Aesthetic**: Strictly matches CrewCut's sleek dark-mode, high-contrast monochrome/grayscale design language.
- **Logo & Identity**: Uses the official CrewCut logomark rendered in crisp monochrome/high contrast.
- **Color Palette**: Dark background (`#09090b` / `#000000`), subtle dark gray borders (`#27272a`), crisp white text (`#fafafa` / `#ffffff`), muted body copy (`#a1a1aa`). No distracting bright colors—only subtle badges/callouts.

## Core Content Principles

1. **Keep it Practical**: Show the exact button names and steps matching `app.crewcut.in`.
2. **Emphasize Friction-Free Reviewing**: Prominently assure clients they do not need an account or software download.
3. **Be Transparent About Limits**: Clearly explain Bunny Stream storage multipliers (~1.5x) and monthly delivery bandwidth caps so creators never get unexpected 429 blocks.
4. **Preserve Scope Integrity**: Reflect only v1 capabilities. Never document speculative or unreleased features.
