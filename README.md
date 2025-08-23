# Portfolio Website - Next.js

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean and professional design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Built with Next.js for optimal performance
- **TypeScript**: Type-safe development with TypeScript
- **Tailwind CSS**: Utility-first CSS framework for styling
- **SEO Optimized**: Built-in SEO features with Next.js
- **Contact Form**: Interactive contact form with validation
- **Download Resume**: Direct download of resume PDF
- **Social Links**: Integration with GitHub, LinkedIn, and other platforms

## Pages

- **Home**: Landing page with hero section and skills preview
- **About**: Detailed information about education, experience, and skills
- **Resume**: Comprehensive resume view with download option
- **Projects**: Showcase of projects with tech stack and links
- **Contact**: Contact form and additional contact options

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-nextjs
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── about/
│   │   └── page.tsx          # About page
│   ├── contact/
│   │   └── page.tsx          # Contact page
│   ├── projects/
│   │   └── page.tsx          # Projects page
│   ├── resume/
│   │   └── page.tsx          # Resume page
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── components/               # Reusable components (if any)
└── types/                   # TypeScript type definitions (if any)

public/
├── Resume.pdf               # Resume file for download
└── favicon.ico              # Site favicon

resume_data.json             # Portfolio data
```

## Data Management

The portfolio data is stored in `resume_data.json` at the root of the project. This file contains:

- Personal information
- Education history
- Work experience
- Skills and technologies
- Projects
- Achievements
- Contact information

To update the portfolio, simply modify this JSON file and the changes will be reflected across all pages.

## Customization

### Colors and Styling

The color scheme and styling can be customized by modifying the Tailwind CSS classes in the components. The current theme uses:

- Primary: Blue (`blue-600`, `blue-700`)
- Secondary: Gray (`gray-900`, `gray-600`)
- Accent: Green (`green-600`) and Purple (`purple-600`)

### Adding New Pages

To add a new page:

1. Create a new directory in `src/app/`
2. Add a `page.tsx` file
3. Follow the existing page structure with navigation and layout

### Adding New Sections

To add new sections to existing pages, simply add new components following the established patterns.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The project can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Performance Optimization

- Images are optimized with Next.js Image component
- CSS is automatically optimized and minified
- JavaScript is code-split and optimized
- Static pages are pre-rendered for better performance

## SEO Features

- Meta tags for each page
- Open Graph tags for social sharing
- Structured data for better search engine understanding
- Sitemap generation (can be added)

## Contact Form

The contact form currently simulates submission. To make it functional:

1. Add a backend API route in `src/app/api/`
2. Integrate with email services like SendGrid or Resend
3. Add form validation and error handling

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For support or questions, please open an issue on GitHub or contact the developer.

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
