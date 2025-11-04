'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HandBlockPrinting() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-16 pb-16 lg:pt-24 lg:pb-24 overflow-hidden -mt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-indigo-50 to-white opacity-90"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
          style={{
            backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJibG9jay1wYXR0ZXJuIiB4PSIwIiB5PSIwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8cmVjdCB4PSI1IiB5PSI1IiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHJ4PSI4IiBmaWxsPSJub25lIiBzdHJva2U9IiMzNzMwQTMiIHN0cm9rZS13aWR0aD0iMiIgb3BhY2l0eT0iMC4zIi8+CiAgICAgIDxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjMiIGZpbGw9IiMzNzMwQTMiIG9wYWNpdHk9IjAuNCIvPgogICAgICA8Y2lyY2xlIGN4PSIyOCIgY3k9IjI4IiByPSIzIiBmaWxsPSIjMzczMEEzIiBvcGFjaXR5PSIwLjQiLz4KICAgIDwvcGF0dGVybj4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNibG9jay1wYXR0ZXJuKSIvPgo8L3N2Zz4=')"
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
              Hand Block Printing Course
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed"
            >
              Preserve traditional textile arts through authentic block printing techniques
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/admissions"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
              >
                Apply Now
              </Link>
              <Link
                href="/courses"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 text-lg font-semibold rounded-xl hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
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
                  Discover the timeless art of hand block printing through our comprehensive 6-month 
                  program. This course combines traditional techniques with contemporary design applications, 
                  teaching students to create beautiful printed textiles using wooden blocks and natural dyes.
                </p>
                <p className="mb-6">
                  Students will learn pattern design, block carving, color mixing, and printing techniques 
                  on various fabrics. Our hands-on approach ensures practical mastery of this ancient craft 
                  while exploring modern market applications and sustainable practices.
                </p>
                <p>
                  The program emphasizes both artistic expression and commercial viability, preparing 
                  graduates to work in textile design, start craft businesses, or preserve cultural 
                  heritage through traditional arts.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Course Highlights</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-600 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Traditional block carving techniques</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-600 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Natural dye preparation and application</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-600 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Pattern design and motif development</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-600 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Multi-color printing techniques</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-600 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Fabric finishing and quality control</span>
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
              Our structured approach progresses from basic techniques to advanced artistic applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {[
              {
                month: "Month 1",
                title: "Design Fundamentals",
                topics: ["Pattern theory", "Motif creation", "Cultural patterns", "Sketch development"]
              },
              {
                month: "Month 2", 
                title: "Block Preparation",
                topics: ["Wood selection", "Carving tools", "Block carving", "Relief techniques"]
              },
              {
                month: "Month 3",
                title: "Printing Basics",
                topics: ["Natural dyes", "Color mixing", "Basic printing", "Fabric preparation"]
              },
              {
                month: "Month 4",
                title: "Advanced Printing",
                topics: ["Multi-block alignment", "Complex patterns", "Color gradation", "Special effects"]
              },
              {
                month: "Month 5",
                title: "Product Development",
                topics: ["Quality finishing", "Product design", "Market research", "Portfolio building"]
              },
              {
                month: "Month 6",
                title: "Business & Exhibition",
                topics: ["Pricing strategies", "Customer relations", "Exhibition setup", "Industry internship"]
              }
            ].map((month, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg border border-blue-200"
              >
                <div className="text-blue-600 text-sm font-semibold mb-2">{month.month}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-4">{month.title}</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {month.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
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
              <div className="text-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Textile Designer</h3>
                <p className="text-gray-600">Create designs for fashion houses, home décor, and textile manufacturers</p>
              </div>
              
              <div className="text-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200">
                <div className="text-4xl mb-4">🏪</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Craft Entrepreneur</h3>
                <p className="text-gray-600">Start your own block printing studio or handcrafted textile business</p>
              </div>
              
              <div className="text-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200">
                <div className="text-4xl mb-4">🏛️</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Cultural Preservationist</h3>
                <p className="text-gray-600">Work with museums, cultural centers, and heritage organizations</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
