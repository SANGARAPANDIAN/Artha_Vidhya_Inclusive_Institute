'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ClayModelingCourse() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-16 pb-16 lg:pt-24 lg:pb-24 overflow-hidden -mt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-orange-50 to-white opacity-90"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJjbGF5LXBhdHRlcm4iIHg9IjAiIHk9IjAiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjgiIGZpbGw9IiNEOTc3MDYiIG9wYWNpdHk9IjAuMyIvPgogICAgPC9wYXR0ZXJuPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2NsYXktcGF0dGVybikiLz4KPC9zdmc+')"
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight"
            >
              Clay Modeling & Sculpture Course
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed"
            >
              Master the ancient art of clay modeling and sculpture creation
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/admissions"
                className="inline-flex items-center px-8 py-4 bg-amber-600 text-white text-lg font-semibold rounded-xl hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 transition-colors duration-200"
              >
                Apply Now
              </Link>
              <Link
                href="/courses"
                className="inline-flex items-center px-8 py-4 border-2 border-amber-600 text-amber-600 text-lg font-semibold rounded-xl hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 transition-colors duration-200"
              >
                View All Courses
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                Course Overview
              </h2>
              <div className="prose prose-lg text-gray-700">
                <p className="mb-6">
                  Discover the therapeutic and creative world of clay modeling through our comprehensive 
                  6-month program. This course combines traditional pottery techniques with modern 
                  sculpting methods, providing students with practical skills for both artistic 
                  expression and commercial applications.
                </p>
                <p className="mb-6">
                  Students will learn everything from basic clay preparation to advanced sculpting 
                  techniques, glazing, and firing processes. The course emphasizes both functionality 
                  and artistic creativity, preparing graduates for careers in pottery, sculpture, 
                  and decorative arts.
                </p>
                <p>
                  Our accessible workshops are equipped with adaptive tools and techniques, ensuring 
                  that students of all abilities can participate fully and develop their artistic talents.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Course Highlights</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-primary-100 text-primary-600 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Traditional pottery wheel techniques</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-100 text-primary-600 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Hand-building and sculpting methods</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-100 text-primary-600 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Glazing and surface decoration techniques</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-100 text-primary-600 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Kiln firing and finishing processes</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-100 text-primary-600 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Business skills for pottery entrepreneurs</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">Course Structure</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our structured curriculum ensures comprehensive learning from basics to advanced techniques
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {[
              {
                month: "Month 1",
                title: "Foundation Skills",
                topics: ["Clay preparation", "Basic wheel throwing", "Hand-building basics", "Tool familiarization"]
              },
              {
                month: "Month 2", 
                title: "Wheel Mastery",
                topics: ["Advanced wheel work", "Centering techniques", "Cylinder forms", "Bowl making"]
              },
              {
                month: "Month 3",
                title: "Sculpture Basics",
                topics: ["Figure modeling", "Surface texturing", "Form development", "Proportions"]
              },
              {
                month: "Month 4",
                title: "Advanced Techniques",
                topics: ["Complex forms", "Glazing methods", "Kiln operation", "Firing techniques"]
              },
              {
                month: "Month 5",
                title: "Artistic Development",
                topics: ["Personal style", "Creative projects", "Exhibition pieces", "Quality refinement"]
              },
              {
                month: "Month 6",
                title: "Professional Practice",
                topics: ["Portfolio creation", "Business planning", "Marketing strategies", "Industry exposure"]
              }
            ].map((month, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg border border-amber-200"
              >
                <div className="text-amber-600 text-sm font-semibold mb-2">{month.month}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-4">{month.title}</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {month.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-start">
                      <span className="text-primary-500 mr-2">•</span>
                      {topic}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-12 text-center">Career Opportunities</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 border border-amber-200">
                <div className="text-4xl mb-4">🏺</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Pottery Studio</h3>
                <p className="text-gray-600">Start your own pottery studio or join established ceramic workshops</p>
              </div>
              
              <div className="text-center bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 border border-amber-200">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Art Instructor</h3>
                <p className="text-gray-600">Teach pottery and sculpture in schools, community centers, or private classes</p>
              </div>
              
              <div className="text-center bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 border border-amber-200">
                <div className="text-4xl mb-4">🛍️</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Artisan Entrepreneur</h3>
                <p className="text-gray-600">Create and sell handmade pottery through online platforms and craft fairs</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
