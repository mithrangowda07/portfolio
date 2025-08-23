'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react'
import resumeData from '../../resume_data.json'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-gray-900">
                {resumeData.personal_info.name}
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link href="/about" className="text-gray-500 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  About
                </Link>
                <Link href="/resume" className="text-gray-500 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  Resume
                </Link>
                <Link href="/projects" className="text-gray-500 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  Projects
                </Link>
                <Link href="/contact" className="text-gray-500 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  Contact
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
              <Link href="/" className="text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
                Home
              </Link>
              <Link href="/about" className="text-gray-500 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
                About
              </Link>
              <Link href="/resume" className="text-gray-500 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
                Resume
              </Link>
              <Link href="/projects" className="text-gray-500 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
                Projects
              </Link>
              <Link href="/contact" className="text-gray-500 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm <span className="text-blue-600">{resumeData.personal_info.name}</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {resumeData.personal_info.tagline}
            </p>
            <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
              {resumeData.personal_info.bio}
            </p>
            
            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center text-gray-600">
                <Mail className="w-5 h-5 mr-2" />
                <a href={`mailto:${resumeData.personal_info.email}`} className="hover:text-blue-600">
                  {resumeData.personal_info.email}
                </a>
              </div>
              <div className="flex items-center text-gray-600">
                <Phone className="w-5 h-5 mr-2" />
                <a href={`tel:${resumeData.personal_info.phone}`} className="hover:text-blue-600">
                  {resumeData.personal_info.phone}
                </a>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="w-5 h-5 mr-2" />
                <span>{resumeData.personal_info.location}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4 mb-12">
              {resumeData.personal_info.social_links.github && (
                <a
                  href={resumeData.personal_info.social_links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900 text-white p-3 rounded-full hover:bg-gray-800 transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
              )}
              {resumeData.personal_info.social_links.linkedin && (
                <a
                  href={resumeData.personal_info.social_links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              )}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/projects"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                View My Work
              </Link>
              <Link
                href="/contact"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {resumeData.skills.programming_languages.slice(0, 4).map((skill) => (
              <div key={skill.name} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-lg">{skill.name.charAt(0)}</span>
                </div>
                <h3 className="font-semibold text-gray-900">{skill.name}</h3>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; {new Date().getFullYear()} {resumeData.personal_info.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
