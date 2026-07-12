# Retro Desktop Portfolio Website - Next.js

A modern, high-performance personal portfolio designed with a neo-retro classic OS / desktop GUI aesthetic. The application is built as a single-page app (SPA) using **Next.js 15**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

---

## 🚀 Key Features

* **Retro Desktop GUI Aesthetic**: Styled window cards (`RetroWindow`), retro toolbar navigation, folder-style tab menus, solid black borders, and thick block shadows simulating classic computer interfaces (e.g., Windows 95 / classic Mac OS).
* **Interactive Canvas Grid (`ShapeGrid`)**: A custom React canvas background component rendering moving geometric shapes (squares, hexagons, triangles, circles) that react to mouse movements with dynamic hover trailing and a custom vignette effect.
* **Tabbed About Dashboard**: A retro window interface featuring modular tabs for reading the developer biography, academic education history, relevant coursework directory, interests/hobbies, and quick facts.
* **Dynamic Technical Skills Folder**: Categorized progress indicators (Languages, Frameworks, Tools & DBs) that display proficiency indicators when clicked or hovered.
* **Project Windows**: Bento-style project display grid with immersive details modals. Each project contains tech badges, bulleted details, live demo redirects, source code links, and list of team members.
* **Experience & Volunteering Timelines**: An automated carousel showcasing industrial internships (e.g., Schneider Electric) and community leadership (e.g., National Service Scheme) side-by-side.
* **Certificates Lightbox**: Expanding folder nodes that reveal academic and technical credentials (such as NPTEL IIT/IISc verifications) with direct lightboxes.
* **Coding Metrics Dashboard**: Live API integration with `alfa-leetcode-api` to pull contest ratings, rank percentages, and problem-solving activity heatmaps alongside GitHub contribution streak indicators.
* **Nodemailer Contact Composer**: A classic text editor interface connected directly to a Next.js API route (`/api/contact`) that routes form inputs to personal email accounts.
* **SEO & Web Accessibility Optimized**: Structurally organized with semantic HTML5 markup, screen-reader helper labels, and custom JSON-LD Person schema injections.

---

## 🛠️ Tech Stack

* **Framework**: Next.js 15.5.9 (App Router)
* **Runtime & Components**: React 19.1.0 (Client-side rendering hooks)
* **Styling**: Tailwind CSS v4.0 with Custom Theme Variables (`globals.css`)
* **Animations**: Framer Motion 12.4.2
* **Carousel Engine**: Swiper 14.0.5 (with Custom Pagination & Autoplay Controls)
* **Icons Directory**: Lucide React & React Icons Simple Icons (Si)
* **Mail Integration**: Nodemailer 7.0.5
* **Target APIs**: 
  * `alfa-leetcode-api.onrender.com` (LeetCode Contest Data)
  * `leetcard.jacoblin.cool` (LeetCode solved heatmap)
  * `streak-stats.demolab.com` (GitHub commits streak)
  * `github-readme-activity-graph.vercel.app` (GitHub contribution graph)

---

## 📂 Project Structure

The project has been refactored into a streamlined single-page desktop dashboard:

```
portfolio/
├── public/
│   ├── certificates/        # Verified certificate images
│   ├── profile-photo.jpg    # Portrait photo (processed in grayscale)
│   ├── Resume.pdf           # Downloadable PDF document
│   └── favicon.ico          # Site shortcut icon
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts  # Nodemailer contact submission API route
│   │   ├── globals.css      # Custom retro theme vars, scrollbars, pagination
│   │   ├── icon.png         # Root icon asset
│   │   ├── layout.tsx       # Next.js root layout and metadata configuration
│   │   ├── page.tsx         # The main Single-Page App containing all desktop views
│   │   ├── robots.ts        # Search engine robots.txt configuration
│   │   └── sitemap.ts       # Automated sitemap generator
│   └── components/
│       ├── ShapeGrid.css    # Canvas element positioning and backdrop colors
│       └── ShapeGrid.tsx    # Interactive background canvas particle animation
├── middleware.ts            # Security middleware (e.g. Visitor IP check)
├── package.json             # Build script configuration and dependencies
├── resume_data.json         # Single source of truth database (JSON database)
└── tsconfig.json            # TypeScript compiler configuration
```

---

## 💾 Data Management

All details displayed in the portfolio are managed through a central JSON database: `resume_data.json` at the root of the project.

This JSON file contains details for:
* Personal details and social channel profiles
* Chronological education benchmarks
* Professional experiences and responsibilities
* Featured projects and team contributors
* Technical skill lists and categories
* Voluntarism, achievements, coursework, and hobbies

Modifying `resume_data.json` propagates updates instantly across all sections of the portfolio.

---

## ⚙️ Getting Started

### Prerequisites

* Node.js 18.0.0 or higher
* npm or yarn package manager

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file at the project root based on `env.example`:
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-gmail-app-password
   ```

4. **Launch the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the live dashboard in your web browser.

5. **Build for production**:
   ```bash
   npm run build
   ```

---

## 🌐 API Integrations & Web Requests

* **LeetCode API**: The page queries `https://alfa-leetcode-api.onrender.com/SilentNeedle/contest` to obtain live contest rating and rank status. In the event of a network timeout or rate limit, a secure fallback dataset is rendered automatically to prevent dashboard disruption.
* **Email Composer**: Submissions on the compose terminal send a `POST` request to `/api/contact` containing form details. The route processes the payload and triggers `nodemailer` to dispatch a notification message.

---

## 🛡️ Security Middleware

The portfolio incorporates a Next.js `middleware.ts` file that checks incoming requests. It logs visitors' IP addresses (extracted from the `x-forwarded-for` header) and provides an IP blocking list (`blockedIPs`) to block malicious requests with a `403 Forbidden` response.
