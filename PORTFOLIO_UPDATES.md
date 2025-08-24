# Portfolio Updates

## Changes Made

### 1. Added Instagram and LeetCode Icons
- Updated `resume_data.json` to include Instagram and LeetCode social links
- Added Instagram and LeetCode icons to the sidebar and contact section
- Icons are imported from `lucide-react` package

### 2. Added Profile Photo
- Created a custom SVG profile photo (`public/profile-photo.svg`)
- Profile photo is displayed on the front page and in the sidebar
- Uses Next.js `Image` component for optimal performance

### 3. Implemented Dark Mode Only
- Removed light mode toggle functionality
- Updated `globals.css` with dark theme colors:
  - Background: `#0f0f23` (dark blue)
  - Card background: `#1a1a2e` (darker blue)
  - Borders: `#2d2d44` (medium blue)
  - Accent: `#4f46e5` (indigo)
- Added custom scrollbar styling for dark theme
- Updated layout background to dark mode

### 4. Single Page Application with Sidebar Navigation
- Consolidated all sections into one page (`src/app/page.tsx`)
- Removed separate page files:
  - `src/app/about/page.tsx`
  - `src/app/contact/page.tsx`
  - `src/app/projects/page.tsx`
  - `src/app/resume/page.tsx`
- Added responsive sidebar with navigation to different sections:
  - Home
  - About
  - Experience
  - Projects
  - Skills
  - Contact
- Sidebar includes profile photo, navigation menu, and social links
- Mobile-friendly with hamburger menu toggle

### 5. Enhanced UI Components
- Added smooth scrolling between sections
- Active section highlighting in sidebar
- Hover effects and transitions
- Responsive grid layouts for projects and skills
- Progress bars for skill levels
- Card-based design with consistent spacing

### 6. Technical Improvements
- Fixed TypeScript errors related to ref types
- Used Next.js `Image` component for better performance
- Responsive design for mobile and desktop
- Clean component structure with proper state management

## Features

- **Responsive Design**: Works on all device sizes
- **Dark Theme**: Modern dark color scheme
- **Smooth Navigation**: Sidebar navigation with smooth scrolling
- **Profile Photo**: Custom SVG profile image
- **Social Links**: GitHub, LinkedIn, Instagram, and LeetCode
- **Single Page**: All content accessible from one page
- **Performance**: Optimized with Next.js best practices

## How to Use

1. **Navigation**: Use the sidebar to jump to different sections
2. **Mobile**: Use the hamburger menu button for mobile navigation
3. **Social Links**: Click on social media icons to visit profiles
4. **Smooth Scrolling**: Navigation automatically scrolls to sections

## File Structure

```
src/
├── app/
│   ├── globals.css (dark theme styles)
│   ├── layout.tsx (dark background)
│   └── page.tsx (main single-page application)
├── resume_data.json (updated with Instagram/LeetCode)
public/
└── profile-photo.svg (custom profile image)
```

## Dependencies

- Next.js 15.5.0
- React 19.1.0
- Tailwind CSS 4
- Lucide React (for icons)
- TypeScript

The portfolio is now a modern, single-page application with a dark theme, sidebar navigation, and all requested features implemented.
