'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Mail, Phone, MapPin, Clock, Github, Linkedin, Send, Download, Calendar } from 'lucide-react'
import resumeData from '../../../resume_data.json'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="text-xl font-bold text-gray-900">
                {resumeData.personal_info.name}
              </Link>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-gray-500 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
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
                <Link href="/contact" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          href="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
      </div>

      {/* Contact Hero */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Get In Touch</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I'm always interested in new opportunities and exciting projects. Let's discuss how we can work together!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <a 
                        href={`mailto:${resumeData.personal_info.email}`}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        {resumeData.personal_info.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                      <a 
                        href={`tel:${resumeData.personal_info.phone}`}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        {resumeData.personal_info.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
                      <p className="text-gray-600">{resumeData.personal_info.location}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Availability</h4>
                      <p className="text-gray-600">Available for new opportunities</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-4">Follow Me</h4>
                  <div className="flex space-x-4">
                    {resumeData.personal_info.social_links.github && (
                      <a
                        href={resumeData.personal_info.social_links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-900 text-white p-3 rounded-full hover:bg-gray-800 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {resumeData.personal_info.social_links.linkedin && (
                      <a
                        href={resumeData.personal_info.social_links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Me a Message</h3>
                
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                    Thank you for your message! I will get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                    There was an error sending your message. Please try again.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Additional Contact Options */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Other Ways to Connect</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <Calendar className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Schedule a Call</h3>
                <p className="text-gray-600 mb-4">Let's set up a time to discuss your project or opportunity.</p>
                <a
                  href={`mailto:${resumeData.personal_info.email}?subject=Schedule%20a%20Call`}
                  className="inline-flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Time
                </a>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <Download className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Download Resume</h3>
                <p className="text-gray-600 mb-4">Get a copy of my detailed resume and work history.</p>
                <a
                  href="/Resume.pdf"
                  download
                  className="inline-flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </a>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <Github className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">View My Work</h3>
                <p className="text-gray-600 mb-4">Check out my projects and contributions on GitHub.</p>
                <a
                  href={resumeData.personal_info.social_links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
            <div className="max-w-4xl mx-auto space-y-4">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">What types of projects do you work on?</h3>
                <p className="text-gray-600">
                  I specialize in full-stack web development, including web applications, APIs, and mobile-responsive websites. 
                  I work with modern technologies like React, Node.js, Python, and various databases.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Are you available for freelance work?</h3>
                <p className="text-gray-600">
                  Yes, I'm available for freelance projects and consulting work. I'm particularly interested in 
                  interesting technical challenges and long-term collaborations.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">What's your typical response time?</h3>
                <p className="text-gray-600">
                  I typically respond to emails within 24 hours, and I'm available for urgent matters during business hours. 
                  For project discussions, I prefer to schedule calls to give your project the attention it deserves.
                </p>
              </div>
            </div>
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
