# Product Requirements Document (PRD): CrewCut Documentation

**Project**: `docs.crewcut.in`  
**Parent Product**: CrewCut (`app.crewcut.in`)  
**Status**: Ready for Implementation  
**Target Release**: Q4 2026  

---

## 1. Executive Summary & Objective

CrewCut is a video review platform purpose-built for video editors, animators, and creators who need feedback on video cuts without client friction. Clients review cuts and leave exact timestamped comments **without creating an account**.

The objective of **`docs.crewcut.in`** is to provide an intuitive, lightning-fast, and searchable documentation hub that serves both video creators managing their media and clients leaving review notes. It reduces support queries, clarifies storage and delivery bandwidth caps, and ensures a seamless onboarding experience.

---

## 2. Target Personas & Use Cases

### Persona A: The Video Editor / Creator (Owner)
- **Profile**: Indian freelance editors, motion graphic designers, and boutique post-production studios.
- **Pain Points**:
  - Clients sending feedback via disorganized WhatsApp voice notes, emails, and un-timestamped messages.
  - Video uploads failing or restarting halfway on patchy internet connections.
  - Unexpected storage bills or confusing cloud bandwidth fees.
- **Goals in Docs**:
  - Learn how to upload cuts reliably using resumable TUS uploads.
  - Understand how to organize cuts in flat single-level folders.
  - Configure contributor uploads for clients or assistant editors.
  - Understand exactly how Bunny Stream storage multipliers and monthly delivery bandwidth limits work.
  - View plan differences in INR (₹199, ₹499, ₹999) and download GST invoices.

### Persona B: The Reviewer / Client (Guest)
- **Profile**: Agency creative directors, brand managers, marketing leads, or creators who hire editors.
- **Pain Points**:
  - Hate signing up for an account just to review a 30-second draft.
  - Need to quickly point out a change at `01:23` without pausing and manually writing timestamps.
- **Goals in Docs**:
  - Reassurance that **no login or account creation** is required.
  - Learn how to pause, scrub, leave timestamped feedback, and receive email updates when revisions drop.

---

## 3. Information Architecture (Site Map)

The documentation site is structured into six intuitive, progressive sections:

```
docs.crewcut.in/
├── 1. Getting Started/
│   ├── overview.mdx              # What is CrewCut & Core 3-Step Flow
│   ├── quickstart.mdx            # 3-Minute Quickstart for Creators
│   └── supported-formats.mdx     # Video containers, codecs, and resolution limits
│
├── 2. Creator Guide/
│   ├── uploading-videos.mdx      # Resumable TUS uploads, progress, network resilience
│   ├── library-and-folders.mdx   # Single-level folders, sorting, list vs grid view
│   ├── sharing-cuts.mdx          # Generating public review links, download permissions
│   ├── managing-feedback.mdx     # Reviewing timestamped comments, resolving feedback
│   └── shared-folders.mdx        # Playlist sharing & verified contributor uploads
│
├── 3. Reviewer Guide/
│   ├── reviewing-a-cut.mdx       # Zero-login review experience on desktop and mobile
│   ├── timestamped-feedback.mdx  # Precision commenting, timecode jumping, threading
│   └── email-notifications.mdx   # Optional update alerts after first comment
│
├── 4. Storage & Bandwidth/
│   ├── understanding-quotas.mdx  # Storage vs Delivery Bandwidth: How they are calculated
│   ├── delivery-limits.mdx       # Monthly bandwidth caps & HTTP 429 quota protection
│   └── requesting-storage.mdx    # Requesting custom storage expansion quotes
│
├── 5. Plans & Invoices/
│   ├── pricing-plans.mdx         # Free, Starter, Plus, Studio comparison (INR rates)
│   ├── payment-and-checkout.mdx  # One-time Razorpay checkout & renewal process
│   └── gst-invoices.mdx          # Automated PDF tax invoices & sequential numbering
│
└── 6. Troubleshooting & FAQ/
    ├── upload-issues.mdx         # Resuming interrupted uploads, browser troubleshooting
    ├── playback-buffering.mdx    # Player resolution switching & CDN streaming
    └── security-and-privacy.mdx  # Token authentication & non-downloadable links
```

---

## 4. Detailed Content Specifications

### 4.1 Getting Started
- **Core Value Prop**: Upload a video $\rightarrow$ Get a private link $\rightarrow$ Reviewers comment at exact seconds without an account.
- **Supported Formats**: MP4, MOV, WebM, ProRes. Direct upload to Bunny Stream transcoding pipelines (supporting 360p through 4K depending on input).

### 4.2 Creator Guide
- **Resumable TUS Upload**:
  - Document that video files never pass through intermediate servers; uploads stream directly to Bunny CDN via resumable chunks.
  - If a connection drops on mobile hotspot or broadband, the upload resumes automatically right where it left off.
- **Folder Structure**:
  - Explicitly document single-level flat folders. (No nested sub-folders).
- **Shared Folders & Contributor Uploads**:
  - Anyone can view shared folder playlists anonymously.
  - Uploading into an owner's shared folder requires contributor authentication (Google/Magic Link) to prevent spam.
  - Contributor uploads consume the folder owner's quota (guarded by 25% owner cap, max 10 uploads/day, 500MB per file).

### 4.3 Reviewer Guide
- **Zero-Login Guarantee**:
  - Emphasize that clicking a review link lands the client straight into the video player.
  - Reviewers can scrub, type notes attached to the exact frame, and press Enter.
- **Comment Prompts**:
  - Explain that after leaving their first comment, reviewers are politely offered email updates on that cut (completely optional and dismissible).

### 4.4 Storage, Delivery & Quotas
- **Storage Multiplier**:
  - Educate users on Bunny Stream encoding: Bunny stores the original video plus generated web resolutions (total storage is roughly $\sim 1.5\times$ original size).
- **Delivery Bandwidth**:
  - Explain the difference between disk storage (GB stored) and delivery bandwidth (GB streamed to reviewers).
  - When the monthly delivery bandwidth cap is reached, review links display a clean "Monthly delivery limit reached" notice (HTTP 429) to protect the owner from runaway CDN bills.

### 4.5 Plans, Invoices & Billing
- **Plans & Pricing**:
  - **Free**: 2 GB Storage / 4 GB Delivery Bandwidth (Free forever).
  - **Starter**: ₹199 / 10 GB Storage / 20 GB Delivery Bandwidth.
  - **Plus**: ₹499 / 30 GB Storage / 60 GB Delivery Bandwidth.
  - **Studio**: ₹999 / 60 GB Storage / 120 GB Delivery Bandwidth.
- **Razorpay Checkout**:
  - Purchases are processed as one-time order payments.
  - Reminders prompt users to renew before the monthly period ends.
- **Invoices**:
  - Invoices are automatically generated as PDF receipts with sequential numbers (`CC/{FY}/{SEQ}`).
  - Emailed automatically via Resend from `notifications@notification.crewcut.in`.

---

## 5. Interactive UI Features (v1)

1. **Instant Offline Search (Pagefind)**:
   - High-speed fuzzy search across all documentation titles, headers, and body content with zero third-party telemetry or paid indexing.
2. **"Was this page helpful?" Feedback**:
   - Quick binary feedback buttons (👍 / 👎) with local state acknowledgement.
3. **Visual Callout Asides**:
   - `:::tip` (Pro-Tips for editors e.g. exporting cuts in H.264 for fastest upload).
   - `:::note` (System notes and default behaviors).
   - `:::caution` (Bandwidth cap warnings and file size limits).
4. **Copy Link & Code Snippets**:
   - One-click copy on section headings and timecode / URL formats.

---

## 6. Strict Scope Lock (Out of Scope for v1)

To prevent AI agents or developers from hallucinating features or documenting unsupported behavior, the following are **strictly barred**:
- ❌ **No Team Seats / Roles**: Do not document team collaboration, agency/editor roles, or client user accounts.
- ❌ **No Nested Folders**: Folders are strictly single-level flat structures.
- ❌ **No Version History Stacks**: Revisions are uploaded as fresh cuts.
- ❌ **No Canvas Drawing / Pen Annotations**: Comments are timestamped text threads, not drawings on video frames.
- ❌ **No Rush Transcoding**: Rush encoding is deactivated for launch; standard encoding applies to all tiers.
- ❌ **No User Auth on Docs**: The documentation site is 100% public, static, and does not require login.
