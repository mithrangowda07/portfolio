'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Script from 'next/script'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Menu, 
  X, 
  ChevronUp,
  Inbox
} from 'lucide-react'
import ShapeGrid from '@/components/ShapeGrid'

interface ContestData {
  contestAttend?: number
  contestRating?: number
  contestGlobalRanking?: number
  contestTopPercentage?: number
}

interface Contributor {
  name: string
  profile: string
}

interface Project {
  title: string
  tech_stack: string[]
  date: string
  github_link?: string
  demo_link?: string
  description: string[]
  features: string[]
  contributors: Contributor[]
}

interface PersonalInfo {
  name: string
  bio: string
  location: string
  email: string
  phone: string
  social_links: {
    github: string
    linkedin: string
    instagram: string
    leetcode: string
  }
}

interface Education {
  institution: string
  degree: string
  start_date: string
  end_date: string
  location: string
  cgpa?: string
  percentage?: string
  description: string
}

interface Skill {
  name: string
  level: number
}

interface Experience {
  company: string
  role: string
  location: string
  start_date: string
  end_date: string
  description: string
  responsibilities: string[]
}

interface Leadership {
  organization: string
  role: string
  location: string
  start_date: string
  end_date: string
  activities: string[]
}

interface Certificate {
  name: string
  organization: string
  date: string
  image: string
}

interface Achievement {
  title: string
  date: string
  description: string
}

interface ResumeData {
  personal_info: PersonalInfo
  education: Education[]
  relevant_coursework: string[]
  hobbies: string[]
  skills: {
    programming_languages: Skill[]
    frameworks_libraries: Skill[]
    tools_technologies: Skill[]
  }
  projects: Project[]
  experience: Experience[]
  leadership_extracurricular: Leadership[]
  certificates: Certificate[]
  achievements: Achievement[]
}

interface NewspaperThemeProps {
  resumeData: ResumeData
  contestData: ContestData | null
  contestLoading: boolean
  contestError: string | null
  personStructuredData: Record<string, unknown>
  toggleTheme: () => void
}


interface NewspaperLeetCodeArticleProps {
  contestLoading: boolean
  contestError: string | null
  contestData: ContestData | null
}

function NewspaperLeetCodeArticle({
  contestLoading,
  contestError,
  contestData
}: NewspaperLeetCodeArticleProps) {
  return (
    <div className="border border-[#1F1F1F] bg-[#FFFDF8] p-4 flex flex-col rounded-none space-y-3">
      {/* Editorial masthead */}
      <div className="border-b border-[#1F1F1F] pb-1.5 text-center select-none">
        <h3 className="font-serif-heading font-black text-sm tracking-wide uppercase">
          LeetCode Competitive Report
        </h3>
        <p className="font-serif-heading italic text-xs text-gray-600">
          Competitive Programming Statistics
        </p>
        <div className="flex justify-between items-center text-[8px] font-mono text-gray-500 mt-1.5 border-t border-[#1F1F1F]/20 pt-1">
          <span>ISSUE 06-A</span>
          <span>REPORTER: SILENTNEEDLE</span>
        </div>
      </div>

      {/* Stats list */}
      <div className="flex-grow">
        {contestLoading ? (
          <div className="text-center py-4 font-mono text-[10px] uppercase text-gray-500">LOADING STATISTICS DIRECTORY...</div>
        ) : contestError ? (
          <div className="text-center py-4 font-mono text-[10px] text-red-700 uppercase">API DELAY: DISPLAYING ARCHIVE RATINGS</div>
        ) : (
          <div className="grid grid-cols-2 gap-3 text-center font-serif-body">
            <div className="border border-[#1F1F1F] p-2 bg-[#FFFDF8] rounded-none">
              <span className="font-mono text-[8px] text-gray-500 uppercase block">RATING INDEX</span>
              <span className="font-serif-heading font-black text-xl text-black">
                {contestData?.contestRating ? Math.round(contestData.contestRating) : '1600+'}
              </span>
            </div>
            <div className="border border-[#1F1F1F] p-2 bg-[#FFFDF8] rounded-none">
              <span className="font-mono text-[8px] text-gray-500 uppercase block">GLOBAL RANK</span>
              <span className="font-serif-heading font-black text-lg text-black leading-normal">
                {contestData?.contestGlobalRanking ? contestData.contestGlobalRanking.toLocaleString() : 'Top 9%'}
              </span>
            </div>
            <div className="border border-[#1F1F1F] p-2 bg-[#FFFDF8] rounded-none">
              <span className="font-mono text-[8px] text-gray-500 uppercase block">PERCENTILE</span>
              <span className="font-serif-heading font-black text-lg text-black">
                {contestData?.contestTopPercentage ? `${contestData.contestTopPercentage}%` : '8.6%'}
              </span>
            </div>
            <div className="border border-[#1F1F1F] p-2 bg-[#FFFDF8] rounded-none">
              <span className="font-mono text-[8px] text-gray-500 uppercase block">CONTESTS INDEX</span>
              <span className="font-serif-heading font-black text-lg text-black">
                {contestData?.contestAttend ?? '10+'}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Solved Heatmap */}
      <div className="space-y-1.5 pt-2 border-t border-[#1F1F1F]/20">
        <div className="border border-[#1F1F1F] p-1 bg-[#FFFDF8] rounded-none select-none">
          <img
            src="https://leetcard.jacoblin.cool/SilentNeedle?ext=heatmap"
            alt="LeetCode Heatmap Log"
            className="w-full"
          />
        </div>
        <p className="text-[8.5px] text-center font-serif-body italic text-gray-500 select-none">
          Figure 03: LeetCode Solved Heatmap Activity Graph.
        </p>
      </div>

      {/* Footer */}
      <div className="border-t border-[#1F1F1F]/20 pt-1.5 font-mono text-[8.5px] text-gray-500 text-center italic select-none">
        * Statistics sourced from Alfa LeetCode API.
      </div>
    </div>
  )
}

function NewspaperGitHubArticle() {
  return (
    <div className="border border-[#1F1F1F] bg-[#FFFDF8] p-4 flex flex-col rounded-none space-y-3">
      {/* Editorial masthead */}
      <div className="border-b border-[#1F1F1F] pb-1.5 text-center select-none">
        <h3 className="font-serif-heading font-black text-sm tracking-wide uppercase">
          GitHub Development Report
        </h3>
        <p className="font-serif-heading italic text-xs text-gray-600">
          Open Source Engineering
        </p>
        <div className="flex justify-between items-center text-[8px] font-mono text-gray-500 mt-1.5 border-t border-[#1F1F1F]/20 pt-1">
          <span>ISSUE 06-B</span>
          <span>REPORTER: MITHRANGOWDA07</span>
        </div>
      </div>

      {/* Commit Streak Statistics Container */}
      <div className="space-y-1.5">
        <h4 className="font-serif-heading font-black text-xs uppercase tracking-wide border-b border-[#1F1F1F]/20 pb-0.5 select-none">
          Commit Streak Statistics
        </h4>
        <div className="border border-[#1F1F1F] p-1 bg-[#FFFDF8] rounded-none select-none">
          <img
            src="https://streak-stats.demolab.com?user=mithrangowda07&theme=github-light&hide_border=true"
            alt="GitHub Commits Streak Stats"
            className="w-full"
          />
        </div>
        <p className="text-[8.5px] text-center font-serif-body italic text-gray-500 select-none">
          Figure 04: Commit Streak Statistics Index.
        </p>
      </div>

      {/* Contribution Activity Graph */}
      <div className="space-y-1.5 pt-1.5 border-t border-[#1F1F1F]/20">
        <h4 className="font-serif-heading font-black text-xs uppercase tracking-wide border-b border-[#1F1F1F]/20 pb-0.5 select-none">
          Contribution Activity Graph
        </h4>
        <div className="border border-[#1F1F1F] p-1 bg-[#FFFDF8] rounded-none select-none">
          <img
            src="https://github-readme-activity-graph.vercel.app/graph?username=mithrangowda07&theme=github-light&hide_border=true&area=true"
            alt="GitHub Activity Log"
            className="w-full"
          />
        </div>
        <p className="text-[8.5px] text-center font-serif-body italic text-gray-500 select-none">
          Figure 05: GitHub Contribution Activity.
        </p>
      </div>

      {/* Footer */}
      <div className="border-t border-[#1F1F1F]/20 pt-1.5 font-mono text-[8.5px] text-gray-500 text-center italic select-none">
        * Activity data synchronized from GitHub.
      </div>
    </div>
  )
}

// Flat Button Component
interface NewspaperButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'flat' | 'filled'
  children: React.ReactNode
}

function NewspaperButton({
  variant = 'flat',
  children,
  className = '',
  ...props
}: NewspaperButtonProps) {
  const baseStyle = 'font-mono text-xs uppercase px-3 py-1.5 transition-colors duration-150 rounded-none border border-[#1F1F1F] '
  const variantStyle = variant === 'filled'
    ? 'bg-[#1F1F1F] text-[#FFFDF8] hover:bg-[#FFFDF8] hover:text-[#111111]'
    : 'bg-[#FFFDF8] text-[#111111] hover:bg-[#1F1F1F] hover:text-white'

  return (
    <button className={`${baseStyle} ${variantStyle} ${className}`} {...props}>
      {children}
    </button>
  )
}

// Contact form inside Classifieds
function ClassifiedContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 font-serif-body">
      <div>
        <label htmlFor="name" className="block text-[10px] font-bold text-[#111111] mb-1 font-mono uppercase">
          Sender Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-3 py-1.5 bg-[#FFFDF8] border border-[#1F1F1F] text-xs focus:outline-none focus:ring-1 focus:ring-black rounded-none text-black placeholder-gray-400"
          placeholder="Name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-[10px] font-bold text-[#111111] mb-1 font-mono uppercase">
          Sender Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-3 py-1.5 bg-[#FFFDF8] border border-[#1F1F1F] text-xs focus:outline-none focus:ring-1 focus:ring-black rounded-none text-black placeholder-gray-400"
          placeholder="xyz@example.com"
        />
      </div>
      <div>
        <label htmlFor="subject" className="block text-[10px] font-bold text-[#111111] mb-1 font-mono uppercase">
          Subject:
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-3 py-1.5 bg-[#FFFDF8] border border-[#1F1F1F] text-xs focus:outline-none focus:ring-1 focus:ring-black rounded-none text-black placeholder-gray-400"
          placeholder="Inquiry"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-[10px] font-bold text-[#111111] mb-1 font-mono uppercase">
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-3 py-1.5 bg-[#FFFDF8] border border-[#1F1F1F] text-xs focus:outline-none focus:ring-1 focus:ring-black rounded-none text-black placeholder-gray-400 resize-none"
          placeholder="Type message here..."
        />
      </div>
      <div className="flex items-center justify-between gap-4 pt-1">
        <NewspaperButton type="submit" disabled={isSubmitting} variant="filled">
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </NewspaperButton>
        {submitStatus === 'success' && (
          <span className="text-[10px] font-mono text-black font-bold uppercase">Success: Sent</span>
        )}
        {submitStatus === 'error' && (
          <span className="text-[10px] font-mono text-red-600 font-bold uppercase">Error: Failed</span>
        )}
      </div>
    </form>
  )
}

export default function NewspaperTheme({
  resumeData,
  contestData,
  contestLoading,
  contestError,
  personStructuredData,
  toggleTheme
}: NewspaperThemeProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isResumeOpen, setIsResumeOpen] = useState(false)
  const [systemAlert, setSystemAlert] = useState<string | null>(null)
  const [showAllProjects, setShowAllProjects] = useState(false)

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(id)
      setIsMenuOpen(false)
    }
  }

  const getDayName = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    return days[new Date().getDay()]
  }

  const getFormattedDate = () => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date().toLocaleDateString('en-US', options)
  }

  return (
    <div className="min-h-screen bg-[#F7F3EB] text-[#111111] pb-16 relative selection:bg-black selection:text-white">
      
      <Script
        id="mithra-ngowda-person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personStructuredData) }}
      />

      {/* NEWSPAPER EDITORIAL MASTHEAD */}
      <header className="max-w-6xl mx-auto px-4 pt-6 select-none">
        {/* Top bar details - Fictional ISSN and metadata */}
        <div className="flex justify-between text-[9px] font-mono border-b border-[#1F1F1F]/40 pb-1 uppercase tracking-wider">
          <span>ISSN 1729-5431 (Print)</span>
          <span className="hidden sm:inline">&ldquo;All the Code That&apos;s Fit to Print&rdquo;</span>
          <span>Digital Edition No. 42,900</span>
        </div>

        {/* Masthead Headline Title */}
        <div className="py-5 text-center">
          <h1 className="font-serif-heading font-black text-5xl sm:text-7xl md:text-8xl tracking-tight text-[#111111] leading-none uppercase">
            The Portfolio Gazette
          </h1>
          <p className="font-serif-heading italic text-xs sm:text-sm text-gray-700 mt-2">
            Independent Chronicle of Software Engineering & Systems Architecture
          </p>
        </div>

        {/* Issue Metadata Row (between double borders) */}
        <div className="flex justify-between items-center text-[9px] sm:text-[10px] font-mono py-1.5 border-y-4 border-double border-[#1F1F1F] uppercase tracking-wider">
          <div className="text-left">
            <span>Vol. CXXVI No. 12</span>
          </div>
          <div className="text-center font-bold">
            <span>Bengaluru, {getDayName().toUpperCase()}, {getFormattedDate().toUpperCase()}</span>
          </div>
          <div className="text-right flex items-center space-x-3">
            <span className="hidden sm:inline">Price: Free</span>
            <button 
              onClick={toggleTheme} 
              className="hover:bg-black hover:text-white px-1.5 py-0.5 border border-[#1F1F1F] font-bold cursor-pointer transition-colors text-[9px]"
            >
              Retro Edition 💾
            </button>
          </div>
        </div>

        {/* Top Masthead Navigation menu */}
        <nav className="py-2 border-b border-[#1F1F1F] flex items-center justify-between font-mono text-[9px] sm:text-[10px] tracking-wider font-bold">
          <div className="hidden md:flex justify-between w-full uppercase">
            <button onClick={() => scrollTo('about')} className={`hover:underline cursor-pointer ${activeSection === 'about' ? 'underline decoration-1 underline-offset-4' : 'text-[#555555]'}`}>METROPOLITAN (ABOUT)</button>
            <span>|</span>
            <button onClick={() => scrollTo('skills')} className={`hover:underline cursor-pointer ${activeSection === 'skills' ? 'underline decoration-1 underline-offset-4' : 'text-[#555555]'}`}>TECHNOLOGY INDEX</button>
            <span>|</span>
            <button onClick={() => scrollTo('projects')} className={`hover:underline cursor-pointer ${activeSection === 'projects' ? 'underline decoration-1 underline-offset-4' : 'text-[#555555]'}`}>FEATURED STORIES (PROJECTS)</button>
            <span>|</span>
            <button onClick={() => scrollTo('experience')} className={`hover:underline cursor-pointer ${activeSection === 'experience' ? 'underline decoration-1 underline-offset-4' : 'text-[#555555]'}`}>CAREER CHRONICLE</button>
            <span>|</span>
            <button onClick={() => scrollTo('certificates')} className={`hover:underline cursor-pointer ${activeSection === 'certificates' ? 'underline decoration-1 underline-offset-4' : 'text-[#555555]'}`}>CERTIFICATE REGISTER</button>
            <span>|</span>
            <button onClick={() => scrollTo('metrics')} className={`hover:underline cursor-pointer ${activeSection === 'metrics' ? 'underline decoration-1 underline-offset-4' : 'text-[#555555]'}`}>CODING JOURNAL</button>
            <span>|</span>
            <button onClick={() => scrollTo('contact')} className={`hover:underline cursor-pointer ${activeSection === 'contact' ? 'underline decoration-1 underline-offset-4' : 'text-[#555555]'}`}>CLASSIFIEDS</button>
            <span>|</span>
            <button onClick={() => setIsResumeOpen(true)} className="hover:underline text-black cursor-pointer">PRINT EDITION [PDF]</button>
          </div>

          {/* Mobile menu trigger */}
          <div className="md:hidden flex justify-between w-full items-center">
            <span className="font-serif-heading italic text-xs">Gazette Directory</span>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="border border-[#1F1F1F] p-1 hover:bg-[#EFEFEF] cursor-pointer"
              aria-label="Toggle Navigation menu"
            >
              {isMenuOpen ? <X size={14} /> : <Menu size={14} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="border border-[#1F1F1F] bg-[#FFFDF8] w-full p-4 flex flex-col space-y-2 font-mono text-xs md:hidden rounded-none mt-2 shadow-none"
            >
              <button onClick={() => scrollTo('about')} className="text-left py-1 hover:underline uppercase">METROPOLITAN (ABOUT)</button>
              <button onClick={() => scrollTo('skills')} className="text-left py-1 hover:underline uppercase">TECHNOLOGY INDEX</button>
              <button onClick={() => scrollTo('projects')} className="text-left py-1 hover:underline uppercase">FEATURED STORIES</button>
              <button onClick={() => scrollTo('experience')} className="text-left py-1 hover:underline uppercase">CAREER CHRONICLE</button>
              <button onClick={() => scrollTo('certificates')} className="text-left py-1 hover:underline uppercase">CERTIFICATE REGISTER</button>
              <button onClick={() => scrollTo('metrics')} className="text-left py-1 hover:underline uppercase">CODING JOURNAL</button>
              <button onClick={() => scrollTo('contact')} className="text-left py-1 hover:underline uppercase">CLASSIFIEDS</button>
              <button 
                onClick={() => {
                  toggleTheme()
                  setIsMenuOpen(false)
                }} 
                className="text-left py-1 hover:underline uppercase"
              >
                SWITCH TO RETRO 💾
              </button>
              <button
                onClick={() => {
                  setIsResumeOpen(true)
                  setIsMenuOpen(false)
                }}
                className="w-full text-center border border-[#1F1F1F] py-2 hover:bg-[#EFEFEF]"
              >
                PRINT EDITION [PDF]
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* BREAKING NEWS TICKER */}
        <div className="mt-2 border border-[#1F1F1F] bg-[#FFFDF8] flex items-center h-8 overflow-hidden select-none">
          <div className="bg-[#1F1F1F] text-[#FFFDF8] h-full flex items-center px-3 font-mono text-[9px] font-bold uppercase tracking-wider shrink-0 border-r border-[#1F1F1F]">
            Breaking News
          </div>
          <div className="relative flex items-center h-full w-full overflow-hidden font-serif-heading italic text-[11px] uppercase font-semibold">
            <div className="animate-marquee whitespace-nowrap flex gap-12 pr-12">
              <span>★ Winners of Datathon 2025 at DSATM Bengaluru</span>
              <span>★ Runner up at Hackwise 2025 National Level Hackathon</span>
              <span>★ Runner up at Avinya 2025 National Level Hackathon</span>
              <span>★ Winners of VTU State Level Volleyball Competition</span>
              <span>★ Schneider Electric Internship Event-Sourcing AI Prototype validated</span>
              {/* Duplicate copy for loop */}
              <span>★ Winners of Datathon 2025 at DSATM Bengaluru</span>
              <span>★ Runner up at Hackwise 2025 National Level Hackathon</span>
              <span>★ Runner up at Avinya 2025 National Level Hackathon</span>
              <span>★ Winners of VTU State Level Volleyball Competition</span>
              <span>★ Schneider Electric Internship Event-Sourcing AI Prototype validated</span>
            </div>
          </div>
        </div>
      </header>

      {/* EDITORIAL CONTENT BODY */}
      <main className="max-w-6xl mx-auto px-4 pt-6 space-y-10">
        
        {/* HERO - FRONT PAGE STORY */}
        <section id="home" className="scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Left/Center Main Article Columns (Spans 9 of 12 columns on desktop) */}
            <div className="lg:col-span-9 border-b lg:border-b-0 lg:border-r border-[#1F1F1F]/30 lg:pr-6 pb-6 lg:pb-0 space-y-4">
              <div className="space-y-1.5">
                <span className="font-mono text-[9px] font-bold text-gray-500 uppercase tracking-widest block">Metropolitan • Special Technology Dispatch</span>
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif-heading font-black tracking-tight leading-[0.95] text-[#111111] uppercase">
                  Mithra N Gowda Builds Intelligent Software for Modern Systems
                </h2>
                <p className="text-sm sm:text-base font-serif-heading italic text-gray-700 leading-tight">
                  Undergraduate developer pioneers event-sourcing log analysis, real-time anomaly detection, and choice counselling platforms.
                </p>
                <div className="flex flex-wrap items-center justify-between text-[9px] font-mono text-gray-500 border-y border-[#1F1F1F]/20 py-1 uppercase tracking-wider gap-2">
                  <span>By Staff Reporter • Bengaluru</span>
                  <span>Published June 2026 • 5 Min Read</span>
                  <span>Section A • Page 1</span>
                </div>
              </div>

              {/* Multi-column layout using tailwind columns-2 or grid */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 font-serif-body text-xs sm:text-[13px] text-[#111111] leading-relaxed">
                
                {/* Main Text Body (spans 8 columns on md+) */}
                <div className="md:col-span-8 space-y-4 text-justify">
                  <p className="newspaper-drop-cap">
                    An Information Science undergraduate from the prestigious RV College of Engineering, Mithra N Gowda has spent the past several years engineering advanced web systems, API architectures, and competitive software modules. Combining robust backend frameworks with machine learning forecasting systems, his research balances clean modular syntax with high execution performance.
                  </p>
                  <p>
                    Specializing in Next.js, Django, databases, and anomaly detection pipelines, his projects bridge theoretical algorithms and scalable production platforms. His work at Schneider Electric as a Software Development Intern involves designing AI-driven home automation subsystems capable of autonomous fault detection and corrective recommendations.
                  </p>
                  
                  {/* Pull Quote inside text */}
                  <blockquote className="my-4 p-4 border-y-2 border-[#1F1F1F]/30 font-serif-heading italic text-sm sm:text-base text-[#111111] text-center font-semibold bg-[#FFFDF8]/40 select-none">
                    “Software should solve real-world problems, not create new ones. Systems must be designed with resilience, anticipating anomalies before they disrupt execution.”
                  </blockquote>

                  <p>
                    Currently, Gowda is leveraging his research in full-stack architectures and machine learning optimization to build enterprise-ready portals, such as KCET EduGuide, which has already facilitated personalized choice-list counselling for over seventy students. He is actively seeking full-stack software engineering roles, automated consultancy projects, and research-driven software internships.
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2 select-none">
                    <button onClick={() => scrollTo('projects')} className="font-mono text-[10px] uppercase font-bold px-3 py-1.5 bg-[#1F1F1F] text-[#FFFDF8] hover:bg-transparent hover:text-black border border-[#1F1F1F] cursor-pointer transition-all">
                      Read Feature Stories →
                    </button>
                    <button onClick={() => setIsResumeOpen(true)} className="font-mono text-[10px] uppercase font-bold px-3 py-1.5 border border-[#1F1F1F] text-black hover:bg-[#1F1F1F] hover:text-white cursor-pointer transition-all">
                      Download PDF Edition 📄
                    </button>
                  </div>
                </div>

                {/* Integrated Image & Figure Box (spans 4 columns on md+) */}
                <div className="md:col-span-4 space-y-3">
                  <div className="border border-[#1F1F1F] p-1.5 bg-[#FFFDF8]">
                    <div className="bg-gray-100 flex justify-center items-center overflow-hidden aspect-[4/5] border border-[#1F1F1F]">
                      <Image 
                        src="/profile-photo.jpg" 
                        alt="Portrait of Mithra N Gowda" 
                        width={300}
                        height={375}
                        priority
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="mt-2 text-[9px] font-mono leading-tight text-gray-600">
                      <div className="font-bold text-black">Figure 01: Mithra N Gowda.</div>
                      <div className="italic">Photo Credit: RVCE Press Archive.</div>
                      <div className="mt-1 border-t border-[#1F1F1F]/10 pt-1">Taken during the 2026 industrial software briefing in Bengaluru.</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column Sidebar (Spans 3 of 12 columns on desktop) */}
            <div className="lg:col-span-3 space-y-5 font-serif-body">
              
              {/* Gazette Bulletin Box */}
              <div className="border border-[#1F1F1F] p-3 bg-[#FFFDF8] rounded-none">
                <h3 className="font-serif-heading font-black text-xs uppercase tracking-wider text-center border-b border-[#1F1F1F] pb-1.5 mb-2">
                  Gazette Bulletin
                </h3>
                <div className="space-y-2 text-[11px] leading-snug">
                  <div>
                    <span className="font-mono text-[8px] uppercase tracking-wider text-gray-500 block">CURRENT STATUS</span>
                    <span className="font-bold text-[#111111]">OPEN TO ROLES & INTERNSHIPS</span>
                  </div>
                  <div className="border-t border-[#1F1F1F]/10 pt-1.5">
                    <span className="font-mono text-[8px] uppercase tracking-wider text-gray-500 block">ACADEMIC LOCATION</span>
                    <span>RV College of Engineering, Bengaluru</span>
                  </div>
                  <div className="border-t border-[#1F1F1F]/10 pt-1.5">
                    <span className="font-mono text-[8px] uppercase tracking-wider text-gray-500 block">EXPECTED GRADUATION</span>
                    <span>BE (Information Science) • May 2027</span>
                  </div>
                  <div className="border-t border-[#1F1F1F]/10 pt-1.5">
                    <span className="font-mono text-[8px] uppercase tracking-wider text-gray-500 block">SCHOLAR INDEX</span>
                    <span>Cumulative CGPA: <strong className="font-bold">9.06 / 10.00</strong></span>
                  </div>
                  <div className="border-t border-[#1F1F1F]/10 pt-1.5">
                    <span className="font-mono text-[8px] uppercase tracking-wider text-gray-500 block">PRIMARY TELEGRAPHY</span>
                    <span className="font-mono text-[9px]">mithrangowda01@gmail.com</span>
                  </div>
                </div>
              </div>

              {/* Editorial Opinion Box */}
              <div className="border-y border-[#1F1F1F]/40 py-3">
                <span className="font-mono text-[8px] font-bold text-gray-500 uppercase tracking-widest block mb-1">EDITORIAL STATEMENT</span>
                <h4 className="font-serif-heading font-bold text-xs uppercase mb-1.5 leading-snug">
                  The Discipline of Modular Systems
                </h4>
                <p className="text-[10px] leading-normal text-gray-700 text-justify">
                  &ldquo;In an era where massive software layers are compiled with automated shortcuts, the craft of software engineering risks losing its structural rigor. Designing small, deterministic pipelines is not merely an aesthetic choice&mdash;it is a prerequisite for predictable scale.&rdquo;
                </p>
              </div>

              {/* Industrial Dispatch Snippet */}
              <div className="space-y-1.5">
                <h4 className="font-serif-heading font-bold text-[11px] uppercase tracking-wider text-gray-500 font-mono">
                  ★ Latest Dispatch
                </h4>
                <div className="text-[10px] leading-snug border-l border-[#1F1F1F] pl-2 space-y-1 text-gray-700">
                  <p className="font-bold text-black">Schneider Electric Internship:</p>
                  <p>Developing AI-powered IoT error classification models to parse event logs and suggest remedies on-the-fly.</p>
                </div>
              </div>

            </div>

          </div>
        </section>

        <hr className="border-t-[3px] border-double border-[#1F1F1F]/40" />

        {/* ABOUT SECTION (MULTI COLUMN ARTICLES) */}
        <section id="about" className="scroll-mt-24 space-y-4">
          <div className="border-b-2 border-[#1F1F1F] pb-1.5">
            <h2 className="font-serif-heading font-black text-xl sm:text-2xl uppercase tracking-wider">
              01. The Profile Chronicles
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start font-serif-body">
            
            {/* Column 1: Bio (Spans 4 columns on lg+) */}
            <div className="lg:col-span-4 space-y-4 text-xs sm:text-[13px] leading-relaxed text-justify">
              <h3 className="font-serif-heading font-bold text-sm text-[#111111] uppercase tracking-wide border-b border-[#1F1F1F] pb-1">
                Biographical Summary
              </h3>
              <p className="text-gray-800">
                {resumeData.personal_info.bio}
              </p>
              <div className="border border-[#1F1F1F] p-3.5 bg-[#FFFDF8] border-dashed font-mono text-[10px] leading-normal space-y-1 select-none">
                <span className="font-bold block border-b border-[#1F1F1F]/20 pb-0.5 mb-1 text-black">OFFICIAL SPECIFICATIONS:</span>
                <div className="flex justify-between">
                  <span>DISCIPLINE:</span>
                  <span className="font-bold">INFO. SCIENCE (RVCE)</span>
                </div>
                <div className="flex justify-between border-t border-[#1F1F1F]/5 pt-0.5">
                  <span>INTERNSHIP:</span>
                  <span className="font-bold">SCHNEIDER ELECTRIC</span>
                </div>
                <div className="flex justify-between border-t border-[#1F1F1F]/5 pt-0.5">
                  <span>STACK FOCUS:</span>
                  <span className="font-bold">REACT • DJANGO • FASTAPI</span>
                </div>
              </div>
            </div>

            {/* Column 2: Education (Spans 5 columns on lg+) */}
            <div className="lg:col-span-5 space-y-4">
              <h3 className="font-serif-heading font-bold text-sm text-[#111111] uppercase tracking-wide border-b border-[#1F1F1F] pb-1">
                Educational Background
              </h3>
              
              {/* Timeline Container */}
              <div className="relative pl-4 space-y-4 border-l border-dotted border-[#1F1F1F] ml-1.5 py-1">
                {resumeData.education.map((edu: Education, idx: number) => (
                  <div key={idx} className="relative space-y-1">
                    {/* Circle timeline marker */}
                    <div className="absolute -left-[20.5px] top-[4px] w-[12px] h-[12px] rounded-none bg-[#FFFDF8] border-2 border-[#1F1F1F]" />
                    
                    <div className="flex justify-between items-baseline text-[9px] font-mono text-gray-500 uppercase">
                      <span>{edu.start_date} — {edu.end_date}</span>
                      <span>{edu.location}</span>
                    </div>
                    <h4 className="font-serif-heading font-black text-sm text-[#111111] leading-tight">
                      {edu.institution.toUpperCase()}
                    </h4>
                    <div className="flex justify-between items-center text-xs text-gray-700 italic font-semibold">
                      <span>{edu.degree}</span>
                      {edu.cgpa && (
                        <span className="font-mono text-[10px] font-bold not-italic bg-[#FFFDF8] border border-[#1F1F1F] px-1.5 select-none shrink-0 ml-2">
                          CGPA: {edu.cgpa}
                        </span>
                      )}
                      {edu.percentage && (
                        <span className="font-mono text-[10px] font-bold not-italic bg-[#FFFDF8] border border-[#1F1F1F] px-1.5 select-none shrink-0 ml-2">
                          Marks: {edu.percentage}%
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] leading-relaxed text-gray-600 mt-1">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 3: Academic Focus & Side Info (Spans 3 columns on lg+) */}
            <div className="lg:col-span-3 space-y-4">
              {/* Coursework */}
              <div className="space-y-2">
                <h3 className="font-serif-heading font-bold text-sm text-[#111111] uppercase tracking-wide border-b border-[#1F1F1F] pb-1">
                  Academic Focus
                </h3>
                <div className="flex flex-wrap gap-1 font-mono text-[9px] select-none">
                  {resumeData.relevant_coursework.map((course: string, index: number) => (
                    <span key={index} className="px-1.5 py-0.5 border border-[#1F1F1F] bg-[#FFFDF8] uppercase hover:bg-black hover:text-white transition-colors">
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quick Facts */}
              <div className="space-y-2 pt-2 border-t border-[#1F1F1F]/20">
                <h3 className="font-serif-heading font-bold text-xs text-[#111111] uppercase tracking-wide border-b border-[#1F1F1F]/10 pb-0.5">
                  Indices & Logs
                </h3>
                <div className="space-y-1.5 font-mono text-[9px] text-gray-700 select-none">
                  <div className="flex justify-between border-b border-dashed border-[#1F1F1F]/20 pb-0.5">
                    <span>LANGUAGES</span>
                    <span>ENG • KAN • HIN</span>
                  </div>
                  <div className="flex justify-between border-b border-dashed border-[#1F1F1F]/20 pb-0.5">
                    <span>API ARCH.</span>
                    <span>RESTFUL • GRPC</span>
                  </div>
                  <div className="flex justify-between border-b border-dashed border-[#1F1F1F]/20 pb-0.5">
                    <span>ANOMALY DET.</span>
                    <span>EVENT SOURCING</span>
                  </div>
                  <div className="flex justify-between border-b border-dashed border-[#1F1F1F]/20 pb-0.5">
                    <span>REPOSITORIES</span>
                    <a href={resumeData.personal_info.social_links.github} target="_blank" rel="noopener noreferrer" className="hover:underline font-bold">GITHUB INDEX ↗</a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        <hr className="border-t-[3px] border-double border-[#1F1F1F]/40" />

        {/* SKILLS SECTION (COLUMNS W/ DOT LEADERS) */}
        <section id="skills" className="scroll-mt-24 space-y-4">
          <div className="border-b-2 border-[#1F1F1F] pb-1.5">
            <h2 className="font-serif-heading font-black text-xl sm:text-2xl uppercase tracking-wider">
              02. Technical Index
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Column 1: Programming Languages */}
            <div className="space-y-3">
              <h3 className="font-serif-heading font-black text-xs text-[#111111] border-b border-[#1F1F1F] pb-1 uppercase tracking-wider">
                Programming Languages
              </h3>
              <ul className="space-y-1 font-serif-body text-xs">
                {resumeData.skills.programming_languages.map((skill: Skill) => (
                  <li 
                    key={skill.name} 
                    onClick={() => setSystemAlert(`Skill: ${skill.name} (Proficiency: ${skill.level}%)`)}
                    className="py-1 flex justify-between items-end hover:bg-[#FFFDF8]/60 px-1 cursor-pointer transition-colors group"
                  >
                    <span className="font-bold text-black group-hover:underline">{skill.name}</span>
                    <span className="flex-grow border-b border-dotted border-[#1F1F1F]/30 mx-2 mb-0.5" />
                    <span className="font-mono text-[9px] text-gray-700 font-bold shrink-0 uppercase">
                      {skill.level >= 85 ? 'ADVANCED' : skill.level >= 75 ? 'INTERMEDIATE' : 'FAMILIAR'} ({skill.level}%)
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Frameworks */}
            <div className="space-y-3">
              <h3 className="font-serif-heading font-black text-xs text-[#111111] border-b border-[#1F1F1F] pb-1 uppercase tracking-wider">
                Frameworks & Libs
              </h3>
              <ul className="space-y-1 font-serif-body text-xs">
                {resumeData.skills.frameworks_libraries.map((skill: Skill) => (
                  <li 
                    key={skill.name} 
                    onClick={() => setSystemAlert(`Skill: ${skill.name} (Proficiency: ${skill.level}%)`)}
                    className="py-1 flex justify-between items-end hover:bg-[#FFFDF8]/60 px-1 cursor-pointer transition-colors group"
                  >
                    <span className="font-bold text-black group-hover:underline">{skill.name}</span>
                    <span className="flex-grow border-b border-dotted border-[#1F1F1F]/30 mx-2 mb-0.5" />
                    <span className="font-mono text-[9px] text-gray-700 font-bold shrink-0 uppercase">
                      {skill.level >= 85 ? 'ADVANCED' : skill.level >= 75 ? 'INTERMEDIATE' : 'FAMILIAR'} ({skill.level}%)
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Tools */}
            <div className="space-y-3">
              <h3 className="font-serif-heading font-black text-xs text-[#111111] border-b border-[#1F1F1F] pb-1 uppercase tracking-wider">
                Tools & Databases
              </h3>
              <ul className="space-y-1 font-serif-body text-xs">
                {resumeData.skills.tools_technologies.map((skill: Skill) => (
                  <li 
                    key={skill.name} 
                    onClick={() => setSystemAlert(`Skill: ${skill.name} (Proficiency: ${skill.level}%)`)}
                    className="py-1 flex justify-between items-end hover:bg-[#FFFDF8]/60 px-1 cursor-pointer transition-colors group"
                  >
                    <span className="font-bold text-black group-hover:underline">{skill.name}</span>
                    <span className="flex-grow border-b border-dotted border-[#1F1F1F]/30 mx-2 mb-0.5" />
                    <span className="font-mono text-[9px] text-gray-700 font-bold shrink-0 uppercase">
                      {skill.level >= 85 ? 'ADVANCED' : skill.level >= 75 ? 'INTERMEDIATE' : 'FAMILIAR'} ({skill.level}%)
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </section>

        <hr className="border-t-[3px] border-double border-[#1F1F1F]/40" />

        {/* PROJECTS SECTION (FEATURED STORIES W/ ASYMMETRIC PRINT GRID) */}
        <section id="projects" className="scroll-mt-24 space-y-4">
          <div className="border-b-2 border-[#1F1F1F] pb-1.5">
            <h2 className="font-serif-heading font-black text-xl sm:text-2xl uppercase tracking-wider">
              03. Business & Projects Gazette
            </h2>
          </div>

          <div className="space-y-6">
            
            {/* 1. Lead Project: KCET EduGuide (Full width or large span) */}
            {resumeData.projects[0] && (() => {
              const leadProject = resumeData.projects[0];
              return (
                <div className="border border-[#1F1F1F] bg-[#FFFDF8] p-5 space-y-4 rounded-none">
                  <div className="flex justify-between items-center text-[9px] font-mono text-gray-500 border-b border-[#1F1F1F]/20 pb-1.5 uppercase tracking-wider">
                    <span>Lead Technology Story • Page B1</span>
                    <span>Published {leadProject.date}</span>
                  </div>

                  <div className="space-y-1">
                    <h3 
                      onClick={() => setSelectedProject(leadProject)}
                      className="font-serif-heading font-black text-2xl sm:text-3xl text-black hover:underline cursor-pointer uppercase leading-tight"
                    >
                      {leadProject.title}
                    </h3>
                    <p className="font-serif-heading italic text-xs text-gray-700 leading-snug">
                      Full-stack choices choice-list algorithm deployed for high-density student counselling matching.
                    </p>
                    <p className="text-[9px] font-mono text-gray-500 uppercase pt-1">
                      Reporters: {leadProject.contributors.map(c => c.name).join(' & ')}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 font-serif-body text-xs sm:text-[13px] text-justify leading-relaxed">
                    {/* Left paragraph flow */}
                    <div className="md:col-span-7 space-y-3">
                      <p className="newspaper-drop-cap">
                        {leadProject.description[0]}
                      </p>
                      <p>
                        {leadProject.description[1] || ''}
                      </p>
                      <p className="text-[11px] leading-relaxed text-gray-600">
                        {leadProject.description[2] || ''}
                      </p>
                    </div>

                    {/* Right Key Features / Tech Spec box */}
                    <div className="md:col-span-5 border border-[#1F1F1F] p-4 bg-[#FFFDF8] font-mono text-[9px] space-y-2 select-none">
                      <span className="font-bold block border-b border-[#1F1F1F] pb-1 uppercase tracking-wider text-black">Technical Specifications:</span>
                      <div className="flex flex-wrap gap-1 mb-2">
                        {leadProject.tech_stack.map((tech, i) => (
                          <span key={i} className="px-1.5 py-0.5 border border-[#1F1F1F] bg-[#FFFDF8] text-[8px] uppercase">{tech}</span>
                        ))}
                      </div>
                      <span className="font-bold block border-b border-[#1F1F1F]/20 pb-0.5 uppercase tracking-wider text-black mt-2">Key Dispatch Log:</span>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 leading-tight">
                        {leadProject.features.slice(0, 4).map((feat, i) => (
                          <li key={i} className="text-[8.5px] truncate">{feat}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Article Footer with Newspaper style links */}
                  <div className="flex flex-wrap justify-between items-center pt-3 border-t border-[#1F1F1F]/20 font-mono text-[9px] gap-2 select-none">
                    <div className="flex space-x-3">
                      {leadProject.github_link && (
                        <a href={leadProject.github_link} target="_blank" rel="noopener noreferrer" className="hover:underline font-bold uppercase text-black">
                          Open Source Repository ↗
                        </a>
                      )}
                      {leadProject.demo_link && (
                        <a href={leadProject.demo_link} target="_blank" rel="noopener noreferrer" className="hover:underline font-bold uppercase text-black pl-2 border-l border-[#1F1F1F]/20">
                          Live Digital Edition ↗
                        </a>
                      )}
                    </div>
                    <button 
                      onClick={() => setSelectedProject(leadProject)}
                      className="hover:underline font-bold uppercase text-black cursor-pointer"
                    >
                      Read Full Story Details →
                    </button>
                  </div>
                </div>
              );
            })()}

            {/* 2. Secondary Projects (Medium) side-by-side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {(showAllProjects ? [resumeData.projects[1], resumeData.projects[2]] : [resumeData.projects[1]]).map((proj, idx) => {
                if (!proj) return null;
                const colSpanClass = (!showAllProjects && idx === 0) ? "md:col-span-2" : "md:col-span-1";
                return (
                  <div key={idx} className={`${colSpanClass} border border-[#1F1F1F] bg-[#FFFDF8] p-4 flex flex-col justify-between space-y-3 rounded-none`}>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-[9px] font-mono text-gray-500 border-b border-[#1F1F1F]/10 pb-1 uppercase tracking-wider">
                        <span>Project Index #{idx + 2}</span>
                        <span>{proj.date}</span>
                      </div>
                      <h3 
                        onClick={() => setSelectedProject(proj)}
                        className="font-serif-heading font-black text-lg text-black hover:underline cursor-pointer uppercase leading-tight"
                      >
                        {proj.title}
                      </h3>
                      <p className="font-serif-body text-xs text-gray-700 text-justify leading-relaxed">
                        {proj.description[0]}
                      </p>
                      <div className="flex flex-wrap gap-1 font-mono text-[8px] select-none pt-1">
                        {proj.tech_stack.slice(0, 5).map((tech, i) => (
                          <span key={i} className="px-1 py-0.25 border border-[#1F1F1F]/60 bg-[#FFFDF8] uppercase">{tech}</span>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-2.5 border-t border-[#1F1F1F]/10 font-mono text-[9px] select-none">
                      <div className="flex space-x-2.5">
                        {proj.github_link && (
                          <a href={proj.github_link} target="_blank" rel="noopener noreferrer" className="hover:underline font-bold text-black">
                            Repository ↗
                          </a>
                        )}
                        {proj.demo_link && (
                          <a href={proj.demo_link} target="_blank" rel="noopener noreferrer" className="hover:underline font-bold text-black border-l border-[#1F1F1F]/20 pl-2">
                            Demo ↗
                          </a>
                        )}
                      </div>
                      <button 
                        onClick={() => setSelectedProject(proj)}
                        className="hover:underline font-bold text-black cursor-pointer"
                      >
                        Read Details →
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 3. Tertiary Projects (Small briefs) side-by-side or filler */}
            {showAllProjects && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                {[resumeData.projects[3], resumeData.projects[4]].map((proj, idx) => {
                  if (!proj) return null;
                  return (
                    <div key={idx} className="border-t border-b border-dashed border-[#1F1F1F] py-3 space-y-2">
                      <div className="flex justify-between items-center text-[8.5px] font-mono text-gray-500 uppercase tracking-wider">
                        <span className="font-bold text-[#111111]">★ Technology Brief</span>
                        <span>{proj.date}</span>
                      </div>
                      <h4 
                        onClick={() => setSelectedProject(proj)}
                        className="font-serif-heading font-bold text-sm text-[#111111] hover:underline cursor-pointer uppercase leading-tight"
                      >
                        {proj.title}
                      </h4>
                      <p className="font-serif-body text-[11px] text-gray-600 text-justify leading-relaxed">
                        {proj.description[0]}
                      </p>
                      <div className="flex justify-between items-center pt-1 font-mono text-[8.5px] select-none">
                        <span className="text-gray-500">Stack: {proj.tech_stack.slice(0, 3).join(', ').toUpperCase()}</span>
                        <div className="flex space-x-2">
                          {proj.github_link && (
                            <a href={proj.github_link} target="_blank" rel="noopener noreferrer" className="hover:underline font-bold text-black">
                              Source ↗
                            </a>
                          )}
                          <button onClick={() => setSelectedProject(proj)} className="hover:underline font-bold text-black cursor-pointer">
                            Full Brief →
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* 4. Additional Archive Stories (for projects 5, 6, 7) */}
            {showAllProjects && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                {[resumeData.projects[5], resumeData.projects[6], resumeData.projects[7]].map((proj, idx) => {
                  if (!proj) return null;
                  return (
                    <div key={idx} className="border border-[#1F1F1F] bg-[#FFFDF8] p-4 flex flex-col justify-between space-y-3 rounded-none">
                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-[9px] font-mono text-gray-500 border-b border-[#1F1F1F]/10 pb-1 uppercase tracking-wider">
                          <span>Dispatch Archive #{idx + 6}</span>
                          <span>{proj.date}</span>
                        </div>
                        <h3 
                          onClick={() => setSelectedProject(proj)}
                          className="font-serif-heading font-black text-sm text-black hover:underline cursor-pointer uppercase leading-tight"
                        >
                          {proj.title}
                        </h3>
                        <p className="font-serif-body text-[11px] text-gray-700 text-justify leading-normal">
                          {proj.description[0]}
                        </p>
                        <div className="flex flex-wrap gap-1 font-mono text-[8px] select-none pt-1">
                          {proj.tech_stack.slice(0, 4).map((tech, i) => (
                            <span key={i} className="px-1 py-0.25 border border-[#1F1F1F]/60 bg-[#FFFDF8] uppercase">{tech}</span>
                          ))}
                        </div>
                      </div>

                      <div className="flex justify-between items-center pt-2.5 border-t border-[#1F1F1F]/10 font-mono text-[9px] select-none">
                        <div className="flex space-x-2">
                          {proj.github_link && (
                            <a href={proj.github_link} target="_blank" rel="noopener noreferrer" className="hover:underline font-bold text-black">
                              Source ↗
                            </a>
                          )}
                        </div>
                        <button 
                          onClick={() => setSelectedProject(proj)}
                          className="hover:underline font-bold text-black cursor-pointer"
                        >
                          Details →
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Newspaper Toggle Button */}
            <div className="text-center pt-4 select-none font-mono">
              {!showAllProjects ? (
                <button
                  onClick={() => setShowAllProjects(true)}
                  className="w-full font-mono text-xs font-bold uppercase tracking-wider px-6 py-2.5 bg-transparent text-black border-2 border-double border-[#1F1F1F] hover:bg-[#1F1F1F] hover:text-[#FFFDF8] transition-all cursor-pointer"
                >
                  [+] Read Additional Project Registers & Briefs (Show {resumeData.projects.length - 2} More)
                </button>
              ) : (
                <button
                  onClick={() => {
                    setShowAllProjects(false)
                    scrollTo('projects')
                  }}
                  className="w-full font-mono text-xs font-bold uppercase tracking-wider px-6 py-2.5 bg-transparent text-black border-2 border-double border-[#1F1F1F] hover:bg-red-700 hover:text-white hover:border-red-700 transition-all cursor-pointer"
                >
                  [-] Close Additional Project Registers
                </button>
              )}
            </div>

          </div>
        </section>

        <hr className="border-t-[3px] border-double border-[#1F1F1F]/40" />

        {/* EXPERIENCE (COLUMNS "CAREER CHRONICLE") */}
        <section id="experience" className="scroll-mt-24 space-y-4">
          <div className="border-b-2 border-[#1F1F1F] pb-1.5">
            <h2 className="font-serif-heading font-black text-xl sm:text-2xl uppercase tracking-wider">
              04. The Career Chronicle
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start font-serif-body">
            
            {/* Left Column: Professional Dispatches (Spans 8 of 12 columns) */}
            <div className="lg:col-span-8 space-y-4 border-b lg:border-b-0 lg:border-r border-[#1F1F1F]/20 lg:pr-6 pb-4 lg:pb-0">
              <h3 className="font-serif-heading font-bold text-sm text-[#111111] uppercase tracking-wide border-b border-[#1F1F1F] pb-1">
                Industrial Engineering Dispatches
              </h3>
              
              {resumeData.experience.map((exp: Experience, index: number) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-baseline text-[9px] font-mono text-gray-500 uppercase">
                    <span>{exp.start_date.toUpperCase()} — {exp.end_date.toUpperCase()}</span>
                    <span>{exp.location}</span>
                  </div>
                  
                  <div className="space-y-1">
                    <h4 className="font-serif-heading font-black text-lg text-black uppercase leading-tight">
                      {exp.company}
                    </h4>
                    <p className="font-serif-heading italic text-xs text-gray-700">
                      Field Assignment: {exp.role}
                    </p>
                  </div>

                  <p className="text-xs text-gray-800 leading-relaxed text-justify mt-1">
                    {exp.description}
                  </p>

                  <div className="border-t border-[#1F1F1F]/10 pt-2">
                    <span className="font-mono text-[9px] font-bold text-black uppercase block mb-1">Key Objectives & Accomplishments:</span>
                    <ul className="list-disc list-inside space-y-1.5 text-xs text-gray-700 leading-relaxed">
                      {exp.responsibilities.map((resp: string, i: number) => (
                        <li key={i} className="align-top pl-2 -indent-2">
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Leadership & Civic Chronicle (Spans 4 of 12 columns) */}
            <div className="lg:col-span-4 space-y-4">
              <h3 className="font-serif-heading font-bold text-sm text-[#111111] uppercase tracking-wide border-b border-[#1F1F1F] pb-1">
                Civic & Leadership Bulletins
              </h3>

              {resumeData.leadership_extracurricular.map((lead: Leadership, index: number) => (
                <div key={index} className="space-y-2 border-b border-dashed border-[#1F1F1F]/20 pb-4 last:border-0 last:pb-0">
                  <div className="flex justify-between items-baseline text-[9px] font-mono text-gray-500 uppercase">
                    <span>{lead.start_date.toUpperCase()} — {lead.end_date.toUpperCase()}</span>
                    <span>{lead.location}</span>
                  </div>

                  <div className="space-y-0.5">
                    <h4 className="font-serif-heading font-black text-sm text-black uppercase leading-tight">
                      {lead.organization}
                    </h4>
                    <p className="font-serif-heading italic text-[11px] text-gray-700">
                      Role: {lead.role}
                    </p>
                  </div>

                  <ul className="space-y-1 text-xs text-gray-700 leading-relaxed text-justify list-none">
                    {lead.activities.map((act: string, i: number) => (
                      <li key={i} className="relative pl-3">
                        <span className="absolute left-0 top-[6px] w-1.5 h-1.5 bg-[#1F1F1F]" />
                        {act}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

          </div>
        </section>

        <hr className="border-t-[3px] border-double border-[#1F1F1F]/40" />

        {/* ACHIEVEMENTS BULLETIN BOARD */}
        <section className="scroll-mt-24 space-y-4">
          <div className="border-b-2 border-[#1F1F1F] pb-1.5">
            <h2 className="font-serif-heading font-black text-xl sm:text-2xl uppercase tracking-wider">
              Official Honors & Achievements
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-serif-body">
            {resumeData.achievements.map((ach: { title: string; date: string; description: string }, idx: number) => (
              <div key={idx} className="border border-[#1F1F1F] p-3.5 bg-[#FFFDF8] flex flex-col justify-between space-y-2 rounded-none">
                <div className="space-y-1">
                  <div className="flex justify-between items-baseline text-[8px] font-mono text-gray-500 uppercase tracking-wider border-b border-[#1F1F1F]/10 pb-1">
                    <span>Award Registry #{idx + 1}</span>
                    <span>{ach.date}</span>
                  </div>
                  <h3 className="font-serif-heading font-black text-xs sm:text-[13px] uppercase text-black leading-snug pt-1">
                    {ach.title}
                  </h3>
                  <p className="text-[11px] leading-relaxed text-gray-700">
                    {ach.description}
                  </p>
                </div>
                <div className="border-t border-[#1F1F1F]/20 pt-1.5 font-mono text-[8px] text-gray-500 uppercase tracking-widest select-none">
                  Verified Dispatch Log
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-t-[3px] border-double border-[#1F1F1F]/40" />

        {/* CERTIFICATES (ARCHIVE COLLECTION) */}
        <section id="certificates" className="scroll-mt-24 space-y-4">
          <div className="border-b-2 border-[#1F1F1F] pb-1.5">
            <h2 className="font-serif-heading font-black text-xl sm:text-2xl uppercase tracking-wider">
              05. Certification Archives
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resumeData.certificates.map((cert: Certificate, index: number) => (
              <div key={index} className="border border-[#1F1F1F] bg-[#FFFDF8] p-4 flex flex-col justify-between space-y-4 rounded-none">
                <div className="flex justify-between items-start border-b border-[#1F1F1F]/20 pb-2">
                  <div className="space-y-0.5">
                    <span className="font-mono text-[8.5px] font-bold text-gray-500 uppercase block">Archive Index #{index + 1}</span>
                    <h3 className="font-serif-heading font-bold text-sm text-[#111111] uppercase tracking-tight leading-tight">{cert.name}</h3>
                  </div>
                  <span className="text-[9px] text-gray-500 font-mono whitespace-nowrap bg-[#FFFDF8] border border-[#1F1F1F]/20 px-1.5 py-0.5">{cert.date.toUpperCase()}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                  <div className="sm:col-span-4 border border-[#1F1F1F] p-1 bg-[#FFFDF8] rounded-none">
                    <img
                      src={cert.image}
                      alt={`Certificate Verification`}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="sm:col-span-8 space-y-3 text-xs font-serif-body">
                    <p className="text-gray-700">
                      Institution: <span className="font-bold text-[#111111]">{cert.organization}</span>
                    </p>
                    <div className="flex pt-1 select-none">
                      <a
                        href={cert.image}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-[9px] uppercase px-3 py-1 bg-transparent text-[#111111] hover:bg-[#1F1F1F] hover:text-white transition-colors border border-[#1F1F1F] font-bold"
                      >
                        Verify Issue Copy ↗
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-t-[3px] border-double border-[#1F1F1F]/40" />

        {/* METRICS & LEETCODE / GITHUB JOURNAL */}
        <section id="metrics" className="scroll-mt-24 space-y-4">
          <div className="border-b-2 border-[#1F1F1F] pb-1.5">
            <h2 className="font-serif-heading font-black text-xl sm:text-2xl uppercase tracking-wider">
              06. Coding Journal
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start font-serif-body">
            <NewspaperLeetCodeArticle
              contestLoading={contestLoading}
              contestError={contestError}
              contestData={contestData}
            />
            <NewspaperGitHubArticle />
          </div>
        </section>

        <hr className="border-t-[3px] border-double border-[#1F1F1F]/40" />

        {/* CONTACT (CLASSIFIEDS BOX) */}
        <section id="contact" className="scroll-mt-24 space-y-4">
          <div className="border-b-2 border-[#1F1F1F] pb-1.5">
            <h2 className="font-serif-heading font-black text-xl sm:text-2xl uppercase tracking-wider">
              07. The Classifieds Directory
            </h2>
          </div>

          <div className="border-[3px] border-double border-[#1F1F1F] p-6 bg-[#FFFDF8] max-w-3xl mx-auto rounded-none">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              
              {/* Classified Details */}
              <div className="md:col-span-5 space-y-4 font-serif-body">
                <div className="border-b border-[#1F1F1F] pb-2 text-center uppercase tracking-wide select-none">
                  <h3 className="font-serif-heading font-black text-xs text-[#111111] tracking-wider">
                    SITUATIONS WANTED / OFFERS
                  </h3>
                </div>
                <p className="text-xs text-gray-800 leading-relaxed text-justify italic">
                  &ldquo;Experienced undergraduate software developer seeks professional internships and engineering roles. Expert in Next.js, Django REST Framework, API design, event sourcing anomaly pipelines, and MySQL database configuration.&rdquo;
                </p>
                <div className="border-t border-b border-dashed border-[#1F1F1F]/40 py-3 text-[9px] space-y-1.5 font-mono text-gray-600">
                  <div className="font-bold text-black uppercase text-center mb-1 select-none">OFFICIAL DISPATCH REGISTRY:</div>
                  <div className="flex justify-between">
                    <span>HOST ARCHIVE:</span>
                    <span className="font-bold text-black">mithrangowda01@gmail.com</span>
                  </div>
                  <div className="flex justify-between">
                    <span>STATION PORT:</span>
                    <span className="font-bold text-black">BENGALURU, INDIA</span>
                  </div>
                </div>
                <div className="flex justify-center space-x-4 pt-1 font-mono text-[9px] select-none font-bold">
                  <a href={resumeData.personal_info.social_links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline text-black">LINKEDIN ↗</a>
                  <span className="text-gray-300">|</span>
                  <a href={resumeData.personal_info.social_links.github} target="_blank" rel="noopener noreferrer" className="hover:underline text-black">GITHUB ↗</a>
                </div>
              </div>

              {/* Classified Form */}
              <div className="md:col-span-7 pt-6 md:pt-0 border-t md:border-t-0 md:border-l border-[#1F1F1F]/20 md:pl-8">
                <div className="flex items-center space-x-2 pb-2 mb-2 border-b border-[#1F1F1F]/20 font-serif-heading font-black text-xs uppercase tracking-wide select-none">
                  <Inbox size={13} />
                  <span>Submit Inquiries & Correspondence:</span>
                </div>
                <ClassifiedContactForm />
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* NEWSPAPER STATIC FOOTER */}
      <footer className="max-w-6xl mx-auto px-4 pt-8 mt-12 select-none font-mono text-[9px] border-t-[3px] border-double border-[#1F1F1F]">
        <div className="flex flex-col md:flex-row justify-between items-center py-4 text-gray-700 gap-4">
          <div className="text-center md:text-left space-y-1">
            <span>© {new Date().getFullYear()} MITHRA N GOWDA • ALL RIGHTS RESERVED.</span>
            <span className="block text-[8px] text-gray-500 uppercase tracking-widest">Printed & Published in Bengaluru, Karnataka, India</span>
          </div>
          
          <div className="hidden lg:block text-center max-w-sm text-[8px] text-gray-500 italic leading-snug">
            * The Portfolio Gazette is an interactive digital chronicle compiled to showcase software engineering work. Fictional Volume CXXVI. No. 12.
          </div>

          <div className="flex items-center space-x-3 text-black font-bold uppercase tracking-wider">
            <a href={resumeData.personal_info.social_links.github} target="_blank" rel="noopener noreferrer" className="hover:underline">GITHUB INDEX</a>
            <span>|</span>
            <a href={resumeData.personal_info.social_links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">LINKEDIN</a>
            <span>|</span>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:underline flex items-center cursor-pointer font-bold">
              TOP <ChevronUp size={8} className="ml-1" />
            </button>
          </div>
        </div>
      </footer>

      {/* SYSTEM POPUP ALERT OVERLAY */}
      <AnimatePresence>
        {systemAlert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-[1px]">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#FFFDF8] border-2 border-[#1F1F1F] max-w-sm w-full font-serif-body text-xs rounded-none shadow-none"
            >
              <div className="bg-[#1F1F1F] text-[#FFFDF8] px-3 py-1.5 flex items-center justify-between font-mono text-[9px] uppercase tracking-wider select-none">
                <span>Gazette Notification</span>
                <button 
                  onClick={() => setSystemAlert(null)}
                  className="font-bold hover:text-red-400 cursor-pointer"
                >
                  [X]
                </button>
              </div>
              <div className="p-4 space-y-4">
                <p className="font-bold text-[#111111] leading-relaxed text-center">{systemAlert}</p>
                <div className="text-right">
                  <button 
                    onClick={() => setSystemAlert(null)}
                    className="font-mono text-[9px] uppercase font-bold px-3 py-1 bg-[#1F1F1F] text-white hover:bg-transparent hover:text-black border border-[#1F1F1F] cursor-pointer transition-all"
                  >
                    Dismiss Bulletin
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* PROJECT DETAILED POPUP MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-[1px]">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#FFFDF8] border-2 border-[#1F1F1F] max-w-2xl w-full max-h-[85vh] flex flex-col font-serif-body text-xs rounded-none shadow-none"
            >
              <div className="bg-[#1F1F1F] text-white px-3 py-2 flex items-center justify-between select-none font-mono text-[9px] uppercase tracking-wider">
                <span className="font-bold">Dossier: {selectedProject.title}</span>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="font-bold hover:text-red-400 cursor-pointer"
                >
                  [Close X]
                </button>
              </div>

              <div className="p-5 overflow-y-auto space-y-5 text-[#111111]">
                <div className="flex items-center justify-between border-b border-[#1F1F1F]/20 pb-1.5">
                  <span className="font-bold opacity-60 font-mono text-[8px] uppercase">PUBLICATION METRIC:</span>
                  <span className="font-mono text-[9px] border border-[#1F1F1F] bg-[#FFFDF8] px-2 py-0.5">{selectedProject.date}</span>
                </div>

                <div className="space-y-1.5">
                  <span className="font-serif-heading font-black text-[#111111] block border-b border-[#1F1F1F] pb-1 uppercase tracking-wider text-[11px]">PROJECT BRIEF</span>
                  <ul className="list-disc list-inside space-y-1 text-gray-800 leading-relaxed text-xs">
                    {selectedProject.description.map((desc: string, i: number) => (
                      <li key={i} className="align-top pl-2 -indent-2">{desc}</li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-1.5">
                  <span className="font-serif-heading font-black text-[#111111] block border-b border-[#1F1F1F] pb-1 uppercase tracking-wider text-[11px]">KEY SPECIFICATIONS</span>
                  <ul className="list-disc list-inside space-y-1 text-gray-800 leading-relaxed text-xs">
                    {selectedProject.features.map((feature: string, i: number) => (
                      <li key={i} className="align-top pl-2 -indent-2">{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-1.5">
                  <span className="font-serif-heading font-black text-[#111111] block border-b border-[#1F1F1F] pb-1 uppercase tracking-wider text-[11px]">TECHNOLOGY INDICES</span>
                  <div className="flex flex-wrap gap-1 pt-0.5 font-mono text-[8px]">
                    {selectedProject.tech_stack.map((tech: string, i: number) => (
                      <span key={i} className="px-1.5 py-0.5 border border-[#1F1F1F] bg-[#FFFDF8] uppercase">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {selectedProject.contributors && selectedProject.contributors.length > 0 && (
                  <div className="space-y-1.5">
                    <span className="font-serif-heading font-black text-[#111111] block border-b border-[#1F1F1F] pb-1 uppercase tracking-wider text-[11px]">ENGINEERING TEAM</span>
                    <div className="flex flex-wrap gap-2 pt-0.5 font-mono text-[8.5px]">
                      {selectedProject.contributors.map((contrib: Contributor, i: number) => (
                        <a
                          key={i}
                          href={contrib.profile}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2 py-1 border border-[#1F1F1F] bg-[#FFFDF8] hover:bg-black hover:text-white transition-all uppercase font-bold"
                        >
                          👤 {contrib.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="border-t border-[#1F1F1F] p-4 bg-[#FFFDF8] flex justify-between items-center select-none font-mono">
                <div className="flex space-x-2">
                  {selectedProject.github_link && (
                    <a href={selectedProject.github_link} target="_blank" rel="noopener noreferrer">
                      <button className="text-[9px] uppercase font-bold px-3 py-1.5 bg-[#1F1F1F] text-white hover:bg-transparent hover:text-black border border-[#1F1F1F] cursor-pointer transition-all">
                        View Repository ↗
                      </button>
                    </a>
                  )}
                  {selectedProject.demo_link && (
                    <a href={selectedProject.demo_link} target="_blank" rel="noopener noreferrer">
                      <button className="text-[9px] uppercase font-bold px-3 py-1.5 bg-[#1F1F1F] text-white hover:bg-transparent hover:text-black border border-[#1F1F1F] cursor-pointer transition-all">
                        Access Live Edition ↗
                      </button>
                    </a>
                  )}
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="text-[9px] uppercase font-bold px-3 py-1.5 border border-[#1F1F1F] text-black hover:bg-[#1F1F1F] hover:text-white cursor-pointer transition-all"
                >
                  Close Dossier
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* RESUME VIEWER POPUP MODAL */}
      <AnimatePresence>
        {isResumeOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-[1px]">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#FFFDF8] border-2 border-[#1F1F1F] max-w-4xl w-full h-[85vh] flex flex-col font-serif-body text-xs rounded-none shadow-none"
            >
              <div className="bg-[#1F1F1F] text-white px-3 py-2 flex items-center justify-between select-none font-mono text-[9px] uppercase tracking-wider">
                <span>Official Resume Register</span>
                <button 
                  onClick={() => setIsResumeOpen(false)}
                  className="font-bold hover:text-red-400 cursor-pointer"
                >
                  [Close X]
                </button>
              </div>

              <div className="flex-1 bg-white p-2">
                <iframe 
                  src="/Resume.pdf" 
                  className="w-full h-full border border-[#1F1F1F]" 
                  title="Resume PDF"
                />
              </div>

              <div className="border-t border-[#1F1F1F] p-4 bg-[#FFFDF8] flex justify-end select-none">
                <button 
                  onClick={() => setIsResumeOpen(false)}
                  className="font-mono text-[9px] uppercase font-bold px-4 py-1.5 bg-[#1F1F1F] text-white border border-[#1F1F1F] hover:bg-transparent hover:text-black cursor-pointer transition-all"
                >
                  Close Document
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
