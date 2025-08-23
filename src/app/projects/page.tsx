'use client'

import Link from 'next/link'
import { ArrowLeft, Github, ExternalLink, Calendar, Code } from 'lucide-react'
import resumeData from '../../../resume_data.json'

export default function Projects() {
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
                <Link href="/projects" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  Projects
                </Link>
                <Link href="/contact" className="text-gray-500 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
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

      {/* Projects Hero */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">My Projects</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here are some of the projects I've worked on. Each project represents a unique challenge and learning experience.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {resumeData.projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      {project.date}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <div className="flex items-center mb-3">
                      <Code className="w-5 h-5 text-blue-600 mr-2" />
                      <span className="text-sm font-semibold text-gray-700">Tech Stack</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech_stack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Description</h4>
                    <ul className="space-y-2 text-gray-600">
                      {project.description.map((desc, descIndex) => (
                        <li key={descIndex} className="flex items-start">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Features */}
                  {project.features && project.features.length > 0 && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Links */}
                  <div className="flex gap-4 pt-4 border-t border-gray-200">
                    {project.github_link && (
                      <a
                        href={project.github_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </a>
                    )}
                    {project.demo_link && (
                      <a
                        href={project.demo_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* GitHub Stats Section */}
          <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">More on GitHub</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Check out my GitHub profile to see more projects, contributions, and open-source work.
              </p>
              <a
                href={resumeData.personal_info.social_links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                <Github className="w-5 h-5 mr-2" />
                Visit My GitHub
              </a>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Interested in Working Together?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and exciting projects. Let's create something amazing together!
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get In Touch
            </Link>
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
