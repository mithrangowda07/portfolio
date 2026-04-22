import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const siteUrl = 'https://mithrangowda.vercel.app'
const siteTitle = 'Mithra N Gowda | Software Developer Portfolio'
const siteDescription =
  'Official portfolio of Mithra N Gowda, Software Development Intern and Full Stack Developer from Bengaluru. Explore projects, experience, skills, certifications, and contact details.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: '%s | Mithra N Gowda',
  },
  description: siteDescription,
  keywords: [
    'Mithra N Gowda',
    'Mithra Gowda',
    'Mithra N Gowda portfolio',
    'Mithra N Gowda developer',
    'Software Development Intern',
    'Full Stack Developer',
    'Machine Learning',
    'Next.js portfolio',
    'Bengaluru developer',
  ],
  authors: [{ name: 'Mithra N Gowda' }],
  creator: 'Mithra N Gowda',
  publisher: 'Mithra N Gowda',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Mithra N Gowda Portfolio',
    title: siteTitle,
    description: siteDescription,
    locale: 'en_US',
    images: [
      {
        url: '/profile-photo.jpg',
        width: 1200,
        height: 630,
        alt: 'Mithra N Gowda portfolio profile photo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: ['/profile-photo.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0f0f23',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-[#0f0f23]">
          {children}
        </div>
      </body>
    </html>
  )
}
