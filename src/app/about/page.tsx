'use client'

import Link from 'next/link'
import { ArrowLeft, GraduationCap, Briefcase, Award, Heart } from 'lucide-react'
import resumeData from '../../../resume_data.json'

export default function About() {
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
                <Link href="/about" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
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

      {/* About Hero */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">About Me</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {resumeData.personal_info.bio}
            </p>
          </div>

          {/* Education Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <div className="flex items-center mb-6">
              <GraduationCap className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Education</h2>
            </div>
            <div className="space-y-8">
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

          {/* Experience Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <div className="flex items-center mb-6">
              <Briefcase className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Experience</h2>
            </div>
            <div className="space-y-8">
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

          {/* Skills Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Skills & Expertise</h2>
            
            {/* Programming Languages */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Programming Languages</h3>
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
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Frameworks & Libraries</h3>
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
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Tools & Technologies</h3>
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

          {/* Interests Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <div className="flex items-center mb-6">
              <Heart className="w-8 h-8 text-red-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Interests & Hobbies</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {resumeData.interests.map((interest, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
                  <span className="text-gray-900 font-medium">{interest}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Award className="w-8 h-8 text-yellow-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Achievements</h2>
            </div>
            <div className="space-y-6">
              {resumeData.achievements.map((achievement, index) => (
                <div key={index} className="border-l-4 border-yellow-600 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">{achievement.date}</p>
                  <p className="text-gray-600">{achievement.description}</p>
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
