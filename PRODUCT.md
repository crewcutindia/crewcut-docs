# Product Specification: CrewCut Documentation (`docs.crewcut.in`)

<!-- impeccable:product-schema 1 -->

## Platform

Web (Fast, responsive, static documentation website deployed at `docs.crewcut.in`).

## Users

1. **Video Creators, Editors & Agencies**: Freelancers, studios, and agencies using `app.crewcut.in` to deliver client video cuts, host companion production files (`.wav`, `.psd`, `.prproj`, `.aep`), synchronize markers with Adobe Premiere Pro / After Effects, manage storage add-ons, and download GST-compliant tax invoices.
2. **Reviewers & Clients**: Directors, producers, marketing managers, and clients who receive a CrewCut review link. They need quick, reassuring guidance that they do **not** need an account, how to record 100-second voice notes, how to draw on video frames, how to scrub 9:16 vertical Reels, and how to stream or download cuts.

## Product Purpose

`docs.crewcut.in` is the official user documentation and knowledge base for **CrewCut**. It provides clear, straightforward, zero-jargon guides that answer:
- How CrewCut works end-to-end (Upload $\rightarrow$ Share $\rightarrow$ Frame-accurate Feedback & Voice Notes).
- How creators use CrewCut Drive to store companion audio stems and Adobe project files.
- How editors install and use the Adobe Premiere Pro & After Effects extension to sync sequence markers.
- How clients review cuts smoothly on desktop and mobile without signing up.
- How pricing, INR plans, storage add-on packs, and Razorpay invoices operate.

## Positioning

Minimalist, searchable, and lightning-fast documentation matching the sleek, dark, high-contrast aesthetic of CrewCut. It avoids robotic fluff and provides direct, actionable instructions with step-by-step walkthroughs.

## Operating Context

- **Parent Application**: `c:\Users\jigne\Projects\Crewcut` (`app.crewcut.in`), which runs on React, Vite, Supabase, and Bunny Stream.
- **Documentation Repo**: `c:\Users\jigne\Projects\Crewcut-docs` (`docs.crewcut.in`), powered by **Astro + Starlight**.
- **Deployment**: Static build hosted on Vercel at `docs.crewcut.in`.
- **Search**: Built-in client-side search powered by Pagefind (zero external SaaS dependencies).

## Capabilities & Scope (v3.0 General Availability)

- **Phase 1 & Phase 2 Features Documented:**
  - 100-Second in-browser Audio Voice Notes with waveform visualization.
  - On-frame Canvas Drawing and Visual Annotations (Arrow, Freehand, Box).
  - 9:16 Vertical Reels / Shorts Mode for mobile and social video cuts.
  - CrewCut Drive: Companion assets hosting (`.wav`, `.psd`, `.prproj`, `.aep`, documents, fonts) with unified storage meters.
  - Adobe NLE Extension: Marker & comment synchronization for Adobe Premiere Pro and After Effects.
  - Direct Streaming Downloads: Native browser downloads via streaming Service Worker with rate-limiting protection.
  - Production Tiers: Free (5 GB, 7d retention), Starter (₹199/mo, 25 GB, 14d retention), Plus (₹499/mo, 75 GB, permanent retention), Studio (₹999/mo, 150 GB, permanent retention).
  - Storage Add-on Packs: Seed (+10 GB @ ₹59), Lite (+25 GB @ ₹139), Basic (+30 GB @ ₹159), Standard (+50 GB @ ₹249).
  - Payments & Invoices: Razorpay UPI Autopay, cards, NetBanking, Section 22 CGST Act threshold exemption, PDF invoices.
  - Two-Factor Authentication (TOTP 2FA) and link passcodes.
