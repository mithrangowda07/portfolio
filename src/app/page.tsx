'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { 
  Menu, 
  X, 
  Mail, 
  MapPin, 
  Github, 
  Linkedin, 
  Instagram,
  Code,
  GraduationCap, 
  Briefcase, 
  Award, 
  Heart,
  User,
  FolderOpen,
  MessageCircle,
  Home
} from 'lucide-react'
import resumeData from '../../resume_data.json'

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
    <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 lg:px-4 py-2 lg:py-3 bg-[#1a1a2e] border border-[#2d2d44] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#4f46e5] transition-colors text-sm lg:text-base"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 lg:px-4 py-2 lg:py-3 bg-[#1a1a2e] border border-[#2d2d44] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#4f46e5] transition-colors text-sm lg:text-base"
            placeholder="your.email@example.com"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
          Subject *
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-3 lg:px-4 py-2 lg:py-3 bg-[#1a1a2e] border border-[#2d2d44] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#4f46e5] transition-colors text-sm lg:text-base"
          placeholder="What's this about?"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-3 lg:px-4 py-2 lg:py-3 bg-[#1a1a2e] border border-[#2d2d44] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#4f46e5] transition-colors resize-none text-sm lg:text-base"
          placeholder="Tell me more about your project or opportunity..."
        />
      </div>
      
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto bg-[#4f46e5] text-white px-6 lg:px-8 py-2 lg:py-3 rounded-lg font-semibold hover:bg-[#6366f1] transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm lg:text-base"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
        
        {submitStatus === 'success' && (
          <p className="text-green-400 text-sm text-center sm:text-left">Message sent successfully!</p>
        )}
        {submitStatus === 'error' && (
          <p className="text-red-400 text-sm text-center sm:text-left">Failed to send message. Please try again.</p>
        )}
      </div>
    </form>
  )
}

export default function Portfolio() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  
  const homeRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement | null>, sectionName: string) => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' })
    setActiveSection(sectionName)
    setIsSidebarOpen(false)
  }

  const navItems = [
    { id: 'home', label: 'Home', icon: Home, ref: homeRef },
    { id: 'about', label: 'About', icon: User, ref: aboutRef },
    { id: 'experience', label: 'Experience', icon: Briefcase, ref: experienceRef },
    { id: 'projects', label: 'Projects', icon: FolderOpen, ref: projectsRef },
    { id: 'skills', label: 'Skills', icon: Code, ref: skillsRef },
    { id: 'contact', label: 'Contact', icon: MessageCircle, ref: contactRef },
  ]

  return (
    <div className="min-h-screen bg-[#0f0f23] text-white">
      {/* Horizontal Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a2e] border-b border-[#2d2d44]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Name */}
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-white font-['Times New Roman']">
                {resumeData.personal_info.name}
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                {navItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.ref, item.id)}
                    className={`text-sm font-mono transition-colors ${
                      activeSection === item.id
                        ? 'text-[#4f46e5]'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <span className="text-gray-400">{String(index).padStart(2, '0')} : </span>
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="text-gray-300 hover:text-white focus:outline-none"
              >
                {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isSidebarOpen && (
          <div className="md:hidden bg-[#0f0f23] border-t border-[#2d2d44]">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.ref, item.id)}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm font-mono transition-colors ${
                    activeSection === item.id
                      ? 'text-[#4f46e5] bg-[#1a1a2e]'
                      : 'text-gray-300 hover:text-white hover:bg-[#1a1a2e]'
                  }`}
                >
                  <span className="text-gray-400">{String(index).padStart(2, '0')} : </span>
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div className="pt-16">
        {/* Home Section */}
        <section ref={homeRef} className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto w-full">
            {/* Mobile: Stack vertically, Desktop: Side by side */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
              {/* Left Content */}
              <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
                <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-4 lg:mb-6 font-['Times New Roman']">
                  Hi, I&apos;m <span className="text-[#4f46e5]">{resumeData.personal_info.name}</span>
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-6 lg:mb-8 max-w-3xl mx-auto lg:mx-0">
                  {resumeData.personal_info.tagline}
                </p>
                <p className="text-base sm:text-lg text-gray-400 mb-8 lg:mb-12 max-w-2xl mx-auto lg:mx-0">
                  {resumeData.personal_info.bio}
                </p>
                
                {/* Contact Info */}
                <div className="flex flex-col sm:flex-row flex-wrap gap-4 lg:gap-6 mb-8 lg:mb-12 justify-center lg:justify-start">
                  <div className="flex items-center text-gray-300 justify-center lg:justify-start">
                    <Mail className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
                    <a href={`mailto:${resumeData.personal_info.email}`} className="hover:text-[#4f46e5] text-sm lg:text-base">
                      {resumeData.personal_info.email}
                    </a>
                  </div>
                  <div className="flex items-center text-gray-300 justify-center lg:justify-start">
                    <Linkedin className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
                    <a href={resumeData.personal_info.social_links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#4f46e5] text-sm lg:text-base">
                      LinkedIn
                    </a>
                  </div>
                  <div className="flex items-center text-gray-300 justify-center lg:justify-start">
                    <MapPin className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
                    <span className="text-sm lg:text-base">{resumeData.personal_info.location}</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button
                    onClick={() => scrollToSection(projectsRef, 'projects')}
                    className="bg-[#4f46e5] text-white px-6 lg:px-8 py-3 rounded-lg font-semibold hover:bg-[#6366f1] transition-colors text-sm lg:text-base"
                  >
                    View My Work
                  </button>
                  <button
                    onClick={() => scrollToSection(contactRef, 'contact')}
                    className="border-2 border-[#4f46e5] text-[#4f46e5] px-6 lg:px-8 py-3 rounded-lg font-semibold hover:bg-[#4f46e5] hover:text-white transition-colors text-sm lg:text-base"
                  >
                    Get In Touch
                  </button>
                </div>
              </div>

              {/* Right Side - Profile Photo */}
              <div className="flex-1 flex justify-center order-1 lg:order-2">
                <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64">
                  <Image 
                    src="/profile-photo.jpg" 
                    alt="Profile Photo" 
                    width={256}
                    height={256}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section ref={aboutRef} className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#1a1a2e]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">About Me</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                {resumeData.personal_info.bio}
              </p>
            </div>

            {/* Education Section */}
            <div className="bg-[#0f0f23] rounded-lg border border-[#2d2d44] p-6 lg:p-8 mb-8 lg:mb-12">
              <div className="flex items-center mb-6">
                <GraduationCap className="w-6 h-6 lg:w-8 lg:h-8 text-[#4f46e5] mr-3" />
                <h3 className="text-xl lg:text-2xl font-bold">Education</h3>
              </div>
              <div className="space-y-6 lg:space-y-8">
                {resumeData.education.map((edu, index) => (
                  <div key={index} className="border-l-4 border-[#4f46e5] pl-4 lg:pl-6">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                      <h4 className="text-lg lg:text-xl font-semibold">{edu.institution}</h4>
                      <span className="text-sm text-gray-400 mt-1 sm:mt-0">
                        {edu.start_date} - {edu.end_date}
                      </span>
                    </div>
                    <p className="text-base lg:text-lg text-[#4f46e5] font-medium mb-2">{edu.degree}</p>
                    <p className="text-gray-300 mb-2 text-sm lg:text-base">{edu.location}</p>
                    {edu.cgpa && (
                      <p className="text-gray-200 mb-2 text-sm lg:text-base">
                        <span className="font-semibold">CGPA:</span> {edu.cgpa}
                      </p>
                    )}
                    {edu.percentage && (
                      <p className="text-gray-200 mb-2 text-sm lg:text-base">
                        <span className="font-semibold">Percentage:</span> {edu.percentage}%
                      </p>
                    )}
                    <p className="text-gray-300 text-sm lg:text-base">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Relevant Coursework Section */}
            <div className="bg-[#0f0f23] rounded-lg border border-[#2d2d44] p-6 lg:p-8 mb-6 lg:mb-8">
              <div className="flex items-center mb-6">
                <GraduationCap className="w-6 h-6 lg:w-8 lg:h-8 text-blue-400 mr-3" />
                <h3 className="text-xl lg:text-2xl font-bold">Relevant Coursework</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
                {resumeData.relevant_coursework.map((course, index) => (
                  <div key={index} className="bg-[#1a1a2e] p-3 lg:p-4 rounded-lg text-center border border-[#2d2d44]">
                    <span className="font-medium text-sm lg:text-base">{course}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hobbies Section */}
            <div className="bg-[#0f0f23] rounded-lg border border-[#2d2d44] p-6 lg:p-8">
              <div className="flex items-center mb-6">
                <Heart className="w-6 h-6 lg:w-8 lg:h-8 text-red-400 mr-3" />
                <h3 className="text-xl lg:text-2xl font-bold">Hobbies</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
                {resumeData.hobbies.map((hobby, index) => (
                  <div key={index} className="bg-[#1a1a2e] p-3 lg:p-4 rounded-lg text-center border border-[#2d2d44]">
                    <span className="font-medium text-sm lg:text-base">{hobby}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section ref={experienceRef} className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">Experience</h2>
            </div>

            <div className="bg-[#1a1a2e] rounded-lg border border-[#2d2d44] p-6 lg:p-8">
              <div className="flex items-center mb-6">
                <Briefcase className="w-6 h-6 lg:w-8 lg:h-8 text-[#4f46e5] mr-3" />
                <h3 className="text-xl lg:text-2xl font-bold">Work Experience</h3>
              </div>
              <div className="space-y-6 lg:space-y-8">
                {resumeData.experience.map((exp, index) => (
                  <div key={index} className="border-l-4 border-green-400 pl-4 lg:pl-6">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                      <h4 className="text-lg lg:text-xl font-semibold">{exp.role}</h4>
                      <span className="text-sm text-gray-400 mt-1 sm:mt-0">
                        {exp.start_date} - {exp.end_date}
                      </span>
                    </div>
                    <p className="text-base lg:text-lg text-green-400 font-medium mb-2">{exp.company}</p>
                    <p className="text-gray-300 mb-4 text-sm lg:text-base">{exp.location}</p>
                    <p className="text-gray-200 mb-4 text-sm lg:text-base">{exp.description}</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm lg:text-base">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Leadership & Extracurricular */}
            <div className="bg-[#1a1a2e] rounded-lg border border-[#2d2d44] p-6 lg:p-8 mt-6 lg:mt-8">
              <h3 className="text-xl lg:text-2xl font-bold mb-6">Leadership & Extracurricular</h3>
              <div className="space-y-6">
                {resumeData.leadership_extracurricular.map((item, index) => (
                  <div key={index} className="border-l-4 border-yellow-400 pl-4 lg:pl-6">
                    <h4 className="text-base lg:text-lg font-semibold">{item.role}</h4>
                    <p className="text-yellow-400 font-medium mb-2 text-sm lg:text-base">{item.organization}</p>
                    <p className="text-gray-300 mb-2 text-sm lg:text-base">{item.location}</p>
                    <p className="text-sm text-gray-400 mb-2">{item.start_date} - {item.end_date}</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm lg:text-base">
                      {item.activities.map((activity, actIndex) => (
                        <li key={actIndex}>{activity}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section ref={projectsRef} className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#1a1a2e]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">Projects</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
              {resumeData.projects.map((project, index) => (
                <div key={index} className="bg-[#0f0f23] rounded-lg border border-[#2d2d44] p-4 lg:p-6 hover:border-[#4f46e5] transition-colors">
                  <h3 className="text-lg lg:text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-sm text-gray-400 mb-4">{project.date}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-sm lg:text-base">Features:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-300 text-xs lg:text-sm">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <button
                      onClick={() => {
                        const modal = document.getElementById(`modal-${index}`);
                        if (modal) {
                          modal.style.display = 'block';
                        }
                      }}
                      className="text-[#4f46e5] hover:text-[#6366f1] transition-colors text-sm font-medium"
                    >
                      Show More
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Project Detail Modals */}
            {resumeData.projects.map((project, index) => (
              <div
                key={`modal-${index}`}
                id={`modal-${index}`}
                className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-50 hidden flex items-center justify-center p-4 backdrop-blur-sm"
                style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
                onClick={(e) => {
                  if (e.target === e.currentTarget) {
                    const modal = document.getElementById(`modal-${index}`);
                    if (modal) {
                      modal.style.display = 'none';
                    }
                  }
                }}
              >
                <div className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] rounded-2xl border-2 border-[#4f46e5] shadow-2xl p-6 lg:p-8 xl:p-10 w-full max-w-4xl mx-auto max-h-[85vh] overflow-y-auto relative overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#4f46e5] to-[#6366f1] transform rotate-12 scale-150"></div>
                    <div className="absolute inset-0 bg-gradient-to-l from-[#8b5cf6] to-[#a855f7] transform -rotate-12 scale-150"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6 lg:mb-8">
                      <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent pr-4">
                        {project.title}
                      </h3>
                      <button
                        onClick={() => {
                          const modal = document.getElementById(`modal-${index}`);
                          if (modal) {
                            modal.style.display = 'none';
                          }
                        }}
                        className="text-white hover:text-yellow-300 text-2xl lg:text-3xl font-bold transition-colors duration-200 hover:scale-110 flex-shrink-0"
                      >
                        ×
                      </button>
                    </div>
                    
                    <p className="text-lg lg:text-xl text-gray-300 mb-6 lg:mb-8 font-medium">{project.date}</p>
                    
                    <div className="mb-6 lg:mb-8">
                      <h4 className="font-bold mb-3 lg:mb-4 text-lg lg:text-xl text-white">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2 lg:gap-3">
                        {project.tech_stack.map((tech, techIndex) => (
                          <span key={techIndex} className="px-3 lg:px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-white hover:bg-white/20 transition-all duration-200">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6 lg:mb-8">
                      <h4 className="font-bold mb-3 lg:mb-4 text-lg lg:text-xl text-white">Features</h4>
                      <ul className="space-y-2 lg:space-y-3 text-gray-200 text-base lg:text-lg">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <span className="text-yellow-400 mr-3 text-lg lg:text-xl flex-shrink-0">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6 lg:mb-8">
                      <h4 className="font-bold mb-3 lg:mb-4 text-lg lg:text-xl text-white">Contributors</h4>
                      <div className="flex flex-wrap gap-2 lg:gap-3">
                        {project.contributors.map((contributor, contribIndex) => (
                          <a
                            key={contribIndex}
                            href={contributor.profile}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 lg:px-4 py-2 bg-gradient-to-r from-[#4f46e5] to-[#6366f1] text-white rounded-full text-sm font-medium hover:from-[#6366f1] hover:to-[#8b5cf6] transition-all duration-200 transform hover:scale-105 shadow-lg"
                          >
                            {contributor.name}
                          </a>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6 lg:mb-8">
                      <h4 className="font-bold mb-3 lg:mb-4 text-lg lg:text-xl text-white">Description</h4>
                      <ul className="space-y-2 lg:gap-3 text-gray-200 text-base lg:text-lg">
                        {project.description.map((desc, descIndex) => (
                          <li key={descIndex} className="flex items-start">
                            <span className="text-yellow-400 mr-3 text-lg lg:text-xl flex-shrink-0">•</span>
                            {desc}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
                      {project.github_link && (
                        <a
                          href={project.github_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-300 text-black py-3 lg:py-4 px-6 lg:px-8 rounded-xl text-center font-bold text-base lg:text-lg hover:from-yellow-300 hover:to-yellow-400 transition-all duration-200 transform hover:scale-105 shadow-lg"
                        >
                          View Code
                        </a>
                      )}
                      {project.demo_link && (
                        <a
                          href={project.demo_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 border-2 border-[#4f46e5] text-[#4f46e5] py-3 lg:py-4 px-6 lg:px-8 rounded-xl text-center font-bold text-base lg:text-lg hover:bg-[#4f46e5] hover:text-white transition-all duration-200 transform hover:scale-105"
                        >
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section ref={skillsRef} className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">Skills & Expertise</h2>
            </div>
            
            {/* Programming Languages */}
            <div className="bg-[#1a1a2e] rounded-lg border border-[#2d2d44] p-6 lg:p-8 mb-6 lg:mb-8">
              <h3 className="text-xl lg:text-2xl font-bold mb-6">Programming Languages</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {resumeData.skills.programming_languages.map((skill) => (
                  <div key={skill.name} className="bg-[#0f0f23] p-4 rounded-lg border border-[#2d2d44]">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-sm lg:text-base">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-[#2d2d44] rounded-full h-2">
                      <div
                        className="bg-[#4f46e5] h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Frameworks & Libraries */}
            <div className="bg-[#1a1a2e] rounded-lg border border-[#2d2d44] p-6 lg:p-8 mb-6 lg:mb-8">
              <h3 className="text-xl lg:text-2xl font-bold mb-6">Frameworks & Libraries</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {resumeData.skills.frameworks_libraries.map((skill) => (
                  <div key={skill.name} className="bg-[#0f0f23] p-4 rounded-lg border border-[#2d2d44]">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-sm lg:text-base">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-[#2d2d44] rounded-full h-2">
                      <div
                        className="bg-green-400 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Technologies */}
            <div className="bg-[#1a1a2e] rounded-lg border border-[#2d2d44] p-6 lg:p-8">
              <h3 className="text-xl lg:text-2xl font-bold mb-6">Tools & Technologies</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {resumeData.skills.tools_technologies.map((skill) => (
                  <div key={skill.name} className="bg-[#0f0f23] p-4 rounded-lg border border-[#2d2d44]">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-sm lg:text-base">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-[#2d2d44] rounded-full h-2">
                      <div
                        className="bg-purple-400 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-[#1a1a2e] rounded-lg border border-[#2d2d44] p-6 lg:p-8 mt-6 lg:mt-8">
              <div className="flex items-center mb-6">
                <Award className="w-6 h-6 lg:w-8 lg:h-8 text-yellow-400 mr-3" />
                <h3 className="text-xl lg:text-2xl font-bold">Achievements</h3>
              </div>
              <div className="space-y-6">
                {resumeData.achievements.map((achievement, index) => (
                  <div key={index} className="border-l-4 border-yellow-400 pl-4 lg:pl-6">
                    <h4 className="text-base lg:text-lg font-semibold mb-2">{achievement.title}</h4>
                    <p className="text-sm text-gray-400 mb-2">{achievement.date}</p>
                    <p className="text-gray-300 text-sm lg:text-base">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section ref={contactRef} className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#1a1a2e]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">Get In Touch</h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 lg:mb-12 max-w-2xl mx-auto">
              I&apos;m always interested in hearing about new opportunities and exciting projects. 
              Feel free to reach out if you&apos;d like to connect!
            </p>

            {/* Contact Form */}
            <div className="bg-[#0f0f23] rounded-lg border border-[#2d2d44] p-6 lg:p-8 mb-8 lg:mb-12">
              <h3 className="text-xl lg:text-2xl font-semibold mb-6">Send me a message</h3>
              <ContactForm />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-8 lg:mb-12">
              <div className="bg-[#0f0f23] rounded-lg border border-[#2d2d44] p-6">
                <Mail className="w-10 h-10 lg:w-12 lg:h-12 text-[#4f46e5] mx-auto mb-4" />
                <h3 className="text-lg lg:text-xl font-semibold mb-2">Email</h3>
                <a 
                  href={`mailto:${resumeData.personal_info.email}`}
                  className="text-[#4f46e5] hover:text-[#6366f1] transition-colors text-sm lg:text-base"
                >
                  {resumeData.personal_info.email}
                </a>
              </div>

              <div className="bg-[#0f0f23] rounded-lg border border-[#2d2d44] p-6">
                <Linkedin className="w-10 h-10 lg:w-12 lg:h-12 text-[#4f46e5] mx-auto mb-4" />
                <h3 className="text-lg lg:text-xl font-semibold mb-2">LinkedIn</h3>
                <a 
                  href={resumeData.personal_info.social_links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4f46e5] hover:text-[#6366f1] transition-colors text-sm lg:text-base"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>

            <div className="bg-[#0f0f23] rounded-lg border border-[#2d2d44] p-6">
              <h3 className="text-lg lg:text-xl font-semibold mb-4">Connect with me</h3>
              <div className="flex justify-center space-x-3 lg:space-x-4">
                {resumeData.personal_info.social_links.github && (
                  <a
                    href={resumeData.personal_info.social_links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 lg:p-3 bg-[#2d2d44] rounded-lg hover:bg-[#4f46e5] transition-colors"
                  >
                    <Github size={20} className="lg:w-6 lg:h-6" />
                  </a>
                )}
                {resumeData.personal_info.social_links.linkedin && (
                  <a
                    href={resumeData.personal_info.social_links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 lg:p-3 bg-[#2d2d44] rounded-lg hover:bg-[#4f46e5] transition-colors"
                  >
                    <Linkedin size={20} className="lg:w-6 lg:h-6" />
                  </a>
                )}
                {resumeData.personal_info.social_links.instagram && (
                  <a
                    href={resumeData.personal_info.social_links.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 lg:p-3 bg-[#2d2d44] rounded-lg hover:bg-[#4f46e5] transition-colors"
                  >
                    <Instagram size={20} className="lg:w-6 lg:h-6" />
                  </a>
                )}
                {resumeData.personal_info.social_links.leetcode && (
                  <a
                    href={resumeData.personal_info.social_links.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 lg:p-3 bg-[#2d2d44] rounded-lg hover:bg-[#4f46e5] transition-colors"
                  >
                    <Code size={20} className="lg:w-6 lg:h-6" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#0f0f23] border-t border-[#2d2d44] py-6 lg:py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-400 text-sm lg:text-base">&copy; {new Date().getFullYear()} {resumeData.personal_info.name}. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
