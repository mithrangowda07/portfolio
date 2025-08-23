'use client'

import Link from 'next/link'
import { ArrowLeft, Download, Mail, Phone, MapPin, Github, Linkedin, GraduationCap, Briefcase, Award, Code, Globe } from 'lucide-react'
import resumeData from '../../../resume_data.json'

export default function Resume() {
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
                <Link href="/resume" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
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
          </div>
        </div>
      </nav>

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex justify-between items-center mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <a
            href="/Resume.pdf"
            download
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </a>
        </div>
      </div>

      {/* Resume Content */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="text-center mb-6">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{resumeData.personal_info.name}</h1>
              <p className="text-xl text-blue-600 font-medium mb-4">{resumeData.personal_info.tagline}</p>
              <p className="text-gray-600 max-w-2xl mx-auto">{resumeData.personal_info.bio}</p>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
              <div className="flex items-center justify-center">
                <Mail className="w-4 h-4 text-blue-600 mr-2" />
                <a href={`mailto:${resumeData.personal_info.email}`} className="text-blue-600 hover:text-blue-800">
                  {resumeData.personal_info.email}
                </a>
              </div>
              <div className="flex items-center justify-center">
                <Phone className="w-4 h-4 text-blue-600 mr-2" />
                <a href={`tel:${resumeData.personal_info.phone}`} className="text-blue-600 hover:text-blue-800">
                  {resumeData.personal_info.phone}
                </a>
              </div>
              <div className="flex items-center justify-center">
                <MapPin className="w-4 h-4 text-blue-600 mr-2" />
                <span className="text-gray-600">{resumeData.personal_info.location}</span>
              </div>
              <div className="flex items-center justify-center space-x-4">
                {resumeData.personal_info.social_links.github && (
                  <a
                    href={resumeData.personal_info.social_links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
                {resumeData.personal_info.social_links.linkedin && (
                  <a
                    href={resumeData.personal_info.social_links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <GraduationCap className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Education</h2>
            </div>
            <div className="space-y-6">
              {resumeData.education.map((edu, index) => (
                <div key={index} className="border-l-4 border-blue-600 pl-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{edu.institution}</h3>
                    <span className="text-sm text-gray-500 mt-1 sm:mt-0">
                      {edu.start_date} - {edu.end_date}
                    </span>
                  </div>
                  <p className="text-lg text-blue-600 font-medium mb-2">{edu.degree}</p>
                  <p className="text-gray-600 mb-2">{edu.location}</p>
                  {edu.cgpa && (
                    <p className="text-gray-700 mb-2">
                      <span className="font-semibold">CGPA:</span> {edu.cgpa}
                    </p>
                  )}
                  {edu.percentage && (
                    <p className="text-gray-700 mb-2">
                      <span className="font-semibold">Percentage:</span> {edu.percentage}%
                    </p>
                  )}
                  <p className="text-gray-600">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Briefcase className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Experience</h2>
            </div>
            <div className="space-y-6">
              {resumeData.experience.map((exp, index) => (
                <div key={index} className="border-l-4 border-green-600 pl-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{exp.role}</h3>
                    <span className="text-sm text-gray-500 mt-1 sm:mt-0">
                      {exp.start_date} - {exp.end_date}
                    </span>
                  </div>
                  <p className="text-lg text-green-600 font-medium mb-2">{exp.company}</p>
                  <p className="text-gray-600 mb-4">{exp.location}</p>
                  <p className="text-gray-700 mb-4">{exp.description}</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Code className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Skills</h2>
            </div>
            
            {/* Programming Languages */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Programming Languages</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {resumeData.skills.programming_languages.map((skill) => (
                  <div key={skill.name} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Frameworks & Libraries */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Frameworks & Libraries</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {resumeData.skills.frameworks_libraries.map((skill) => (
                  <div key={skill.name} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-600 h-2 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Technologies */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tools & Technologies</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {resumeData.skills.tools_technologies.map((skill) => (
                  <div key={skill.name} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-purple-600 h-2 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Globe className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Projects</h2>
            </div>
            <div className="space-y-6">
              {resumeData.projects.map((project, index) => (
                <div key={index} className="border-l-4 border-purple-600 pl-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                    <span className="text-sm text-gray-500 mt-1 sm:mt-0">{project.date}</span>
                  </div>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech_stack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-purple-100 text-purple-800 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-600 mb-4">
                    {project.description.map((desc, descIndex) => (
                      <li key={descIndex} className="flex items-start">
                        <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-4">
                    {project.github_link && (
                      <a
                        href={project.github_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 hover:text-blue-800"
                      >
                        <Github className="w-4 h-4 mr-1" />
                        View Code
                      </a>
                    )}
                    {project.demo_link && (
                      <a
                        href={project.demo_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 hover:text-blue-800"
                      >
                        <Globe className="w-4 h-4 mr-1" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Award className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Achievements</h2>
            </div>
            <div className="space-y-4">
              {resumeData.achievements.map((achievement, index) => (
                <div key={index} className="border-l-4 border-yellow-600 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{achievement.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">{achievement.date}</p>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Languages</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {resumeData.languages.map((language, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
                  <h3 className="font-semibold text-gray-900 mb-1">{language.name}</h3>
                  <p className="text-sm text-gray-600">{language.level}</p>
                </div>
              ))}
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
