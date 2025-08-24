# 🚀 Deploy Your Portfolio to Vercel

This guide will walk you through deploying your Next.js portfolio to Vercel, the easiest and most reliable hosting platform for Next.js applications.

## Prerequisites

- A GitHub account
- Your Next.js portfolio project ready
- Node.js installed locally (for testing)

## Method 1: Deploy via Vercel Dashboard (Recommended)

### Step 1: Push to GitHub

1. **Initialize Git** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Next.js portfolio"
   ```

2. **Create a GitHub repository**:
   - Go to [GitHub](https://github.com)
   - Click "New repository"
   - Name it `portfolio-nextjs` or similar
   - Don't initialize with README (since you already have one)

3. **Push your code**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/portfolio-nextjs.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy on Vercel

1. **Go to Vercel**:
   - Visit [vercel.com](https://vercel.com)
   - Sign up/Login with your GitHub account

2. **Import your project**:
   - Click "New Project"
   - Select "Import Git Repository"
   - Choose your `portfolio-nextjs` repository
   - Click "Import"

3. **Configure deployment**:
   - **Framework Preset**: Next.js (should auto-detect)
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (should auto-detect)
   - **Output Directory**: `.next` (should auto-detect)
   - **Install Command**: `npm install` (should auto-detect)

4. **Environment Variables** (if needed):
   - Usually not required for this portfolio
   - Add any if you implement email functionality later

5. **Deploy**:
   - Click "Deploy"
   - Wait for build to complete (usually 1-2 minutes)

### Step 3: Custom Domain (Optional)

1. **Add custom domain**:
   - In your Vercel dashboard, go to project settings
   - Click "Domains"
   - Add your custom domain (e.g., `yourname.com`)

2. **Configure DNS**:
   - Follow Vercel's DNS configuration instructions
   - Usually involves adding CNAME records

## Method 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

### Step 3: Deploy

```bash
vercel
```

Follow the prompts:
- Set up and deploy? `Y`
- Which scope? Select your account
- Link to existing project? `N`
- What's your project name? `portfolio-nextjs`
- In which directory is your code located? `./`
- Want to override the settings? `N`

## Method 3: Deploy via GitHub Actions

### Step 1: Create GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

### Step 2: Add Vercel Secrets

1. Get your Vercel tokens from Vercel dashboard
2. Add them to GitHub repository secrets

## Post-Deployment

### 1. Test Your Site

- Visit your deployed URL (e.g., `https://portfolio-nextjs.vercel.app`)
- Test all pages and functionality
- Check mobile responsiveness
- Test contact form (if implemented)

### 2. Update Content

To update your portfolio:

1. **Edit locally**:
   ```bash
   # Make changes to resume_data.json or components
   git add .
   git commit -m "Update portfolio content"
   git push origin main
   ```

2. **Automatic deployment**:
   - Vercel will automatically rebuild and deploy
   - Changes go live in 1-2 minutes

### 3. Monitor Performance

- Use Vercel Analytics (free tier available)
- Monitor Core Web Vitals
- Check for any build errors

## Troubleshooting

### Common Issues

1. **Build Fails**:
   - Check build logs in Vercel dashboard
   - Ensure all dependencies are in `package.json`
   - Verify TypeScript compilation

2. **Images Not Loading**:
   - Ensure images are in `public/` directory
   - Use Next.js `Image` component for optimization

3. **Styling Issues**:
   - Check Tailwind CSS configuration
   - Ensure `globals.css` is imported in layout

4. **404 Errors**:
   - Verify all page files exist in `src/app/`
   - Check file naming conventions

### Performance Optimization

1. **Enable Vercel Analytics**:
   - Go to project settings
   - Enable Web Analytics

2. **Optimize Images**:
   - Use Next.js `Image` component
   - Compress images before uploading

3. **Enable Caching**:
   - Vercel automatically handles caching
   - Add cache headers if needed

## Advanced Features

### 1. Add Email Functionality

Create `src/app/api/contact/route.ts`:

```typescript
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json()
    
    // Configure email service (SendGrid, Resend, etc.)
    const transporter = nodemailer.createTransporter({
      // Your email configuration
    })
    
    await transporter.sendMail({
      from: email,
      to: 'your-email@example.com',
      subject: `Portfolio Contact: ${subject}`,
      text: `From: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    })
    
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
```

### 2. Add Environment Variables

Create `.env.local`:

```env
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

### 3. Add SEO Optimization

Update `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Your Name - Portfolio',
  description: 'Software Developer Portfolio',
  keywords: ['portfolio', 'developer', 'web development'],
  openGraph: {
    title: 'Your Name - Portfolio',
    description: 'Software Developer Portfolio',
    images: ['/og-image.jpg'],
  },
}
```

## Cost

- **Vercel Hobby Plan**: FREE
  - Unlimited deployments
  - Custom domains
  - SSL certificates
  - 100GB bandwidth/month
  - Perfect for portfolios

- **Vercel Pro Plan**: $20/month
  - Team collaboration
  - More bandwidth
  - Advanced analytics

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Community](https://github.com/vercel/vercel/discussions)

---

🎉 **Congratulations!** Your portfolio is now live and ready to impress potential employers and clients!
