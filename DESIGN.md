# Design Specification: CrewCut Documentation (`docs.crewcut.in`)

<!-- impeccable:design-schema 1 -->

## Design System & Theme Direction

The visual language of `docs.crewcut.in` strictly mirrors the aesthetic of the main application (`app.crewcut.in`): **sleek, premium dark mode with a high-contrast monochrome/grayscale palette**. 

It prioritizes high readability, rapid scanning, clean typography, and purposeful whitespace.

---

## 🎨 Color Palette & Design Tokens

| Token Name | Hex Code | Usage |
|---|---|---|
| `--color-bg-canvas` | `#09090b` | Main page background (deep dark) |
| `--color-bg-surface` | `#121215` | Sidebar, cards, code blocks, containers |
| `--color-bg-hover` | `#18181b` | Hover states, active list items |
| `--color-border-subtle` | `#27272a` | Borders, horizontal rules, table dividers |
| `--color-border-hover` | `#3f3f46` | Border focus and hover outlines |
| `--color-text-primary` | `#fafafa` | Headings, titles, active navigation labels |
| `--color-text-secondary`| `#a1a1aa` | Body text, descriptive captions |
| `--color-text-muted` | `#71717a` | Metadata, breadcrumbs, shortcuts, timestamps |
| `--color-accent` | `#ffffff` | Primary buttons, active badges, highlights |
| `--color-accent-inverse`| `#09090b` | Text on solid accent buttons |

### Callout Tokens (Custom Starlight Asides)
- **Note / Info**: Dark gray background (`#18181b`), border (`#27272a`), icon/title white (`#ffffff`).
- **Tip / Pro-Tip**: Subtle emerald/zinc border highlight, monochrome text.
- **Warning / Caution**: High-contrast zinc/amber badge (`#fbbf24` text on subtle dark container).
- **Danger / Critical**: High-contrast rose badge (`#f87171` text on subtle dark container).

---

## ✍️ Typography

- **Font Family (Sans)**: `Inter`, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif.
- **Font Family (Mono)**: `JetBrains Mono`, "SF Mono", Menlo, Consolas, monospace (for timecodes e.g. `02:14.05`, URLs, and API endpoints).
- **Hierarchy**:
  - `h1`: 2.25rem (36px), font-weight 700, tracking -0.025em, `#fafafa`
  - `h2`: 1.5rem (24px), font-weight 600, tracking -0.02em, `#fafafa`, top margin with separator border
  - `h3`: 1.25rem (20px), font-weight 600, `#fafafa`
  - `p` / `li`: 1rem (16px), line-height 1.7, font-weight 400, `#a1a1aa`
  - `code` inline: 0.875rem, font-weight 500, `#e4e4e7`, background `#18181b`, border `#27272a`, px-1.5 py-0.5 rounded

---

## 📱 Layout & Navigation

- **Header**:
  - Left: Official CrewCut monochrome logomark + "Docs" badge.
  - Center/Right: Built-in instant search shortcut (`Ctrl + K` / `Cmd + K`), link to `app.crewcut.in`, GitHub / Support link.
- **Sidebar**:
  - Clean collapsible navigation hierarchy:
    1. Getting Started
    2. Creator Guide
    3. Reviewer Guide
    4. Media, Storage & Bandwidth
    5. Billing, Plans & Invoices
    6. FAQ & Troubleshooting
- **Right Sidebar (Table of Contents)**:
  - "On this page" outline for fast jumping.
- **Footer**:
  - Previous / Next article pagination buttons.
  - "Was this page helpful?" feedback widget.
  - Copyright and direct link back to CrewCut.

---

## 💻 Code Blocks & Technical Elements

- Pure dark editor style with subtle 1px border (`#27272a`).
- Copy code / Copy link button on top right of every code block or section anchor.
- Syntax highlighting: High-contrast monochrome / subtle grayscale theme (such as `github-dark` or `vitesse-dark`).

---

## 📱 Mobile Responsiveness Rules

1. Navigation must collapse cleanly into a smooth mobile drawer with accessible tap targets (minimum 44x44px).
2. Tables must scroll horizontally with smooth fading cues instead of breaking page width.
3. Callouts must preserve full padding and not cause horizontal overflow.
4. Search must open full-screen modal on mobile devices with instant keyboard focus.
