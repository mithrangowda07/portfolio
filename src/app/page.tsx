'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Script from 'next/script'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Menu, 
  X, 
  Github, 
  Linkedin, 
  Instagram,
  Code,
  GraduationCap, 
  Heart,
  User,
  ChevronUp,
  Terminal,
  Monitor,
  AlertCircle,
  ExternalLink,
  FileText,
  CheckCircle,
  BookOpen,
  Inbox,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import resumeData from '../../resume_data.json'
import ShapeGrid from '@/components/ShapeGrid'
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

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import type { Swiper as SwiperClass } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

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

// Window component representing retro OS window
interface RetroWindowProps {
  title: string
  children: React.ReactNode
  className?: string
  titleBarColor?: string
  controls?: string[] // e.g. ['●', '○', '□']
  onClose?: () => void
  onMinimize?: () => void
  onMaximize?: () => void
}

function RetroWindow({
  title,
  children,
  className = '',
  titleBarColor = 'bg-[#111111] text-white',
  controls = ['●', '○', '□'],
  onClose,
  onMinimize,
  onMaximize
}: RetroWindowProps) {
  return (
    <motion.div 
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={`border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col overflow-hidden ${className}`}
    >
      {/* Title Bar */}
      <div className={`border-b-2 border-black ${titleBarColor} px-3 py-2 flex items-center justify-between font-mono select-none`}>
        <div className="flex items-center space-x-1">
          {controls.map((ctrl, i) => (
            <button
              key={i}
              onClick={i === 0 ? onClose : i === 1 ? onMinimize : onMaximize}
              className={`w-3.5 h-3.5 border border-black flex items-center justify-center text-[8px] font-bold rounded-full transition-colors cursor-pointer ${
                i === 0 
                  ? 'bg-[#111111] text-white hover:bg-red-500' 
                  : i === 1 
                    ? 'bg-white text-black hover:bg-yellow-400' 
                    : 'bg-white text-black hover:bg-green-400'
              }`}
            >
              {ctrl}
            </button>
          ))}
        </div>
        <span className="text-xs font-bold font-mono tracking-wider truncate px-4">{title}</span>
        <div className="w-12 text-right text-[9px] opacity-60 hidden sm:block">Active</div>
      </div>
      {/* Content */}
      <div className="p-4 sm:p-6 flex-1 bg-white select-text">
        {children}
      </div>
    </motion.div>
  )
}

// Retro Button Component
interface RetroButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'retro' | 'primary' | 'secondary' | 'accent'
  children: React.ReactNode
}

function RetroButton({
  variant = 'retro',
  children,
  className = '',
  ...props
}: RetroButtonProps) {
  let baseStyle = 'border-2 border-black font-bold font-mono transition-all select-none text-sm text-center inline-flex items-center justify-center '
  
  if (!/(^|\s)p(x|y)?-/.test(className)) {
    baseStyle += 'px-4 py-2 '
  }
  
  if (variant === 'primary') {
    baseStyle += 'bg-[#111111] text-white hover:bg-[#333333] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-y-[2px] active:translate-x-[2px]'
  } else if (variant === 'secondary') {
    baseStyle += 'bg-[#444444] text-white hover:bg-[#555555] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-y-[2px] active:translate-x-[2px]'
  } else if (variant === 'accent') {
    baseStyle += 'bg-[#2563EB] text-white hover:bg-blue-700 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-y-[2px] active:translate-x-[2px]'
  } else {
    // Standard Retro Active Button
    baseStyle += 'bg-white text-[#111111] hover:bg-[#EFEFEF] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-y-[3px] active:translate-x-[3px]'
  }

  return (
    <button className={`${baseStyle} ${className}`} {...props}>
      {children}
    </button>
  )
}

// Contact Form Component
function ContactForm() {
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
    <form onSubmit={handleSubmit} className="space-y-4 font-mono">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-xs font-bold text-[#111111] mb-1">
            Sender Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 bg-white border-2 border-black rounded-none text-black placeholder-gray-400 focus:outline-none focus:bg-[#EFEFEF] transition-colors text-sm"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-bold text-[#111111] mb-1">
            Sender Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 bg-white border-2 border-black rounded-none text-black placeholder-gray-400 focus:outline-none focus:bg-[#EFEFEF] transition-colors text-sm"
            placeholder="john@example.com"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="subject" className="block text-xs font-bold text-[#111111] mb-1">
          Subject Line:
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 bg-white border-2 border-black rounded-none text-black placeholder-gray-400 focus:outline-none focus:bg-[#EFEFEF] transition-colors text-sm"
          placeholder="Collaboration Inquiry"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-xs font-bold text-[#111111] mb-1">
          Message Body:
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-3 py-2 bg-white border-2 border-black rounded-none text-black placeholder-gray-400 focus:outline-none focus:bg-[#EFEFEF] transition-colors resize-none text-sm"
          placeholder="Write your email body here..."
        />
      </div>
      
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
        <RetroButton
          type="submit"
          disabled={isSubmitting}
          variant="primary"
          className="w-full sm:w-auto"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </RetroButton>
        
        {submitStatus === 'success' && (
          <div className="flex items-center space-x-2 text-green-600 bg-green-50 border border-green-300 px-3 py-1.5 text-xs font-bold">
            <CheckCircle size={14} />
            <span>Success: Message sent!</span>
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="flex items-center space-x-2 text-red-600 bg-red-50 border border-red-300 px-3 py-1.5 text-xs font-bold">
            <AlertCircle size={14} />
            <span>Error: Failed to send message.</span>
          </div>
        )}
      </div>
    </form>
  )
}

export default function Portfolio() {
  // LeetCode Contest Stats
  const [contestData, setContestData] = useState<ContestData | null>(null)
  const [contestLoading, setContestLoading] = useState(true)
  const [contestError, setContestError] = useState<string | null>(null)

  const getErrorMessage = (error: unknown) =>
    error instanceof Error ? error.message : String(error)

  useEffect(() => {
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

  // Navigation states
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  
  // Custom dialog notifications
  const [systemAlert, setSystemAlert] = useState<string | null>(null)

  // Swiper state
  const [swiper, setSwiper] = useState<SwiperClass | null>(null)
  const [isPlaying, setIsPlaying] = useState(true)

  // Certificates Folder control states
  const [expandedFolder, setExpandedFolder] = useState<number | null>(null)

  // Skills filter Category
  const [selectedSkillCategory, setSelectedSkillCategory] = useState<string>('LANGUAGES')

  // Selected project for details modal popup
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  // Resume Viewer modal state
  const [isResumeOpen, setIsResumeOpen] = useState(false)

  // Smooth scroll helper
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(id)
      setIsMenuOpen(false)
    }
  }

  // Grouping skills
  const skillsCategories = [
    { id: 'LANGUAGES', name: 'Languages' },
    { id: 'FRAMEWORKS', name: 'Frameworks' },
    { id: 'TOOLS', name: 'Tools & DBs' }
  ]

  const getFilteredSkills = () => {
    if (selectedSkillCategory === 'FRAMEWORKS') {
      return resumeData.skills.frameworks_libraries
    }
    if (selectedSkillCategory === 'TOOLS') {
      return resumeData.skills.tools_technologies
    }
    return resumeData.skills.programming_languages
  }

  // Dynamic normalization of experience and leadership/extracurricular activities from resume_data.json
  const experiences = [
    ...resumeData.experience.map(exp => ({
      company: exp.company,
      role: exp.role,
      duration: `${exp.start_date} - ${exp.end_date}`,
      title: `${exp.company} Internship`,
      responsibilities: exp.responsibilities
    })),
    ...resumeData.leadership_extracurricular.map(lead => ({
      company: lead.organization,
      role: lead.role === 'Volunteer' ? 'Volunteer Officer' : lead.role,
      duration: `${lead.start_date} - ${lead.end_date}`,
      title: lead.organization === 'National Service Scheme (NSS)' ? 'NSS Volunteer' : `${lead.organization} Volunteer`,
      responsibilities: lead.activities
    }))
  ]

  // About tab switching state
  const [activeAboutTab, setActiveAboutTab] = useState('profile')
  const aboutTabs = [
    { id: 'profile', name: 'About Me', icon: User },
    { id: 'education', name: 'Education', icon: GraduationCap },
    { id: 'coursework', name: 'Coursework', icon: BookOpen },
    { id: 'hobbies', name: 'Interests', icon: Heart },
    { id: 'facts', name: 'Quick Facts', icon: FileText }
  ]

  return (
    <div className="min-h-screen text-[#111111] pb-16 selection:bg-[#2563EB] selection:text-white relative">
      <ShapeGrid 
        speed={0.4} 
        squareSize={40}
        direction="diagonal"
        borderColor="rgba(0, 0, 0, 0.08)"
        hoverFillColor="rgba(0, 0, 0, 0.05)"
        shape="square"
        hoverTrailAmount={6}
      />
      <Script
        id="mithra-ngowda-person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personStructuredData) }}
      />

      {/* Floating Retro Toolbar Navbar */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white border-2 border-black px-4 py-2.5 flex items-center justify-between max-w-5xl w-[90%] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-mono">
        {/* Navbar Logo */}
        <button onClick={() => scrollTo('home')} className="flex items-center space-x-2 text-sm font-bold border-r-2 border-black pr-4 cursor-pointer hover:underline">
          <Terminal size={16} />
          <span>Mithra N Gowda</span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center space-x-6 text-xs font-bold pl-4">
          <button onClick={() => scrollTo('about')} className={`hover:underline cursor-pointer ${activeSection === 'about' ? 'bg-[#111111] text-white px-2 py-0.5' : ''}`}>About</button>
          <button onClick={() => scrollTo('skills')} className={`hover:underline cursor-pointer ${activeSection === 'skills' ? 'bg-[#111111] text-white px-2 py-0.5' : ''}`}>Skills</button>
          <button onClick={() => scrollTo('projects')} className={`hover:underline cursor-pointer ${activeSection === 'projects' ? 'bg-[#111111] text-white px-2 py-0.5' : ''}`}>Projects</button>
          <button onClick={() => scrollTo('experience')} className={`hover:underline cursor-pointer ${activeSection === 'experience' ? 'bg-[#111111] text-white px-2 py-0.5' : ''}`}>Experience</button>
          <button onClick={() => scrollTo('certificates')} className={`hover:underline cursor-pointer ${activeSection === 'certificates' ? 'bg-[#111111] text-white px-2 py-0.5' : ''}`}>Certificates</button>
          <button onClick={() => scrollTo('metrics')} className={`hover:underline cursor-pointer ${activeSection === 'metrics' ? 'bg-[#111111] text-white px-2 py-0.5' : ''}`}>Code Metrics</button>
          <button onClick={() => scrollTo('contact')} className={`hover:underline cursor-pointer ${activeSection === 'contact' ? 'bg-[#111111] text-white px-2 py-0.5' : ''}`}>Contact</button>
        </div>

        {/* Action Button */}
        <div className="hidden md:block">
          <button
            onClick={() => setIsResumeOpen(true)}
            className="border-2 border-black bg-white text-xs font-bold px-3 py-1 hover:bg-[#EFEFEF] active:translate-y-[1px] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none transition-all block font-mono cursor-pointer"
          >
            📄 View Resume
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="md:hidden border-2 border-black p-1 hover:bg-[#EFEFEF] cursor-pointer"
          aria-label="Toggle retro menu"
        >
          {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-18 left-1/2 transform -translate-x-1/2 z-40 bg-white border-2 border-black w-[90%] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-4 flex flex-col space-y-3 font-mono md:hidden"
          >
            <button onClick={() => scrollTo('about')} className="text-left py-1 text-sm font-bold border-b border-black/10 hover:bg-[#EFEFEF] px-2">📂 About Me</button>
            <button onClick={() => scrollTo('skills')} className="text-left py-1 text-sm font-bold border-b border-black/10 hover:bg-[#EFEFEF] px-2">📂 Technical Skills</button>
            <button onClick={() => scrollTo('projects')} className="text-left py-1 text-sm font-bold border-b border-black/10 hover:bg-[#EFEFEF] px-2">📂 Project Windows</button>
            <button onClick={() => scrollTo('experience')} className="text-left py-1 text-sm font-bold border-b border-black/10 hover:bg-[#EFEFEF] px-2">📂 Experience</button>
            <button onClick={() => scrollTo('certificates')} className="text-left py-1 text-sm font-bold border-b border-black/10 hover:bg-[#EFEFEF] px-2">📂 Certificates</button>
            <button onClick={() => scrollTo('metrics')} className="text-left py-1 text-sm font-bold border-b border-black/10 hover:bg-[#EFEFEF] px-2">📂 Code Metrics</button>
            <button onClick={() => scrollTo('contact')} className="text-left py-1 text-sm font-bold hover:bg-[#EFEFEF] px-2">📂 Contact Terminal</button>
            <button
              onClick={() => {
                setIsResumeOpen(true)
                setIsMenuOpen(false)
              }}
              className="border-2 border-black bg-white text-center py-2 text-xs font-bold hover:bg-[#EFEFEF] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] block w-full cursor-pointer font-mono"
            >
              📄 View Resume
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main OS desktop */}
      <main className="max-w-6xl mx-auto px-4 pt-28 space-y-24">
        
        {/* HERO SECTION */}
        <section id="home" className="min-h-[80vh] flex items-center pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full items-stretch">
            
            {/* Left Info Panel */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
              <div className="space-y-4">
                <span className="font-mono text-xs font-bold px-2.5 py-1 border-2 border-black bg-white inline-block shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  Welcome
                </span>
                
                {/* Space Grotesk Heading */}
                <h1 className="text-5xl sm:text-7xl font-bold tracking-tight font-heading leading-tight text-[#111111]">
                  Hello.<br />
                  I&apos;m <span className="underline decoration-2 underline-offset-8 decoration-[#2563EB]">{resumeData.personal_info.name}</span>
                </h1>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 border-2 border-black bg-[#EFEFEF] font-mono text-xs font-bold rounded-none">
                  ⚡ Full Stack Developer
                </span>
                <span className="px-3 py-1 border-2 border-black bg-[#EFEFEF] font-mono text-xs font-bold rounded-none">
                  🧠 Competitive programming
                </span>
                <span className="px-3 py-1 border-2 border-black bg-[#EFEFEF] font-mono text-xs font-bold rounded-none">
                  💻 Software Engineer
                </span>
              </div>

              <p className="text-base text-[#444444] font-sans max-w-xl leading-relaxed">
                Information Science student from RV College of Engineering. I engineer web platforms with Next.js, Django, databases, and build AI models with fault-tolerant systems.
              </p>

              <div className="flex flex-wrap gap-4">
                <RetroButton onClick={() => scrollTo('projects')} variant="primary">
                  View Projects
                </RetroButton>
                <RetroButton onClick={() => setIsResumeOpen(true)}>
                  View Resume
                </RetroButton>
              </div>
            </div>

            {/* Right Profile Window */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <RetroWindow 
                title="Profile Viewer" 
                className="w-full max-w-md"
              >
                <div className="space-y-6">
                  {/* Photo Container */}
                  <div className="border-2 border-black p-1 bg-white relative">
                    <div className="absolute top-2 right-2 bg-green-500 border-2 border-black text-[9px] font-bold text-white px-2 py-0.5 z-10 font-mono shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                      ONLINE
                    </div>
                    <div className="bg-[#EFEFEF] flex justify-center items-center overflow-hidden aspect-square border-2 border-black">
                      <Image 
                        src="/profile-photo.jpg" 
                        alt="Portrait of Mithra N Gowda" 
                        width={380}
                        height={380}
                        priority
                        className="w-full h-full object-cover filter grayscale"
                      />
                    </div>
                  </div>

                  {/* Profile Metadata */}
                  <div className="font-mono text-xs space-y-2 border-t-2 border-dashed border-black pt-4">
                    <div className="flex justify-between">
                      <span className="font-bold opacity-60">NAME:</span>
                      <span className="font-bold">{resumeData.personal_info.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-bold opacity-60">LOCATION:</span>
                      <span className="font-bold">{resumeData.personal_info.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-bold opacity-60">STATUS:</span>
                      <span className="font-bold text-[#2563EB]">Available for Work</span>
                    </div>
                  </div>

                  {/* Social Buttons */}
                  <div className="grid grid-cols-2 gap-2 border-t-2 border-dashed border-black pt-4">
                    <a
                      href={resumeData.personal_info.social_links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 border-black p-2 text-center text-xs font-bold font-mono hover:bg-[#EFEFEF] flex items-center justify-center gap-2 active:translate-y-[1px]"
                    >
                      <Github size={14} />
                      GitHub
                    </a>
                    <a
                      href={resumeData.personal_info.social_links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 border-black p-2 text-center text-xs font-bold font-mono hover:bg-[#EFEFEF] flex items-center justify-center gap-2 active:translate-y-[1px]"
                    >
                      <Linkedin size={14} />
                      LinkedIn
                    </a>
                  </div>
                </div>
              </RetroWindow>
            </div>

          </div>
        </section>

        {/* ABOUT SECTION (WINDOW TABBED PANEL) */}
        <section id="about" className="scroll-mt-24">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading">
              📂 01. User Profile
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              
              {/* Tab Selector Links (Left) */}
              <div className="lg:col-span-3 flex lg:flex-col flex-wrap gap-2">
                {aboutTabs.map((tab) => {
                  const Icon = tab.icon
                  const isActive = activeAboutTab === tab.id
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveAboutTab(tab.id)}
                      className={`flex-1 lg:flex-none border-2 border-black font-mono font-bold text-xs p-3 text-left transition-all flex items-center space-x-3 cursor-pointer ${
                        isActive 
                          ? 'bg-[#111111] text-white shadow-[2px_2px_0px_0px_rgba(37,99,235,1)] translate-y-[-2px] translate-x-[-2px]' 
                          : 'bg-white text-black hover:bg-[#EFEFEF] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
                      }`}
                    >
                      <Icon size={16} />
                      <span className="truncate">{tab.name}</span>
                    </button>
                  )
                })}
              </div>

              {/* Tab Display Window (Right) */}
              <div className="lg:col-span-9">
                <RetroWindow 
                  title={`About Me - ${aboutTabs.find(t => t.id === activeAboutTab)?.name || 'Info'}`}
                  className="h-full min-h-[360px]"
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeAboutTab}
                      initial={{ opacity: 0, x: 5 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -5 }}
                      transition={{ duration: 0.15 }}
                      className="space-y-6"
                    >
                      {activeAboutTab === 'profile' && (
                        <div className="space-y-4 font-sans text-sm sm:text-base leading-relaxed text-[#444444]">
                          <h3 className="text-xl font-bold font-heading text-[#111111]">Biographical Summary</h3>
                          <p>{resumeData.personal_info.bio}</p>
                          <div className="border-2 border-black p-4 bg-[#F8F8F5] border-dashed font-mono text-xs">
                            <span className="font-bold block mb-1">SYSTEM CONFIG:</span>
                            • Undergrad in Information Science & Engineering (RVCE)<br />
                            • Specialized in Full Stack & Anomaly Detection (Schneider Electric)<br />
                            • Frameworks: Django REST, React, Next.js, FastAPI
                          </div>
                        </div>
                      )}

                      {activeAboutTab === 'education' && (
                        <div className="space-y-6">
                          <h3 className="text-xl font-bold font-heading text-[#111111]">Educational Background</h3>
                          <div className="space-y-4">
                            {resumeData.education.map((edu, idx) => (
                              <div key={idx} className="border-2 border-black p-4 bg-white relative">
                                <div className="absolute top-2 right-2 border border-black bg-[#EFEFEF] font-mono text-[9px] px-2 py-0.5">
                                  {edu.start_date} - {edu.end_date}
                                </div>
                                <h4 className="font-bold text-sm sm:text-base pr-20">{edu.institution}</h4>
                                <p className="text-xs text-[#2563EB] font-bold font-mono mt-1">{edu.degree}</p>
                                <p className="text-xs text-gray-500 font-mono mt-1">{edu.location}</p>
                                {edu.cgpa && (
                                  <p className="text-xs font-mono font-bold mt-2 text-green-700 bg-green-50 inline-block px-2 py-0.5 border border-green-200">
                                    CGPA: {edu.cgpa}
                                  </p>
                                )}
                                {edu.percentage && (
                                  <p className="text-xs font-mono font-bold mt-2 text-green-700 bg-green-50 inline-block px-2 py-0.5 border border-green-200">
                                    Percentage: {edu.percentage}%
                                  </p>
                                )}
                                <p className="text-xs text-gray-600 mt-2 font-sans">{edu.description}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {activeAboutTab === 'coursework' && (
                        <div className="space-y-4">
                          <h3 className="text-xl font-bold font-heading text-[#111111]">Academic Focus Area</h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                            {resumeData.relevant_coursework.map((course, index) => (
                              <div key={index} className="border-2 border-black bg-white p-3 font-mono text-xs flex items-center space-x-2">
                                <span className="text-[#2563EB]">●</span>
                                <span className="font-bold">{course}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {activeAboutTab === 'hobbies' && (
                        <div className="space-y-4">
                          <h3 className="text-xl font-bold font-heading text-[#111111]">Interests & Recreation</h3>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                            {resumeData.hobbies.map((hobby, index) => (
                              <div key={index} className="border-2 border-black bg-white p-3 text-center font-mono text-xs font-bold hover:bg-[#EFEFEF]">
                                🎯 {hobby}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {activeAboutTab === 'facts' && (
                        <div className="space-y-4">
                          <h3 className="text-xl font-bold font-heading text-[#111111]">Core Metrics</h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="border-2 border-black p-4 bg-white font-mono">
                              <span className="text-xs font-bold text-[#2563EB] block border-b border-black pb-2 mb-2">COMMUNICATION</span>
                              <ul className="text-xs space-y-1.5 font-bold">
                                <li>🗣️ English - Fluent</li>
                                <li>🗣️ Kannada - Native</li>
                                <li>🗣️ Hindi - Conversational</li>
                              </ul>
                            </div>
                            <div className="border-2 border-black p-4 bg-white font-mono">
                              <span className="text-xs font-bold text-[#2563EB] block border-b border-black pb-2 mb-2">TECHNICAL INDEX</span>
                              <ul className="text-xs space-y-1.5 font-bold">
                                <li>⚙️ Event Sourcing Logs Analysis</li>
                                <li>⚙️ RESTful API Architecture</li>
                                <li>⚙️ ML Model Training & Forecasts</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      )}

                    </motion.div>
                  </AnimatePresence>
                </RetroWindow>
              </div>

            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="scroll-mt-24">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading">
              📂 02. Skills Folder
            </h2>
            
            <div className="border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden flex flex-col">
              {/* Folder Top Menu Bar */}
              <div className="border-b-2 border-black bg-[#EFEFEF] px-4 py-2 flex flex-wrap gap-2 items-center">
                <span className="font-mono text-xs font-bold mr-4 text-gray-500">Categories:</span>
                {skillsCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedSkillCategory(cat.id)}
                    className={`px-3 py-1 font-mono text-xs font-bold border-2 border-black cursor-pointer transition-all ${
                      selectedSkillCategory === cat.id 
                        ? 'bg-[#111111] text-white' 
                        : 'bg-white text-black hover:bg-[#EFEFEF]'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>

              {/* Folder Contents Grid */}
              <div className="p-6 min-h-[250px] bg-white">
                <motion.div 
                  layout
                  className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4"
                >
                  <AnimatePresence mode="popLayout">
                    {getFilteredSkills().map((skill) => (
                      <motion.button
                        layout
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        key={skill.name}
                        onClick={() => setSystemAlert(`Skill: ${skill.name} (Proficiency: ${skill.level}%)`)}
                        className="flex flex-col items-center justify-center p-3 border-2 border-transparent hover:border-black hover:bg-[#EFEFEF] transition-all cursor-pointer rounded-none group"
                      >
                        {/* Retro Icon Container */}
                        <div className="w-12 h-12 border-2 border-black bg-white flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[4px_4px_0px_0px_rgba(37,99,235,1)] group-active:shadow-none transition-all mb-2">
                          {(() => {
                            const Icon = skillIcons[skill.name]
                            return (
                              <div className="skill-icon flex items-center justify-center">
                                {Icon ? (
                                  <Icon className="w-10 h-10 text-[#111111] group-hover:text-[#2563eb] group-hover:scale-110 transition-all duration-200" />
                                ) : (
                                  <Code className="w-10 h-10 text-[#111111] group-hover:text-[#2563eb] group-hover:scale-110 transition-all duration-200" />
                                )}
                              </div>
                            )
                          })()}
                        </div>
                        <span className="text-xs font-mono font-bold text-center truncate w-full">{skill.name}</span>
                        <div className="w-full bg-gray-200 h-1.5 mt-2 border border-black overflow-hidden max-w-[60px]">
                          <div className="bg-[#2563EB] h-full" style={{ width: `${skill.level}%` }}></div>
                        </div>
                      </motion.button>
                    ))}
                  </AnimatePresence>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="scroll-mt-24">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading">
              📂 03. Project Windows
            </h2>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              {resumeData.projects.map((project, index) => {
                const isFeatured = index === 0; // KCET advisor
                return (
                  <div 
                    key={index} 
                    className={`${isFeatured ? 'md:col-span-12 lg:col-span-8' : 'md:col-span-6 lg:col-span-4'} flex flex-col h-full`}
                  >
                    <RetroWindow 
                      title={project.title}
                      className="h-full flex flex-col flex-1"
                    >
                      <div className="flex flex-col h-full space-y-4">
                        {/* Project Header block / Visual representation */}
                        <div className="border-2 border-black bg-[#F8F8F5] relative p-4 flex items-center justify-center min-h-[160px] overflow-hidden select-none border-dashed">
                          {/* Retro Grid Background inside visual representation */}
                          <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:10px_10px]" />
                          <div className="relative text-center z-10 space-y-2">
                            <Monitor size={36} className="mx-auto text-[#2563EB]" />
                            <span className="font-mono text-[10px] font-bold block bg-white px-2 py-0.5 border border-black inline-block shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                              RELEASED: {project.date.toUpperCase()}
                            </span>
                          </div>
                        </div>

                        {/* Project Title */}
                        <h3 className="text-lg font-bold font-heading mt-2">{project.title}</h3>
                        
                        {/* Project Brief description */}
                        <p className="text-xs text-[#444444] font-sans flex-grow leading-relaxed">
                          {project.description[0]}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-1 py-2">
                          {project.tech_stack.slice(0, isFeatured ? 9 : 5).map((tech, techIdx) => (
                            <span key={techIdx} className="px-2 py-0.5 bg-[#EFEFEF] border border-black font-mono text-[9px] font-bold">
                              {tech}
                            </span>
                          ))}
                          {project.tech_stack.length > (isFeatured ? 9 : 5) && (
                            <span className="px-2 py-0.5 bg-white border border-black border-dashed font-mono text-[9px] font-bold opacity-60">
                              +{project.tech_stack.length - (isFeatured ? 9 : 5)} more
                            </span>
                          )}
                        </div>

                        {/* Action buttons */}
                        <div className="flex flex-col space-y-2 pt-2 border-t border-black/10">
                          <button 
                            onClick={() => setSelectedProject(project)}
                            className="w-full text-center px-3 py-1.5 border-2 border-black bg-white text-[#111111] font-mono text-xs font-bold hover:bg-[#EFEFEF] active:translate-y-[1px] flex items-center justify-center gap-1.5 cursor-pointer shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none"
                          >
                            Know More
                          </button>
                          <div className="flex items-center space-x-2">
                            {project.github_link && (
                              <a 
                                href={project.github_link} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="flex-1"
                              >
                                <button className="w-full text-center px-3 py-1.5 border-2 border-black font-mono text-xs font-bold hover:bg-[#EFEFEF] active:translate-y-[1px] flex items-center justify-center gap-1.5 cursor-pointer">
                                  <Github size={12} />
                                  Src Code
                                </button>
                              </a>
                            )}
                            {project.demo_link && (
                              <a 
                                href={project.demo_link} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="flex-1"
                              >
                                <button className="w-full text-center px-3 py-1.5 border-2 border-black bg-[#111111] text-white font-mono text-xs font-bold hover:bg-[#333333] active:translate-y-[1px] flex items-center justify-center gap-1.5 cursor-pointer">
                                  <ExternalLink size={12} />
                                  Live Demo
                                </button>
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </RetroWindow>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="scroll-mt-24">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading">
              📂 04. Experience
            </h2>

            {/* Swiper Carousel Container */}
            <div className="w-full max-w-[850px] mx-auto mt-6 relative select-none">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                onSwiper={setSwiper}
                className="w-full"
              >
                {experiences.map((exp, index) => (
                  <SwiperSlide key={index}>
                    <div className="p-1 pb-12 flex justify-center w-full">
                      <RetroWindow 
                        title={exp.title} 
                        titleBarColor="bg-[#111111] text-white"
                        className="w-full"
                      >
                        <div className="space-y-4">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start border-b-2 border-black pb-2 border-dashed">
                            <div>
                              <h3 className="text-base sm:text-lg font-bold font-heading">{exp.company}</h3>
                              <p className="text-xs text-[#2563EB] font-bold font-mono">{exp.role}</p>
                            </div>
                            <span className="text-xs font-mono font-bold bg-[#EFEFEF] border border-black px-2 py-0.5 mt-2 sm:mt-0 whitespace-nowrap">
                              {exp.duration}
                            </span>
                          </div>

                          <ul className="list-disc list-inside space-y-2 text-xs text-[#444444] font-sans">
                            {exp.responsibilities.map((resp, i) => (
                              <li key={i}>{resp}</li>
                            ))}
                          </ul>
                        </div>
                      </RetroWindow>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Controls */}
              <div className="flex items-center justify-center space-x-4 mt-4 font-mono">
                <RetroButton
                  onClick={() => swiper?.slidePrev()}
                  className="w-14 h-14 flex items-center justify-center p-0"
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={36} className="fi fi-rs-arrow-small-left" />
                </RetroButton>

                <RetroButton
                  onClick={() => {
                    if (isPlaying) {
                      swiper?.autoplay?.stop()
                      setIsPlaying(false)
                    } else {
                      swiper?.autoplay?.start()
                      setIsPlaying(true)
                    }
                  }}
                  className="w-14 h-14 flex items-center justify-center p-0"
                  aria-label={isPlaying ? 'Pause autoplay' : 'Play autoplay'}
                >
                  {isPlaying ? (
                    <Pause size={36} className="fi fi-rs-pause-circle" />
                  ) : (
                    <Play size={36} className="fi fi-rs-play-circle" />
                  )}
                </RetroButton>

                <RetroButton
                  onClick={() => swiper?.slideNext()}
                  className="w-14 h-14 flex items-center justify-center p-0"
                  aria-label="Next slide"
                >
                  <ChevronRight size={36} className="fi fi-rs-arrow-small-right" />
                </RetroButton>
              </div>
            </div>
          </div>
        </section>

        {/* CERTIFICATES SECTION */}
        <section id="certificates" className="scroll-mt-24">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading">
              📂 05. Certificates Folder
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {resumeData.certificates.map((cert, index) => {
                const isOpen = expandedFolder === index
                return (
                  <div key={index} className="flex flex-col">
                    {/* Folder Tab Shape */}
                    <div className="flex items-end">
                      <button
                        onClick={() => setExpandedFolder(isOpen ? null : index)}
                        className={`h-7 px-4 border-2 border-b-0 border-black rounded-t-sm font-mono text-xs font-bold transition-all cursor-pointer ${
                          isOpen ? 'bg-white translate-y-[2px] z-10' : 'bg-[#D6D6D6] hover:bg-[#EFEFEF]'
                        }`}
                      >
                        📂 {isOpen ? 'Close Folder' : `Certificate ${index + 1}`}
                      </button>
                    </div>

                    {/* Folder Body Container */}
                    <div className="border-2 border-black bg-white p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col space-y-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold text-sm sm:text-base font-heading">{cert.name}</h3>
                          <p className="text-xs text-[#2563EB] font-bold font-mono mt-1">{cert.organization}</p>
                          <p className="text-[10px] text-gray-500 font-mono mt-0.5">ISSUED: {cert.date.toUpperCase()}</p>
                        </div>
                        <RetroButton 
                          onClick={() => setExpandedFolder(isOpen ? null : index)}
                          className="text-[10px] px-2 py-0.5"
                        >
                          {isOpen ? 'Fold' : 'Unfold'}
                        </RetroButton>
                      </div>

                      {/* Folder Content Panel */}
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden border-t-2 border-dashed border-black pt-4 space-y-4"
                          >
                            <div className="bg-[#EFEFEF] border-2 border-black p-1">
                              <img
                                src={cert.image}
                                alt={`Certificate copy for ${cert.name}`}
                                className="w-full h-auto filter grayscale border border-black"
                              />
                            </div>

                            <div className="flex gap-2">
                              <a
                                href={cert.image}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 border-2 border-black p-2 text-center text-xs font-bold font-mono bg-[#111111] text-white hover:bg-[#333333] active:translate-y-[1px]"
                              >
                                View Large Image
                              </a>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* METRICS & LEETCODE / GITHUB DASHBOARD */}
        <section id="metrics" className="scroll-mt-24">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading">
              📂 06. Coding Journey
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* LeetCode Widget Container */}
              <div className="lg:col-span-6 space-y-6">
                <RetroWindow title="LeetCode Statistics">
                  <div className="space-y-6 font-mono text-xs">
                    <div className="flex justify-between items-center border-b-2 border-black pb-2">
                      <span className="font-bold text-sm">LeetCode Stats</span>
                      <a 
                        href="https://leetcode.com/u/SilentNeedle/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[10px] text-[#2563EB] hover:underline"
                      >
                        profile/SilentNeedle/ ↗
                      </a>
                    </div>

                    {contestLoading ? (
                      <div className="text-center py-6 text-gray-500 font-bold">LOADING CONTEST STATISTICS...</div>
                    ) : contestError ? (
                      <div className="text-center py-6 text-red-500 font-bold">API TIMEOUT: FALLBACK METRICS DISPLAYED</div>
                    ) : (
                      <div className="grid grid-cols-2 gap-4">
                        <div className="border-2 border-black p-3 bg-[#F8F8F5]">
                          <span className="opacity-60 block">RATING:</span>
                          <span className="text-lg font-bold text-[#2563EB]">
                            {contestData?.contestRating ? Math.round(contestData.contestRating) : '1600+'}
                          </span>
                        </div>
                        <div className="border-2 border-black p-3 bg-[#F8F8F5]">
                          <span className="opacity-60 block">GLOBAL RANK:</span>
                          <span className="text-lg font-bold">
                            {contestData?.contestGlobalRanking ? contestData.contestGlobalRanking.toLocaleString() : 'Top 9%'}
                          </span>
                        </div>
                        <div className="border-2 border-black p-3 bg-[#F8F8F5]">
                          <span className="opacity-60 block">TOP PERCENT:</span>
                          <span className="text-lg font-bold text-green-700">
                            {contestData?.contestTopPercentage ? `${contestData.contestTopPercentage}%` : '8.6%'}
                          </span>
                        </div>
                        <div className="border-2 border-black p-3 bg-[#F8F8F5]">
                          <span className="opacity-60 block">ATTENDED:</span>
                          <span className="text-lg font-bold">
                            {contestData?.contestAttend ?? '10+'}
                          </span>
                        </div>
                      </div>
                    )}

                    <div className="border-2 border-black p-2 bg-white">
                      <span className="block font-bold opacity-60 mb-2">SOLVED ACTIVITY HEATMAP:</span>
                      <img
                        src="https://leetcard.jacoblin.cool/SilentNeedle?ext=heatmap"
                        alt="LeetCode Heatmap Activity"
                        className="w-full rounded-none filter grayscale border border-black"
                      />
                    </div>
                  </div>
                </RetroWindow>
              </div>

              {/* GitHub Widget Container */}
              <div className="lg:col-span-6 space-y-6">
                <RetroWindow title="GitHub Activity">
                  <div className="space-y-6 font-mono text-xs">
                    <div className="flex justify-between items-center border-b-2 border-black pb-2">
                      <span className="font-bold text-sm">GitHub Activity</span>
                      <a 
                        href="https://github.com/mithrangowda07" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[10px] text-[#2563EB] hover:underline"
                      >
                        github/mithrangowda07/ ↗
                      </a>
                    </div>

                    <div className="border-2 border-black p-2 bg-white">
                      <span className="block font-bold opacity-60 mb-2">COMMITS STREAK STATS:</span>
                      <img
                        src="https://streak-stats.demolab.com?user=mithrangowda07&theme=github-light&hide_border=true"
                        alt="GitHub Commits Streak Stats"
                        className="w-full rounded-none filter grayscale border border-black"
                      />
                    </div>

                    <div className="border-2 border-black p-2 bg-white">
                      <span className="block font-bold opacity-60 mb-2">ACTIVITY HEATMAP:</span>
                      <img
                        src="https://github-readme-activity-graph.vercel.app/graph?username=mithrangowda07&theme=github-light&hide_border=true&area=true"
                        alt="GitHub Contributions Heatmap"
                        className="w-full rounded-none filter grayscale border border-black"
                      />
                    </div>
                  </div>
                </RetroWindow>
              </div>

            </div>
          </div>
        </section>

        {/* CONTACT SECTION (MAIL CLIENT VIEW) */}
        <section id="contact" className="scroll-mt-24">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading">
              📂 07. Contact Terminal
            </h2>
            
            <RetroWindow 
              title="Email Composer" 
              className="w-full"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Left side details */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-6 font-mono text-xs">
                  <div className="space-y-4">
                    <div className="border-2 border-black p-4 bg-[#F8F8F5]">
                      <span className="font-bold text-[#2563EB] block border-b border-black pb-1.5 mb-2">
                        📨 ROUTE DESCRIPTOR
                      </span>
                      <div className="space-y-1.5 font-bold">
                        <div className="flex justify-between">
                          <span className="opacity-60">HOST:</span>
                          <span>mithrangowda01@gmail.com</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="opacity-60">PORT:</span>
                          <span>BENGALURU_IN</span>
                        </div>
                      </div>
                    </div>

                    <div className="border-2 border-black p-4 bg-white border-dashed">
                      <span className="font-bold text-green-700 block mb-1">● STATUS: AVAILABLE FOR WORK</span>
                      Open for full-stack engineering roles, automation prototypes, and ML system integrations.
                    </div>
                  </div>

                  {/* Icon directories */}
                  <div className="space-y-2 border-t-2 border-dashed border-black pt-4">
                    <span className="font-bold opacity-60 block">SOCIAL CHANNELS:</span>
                    <div className="flex flex-wrap gap-2">
                      <a
                        href={resumeData.personal_info.social_links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 border border-black bg-[#EFEFEF] hover:bg-[#D6D6D6] font-bold text-[10px] inline-flex items-center gap-1 active:translate-y-[1px]"
                      >
                        <Linkedin size={10} />
                        LinkedIn
                      </a>
                      <a
                        href={resumeData.personal_info.social_links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 border border-black bg-[#EFEFEF] hover:bg-[#D6D6D6] font-bold text-[10px] inline-flex items-center gap-1 active:translate-y-[1px]"
                      >
                        <Github size={10} />
                        GitHub
                      </a>
                      <a
                        href={resumeData.personal_info.social_links.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 border border-black bg-[#EFEFEF] hover:bg-[#D6D6D6] font-bold text-[10px] inline-flex items-center gap-1 active:translate-y-[1px]"
                      >
                        <Instagram size={10} />
                        Instagram
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right side form */}
                <div className="lg:col-span-7 border-t-2 border-black pt-6 lg:border-t-0 lg:pt-0 lg:border-l-2 lg:pl-8">
                  <div className="flex items-center space-x-2 pb-3 mb-3 border-b border-black/10">
                    <Inbox size={16} className="text-[#2563EB]" />
                    <span className="font-mono text-xs font-bold">Compose Email:</span>
                  </div>
                  <ContactForm />
                </div>

              </div>
            </RetroWindow>
          </div>
        </section>

      </main>

      {/* SYSTEM POPUP ALERT OVERLAY */}
      <AnimatePresence>
        {systemAlert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-[1px]">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] max-w-sm w-full font-mono text-xs"
            >
              {/* Alert Title bar */}
              <div className="bg-[#111111] text-white px-3 py-1.5 flex items-center justify-between">
                <span>System Notification</span>
                <button 
                  onClick={() => setSystemAlert(null)}
                  className="font-bold hover:text-red-500 cursor-pointer"
                >
                  [X]
                </button>
              </div>
              {/* Alert Body */}
              <div className="p-4 space-y-4">
                <p className="font-bold text-[#111111] leading-relaxed">{systemAlert}</p>
                <div className="text-right">
                  <RetroButton 
                    onClick={() => setSystemAlert(null)}
                    className="px-4 py-1 text-xs"
                  >
                    Dismiss
                  </RetroButton>
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
              className="bg-white border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] max-w-2xl w-full max-h-[85vh] flex flex-col font-mono text-xs"
            >
              {/* Title Bar */}
              <div className="bg-[#111111] text-white px-3 py-2 flex items-center justify-between select-none">
                <span className="font-bold">{selectedProject.title}</span>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="font-bold hover:text-red-500 cursor-pointer"
                >
                  [X]
                </button>
              </div>

              {/* Scrollable details */}
              <div className="p-6 overflow-y-auto space-y-6 text-[#111111]">
                {/* Date */}
                <div className="flex items-center justify-between border-b border-black/10 pb-2">
                  <span className="font-bold opacity-60">RELEASE DATE:</span>
                  <span className="font-bold bg-[#EFEFEF] border border-black px-2 py-0.5">{selectedProject.date}</span>
                </div>

                {/* Description bullet list */}
                <div className="space-y-2">
                  <span className="font-bold text-[#2563EB] block border-b border-black pb-1">DESCRIPTION</span>
                  <ul className="list-disc list-inside space-y-1.5 text-[#444444] font-sans text-xs leading-relaxed">
                    {selectedProject.description.map((desc: string, i: number) => (
                      <li key={i} className="align-top">{desc}</li>
                    ))}
                  </ul>
                </div>

                {/* Key Features */}
                <div className="space-y-2">
                  <span className="font-bold text-[#2563EB] block border-b border-black pb-1">KEY FEATURES</span>
                  <ul className="list-disc list-inside space-y-1.5 text-[#444444] font-sans text-xs leading-relaxed">
                    {selectedProject.features.map((feature: string, i: number) => (
                      <li key={i} className="align-top">{feature}</li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="space-y-2">
                  <span className="font-bold text-[#2563EB] block border-b border-black pb-1">TECH STACK DIRECTORY</span>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {selectedProject.tech_stack.map((tech: string, i: number) => (
                      <span key={i} className="px-2 py-0.5 bg-[#EFEFEF] border border-black font-mono text-[10px] font-bold">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contributors */}
                {selectedProject.contributors && selectedProject.contributors.length > 0 && (
                  <div className="space-y-2">
                    <span className="font-bold text-[#2563EB] block border-b border-black pb-1">TEAM MEMBERS</span>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {selectedProject.contributors.map((contrib: Contributor, i: number) => (
                        <a
                          key={i}
                          href={contrib.profile}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1 border border-black hover:bg-[#EFEFEF] transition-all font-mono text-[10px] font-bold flex items-center space-x-1.5 bg-white shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:shadow-none"
                        >
                          <span>👤 {contrib.name}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Modal footer links */}
              <div className="border-t-2 border-black p-4 bg-[#EFEFEF] flex justify-between items-center">
                <div className="flex space-x-2">
                  {selectedProject.github_link && (
                    <a 
                      href={selectedProject.github_link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                    >
                      <RetroButton className="px-3 py-1 text-xs">
                        View Source Code
                      </RetroButton>
                    </a>
                  )}
                  {selectedProject.demo_link && (
                    <a 
                      href={selectedProject.demo_link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                    >
                      <RetroButton variant="accent" className="px-3 py-1 text-xs">
                        Live Demo
                      </RetroButton>
                    </a>
                  )}
                </div>
                <RetroButton 
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-1 text-xs"
                >
                  Close
                </RetroButton>
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
              className="bg-white border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] max-w-4xl w-full h-[85vh] flex flex-col font-mono text-xs"
            >
              {/* Title Bar */}
              <div className="bg-[#111111] text-white px-3 py-2 flex items-center justify-between select-none">
                <span className="font-bold">Resume Viewer</span>
                <button 
                  onClick={() => setIsResumeOpen(false)}
                  className="font-bold hover:text-red-500 cursor-pointer"
                >
                  [X]
                </button>
              </div>

              {/* Embedded PDF Viewer */}
              <div className="flex-1 bg-white p-2">
                <iframe 
                  src="/Resume.pdf" 
                  className="w-full h-full border-2 border-black" 
                  title="Resume PDF"
                />
              </div>

              {/* Footer */}
              <div className="border-t-2 border-black p-4 bg-[#EFEFEF] flex justify-end">
                <RetroButton 
                  onClick={() => setIsResumeOpen(false)}
                  className="px-4 py-1 text-xs"
                >
                  Close
                </RetroButton>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* FOOTER SYSTEM STATUS BAR */}
      <footer className="fixed bottom-0 left-0 right-0 z-30 bg-[#EFEFEF] border-t-2 border-black h-8 px-4 flex items-center justify-between font-mono text-[10px] font-bold select-none text-[#111111]">
        <div className="flex items-center space-x-4">
          <span>© {new Date().getFullYear()} All rights reserved.</span>
        </div>

        {/* Links */}
        <div className="flex items-center space-x-3">
          <a href={resumeData.personal_info.social_links.github} target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
          <span>|</span>
          <a href={resumeData.personal_info.social_links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
          <span>|</span>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:underline flex items-center cursor-pointer">
            Back to Top
            <ChevronUp size={10} className="ml-1" />
          </button>
        </div>
      </footer>
    </div>
  )
}
