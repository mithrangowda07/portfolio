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
  start_date: string
  end_date: string
  responsibilities: string[]
}

interface Leadership {
  organization: string
  role: string
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
    <div className="border border-[#1F1F1F] bg-[#FFFDF8] p-5 flex flex-col rounded-[2px] space-y-4">
      {/* Editorial masthead */}
      <div className="border-b border-[#1F1F1F] pb-2 text-center select-none">
        <h3 className="font-serif-heading font-extrabold text-sm sm:text-base tracking-wide uppercase">
          LeetCode Competitive Report
        </h3>
        <p className="font-serif-heading italic text-xs text-[#555555]">
          Competitive Programming Statistics
        </p>
        <div className="flex justify-between items-center text-[9px] font-mono text-gray-500 mt-2 border-t border-[#1F1F1F]/20 pt-1">
          <span>ISSUE 06-A</span>
          <span>CONTRIBUTOR: SILENTNEEDLE</span>
        </div>
      </div>

      {/* Stats list */}
      <div className="flex-grow">
        {contestLoading ? (
          <div className="text-center py-6 font-mono text-xs">LOADING STATISTICS DIRECTORY...</div>
        ) : contestError ? (
          <div className="text-center py-6 font-mono text-xs text-red-500">API DELAY: DISPLAYING ARCHIVE RATINGS</div>
        ) : (
          <div className="grid grid-cols-2 gap-4 text-center font-serif-body">
            <div className="border border-[#1F1F1F] p-3 bg-[#FFFDF8] rounded-[2px]">
              <span className="font-mono text-[9px] text-gray-500 uppercase block">RATING INDEX</span>
              <span className="font-serif-heading font-bold text-2xl text-black">
                {contestData?.contestRating ? Math.round(contestData.contestRating) : '1600+'}
              </span>
            </div>
            <div className="border border-[#1F1F1F] p-3 bg-[#FFFDF8] rounded-[2px]">
              <span className="font-mono text-[9px] text-gray-500 uppercase block">GLOBAL RANK</span>
              <span className="font-serif-heading font-bold text-xl text-black leading-normal">
                {contestData?.contestGlobalRanking ? contestData.contestGlobalRanking.toLocaleString() : 'Top 9%'}
              </span>
            </div>
            <div className="border border-[#1F1F1F] p-3 bg-[#FFFDF8] rounded-[2px]">
              <span className="font-mono text-[9px] text-gray-500 uppercase block">PERCENTILE</span>
              <span className="font-serif-heading font-bold text-xl text-black">
                {contestData?.contestTopPercentage ? `${contestData.contestTopPercentage}%` : '8.6%'}
              </span>
            </div>
            <div className="border border-[#1F1F1F] p-3 bg-[#FFFDF8] rounded-[2px]">
              <span className="font-mono text-[9px] text-gray-500 uppercase block">CONTESTS INDEX</span>
              <span className="font-serif-heading font-bold text-xl text-black">
                {contestData?.contestAttend ?? '10+'}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Solved Heatmap */}
      <div className="space-y-2 pt-2 border-t border-[#1F1F1F]/20">
        <div className="border border-[#1F1F1F] p-1 bg-[#FFFDF8]">
          <img
            src="https://leetcard.jacoblin.cool/SilentNeedle?ext=heatmap"
            alt="LeetCode Heatmap Log"
            className="w-full filter grayscale"
          />
        </div>
        <p className="text-[9px] text-center font-serif-body italic text-gray-500">
          Figure 03: LeetCode Solved Heatmap Activity Graph.
        </p>
      </div>

      {/* Footer */}
      <div className="border-t border-[#1F1F1F]/20 pt-2 font-mono text-[9px] text-gray-500 text-center italic">
        * Statistics sourced from Alfa LeetCode API.
      </div>
    </div>
  )
}

function NewspaperGitHubArticle() {
  return (
    <div className="border border-[#1F1F1F] bg-[#FFFDF8] p-5 flex flex-col rounded-[2px] space-y-4">
      {/* Editorial masthead */}
      <div className="border-b border-[#1F1F1F] pb-2 text-center select-none">
        <h3 className="font-serif-heading font-extrabold text-sm sm:text-base tracking-wide uppercase">
          GitHub Development Report
        </h3>
        <p className="font-serif-heading italic text-xs text-[#555555]">
          Open Source Engineering
        </p>
        <div className="flex justify-between items-center text-[9px] font-mono text-gray-500 mt-2 border-t border-[#1F1F1F]/20 pt-1">
          <span>ISSUE 06-B</span>
          <span>CONTRIBUTOR: MITHRANGOWDA07</span>
        </div>
      </div>

      {/* Commit Streak Statistics Container */}
      <div className="space-y-2">
        <h4 className="font-serif-heading font-bold text-xs uppercase tracking-wide border-b border-[#1F1F1F]/20 pb-1">
          Commit Streak Statistics
        </h4>
        <div className="border border-[#1F1F1F] p-1 bg-[#FFFDF8]">
          <img
            src="https://streak-stats.demolab.com?user=mithrangowda07&theme=github-light&hide_border=true"
            alt="GitHub Commits Streak Stats"
            className="w-full filter grayscale"
          />
        </div>
        <p className="text-[9px] text-center font-serif-body italic text-gray-500">
          Figure 04: Commit Streak Statistics Index.
        </p>
      </div>

      {/* Contribution Activity Graph */}
      <div className="space-y-2 pt-2 border-t border-[#1F1F1F]/20">
        <h4 className="font-serif-heading font-bold text-xs uppercase tracking-wide border-b border-[#1F1F1F]/20 pb-1">
          Contribution Activity Graph
        </h4>
        <div className="border border-[#1F1F1F] p-1 bg-[#FFFDF8]">
          <img
            src="https://github-readme-activity-graph.vercel.app/graph?username=mithrangowda07&theme=github-light&hide_border=true&area=true"
            alt="GitHub Activity Log"
            className="w-full filter grayscale"
          />
        </div>
        <p className="text-[9px] text-center font-serif-body italic text-gray-500">
          Figure 05: GitHub Contribution Activity.
        </p>
      </div>

      {/* Footer */}
      <div className="border-t border-[#1F1F1F]/20 pt-2 font-mono text-[9px] text-gray-500 text-center italic">
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
          placeholder="John Doe"
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
          placeholder="john@example.com"
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

  const experiences = [
    ...resumeData.experience.map((exp: Experience) => ({
      company: exp.company,
      role: exp.role,
      duration: `${exp.start_date} - ${exp.end_date}`,
      title: `${exp.company} Internship`,
      responsibilities: exp.responsibilities
    })),
    ...resumeData.leadership_extracurricular.map((lead: Leadership) => ({
      company: lead.organization,
      role: lead.role === 'Volunteer' ? 'Volunteer Officer' : lead.role,
      duration: `${lead.start_date} - ${lead.end_date}`,
      title: lead.organization === 'National Service Scheme (NSS)' ? 'NSS Volunteer' : `${lead.organization} Volunteer`,
      responsibilities: lead.activities
    }))
  ]

  return (
    <div className="min-h-screen bg-[#F7F3EB] text-[#111111] pb-16 relative selection:bg-black selection:text-white">
      {/* Subtle shape grid circle drifts */}
      <ShapeGrid 
        speed={0.05} 
        squareSize={45}
        direction="diagonal"
        borderColor="rgba(31, 31, 31, 0.04)"
        hoverFillColor="rgba(31, 31, 31, 0.02)"
        shape="circle"
        hoverTrailAmount={0}
        theme="newspaper"
      />
      
      <Script
        id="mithra-ngowda-person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personStructuredData) }}
      />

      {/* NEWSPAPER EDITORIAL MASTHEAD */}
      <header className="max-w-6xl mx-auto px-6 pt-8 select-none">
        {/* Top bar details */}
        <div className="flex justify-between text-[9px] font-mono border-b border-[#1F1F1F]/40 pb-1">
          <span>VOL. CXXVI... No. 42,900</span>
          <span>BENGALURU, INDIA</span>
          <span>PRICE: FREE • INTERACTIVE EDITION</span>
        </div>

        {/* Masthead Headline Title */}
        <div className="py-6 text-center border-b-[3px] border-double border-[#1F1F1F]">
          <h1 className="font-serif-heading font-extrabold text-5xl sm:text-7xl tracking-tighter text-[#111111] leading-none uppercase">
            The Portfolio Gazette
          </h1>
        </div>

        {/* Issue Metadata */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-[10px] font-mono py-1.5 border-b border-[#1F1F1F]/40">
          <div>
            <span>{getDayName().toUpperCase()}, {getFormattedDate().toUpperCase()}</span>
          </div>
          <div className="hidden sm:block">
            <span>EDITION: PRINT ARCHIVE</span>
          </div>
          <div>
            <button onClick={toggleTheme} className="hover:underline font-bold uppercase cursor-pointer">
              Switch to Retro Desktop 💾
            </button>
          </div>
        </div>

        {/* Top Masthead Navigation menu */}
        <nav className="py-2.5 border-b border-[#1F1F1F] flex items-center justify-between font-mono text-[10px] tracking-wider font-bold">
          <div className="hidden md:flex justify-center space-x-6 w-full uppercase">
            <button onClick={() => scrollTo('about')} className={`hover:underline cursor-pointer ${activeSection === 'about' ? 'underline decoration-1 underline-offset-4' : 'text-[#555555]'}`}>About Index</button>
            <button onClick={() => scrollTo('skills')} className={`hover:underline cursor-pointer ${activeSection === 'skills' ? 'underline decoration-1 underline-offset-4' : 'text-[#555555]'}`}>Technical Index</button>
            <button onClick={() => scrollTo('projects')} className={`hover:underline cursor-pointer ${activeSection === 'projects' ? 'underline decoration-1 underline-offset-4' : 'text-[#555555]'}`}>Featured Stories</button>
            <button onClick={() => scrollTo('experience')} className={`hover:underline cursor-pointer ${activeSection === 'experience' ? 'underline decoration-1 underline-offset-4' : 'text-[#555555]'}`}>Chronicle</button>
            <button onClick={() => scrollTo('certificates')} className={`hover:underline cursor-pointer ${activeSection === 'certificates' ? 'underline decoration-1 underline-offset-4' : 'text-[#555555]'}`}>Archives</button>
            <button onClick={() => scrollTo('metrics')} className={`hover:underline cursor-pointer ${activeSection === 'metrics' ? 'underline decoration-1 underline-offset-4' : 'text-[#555555]'}`}>Metrics</button>
            <button onClick={() => scrollTo('contact')} className={`hover:underline cursor-pointer ${activeSection === 'contact' ? 'underline decoration-1 underline-offset-4' : 'text-[#555555]'}`}>Classifieds</button>
            <button onClick={() => setIsResumeOpen(true)} className="hover:underline text-black cursor-pointer">📄 View Resume</button>
          </div>

          {/* Mobile menu trigger */}
          <div className="md:hidden flex justify-between w-full items-center">
            <span className="font-serif-heading italic text-xs">Menu Directory</span>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="border border-[#1F1F1F] p-1.5 hover:bg-[#EFEFEF] cursor-pointer"
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
              className="border border-[#1F1F1F] bg-[#FFFDF8] w-full p-4 flex flex-col space-y-2 font-mono text-xs md:hidden rounded-[2px] mt-2 shadow-sm"
            >
              <button onClick={() => scrollTo('about')} className="text-left py-1 hover:underline uppercase">About Index</button>
              <button onClick={() => scrollTo('skills')} className="text-left py-1 hover:underline uppercase">Technical Index</button>
              <button onClick={() => scrollTo('projects')} className="text-left py-1 hover:underline uppercase">Featured Stories</button>
              <button onClick={() => scrollTo('experience')} className="text-left py-1 hover:underline uppercase">Chronicle</button>
              <button onClick={() => scrollTo('certificates')} className="text-left py-1 hover:underline uppercase">Archives</button>
              <button onClick={() => scrollTo('metrics')} className="text-left py-1 hover:underline uppercase">Metrics</button>
              <button onClick={() => scrollTo('contact')} className="text-left py-1 hover:underline uppercase">Classifieds</button>
              <button 
                onClick={() => {
                  toggleTheme()
                  setIsMenuOpen(false)
                }} 
                className="text-left py-1 hover:underline uppercase"
              >
                Switch to Retro 💾
              </button>
              <button
                onClick={() => {
                  setIsResumeOpen(true)
                  setIsMenuOpen(false)
                }}
                className="w-full text-center border border-[#1F1F1F] py-2 hover:bg-[#EFEFEF]"
              >
                📄 View Resume
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* EDITORIAL CONTENT BODY */}
      <main className="max-w-6xl mx-auto px-6 pt-10 space-y-16">
        
        {/* HERO - FRONT PAGE STORY */}
        <section id="home" className="scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Headline Column */}
            <div className="lg:col-span-8 space-y-6">
              <div className="space-y-2">
                <span className="font-mono text-[9px] font-bold text-gray-500 uppercase tracking-widest block">LEADING ARTICLE</span>
                <h1 className="text-4xl sm:text-6xl font-serif-heading font-extrabold tracking-tight leading-none text-[#111111]">
                  Mithra N Gowda
                </h1>
                <p className="text-lg sm:text-xl font-serif-heading italic text-[#555555] pt-1">
                  Building Intelligent Software for Modern Systems
                </p>
              </div>

              <hr className="border-t border-[#1F1F1F]/20" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-serif-body text-sm text-[#111111] leading-relaxed">
                <div>
                  <p className="first-letter:text-4xl first-letter:font-bold first-letter:font-serif-heading first-letter:float-left first-letter:mr-2 first-letter:line-height-1">
                    An Information Science undergraduate from RV College of Engineering, Mithra N Gowda engineers web systems, API architectures, and competitive software modules. Combining robust backend frameworks with machine learning forecasting systems, his work balances clean modular syntax with high execution performance.
                  </p>
                </div>
                <div className="space-y-4">
                  <p>
                    Specializing in Next.js, Django, databases, and anomaly detection pipelines, his projects bridge theoretical algorithms and scalable production platforms. He is currently open to full-stack software development roles, automation consultancies, and research-driven software internships.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <NewspaperButton onClick={() => scrollTo('projects')} variant="filled">
                      Read Projects
                    </NewspaperButton>
                    <NewspaperButton onClick={() => setIsResumeOpen(true)}>
                      Request Resume
                    </NewspaperButton>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Hero Image Column */}
            <div className="lg:col-span-4 flex flex-col items-center">
              <div className="border border-[#1F1F1F] p-1.5 bg-[#FFFDF8] w-full">
                <div className="bg-[#EFEFEF] flex justify-center items-center overflow-hidden aspect-square border border-[#1F1F1F]">
                  <Image 
                    src="/profile-photo.jpg" 
                    alt="Portrait of Mithra N Gowda" 
                    width={380}
                    height={380}
                    priority
                    className="w-full h-full object-cover filter grayscale contrast-125 brightness-95"
                  />
                </div>
                <p className="text-[10px] text-center font-serif-body italic mt-1.5 text-gray-600">
                  Figure 01: Mithra N Gowda, Software Engineer.
                </p>
              </div>
            </div>

          </div>
        </section>

        <hr className="border-t-[3px] border-double border-[#1F1F1F]/40" />

        {/* ABOUT SECTION (MULTI COLUMN ARTICLES) */}
        <section id="about" className="scroll-mt-24 space-y-6">
          <div className="border-b border-[#1F1F1F] pb-2">
            <h2 className="font-serif-heading font-extrabold text-2xl uppercase tracking-wide">
              01. The Profile Chronicles
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Column 1: Bio */}
            <div className="lg:col-span-4 space-y-4 font-serif-body text-xs leading-relaxed">
              <h3 className="font-serif-heading font-bold text-sm text-[#111111] uppercase tracking-wide border-b border-[#1F1F1F]/20 pb-1">
                Biographical Summary
              </h3>
              <p className="text-gray-700">
                {resumeData.personal_info.bio}
              </p>
              <div className="border border-[#1F1F1F] p-4 bg-[#FFFDF8] border-dashed font-mono text-[10px] leading-relaxed">
                <span className="font-bold block mb-1">SYSTEM SPEC:</span>
                • Undergrad: ISE (RVCE)<br />
                • Experience: Schneider Electric Intern<br />
                • Focus: Django REST, React, FastAPI
              </div>
            </div>

            {/* Column 2: Education */}
            <div className="lg:col-span-5 space-y-4 font-serif-body">
              <h3 className="font-serif-heading font-bold text-sm text-[#111111] uppercase tracking-wide border-b border-[#1F1F1F]/20 pb-1">
                Educational Background
              </h3>
              <div className="space-y-4">
                {resumeData.education.map((edu: Education, idx: number) => (
                  <div key={idx} className="space-y-1 relative pl-3 border-l border-[#1F1F1F]">
                    <div className="text-[9px] font-mono text-gray-500 uppercase">
                      {edu.start_date.toUpperCase()} - {edu.end_date.toUpperCase()}
                    </div>
                    <h4 className="font-serif-heading font-bold text-xs">{edu.institution.toUpperCase()}</h4>
                    <p className="text-[11px] font-bold text-gray-700 italic">{edu.degree}</p>
                    <p className="text-[10px] text-gray-500 font-mono">{edu.location}</p>
                    {edu.cgpa && (
                      <span className="text-[10px] font-mono font-bold mt-1 inline-block bg-[#FFFDF8] border border-[#1F1F1F] px-1.5">
                        CGPA: {edu.cgpa}
                      </span>
                    )}
                    {edu.percentage && (
                      <span className="text-[10px] font-mono font-bold mt-1 inline-block bg-[#FFFDF8] border border-[#1F1F1F] px-1.5">
                        Percentage: {edu.percentage}%
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Column 3: Facts & Coursework */}
            <div className="lg:col-span-3 space-y-6 font-serif-body">
              {/* Coursework */}
              <div className="space-y-3">
                <h3 className="font-serif-heading font-bold text-xs text-[#111111] uppercase tracking-wide border-b border-[#1F1F1F]/20 pb-1">
                  Academic Focus
                </h3>
                <div className="flex flex-wrap gap-1 font-mono text-[9px]">
                  {resumeData.relevant_coursework.slice(0, 8).map((course: string, index: number) => (
                    <span key={index} className="px-2 py-0.5 border border-[#1F1F1F] bg-[#FFFDF8] uppercase">
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quick Facts */}
              <div className="space-y-3">
                <h3 className="font-serif-heading font-bold text-xs text-[#111111] uppercase tracking-wide border-b border-[#1F1F1F]/20 pb-1">
                  Indices & Logs
                </h3>
                <div className="space-y-2 font-mono text-[10px] text-gray-700">
                  <div className="flex justify-between border-b border-dashed border-[#1F1F1F]/20 pb-1">
                    <span>LANGUAGES</span>
                    <span>ENG • KAN • HIN</span>
                  </div>
                  <div className="flex justify-between border-b border-dashed border-[#1F1F1F]/20 pb-1">
                    <span>API ARCT.</span>
                    <span>RESTFUL • GRPC</span>
                  </div>
                  <div className="flex justify-between border-b border-dashed border-[#1F1F1F]/20 pb-1">
                    <span>LOG ANALYSIS</span>
                    <span>EVENT SOURCING</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        <hr className="border-t-[3px] border-double border-[#1F1F1F]/40" />

        {/* SKILLS SECTION (COLUMNS W/ UNDERLINES, NO BUTTONS) */}
        <section id="skills" className="scroll-mt-24 space-y-6">
          <div className="border-b border-[#1F1F1F] pb-2">
            <h2 className="font-serif-heading font-extrabold text-2xl uppercase tracking-wide">
              02. Technical Index
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Column 1: Programming Languages */}
            <div className="space-y-4">
              <h3 className="font-serif-heading font-bold text-sm text-[#111111] border-b border-[#1F1F1F] pb-1 uppercase tracking-wider">
                Programming Languages
              </h3>
              <ul className="divide-y divide-[#1F1F1F]/20 font-serif-body text-xs">
                {resumeData.skills.programming_languages.map((skill: Skill) => (
                  <li 
                    key={skill.name} 
                    onClick={() => setSystemAlert(`Skill: ${skill.name} (Proficiency: ${skill.level}%)`)}
                    className="py-2.5 flex justify-between items-center hover:bg-[#FFFDF8] px-1 cursor-pointer transition-colors"
                  >
                    <span className="font-bold">{skill.name}</span>
                    <span className="text-[10px] font-mono text-gray-500">{skill.level}% Proficient</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Frameworks */}
            <div className="space-y-4">
              <h3 className="font-serif-heading font-bold text-sm text-[#111111] border-b border-[#1F1F1F] pb-1 uppercase tracking-wider">
                Frameworks & Libs
              </h3>
              <ul className="divide-y divide-[#1F1F1F]/20 font-serif-body text-xs">
                {resumeData.skills.frameworks_libraries.map((skill: Skill) => (
                  <li 
                    key={skill.name} 
                    onClick={() => setSystemAlert(`Skill: ${skill.name} (Proficiency: ${skill.level}%)`)}
                    className="py-2.5 flex justify-between items-center hover:bg-[#FFFDF8] px-1 cursor-pointer transition-colors"
                  >
                    <span className="font-bold">{skill.name}</span>
                    <span className="text-[10px] font-mono text-gray-500">{skill.level}% Proficient</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Tools */}
            <div className="space-y-4">
              <h3 className="font-serif-heading font-bold text-sm text-[#111111] border-b border-[#1F1F1F] pb-1 uppercase tracking-wider">
                Tools & Databases
              </h3>
              <ul className="divide-y divide-[#1F1F1F]/20 font-serif-body text-xs">
                {resumeData.skills.tools_technologies.map((skill: Skill) => (
                  <li 
                    key={skill.name} 
                    onClick={() => setSystemAlert(`Skill: ${skill.name} (Proficiency: ${skill.level}%)`)}
                    className="py-2.5 flex justify-between items-center hover:bg-[#FFFDF8] px-1 cursor-pointer transition-colors"
                  >
                    <span className="font-bold">{skill.name}</span>
                    <span className="text-[10px] font-mono text-gray-500">{skill.level}% Proficient</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </section>

        <hr className="border-t-[3px] border-double border-[#1F1F1F]/40" />

        {/* PROJECTS SECTION (FEATURED STORIES W/ ALTERNATE LAYOUTS) */}
        <section id="projects" className="scroll-mt-24 space-y-6">
          <div className="border-b border-[#1F1F1F] pb-2">
            <h2 className="font-serif-heading font-extrabold text-2xl uppercase tracking-wide">
              03. Featured Stories
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {resumeData.projects.map((project: Project, index: number) => {
              const isLarge = index === 0 // KCET Advisor
              const isLandscape = index === 1 // Topic based micro sub
              
              if (isLarge) {
                return (
                  <div key={index} className="lg:col-span-8 border border-[#1F1F1F] bg-[#FFFDF8] p-6 flex flex-col rounded-[2px] space-y-4">
                    <div className="border-b border-[#1F1F1F]/40 pb-2 flex justify-between items-center">
                      <span className="font-mono text-[9px] font-bold text-gray-500 uppercase">LEAD STORY • FEATURED ARTICLE</span>
                      <span className="font-mono text-[9px] text-gray-500 uppercase">{project.date.toUpperCase()}</span>
                    </div>

                    <h3 className="font-serif-heading font-extrabold text-2xl text-[#111111] hover:underline cursor-pointer" onClick={() => setSelectedProject(project)}>
                      {project.title}
                    </h3>

                    <p className="font-serif-body text-sm text-gray-800 leading-relaxed">
                      {project.description[0]}
                    </p>

                    <div className="flex flex-wrap gap-1 py-1 font-mono text-[9px]">
                      {project.tech_stack.map((tech: string, i: number) => (
                        <span key={i} className="px-2 py-0.5 border border-[#1F1F1F] bg-[#FFFDF8] uppercase">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center space-x-3 pt-4 border-t border-[#1F1F1F]/20">
                      <NewspaperButton onClick={() => setSelectedProject(project)} variant="filled">
                        Read Story
                      </NewspaperButton>
                      {project.github_link && (
                        <a href={project.github_link} target="_blank" rel="noopener noreferrer">
                          <NewspaperButton>GitHub</NewspaperButton>
                        </a>
                      )}
                      {project.demo_link && (
                        <a href={project.demo_link} target="_blank" rel="noopener noreferrer">
                          <NewspaperButton>Live Demo</NewspaperButton>
                        </a>
                      )}
                    </div>
                  </div>
                )
              }

              return (
                <div key={index} className={`${isLandscape ? 'lg:col-span-4' : 'lg:col-span-4'} border border-[#1F1F1F] bg-[#FFFDF8] p-5 flex flex-col rounded-[2px] space-y-4`}>
                  <div className="border-b border-[#1F1F1F]/40 pb-2 flex justify-between items-center">
                    <span className="font-mono text-[9px] font-bold text-gray-500 uppercase">ARTICLE STORY</span>
                    <span className="font-mono text-[9px] text-gray-500 uppercase">{project.date.toUpperCase()}</span>
                  </div>

                  <h3 className="font-serif-heading font-bold text-lg text-[#111111] hover:underline cursor-pointer leading-tight" onClick={() => setSelectedProject(project)}>
                    {project.title}
                  </h3>

                  <p className="font-serif-body text-xs text-gray-700 leading-relaxed flex-grow">
                    {project.description[0].substring(0, 160)}...
                  </p>

                  <div className="flex flex-wrap gap-1 py-1 font-mono text-[8px]">
                    {project.tech_stack.slice(0, 4).map((tech: string, i: number) => (
                      <span key={i} className="px-1.5 py-0.5 border border-[#1F1F1F] bg-[#FFFDF8] uppercase">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center space-x-2 pt-3 border-t border-[#1F1F1F]/20">
                    <NewspaperButton onClick={() => setSelectedProject(project)} variant="filled" className="px-2 py-1 text-[10px]">
                      Read Story
                    </NewspaperButton>
                    {project.github_link && (
                      <a href={project.github_link} target="_blank" rel="noopener noreferrer">
                        <NewspaperButton className="px-2 py-1 text-[10px]">Git</NewspaperButton>
                      </a>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        <hr className="border-t-[3px] border-double border-[#1F1F1F]/40" />

        {/* EXPERIENCE (VERTICAL TIMELINE "CAREER CHRONICLE") */}
        <section id="experience" className="scroll-mt-24 space-y-6">
          <div className="border-b border-[#1F1F1F] pb-2">
            <h2 className="font-serif-heading font-extrabold text-2xl uppercase tracking-wide">
              04. Career Chronicle
            </h2>
          </div>

          <div className="space-y-8 font-serif-body">
            {experiences.map((exp: { company: string; role: string; duration: string; responsibilities: string[] }, index: number) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start relative pb-6 border-b border-[#1F1F1F]/10 last:border-0 last:pb-0">
                {/* Year left column */}
                <div className="md:col-span-3">
                  <span className="font-serif-heading font-bold text-lg text-[#111111]">
                    {exp.duration}
                  </span>
                </div>

                {/* Company & Details right column */}
                <div className="md:col-span-9 space-y-2">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-serif-heading font-extrabold text-base text-[#111111]">
                      {exp.company}
                    </h3>
                    <span className="font-mono text-[9px] uppercase tracking-wide text-gray-500">
                      {exp.role}
                    </span>
                  </div>
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
        </section>

        <hr className="border-t-[3px] border-double border-[#1F1F1F]/40" />

        {/* CERTIFICATES (ARCHIVE COLLECTION) */}
        <section id="certificates" className="scroll-mt-24 space-y-6">
          <div className="border-b border-[#1F1F1F] pb-2">
            <h2 className="font-serif-heading font-extrabold text-2xl uppercase tracking-wide">
              05. Certification Archives
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resumeData.certificates.map((cert: Certificate, index: number) => (
              <div key={index} className="border border-[#1F1F1F] bg-[#FFFDF8] p-5 flex flex-col rounded-[2px] space-y-4">
                <div className="flex justify-between items-start border-b border-[#1F1F1F]/20 pb-2">
                  <div>
                    <span className="font-mono text-[9px] font-bold text-gray-500 uppercase block">ARCHIVE INDEX #{index + 1}</span>
                    <h3 className="font-serif-heading font-bold text-sm text-[#111111] uppercase tracking-tight mt-1">{cert.name}</h3>
                  </div>
                  <span className="text-[10px] text-gray-500 font-mono whitespace-nowrap">{cert.date.toUpperCase()}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                  <div className="sm:col-span-4 border border-[#1F1F1F] p-1 bg-[#FFFDF8]">
                    <img
                      src={cert.image}
                      alt={`Certificate Verification`}
                      className="w-full h-auto filter grayscale"
                    />
                  </div>
                  <div className="sm:col-span-8 space-y-3 text-xs font-serif-body">
                    <p className="text-gray-700">
                      Institution: <span className="font-bold text-[#111111]">{cert.organization}</span>
                    </p>
                    <div className="flex gap-2">
                      <a
                        href={cert.image}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-[9px] uppercase px-3 py-1 bg-[#1F1F1F] text-[#FFFDF8] hover:bg-[#FFFDF8] hover:text-[#111111] transition-colors border border-[#1F1F1F]"
                      >
                        Verify Issue Copy
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
        <section id="metrics" className="scroll-mt-24 space-y-6">
          <div className="border-b border-[#1F1F1F] pb-2">
            <h2 className="font-serif-heading font-extrabold text-2xl uppercase tracking-wide">
              06. Coding Journal
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
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
        <section id="contact" className="scroll-mt-24 space-y-6">
          <div className="border-b border-[#1F1F1F] pb-2">
            <h2 className="font-serif-heading font-extrabold text-2xl uppercase tracking-wide">
              07. The Classifieds Directory
            </h2>
          </div>

          <div className="border-[3px] border-double border-[#1F1F1F] p-6 bg-[#FFFDF8] max-w-3xl mx-auto rounded-[2px]">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              
              {/* Classified Details */}
              <div className="md:col-span-5 space-y-4 font-serif-body">
                <div className="border-b border-[#1F1F1F] pb-2 text-center uppercase tracking-wide">
                  <h3 className="font-serif-heading font-extrabold text-sm text-[#111111]">
                    HELP WANTED / OFFERS
                  </h3>
                </div>
                <p className="text-xs text-gray-700 leading-relaxed text-center italic">
                  &ldquo;Software engineer available for design, automation, full-stack prototyping, and REST APIs.&rdquo;
                </p>
                <div className="border-t border-[#1F1F1F]/20 pt-3 text-[10px] space-y-1.5 font-mono text-gray-600 text-center">
                  <div className="font-bold text-black uppercase">CONTACT CHANNELS:</div>
                  <div>HOST: mithrangowda01@gmail.com</div>
                  <div>PORT: BENGALURU, INDIA</div>
                </div>
                <div className="flex justify-center space-x-4 pt-2">
                  <a href={resumeData.personal_info.social_links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline font-mono text-[9px] font-bold uppercase">LinkedIn</a>
                  <a href={resumeData.personal_info.social_links.github} target="_blank" rel="noopener noreferrer" className="hover:underline font-mono text-[9px] font-bold uppercase">GitHub</a>
                </div>
              </div>

              {/* Classified Form */}
              <div className="md:col-span-7 pt-6 md:pt-0 border-t md:border-t-0 md:border-l border-[#1F1F1F]/20 md:pl-8">
                <div className="flex items-center space-x-2 pb-2 mb-2 border-b border-[#1F1F1F]/20">
                  <Inbox size={14} />
                  <span className="font-serif-heading font-bold text-xs uppercase tracking-wide">Compose Advertisement:</span>
                </div>
                <ClassifiedContactForm />
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* NEWSPAPER STATIC FOOTER */}
      <footer className="max-w-6xl mx-auto px-6 pt-12 mt-16 select-none font-mono text-[9px] border-t border-[#1F1F1F]">
        <div className="flex flex-col sm:flex-row justify-between items-center py-4 text-gray-600 gap-2">
          <span>© {new Date().getFullYear()} MITHRA N GOWDA • ALL RIGHTS RESERVED.</span>
          <div className="flex space-x-3">
            <a href={resumeData.personal_info.social_links.github} target="_blank" rel="noopener noreferrer" className="hover:underline">GITHUB</a>
            <span>|</span>
            <a href={resumeData.personal_info.social_links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">LINKEDIN</a>
            <span>|</span>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:underline flex items-center cursor-pointer">
              BACK TO TOP <ChevronUp size={8} className="ml-1" />
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
              className="bg-[#FFFDF8] border border-[#1F1F1F] shadow-sm max-w-sm w-full font-serif-body text-xs rounded-[2px]"
            >
              <div className="bg-[#1F1F1F] text-[#FFFDF8] px-3 py-1.5 flex items-center justify-between font-mono text-[10px]">
                <span>GAZETTE NOTIFICATION</span>
                <button 
                  onClick={() => setSystemAlert(null)}
                  className="font-bold hover:text-red-400 cursor-pointer"
                >
                  [X]
                </button>
              </div>
              <div className="p-4 space-y-4">
                <p className="font-bold text-[#111111] leading-relaxed">{systemAlert}</p>
                <div className="text-right">
                  <NewspaperButton 
                    onClick={() => setSystemAlert(null)}
                    className="px-4 py-1 text-xs"
                    variant="filled"
                  >
                    Dismiss
                  </NewspaperButton>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* PROJECT DETAILED POPUP MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-[1px]">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#FFFDF8] border border-[#1F1F1F] shadow-md max-w-2xl w-full max-h-[85vh] flex flex-col font-serif-body text-xs rounded-[2px]"
            >
              <div className="bg-[#1F1F1F] text-white px-3 py-2 flex items-center justify-between select-none font-mono text-[10px] uppercase">
                <span className="font-bold">{selectedProject.title}</span>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="font-bold hover:text-red-400 cursor-pointer"
                >
                  [X]
                </button>
              </div>

              <div className="p-6 overflow-y-auto space-y-6 text-[#111111]">
                <div className="flex items-center justify-between border-b border-[#1F1F1F]/20 pb-2">
                  <span className="font-bold opacity-60 font-mono text-[9px] uppercase">Publication Date:</span>
                  <span className="font-mono text-[9px] border border-[#1F1F1F] bg-[#FFFDF8] px-2 py-0.5">{selectedProject.date}</span>
                </div>

                <div className="space-y-2">
                  <span className="font-serif-heading font-extrabold text-[#111111] block border-b border-[#1F1F1F] pb-1 uppercase tracking-wide">DESCRIPTION</span>
                  <ul className="list-disc list-inside space-y-1.5 text-gray-700 leading-relaxed text-xs">
                    {selectedProject.description.map((desc: string, i: number) => (
                      <li key={i} className="align-top pl-2 -indent-2">{desc}</li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <span className="font-serif-heading font-extrabold text-[#111111] block border-b border-[#1F1F1F] pb-1 uppercase tracking-wide">KEY FEATURES</span>
                  <ul className="list-disc list-inside space-y-1.5 text-gray-700 leading-relaxed text-xs">
                    {selectedProject.features.map((feature: string, i: number) => (
                      <li key={i} className="align-top pl-2 -indent-2">{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <span className="font-serif-heading font-extrabold text-[#111111] block border-b border-[#1F1F1F] pb-1 uppercase tracking-wide">TECH STACK</span>
                  <div className="flex flex-wrap gap-1.5 pt-1 font-mono text-[9px]">
                    {selectedProject.tech_stack.map((tech: string, i: number) => (
                      <span key={i} className="px-2 py-0.5 border border-[#1F1F1F] bg-[#FFFDF8] uppercase">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {selectedProject.contributors && selectedProject.contributors.length > 0 && (
                  <div className="space-y-2">
                    <span className="font-serif-heading font-extrabold text-[#111111] block border-b border-[#1F1F1F] pb-1 uppercase tracking-wide">REPORTERS & TEAM</span>
                    <div className="flex flex-wrap gap-2 pt-1 font-mono text-[9px]">
                      {selectedProject.contributors.map((contrib: Contributor, i: number) => (
                        <a
                          key={i}
                          href={contrib.profile}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2 py-1 border border-[#1F1F1F] bg-[#FFFDF8] hover:bg-[#EFEFEF] transition-all uppercase"
                        >
                          👤 {contrib.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="border-t border-[#1F1F1F] p-4 bg-[#FFFDF8] flex justify-between items-center">
                <div className="flex space-x-2">
                  {selectedProject.github_link && (
                    <a href={selectedProject.github_link} target="_blank" rel="noopener noreferrer">
                      <NewspaperButton variant="filled">Source Code</NewspaperButton>
                    </a>
                  )}
                  {selectedProject.demo_link && (
                    <a href={selectedProject.demo_link} target="_blank" rel="noopener noreferrer">
                      <NewspaperButton variant="filled">Live Demo</NewspaperButton>
                    </a>
                  )}
                </div>
                <NewspaperButton onClick={() => setSelectedProject(null)}>
                  Close
                </NewspaperButton>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* RESUME VIEWER POPUP MODAL */}
      <AnimatePresence>
        {isResumeOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-[1px]">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#FFFDF8] border border-[#1F1F1F] shadow-md max-w-4xl w-full h-[85vh] flex flex-col font-serif-body text-xs rounded-[2px]"
            >
              <div className="bg-[#1F1F1F] text-white px-3 py-2 flex items-center justify-between select-none font-mono text-[10px] uppercase">
                <span>Resume Viewer</span>
                <button 
                  onClick={() => setIsResumeOpen(false)}
                  className="font-bold hover:text-red-400 cursor-pointer"
                >
                  [X]
                </button>
              </div>

              <div className="flex-1 bg-white p-2">
                <iframe 
                  src="/Resume.pdf" 
                  className="w-full h-full border border-[#1F1F1F]" 
                  title="Resume PDF"
                />
              </div>

              <div className="border-t border-[#1F1F1F] p-4 bg-[#FFFDF8] flex justify-end">
                <NewspaperButton onClick={() => setIsResumeOpen(false)} variant="filled">
                  Close
                </NewspaperButton>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
