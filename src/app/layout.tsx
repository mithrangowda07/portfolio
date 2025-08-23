import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mithra N Gowda - Portfolio',
  description: 'Software Development Intern | AI/ML Enthusiast | Full Stack Developer',
  keywords: ['portfolio', 'software development', 'AI/ML', 'web development', 'full stack'],
  authors: [{ name: 'Mithra N Gowda' }],
  creator: 'Mithra N Gowda',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">
          {children}
        </div>
      </body>
    </html>
  )
}
