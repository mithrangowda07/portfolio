# Portfolio UI Design System & Architecture

This document outlines the visual language, design system tokens, layout grids, components architecture, interactive micro-animations, and engineering practices implemented in **Mithra N Gowda's** retro OS-themed portfolio.

---

## 1. Design Philosophy: Neo-Retro Classic Desktop GUI

The user interface of the portfolio takes inspiration from classic desktop operating system environments (such as Windows 95, classic Macintosh OS, and early workstation GUIs) and blends it with modern **Neo-Brutalism**. 

Key design pillars include:
1. **Physical Depth and Tactile Feedback**: Utilizing thick, solid borders combined with sharp block shadows (`shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`) that translate/reduce on active click, simulating a physical button press.
2. **File Explorer Metaphor**: Using directory folders, browser-like composer windows, and index numbering to structure content logically for developers and recruiters.
3. **High-Contrast Monochrome Base**: A light-themed monochrome palette paired with a vibrant blue accent to guide readability, focus attention, and deliver a clean, professional aesthetic.
4. **Retro Grayscale Imagery**: Portrait and certificate images are stylized with a CSS grayscale filter, reverting to color only on hover or user focus.

---

## 2. Color Palette & Visual Tokens

The portfolio implements a light-themed color hierarchy controlled via utility mappings and custom theme classes in `globals.css` and `tailwind.config`:

| Token Name | Hex Color / Variable | Tailwind Mapping | Role / Context |
| :--- | :--- | :--- | :--- |
| **Workspace BG** | `#F8F8F5` | `bg-[#F8F8F5]` | Desktop workspace canvas backdrop. |
| **Window BG** | `#FFFFFF` | `bg-white` | Body background for all interactive retro windows. |
| **Control/Status BG** | `#EFEFEF` | `bg-[#EFEFEF]` | Inactive folder tabs, toolbar headers, button hover states. |
| **Primary Accent** | `#2563EB` | `bg-[#2563EB]` / `text-[#2563EB]` | Active tabs, section highlights, focus rings, link details. |
| **Text Foreground** | `#111111` | `text-[#111111]` | Primary text, headers, and window toolbar titles. |
| **Muted Text** | `#444444` | `text-[#444444]` | Secondary paragraphs, descriptions, and metadata labels. |
| **Borders** | `#000000` | `border-black` | Solid 2px outlines dividing workspace components. |

---

## 3. Typography System

The interface creates typographic contrast by loading three custom Google Font families:

1. **Body & Controls (Inter)**
   * **CSS Variable**: `--font-sans`
   * **Usage**: Paragraphs, lists, form input labels, button labels.
   * **Rationale**: A highly legible geometric sans-serif that ensures excellent readability at all sizes on high-DPI screens.
2. **Headers & Display (Space Grotesk)**
   * **CSS Variable**: `--font-heading`
   * **Usage**: Main landing headers, section names, and window dashboard titles.
   * **Rationale**: A geometric sans-serif with quirky accents, reinforcing the modern neo-brutalist structure.
3. **Technical Labeling & Code (JetBrains Mono)**
   * **CSS Variable**: `--font-mono`
   * **Usage**: Navigation links, composer headers, data grids, status bars, and terminal alerts.
   * **Rationale**: A clean, modern developer-focused monospace font reflecting code interfaces.

---

## 4. Interactive Canvas Grid Background (`ShapeGrid`)

The portfolio features a custom background component (`ShapeGrid.tsx`) that renders an interactive grid on an HTML5 canvas:

* **Grid Geometry**: Dynamically calculates and renders shapes (squares, hexagons, triangles, circles) matching the viewport size.
* **Cursor Trail Mapping**: Detects mouse movements, calculates grid column/row indices, and illuminates the cell under the cursor with a fading trailing opacity path (`hoverTrailAmount={6}`).
* **Light-Theme Vignette**: Overlays a radial gradient that fades out to the retro background color `#F8F8F5` at the screen boundaries, centering visual focus on the portfolio content.

---

## 5. Detailed Component UI Walkthrough

### 5.1 Floating Retro Toolbar Navbar
* **Layout**: A fixed, floating panel (`fixed top-4 left-1/2 -translate-x-1/2`) with a heavy block shadow.
* **Active State**: Navigation items display a solid black background with white text when matching the current active section.
* **Mobile Drawer**: On mobile devices, the toolbar collapses into a hamburger menu. Tapping the trigger slides down a vertical directory list mimicking a desktop menu file dropdown.

### 5.2 Retro Window Widget (`RetroWindow`)
* **Window Header**: Features close, minimize, and maximize buttons (`●`, `○`, `□`) that trigger interactive animations, alongside an active system status indicator.
* **Tactile Boundaries**: Bound by a solid 2px black border with a block shadow.

### 5.3 Tabbed Profile Dashboard (`About` Section)
* **Tab Selector**: Vertical tab navigation on desktop, horizontal scroll on mobile.
* **Dynamic Panels**: Smooth transition animations via `framer-motion` when swapping tabs (About Me, Education, Coursework, Interests, Quick Facts).

### 5.4 Technical Skills Grid
* **Filters**: Categories separated into "Languages", "Frameworks", and "Tools & DBs".
* **Progress Bars**: Every skill card displays a custom retro progress bar mapping the skill's proficiency index.
* **System Alert popup**: Clicking a skill triggers a retro OS-style dialog notification showing detailed stats.

### 5.5 Project Cards & Lightbox Modals
* **Bento Grid**: Features a variable-span layout highlighting key applications (e.g., KCET EduGuide).
* **Immersive Modal**: Clicking "Know More" launches a lightbox dialog card (`backdrop-blur-[1px] bg-black/40`) containing comprehensive release dates, team contributors, descriptive bullets, and direct action redirect links.

### 5.6 Experience Timeline Carousel
* **Auto-Play Swiper**: Incorporates a custom Swiper engine rendering professional history cards.
* **Player Dashboard**: A custom playback control bar allows users to play/pause autoplays or manually scroll slides using retro-style arrow navigation buttons.

### 5.7 Folder-Style Certificates Drawer
* **Dynamic Expansion**: Simulates unfolding folder drawers. Clicking a certificate opens a drawer displaying NPTEL/IIT/IISc verified certificates with an option to open full-resolution copies.

### 5.8 API Metrics Panels
* **LeetCode API**: Interacts with the `alfa-leetcode-api` backend to fetch rating metrics and ranks. In case of API rate limits, it falls back to a clean default state.
* **Github Streak & Activity Heatmaps**: Incorporates live-linked SVGs styled with `theme=github-light` and `filter grayscale` to match the monochrome aesthetic.

### 5.9 Contact Terminal / Composer
* **Design**: Recreates a classic email composer interface.
* **Validation**: Focus overrides utilize dynamic color styling to indicate validation state (e.g., green for successful transmission, red for errors).

---

## 6. Micro-animations, Transitions & Tactile Feedback

To make the desktop GUI feel alive, the portfolio integrates customized feedback animations:

1. **Physical Button Press**: Active button presses utilize tailwind class translations:
   ```css
   .active-press {
     transform: translate(2px, 2px);
     box-shadow: 1px 1px 0px 0px rgba(0, 0, 0, 1);
   }
   ```
2. **Tab and Modal Transitions**: `framer-motion` animates transitions, utilizing subtle scaling and opacity fade-ins to prevent abrupt layout shifts.
3. **Monospace Custom Scrollbar**: Thick scrollbars styled with `#D6D6D6` handles and solid black borders, resizing on mobile platforms to optimize real estate.

---

## 7. Accessibility (a11y) & SEO Architecture

* **Semantic HTML**: Standardized layout structuring using HTML5 `<main>`, `<section>`, `<nav>`, `<footer>`, `<header>`, and `<address>` tags.
* **Next.js Image Optimization**: All image components use `next/image` to serve optimized NextGen formats (WebP/AVIF), complete with alt descriptions.
* **SEO Metadata**: Features robust search-engine meta headers, OpenGraph profiles, and an integrated robots.txt & sitemap generator.
* **Structured Data**: Injects a Person JSON-LD Schema into the DOM to populate search engines with clean indexing indices.
