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
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            className="w-full px-4 py-3 bg-[#1a1a2e] border border-[#2d2d44] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#4f46e5] transition-colors"
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
            className="w-full px-4 py-3 bg-[#1a1a2e] border border-[#2d2d44] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#4f46e5] transition-colors"
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
          className="w-full px-4 py-3 bg-[#1a1a2e] border border-[#2d2d44] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#4f46e5] transition-colors"
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
          rows={5}
          className="w-full px-4 py-3 bg-[#1a1a2e] border border-[#2d2d44] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#4f46e5] transition-colors resize-none"
          placeholder="Tell me more about your project or opportunity..."
        />
      </div>
      
      <div className="flex items-center justify-between">
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-[#4f46e5] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#6366f1] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
        
        {submitStatus === 'success' && (
          <p className="text-green-400 text-sm">Message sent successfully!</p>
        )}
        {submitStatus === 'error' && (
          <p className="text-red-400 text-sm">Failed to send message. Please try again.</p>
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
          <div className="max-w-6xl mx-auto w-full flex items-center">
            {/* Left Content */}
            <div className="flex-1 text-left">
              <h1 className="text-5xl sm:text-7xl font-bold mb-6 font-['Times New Roman']">
                Hi, I&apos;m <span className="text-[#4f46e5]">{resumeData.personal_info.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl">
                {resumeData.personal_info.tagline}
              </p>
              <p className="text-lg text-gray-400 mb-12 max-w-2xl">
                {resumeData.personal_info.bio}
              </p>
              
              {/* Contact Info */}
              <div className="flex flex-wrap gap-6 mb-12">
                <div className="flex items-center text-gray-300">
                  <Mail className="w-5 h-5 mr-2" />
                  <a href={`mailto:${resumeData.personal_info.email}`} className="hover:text-[#4f46e5]">
                    {resumeData.personal_info.email}
                  </a>
                </div>
                <div className="flex items-center text-gray-300">
                  <Linkedin className="w-5 h-5 mr-2" />
                  <a href={resumeData.personal_info.social_links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#4f46e5]">
                    LinkedIn
                  </a>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>{resumeData.personal_info.location}</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection(projectsRef, 'projects')}
                  className="bg-[#4f46e5] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#6366f1] transition-colors"
                >
                  View My Work
                </button>
                <button
                  onClick={() => scrollToSection(contactRef, 'contact')}
                  className="border-2 border-[#4f46e5] text-[#4f46e5] px-8 py-3 rounded-lg font-semibold hover:bg-[#4f46e5] hover:text-white transition-colors"
                >
                  Get In Touch
                </button>
              </div>
            </div>

            {/* Right Side - Profile Photo */}
            <div className="flex-1 flex justify-center">
              <div className="w-64 h-64">
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
        </section>

        {/* About Section */}
        <section ref={aboutRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1a1a2e]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">About Me</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {resumeData.personal_info.bio}
              </p>
            </div>

            {/* Education Section */}
            <div className="bg-[#0f0f23] rounded-lg border border-[#2d2d44] p-8 mb-12">
              <div className="flex items-center mb-6">
                <GraduationCap className="w-8 h-8 text-[#4f46e5] mr-3" />
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              <div className="space-y-8">
                {resumeData.education.map((edu, index) => (
                  <div key={index} className="border-l-4 border-[#4f46e5] pl-6">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                      <h4 className="text-xl font-semibold">{edu.institution}</h4>
                      <span className="text-sm text-gray-400 mt-1 sm:mt-0">
                        {edu.start_date} - {edu.end_date}
                      </span>
                    </div>
                    <p className="text-lg text-[#4f46e5] font-medium mb-2">{edu.degree}</p>
                    <p className="text-gray-300 mb-2">{edu.location}</p>
                    {edu.cgpa && (
                      <p className="text-gray-200 mb-2">
                        <span className="font-semibold">CGPA:</span> {edu.cgpa}
                      </p>
                    )}
                    {edu.percentage && (
                      <p className="text-gray-200 mb-2">
                        <span className="font-semibold">Percentage:</span> {edu.percentage}%
                      </p>
                    )}
                    <p className="text-gray-300">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Relevant Coursework Section */}
            <div className="bg-[#0f0f23] rounded-lg border border-[#2d2d44] p-8 mb-8">
              <div className="flex items-center mb-6">
                <GraduationCap className="w-8 h-8 text-blue-400 mr-3" />
                <h3 className="text-2xl font-bold">Relevant Coursework</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {resumeData.relevant_coursework.map((course, index) => (
                  <div key={index} className="bg-[#1a1a2e] p-4 rounded-lg text-center border border-[#2d2d44]">
                    <span className="font-medium">{course}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hobbies Section */}
            <div className="bg-[#0f0f23] rounded-lg border border-[#2d2d44] p-8">
              <div className="flex items-center mb-6">
                <Heart className="w-8 h-8 text-red-400 mr-3" />
                <h3 className="text-2xl font-bold">Hobbies</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {resumeData.hobbies.map((hobby, index) => (
                  <div key={index} className="bg-[#1a1a2e] p-4 rounded-lg text-center border border-[#2d2d44]">
                    <span className="font-medium">{hobby}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section ref={experienceRef} className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">Experience</h2>
            </div>

            <div className="bg-[#1a1a2e] rounded-lg border border-[#2d2d44] p-8">
              <div className="flex items-center mb-6">
                <Briefcase className="w-8 h-8 text-[#4f46e5] mr-3" />
                <h3 className="text-2xl font-bold">Work Experience</h3>
              </div>
              <div className="space-y-8">
                {resumeData.experience.map((exp, index) => (
                  <div key={index} className="border-l-4 border-green-400 pl-6">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                      <h4 className="text-xl font-semibold">{exp.role}</h4>
                      <span className="text-sm text-gray-400 mt-1 sm:mt-0">
                        {exp.start_date} - {exp.end_date}
                      </span>
                    </div>
                    <p className="text-lg text-green-400 font-medium mb-2">{exp.company}</p>
                    <p className="text-gray-300 mb-4">{exp.location}</p>
                    <p className="text-gray-200 mb-4">{exp.description}</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Leadership & Extracurricular */}
            <div className="bg-[#1a1a2e] rounded-lg border border-[#2d2d44] p-8 mt-8">
              <h3 className="text-2xl font-bold mb-6">Leadership & Extracurricular</h3>
              <div className="space-y-6">
                {resumeData.leadership_extracurricular.map((item, index) => (
                  <div key={index} className="border-l-4 border-yellow-400 pl-6">
                    <h4 className="text-lg font-semibold">{item.role}</h4>
                    <p className="text-yellow-400 font-medium mb-2">{item.organization}</p>
                    <p className="text-gray-300 mb-2">{item.location}</p>
                    <p className="text-sm text-gray-400 mb-2">{item.start_date} - {item.end_date}</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
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
        <section ref={projectsRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1a1a2e]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">Projects</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {resumeData.projects.map((project, index) => (
                <div key={index} className="bg-[#0f0f23] rounded-lg border border-[#2d2d44] p-6 hover:border-[#4f46e5] transition-colors">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-sm text-gray-400 mb-4">{project.date}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech_stack.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-[#2d2d44] rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Description:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                      {project.description.map((desc, descIndex) => (
                        <li key={descIndex}>{desc}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Features:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-3">
                    {project.github_link && (
                      <a
                        href={project.github_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-[#4f46e5] text-white py-2 px-4 rounded-lg text-center hover:bg-[#6366f1] transition-colors"
                      >
                        View Code
                      </a>
                    )}
                    {project.demo_link && (
                      <a
                        href={project.demo_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 border border-[#4f46e5] text-[#4f46e5] py-2 px-4 rounded-lg text-center hover:bg-[#4f46e5] hover:text-white transition-colors"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section ref={skillsRef} className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">Skills & Expertise</h2>
            </div>
            
            {/* Programming Languages */}
            <div className="bg-[#1a1a2e] rounded-lg border border-[#2d2d44] p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6">Programming Languages</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {resumeData.skills.programming_languages.map((skill) => (
                  <div key={skill.name} className="bg-[#0f0f23] p-4 rounded-lg border border-[#2d2d44]">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{skill.name}</span>
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
            <div className="bg-[#1a1a2e] rounded-lg border border-[#2d2d44] p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6">Frameworks & Libraries</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {resumeData.skills.frameworks_libraries.map((skill) => (
                  <div key={skill.name} className="bg-[#0f0f23] p-4 rounded-lg border border-[#2d2d44]">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{skill.name}</span>
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
            <div className="bg-[#1a1a2e] rounded-lg border border-[#2d2d44] p-8">
              <h3 className="text-2xl font-bold mb-6">Tools & Technologies</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {resumeData.skills.tools_technologies.map((skill) => (
                  <div key={skill.name} className="bg-[#0f0f23] p-4 rounded-lg border border-[#2d2d44]">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{skill.name}</span>
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
            <div className="bg-[#1a1a2e] rounded-lg border border-[#2d2d44] p-8 mt-8">
              <div className="flex items-center mb-6">
                <Award className="w-8 h-8 text-yellow-400 mr-3" />
                <h3 className="text-2xl font-bold">Achievements</h3>
              </div>
              <div className="space-y-6">
                {resumeData.achievements.map((achievement, index) => (
                  <div key={index} className="border-l-4 border-yellow-400 pl-6">
                    <h4 className="text-lg font-semibold mb-2">{achievement.title}</h4>
                    <p className="text-sm text-gray-400 mb-2">{achievement.date}</p>
                    <p className="text-gray-300">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section ref={contactRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1a1a2e]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Get In Touch</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              I&apos;m always interested in hearing about new opportunities and exciting projects. 
              Feel free to reach out if you&apos;d like to connect!
            </p>

            {/* Contact Form */}
            <div className="bg-[#0f0f23] rounded-lg border border-[#2d2d44] p-8 mb-12">
              <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>
              <ContactForm />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-[#0f0f23] rounded-lg border border-[#2d2d44] p-6">
                <Mail className="w-12 h-12 text-[#4f46e5] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <a 
                  href={`mailto:${resumeData.personal_info.email}`}
                  className="text-[#4f46e5] hover:text-[#6366f1] transition-colors"
                >
                  {resumeData.personal_info.email}
                </a>
              </div>

              <div className="bg-[#0f0f23] rounded-lg border border-[#2d2d44] p-6">
                <Linkedin className="w-12 h-12 text-[#4f46e5] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
                <a 
                  href={resumeData.personal_info.social_links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4f46e5] hover:text-[#6366f1] transition-colors"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>

            <div className="bg-[#0f0f23] rounded-lg border border-[#2d2d44] p-6">
              <h3 className="text-xl font-semibold mb-4">Connect with me</h3>
              <div className="flex justify-center space-x-4">
                {resumeData.personal_info.social_links.github && (
                  <a
                    href={resumeData.personal_info.social_links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[#2d2d44] rounded-lg hover:bg-[#4f46e5] transition-colors"
                  >
                    <Github size={24} />
                  </a>
                )}
                {resumeData.personal_info.social_links.linkedin && (
                  <a
                    href={resumeData.personal_info.social_links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[#2d2d44] rounded-lg hover:bg-[#4f46e5] transition-colors"
                  >
                    <Linkedin size={24} />
                  </a>
                )}
                {resumeData.personal_info.social_links.instagram && (
                  <a
                    href={resumeData.personal_info.social_links.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[#2d2d44] rounded-lg hover:bg-[#4f46e5] transition-colors"
                  >
                    <Instagram size={24} />
                  </a>
                )}
                {resumeData.personal_info.social_links.leetcode && (
                  <a
                    href={resumeData.personal_info.social_links.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[#2d2d44] rounded-lg hover:bg-[#4f46e5] transition-colors"
                  >
                    <Code size={24} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#0f0f23] border-t border-[#2d2d44] py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} {resumeData.personal_info.name}. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
