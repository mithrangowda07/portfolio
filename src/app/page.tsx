'use client'

import React, { useState, useEffect } from 'react'
import resumeData from '../../resume_data.json'
import RetroTheme from '@/themes/retro/RetroTheme'
import NewspaperTheme from '@/themes/newspaper/NewspaperTheme'
import {
  SiC,
  SiCplusplus,
  SiJavascript,
  SiPython,
  SiHtml5,
  SiCss,
  SiDjango,
  SiFlask,
  SiLinux,
  SiGithub,
  SiMysql,
  SiWolframmathematica,
  SiSmartthings
} from 'react-icons/si'

// Custom SVG for Power BI since it is not present in this version of react-icons/si
const SiPowerbi = (props: React.SVGProps<SVGSVGElement>) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M9.002 6.75h4.5v17.25h-4.5V6.75zM18.004 0h4.5v24h-4.5V0zM0 13.5h4.5v10.5H0V13.5z"/>
  </svg>
)

const skillIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  'C': SiC,
  'C++': SiCplusplus,
  'HTML/CSS': ({ className }) => {
    const adjustedClassName = className?.replace(/w-\d+|h-\d+/g, '') + ' w-5 h-5'
    return (
      <div className="flex gap-0.5 items-center justify-center">
        <SiHtml5 className={adjustedClassName} />
        <SiCss className={adjustedClassName} />
      </div>
    )
  },
  'JavaScript': SiJavascript,
  'Python (Basics)': SiPython,
  'Matlab': SiWolframmathematica,
  'Django': SiDjango,
  'Flask': SiFlask,
  'Linux': SiLinux,
  'GitHub': SiGithub,
  'Power BI': SiPowerbi,
  'ThingSpeak': SiSmartthings,
  'MySQL': SiMysql
}

interface ContestData {
  contestAttend?: number
  contestRating?: number
  contestGlobalRanking?: number
  contestTopPercentage?: number
}

const siteUrl = 'https://mithrangowda.vercel.app'

const personStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: resumeData.personal_info.name,
  url: siteUrl,
  image: `${siteUrl}/profile-photo.jpg`,
  email: `mailto:${resumeData.personal_info.email}`,
  telephone: resumeData.personal_info.phone,
  jobTitle: 'Software Development Intern | Full Stack Developer | ML Enthusiast',
  description: resumeData.personal_info.bio,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bengaluru',
    addressRegion: 'Karnataka',
    postalCode: '560059',
    addressCountry: 'IN',
  },
  alumniOf: resumeData.education.map((edu) => ({
    '@type': 'EducationalOrganization',
    name: edu.institution,
  })),
  sameAs: [
    resumeData.personal_info.social_links.linkedin,
    resumeData.personal_info.social_links.github,
    resumeData.personal_info.social_links.leetcode,
    resumeData.personal_info.social_links.instagram,
  ].filter(Boolean),
}

export default function Portfolio() {
  const [theme, setTheme] = useState<'retro' | 'newspaper'>('retro')
  const [isMounted, setIsMounted] = useState(false)

  // LeetCode Contest Stats
  const [contestData, setContestData] = useState<ContestData | null>(null)
  const [contestLoading, setContestLoading] = useState(true)
  const [contestError, setContestError] = useState<string | null>(null)

  const getErrorMessage = (error: unknown) =>
    error instanceof Error ? error.message : String(error)

  useEffect(() => {
    // Theme sync
    const savedTheme = localStorage.getItem('portfolio-theme') as 'retro' | 'newspaper'
    if (savedTheme === 'retro' || savedTheme === 'newspaper') {
      setTheme(savedTheme)
      document.documentElement.className = `theme-${savedTheme}`
    } else {
      document.documentElement.className = 'theme-retro'
    }
    setIsMounted(true)

    // LeetCode fetching
    const fetchContestData = async () => {
      setContestLoading(true)
      setContestError(null)

      const url = "https://alfa-leetcode-api.onrender.com/SilentNeedle/contest"
      const maxRetries = 3
      let attempt = 0

      while (attempt < maxRetries) {
        try {
          const response = await fetch(url)

          if (response.ok) {
            const data = await response.json()
            setContestData(data)
            setContestLoading(false)
            return
          }

          if (response.status === 429) {
            attempt += 1
            const backoff = 500 * Math.pow(2, attempt)
            await new Promise((r) => setTimeout(r, backoff))
            continue
          }

          const text = await response.text().catch(() => '')
          throw new Error(`HTTP ${response.status} ${text}`)
        } catch (err: unknown) {
          attempt += 1
          const errorMessage = getErrorMessage(err)
          if (attempt >= maxRetries) {
            setContestError(errorMessage)
            setContestLoading(false)
            return
          }

          const backoff = 500 * Math.pow(2, attempt)
          await new Promise((r) => setTimeout(r, backoff))
        }
      }
    }

    fetchContestData()
  }, [])

  const toggleTheme = () => {
    const nextTheme = theme === 'retro' ? 'newspaper' : 'retro'
    setTheme(nextTheme)
    localStorage.setItem('portfolio-theme', nextTheme)
    document.documentElement.className = `theme-${nextTheme}`
  }

  // Pre-hydration rendering check
  if (!isMounted) {
    return (
      <div className="min-h-screen bg-[#F8F8F5] flex items-center justify-center font-mono text-sm">
        Initializing Portfolio Gazette System...
      </div>
    )
  }

  if (theme === 'newspaper') {
    return (
      <NewspaperTheme
        resumeData={resumeData}
        contestData={contestData}
        contestLoading={contestLoading}
        contestError={contestError}
        personStructuredData={personStructuredData}
        toggleTheme={toggleTheme}
      />
    )
  }

  return (
    <RetroTheme
      resumeData={resumeData}
      contestData={contestData}
      contestLoading={contestLoading}
      contestError={contestError}
      skillIcons={skillIcons}
      personStructuredData={personStructuredData}
      toggleTheme={toggleTheme}
    />
  )
}
