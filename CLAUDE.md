# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

"Pallets en Chile" is a single-page marketing website for a Chilean B2B wooden pallet logistics company (sale, purchase, and repair of pallets). Target market is retail chains, wholesale, and logistics companies in Santiago/Chile.

## Architecture

This is a **static website with no build system**. The entire site lives in three files:

- `index.html` — Single-page site (~1000 lines) containing all content and embedded Tailwind config
- `script.js` — JavaScript (currently empty, reserved for interactivity)
- `styles.css` — Custom CSS (currently empty, all styling via Tailwind utilities)

**No package.json, no bundler, no framework.** Dependencies are CDN-hosted:
- Tailwind CSS (with `forms` and `container-queries` plugins)
- Google Fonts (Manrope: 400, 500, 700, 800)
- Google Material Symbols (Outlined)

## Development

Open `index.html` directly in a browser or use any static file server. No build step required.

## Tailwind Configuration

Custom config is embedded in a `<script>` tag inside `index.html` `<head>`. Key design tokens:

- **Primary:** `#1B4332` (dark green), hover: `#143326`
- **Accent:** `#B77933` (bronze)
- **Background:** light `#F5F1E8`, dark `#1F2933`
- **Dark mode:** enabled via `class` strategy
- **Font:** Manrope (sans-serif)
- **Border radius:** base `0.5rem`, lg `0.75rem`, xl `1rem`, 2xl `1.5rem`

## Page Sections

The page has anchored sections: `#inicio` (hero), `#servicios` (services), `#tipos` (product catalog), `#nosotros` (why choose us), `#faq`. Navigation links target these anchors.

## Key Patterns

- All lead-capture CTAs link to WhatsApp (`https://wa.me/56900000000`)
- FAQ uses native `<details>` elements for expand/collapse
- Floating WhatsApp button is fixed bottom-right with bounce animation
- Header uses glassmorphism (`backdrop-blur`) and is sticky
- Language: all user-facing content is in **Spanish (Chile)**
