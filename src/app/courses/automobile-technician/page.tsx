'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AutomobileTechnician() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-16 pb-16 lg:pt-24 lg:pb-24 overflow-hidden -mt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-slate-50 to-white opacity-90"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
          style={{
            backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJhdXRvLXBhdHRlcm4iIHg9IjAiIHk9IjAiIHdpZHRoPSI0NSIgaGVpZ2h0PSI0NSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxjaXJjbGUgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIxMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDk0QTQzIiBzdHJva2Utd2lkdGg9IjMiIG9wYWNpdHk9IjAuMyIvPgogICAgICA8Y2lyY2xlIGN4PSIyMi41IiBjeT0iMjIuNSIgcj0iMyIgZmlsbD0iIzA5NEE0MyIgb3BhY2l0eT0iMC4yIi8+CiAgICA8L3BhdHRlcm4+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjYXV0by1wYXR0ZXJuKSIvPgo8L3N2Zz4=')"
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
              Basic Level Automobile Technician Course
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed"
            >
              Master automotive repair and maintenance skills for a successful career
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/admissions"
                className="inline-flex items-center px-8 py-4 bg-gray-600 text-white text-lg font-semibold rounded-xl hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-200"
              >
                Apply Now
              </Link>
              <Link
                href="/courses"
                className="inline-flex items-center px-8 py-4 border-2 border-gray-600 text-gray-600 text-lg font-semibold rounded-xl hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-200"
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
                  Build a rewarding career in the automotive industry through our comprehensive 
                  6-month Basic Level Automobile Technician program. This hands-on course covers 
                  essential vehicle maintenance, repair techniques, and diagnostic skills needed 
                  for modern automotive service.
                </p>
                <p className="mb-6">
                  Students will gain practical experience with engine systems, electrical components, 
                  brake systems, and transmission fundamentals. Our inclusive training approach 
                  ensures that all students can develop technical skills regardless of physical 
                  or cognitive abilities.
                </p>
                <p>
                  The program emphasizes safety procedures, tool usage, and customer service skills, 
                  preparing graduates for employment in automotive service centers, dealerships, 
                  or independent workshops.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-2xl p-8 border border-gray-200"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Course Highlights</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-gray-100 text-gray-600 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Engine diagnostics and repair fundamentals</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-gray-100 text-gray-600 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Electrical system troubleshooting</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-gray-100 text-gray-600 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Brake and suspension system maintenance</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-gray-100 text-gray-600 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Automotive tools and equipment usage</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-gray-100 text-gray-600 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Safety protocols and workplace practices</span>
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
              Our structured curriculum ensures comprehensive learning from basics to advanced automotive techniques
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                months: "Months 1-2",
                title: "Foundation Skills",
                topics: ["Automotive basics", "Tool identification", "Safety procedures", "Engine fundamentals", "Basic maintenance"]
              },
              {
                months: "Months 3-4", 
                title: "System Specialization",
                topics: ["Electrical systems", "Brake systems", "Cooling systems", "Fuel systems", "Diagnostic techniques"]
              },
              {
                months: "Months 5-6",
                title: "Advanced & Professional",
                topics: ["Transmission basics", "Advanced diagnostics", "Customer service", "Workshop management", "Job placement prep"]
              }
            ].map((period, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-200"
              >
                <div className="text-gray-600 text-sm font-semibold mb-2">{period.months}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-4">{period.title}</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {period.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-start">
                      <span className="text-gray-500 mr-2">•</span>
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
              <div className="text-center bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl p-8 border border-gray-200">
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Service Technician</h3>
                <p className="text-gray-600">Work in automotive service centers, dealerships, and repair shops</p>
              </div>
              
              <div className="text-center bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl p-8 border border-gray-200">
                <div className="text-4xl mb-4">🏪</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Workshop Owner</h3>
                <p className="text-gray-600">Start your own automotive repair and maintenance business</p>
              </div>
              
              <div className="text-center bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl p-8 border border-gray-200">
                <div className="text-4xl mb-4">🚗</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Fleet Maintenance</h3>
                <p className="text-gray-600">Maintain vehicle fleets for companies and transportation services</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
