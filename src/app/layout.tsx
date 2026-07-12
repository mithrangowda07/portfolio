import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono, Playfair_Display, Lora } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif-heading',
  display: 'swap',
})

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-serif-body',
  display: 'swap',
})

const siteUrl = 'https://mithrangowda.vercel.app'
const siteTitle = 'Mithra N Gowda | Software Developer Portfolio'
const siteDescription =
  'Official retro OS-themed portfolio of Mithra N Gowda, Software Development Intern, Full Stack Developer and AI Engineer. Explore projects, experience, skills, and certifications.'

export const metadata: Metadata = {
  icons: {
    icon: "/icon.png",
  },
  verification: {
    google: "H62Z8ryS1k8_yMuUrA1aJcg5S5dy5Ls8scvbX0C-SD0"
  },
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
    'AI Engineer',
    'Next.js portfolio',
    'Retro portfolio',
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
  themeColor: '#F8F8F5',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${playfairDisplay.variable} ${lora.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
