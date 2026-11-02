# CrewCut Documentation — Brain (Running Project Context)

**Last Updated:** 2026-11-02  
**Repository:** `c:\Users\jigne\Projects\Crewcut-docs`  
**Parent App Repository:** `c:\Users\jigne\Projects\Crewcut` (`app.crewcut.in`)  
**Domain:** `docs.crewcut.in`  

---

## 1. Decisions Made

| Date | Category | Decision | Rationale |
|---|---|---|---|
| 2026-11-02 | **Framework** | **Astro 5 + Starlight** for the documentation engine. | Zero runtime JS, instant static page loads, native Markdown/MDX support, and built-in client-side Pagefind search. |
| 2026-11-02 | **Visual Theme** | **Monochrome Dark Mode** (High-contrast grayscale palette `#09090b` canvas, `#18181b` surface, `#27272a` borders, `#fafafa` headings). | Perfectly mirrors the main CrewCut application interface and DaVinci/Frame.io professional creative aesthetics. |
| 2026-11-02 | **Search** | **Starlight Built-in Pagefind Search**. | Operates 100% client-side with zero external SaaS costs, zero API keys, and instant sub-10ms lookup speed. |
| 2026-11-02 | **Audience Split** | Dedicated documentation sections for **Creators** and **Reviewers**. | Creators need deep guidance on upload mechanics, quotas, and folders; Reviewers only need fast reassurance on zero-login commenting. |
| 2026-11-02 | **Hosting** | **Vercel Static Output** (`outputDirectory: "dist"`). | Mirrors the production hosting strategy of `app.crewcut.in` and enables automatic preview deploys. |
| 2026-11-02 | **Scope Boundary** | Static docs only; zero coupling to Supabase DB or backend APIs. | Keeps documentation 100% resilient and online regardless of backend maintenance or migrations. |
| 2026-11-02 | **Interactive Feedback** | Embedded `FeedbackWidget.astro` and `PlanBadge.astro`. | Provides immediate user sentiment tracking and visual plan tags with zero external runtime tracking bloat. |

---

## 2. Implementation Status & Verified Builds

- **Engine**: Astro v5.18.2 + Starlight v0.32.6
- **Static Pages Built**: 22 HTML pages + XML sitemap
- **Search Index**: 21 indexed pages via Pagefind v1.6.0
- **Verification Command**: `npm run build` exits with code 0 (100% clean)
- **All 6 Content Modules Authored**:
  - `Getting Started`: Overview, 3-Minute Quickstart, Supported Formats
  - `Creator Guide`: Uploading Videos, Folders & Library, Sharing Review Links, Managing Feedback, Shared Folders
  - `Reviewer Guide`: Reviewing a Cut (Zero Login), Timestamped Feedback, Email Notifications
  - `Storage & Bandwidth`: Understanding Quotas, Delivery Limits, Requesting Storage
  - `Plans & Billing`: Pricing Plans (INR), Payment & Checkout (Razorpay), GST Invoices
  - `Troubleshooting & FAQ`: Upload Issues & Resuming, Playback & Buffering, Security & Privacy

---

## 2. Scope Lock (CRITICAL FOR ALL AI AGENTS)

The following items are **strictly out of scope for v1 of CrewCut**. When writing documentation, guides, or code, **NEVER assume or document any of the following**:

- ❌ **No Team Seats / Roles**: Do not document team member roles, permissions, agency/editor/client logins, or multi-user seats. Everyone has a standard single-user account.
- ❌ **No Nested Folders**: Folders in CrewCut are flat, single-level only. No sub-folders.
- ❌ **No Video Version Stacks**: Revised cuts are uploaded as new videos. Do not write about "version 1, version 2 stacks" or automated revision branching.
- ❌ **No Canvas / Frame Drawing Annotations**: Feedback is strictly timestamped text comments with threading. No freehand drawing or canvas pens on video frames.
- ❌ **No Rush Transcoding**: Rush transcoding is turned OFF for launch (`rush_minutes = 0`). Do not advertise or document rush processing.
- ❌ **No Reviewer Downloads by Default**: Reviewers cannot download source files unless the creator explicitly enables file downloads.
- ❌ **No Marketplace / Talent Discovery**: CrewCut is purely a review & delivery tool, not a freelancer hiring marketplace.

---

## 3. Product Facts & Ground Truth Table

When authoring documentation articles, verify against these verified facts:

| Feature | Ground Truth / Actual Implementation |
|---|---|
| **Video Uploads** | Direct browser-to-Bunny Stream resumable TUS upload. Video files never touch our web servers. Resilient against unstable Indian broadband/mobile networks. |
| **Reviewer Authentication** | **Zero login required**. Reviewers click the link and immediately scrub and comment at precise timestamps. |
| **Reviewer Update Prompt** | Triggered only after the reviewer's first comment; asks for email to receive updates. Dismissible and stored in `localStorage`. |
| **Storage Calculation** | Bunny Stream stores the original uploaded cut plus generated web resolutions. Total stored bytes are roughly $\sim 1.5\times$ original file size. |
| **Delivery Bandwidth Metering** | Metered via Bunny stats based on pro-rated watch time (`watchTime / duration * size`). Monthly delivery caps prevent unexpected CDN overages. |
| **Delivery Limit Reached** | When a creator hits their monthly bandwidth delivery cap, review links display HTTP 429 ("Monthly delivery limit reached"). |
| **Contributor Uploads** | Public playlist viewing is anonymous, but uploading into a shared folder requires authentication. Contributor uploads count against owner quota (capped at 25% owner quota, 10 uploads/day, 500 MB max file size). |
| **Pricing & Quotas (INR)** | - **Free**: 2 GB Storage / 4 GB Delivery Bandwidth<br>- **Starter**: ₹199 / 10 GB Storage / 20 GB Delivery Bandwidth<br>- **Plus**: ₹499 / 30 GB Storage / 60 GB Delivery Bandwidth<br>- **Studio**: ₹999 / 60 GB Storage / 120 GB Delivery Bandwidth |
| **Payments** | Processed through Razorpay as one-time order checkouts. Reminders prompt manual renewal. |
| **Invoices** | Sequential numbering `CC/{FY}/{SEQ}` with zero GST under ₹20L exemption. Sent automatically as PDF receipts via Resend (`notifications@notification.crewcut.in`). |

---

## 4. Guidelines for AI Agents Working in this Repository

1. **Check `Crewcut` Main App For Verification**:
   - If unsure how a feature looks, works, or is named, check the source code in `c:\Users\jigne\Projects\Crewcut` (`src/components/`, `docs/Brain.md`, `docs/PRD.md`).
2. **Never Fabricate UI Actions**:
   - Use the exact button labels found in `app.crewcut.in` (e.g., "Share cut", "New folder", "Request storage", "Move to...", "Copy link").
3. **Use Starlight Markdown/MDX Features**:
   - Use Starlight asides for callouts: `:::tip`, `:::note`, `:::caution`, `:::danger`.
   - Embed `<PlanBadge />` or custom components where helpful.
4. **Maintain Pure Grayscale / Monochrome Aesthetics**:
   - Never inject flashy primary colors (blue, green, purple). Stay faithful to CrewCut's sleek black, white, and zinc palette.
5. **Verify All Builds**:
   - Before finishing any turn or commit, always verify `npm run build` generates the static files cleanly in `dist/`.
