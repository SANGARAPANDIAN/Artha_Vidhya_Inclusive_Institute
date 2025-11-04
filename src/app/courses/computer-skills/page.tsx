'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ComputerSkills() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-16 pb-16 lg:pt-24 lg:pb-24 overflow-hidden -mt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-violet-50 to-white opacity-90"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
          style={{
            backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJ0ZWNoLXBhdHRlcm4iIHg9IjAiIHk9IjAiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxyZWN0IHg9IjgiIHk9IjgiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgcng9IjQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzc5MUJGMSIgc3Ryb2tlLXdpZHRoPSIyIiBvcGFjaXR5PSIwLjMiLz4KICAgICAgPGNpcmNsZSBjeD0iMTQiIGN5PSIxNCIgcj0iMiIgZmlsbD0iIzc5MUJGMSIgb3BhY2l0eT0iMC40Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjI2IiBjeT0iMjYiIHI9IjIiIGZpbGw9IiM3OTFCRjEiIG9wYWNpdHk9IjAuNCIvPgogICAgPC9wYXR0ZXJuPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3RlY2gtcGF0dGVybikiLz4KPC9zdmc+')"
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
              Computer Skills Course
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed"
            >
              Build essential digital literacy for modern workplace success
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/admissions"
                className="inline-flex items-center px-8 py-4 bg-purple-600 text-white text-lg font-semibold rounded-xl hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors duration-200"
              >
                Apply Now
              </Link>
              <Link
                href="/courses"
                className="inline-flex items-center px-8 py-4 border-2 border-purple-600 text-purple-600 text-lg font-semibold rounded-xl hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors duration-200"
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
                  Bridge the digital divide through our comprehensive 6-month Computer Skills program. 
                  This course covers essential computer literacy, office applications, internet usage, 
                  and digital communication skills needed for modern employment and personal development.
                </p>
                <p className="mb-6">
                  Students will master fundamental computing concepts, Microsoft Office suite, email 
                  communication, and basic troubleshooting. Our practical approach ensures hands-on 
                  learning with real-world applications and accessible instruction for all skill levels.
                </p>
                <p>
                  The program emphasizes both technical proficiency and digital citizenship, preparing 
                  students for office work, online learning, government services, and personal 
                  productivity in the digital age.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-8 border border-purple-200"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Course Highlights</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-purple-100 text-purple-600 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Windows operating system mastery</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-100 text-purple-600 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Microsoft Office suite proficiency</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-100 text-purple-600 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Internet browsing and research skills</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-100 text-purple-600 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Email communication and etiquette</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-100 text-purple-600 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Digital security and online safety</span>
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
              Our progressive curriculum builds from basic computer operations to advanced applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {[
              {
                month: "Month 1",
                title: "Computer Fundamentals",
                topics: ["Windows basics", "File management", "Hardware concepts", "Typing skills"]
              },
              {
                month: "Month 2", 
                title: "Word Processing",
                topics: ["MS Word mastery", "Document formatting", "Templates", "Advanced features"]
              },
              {
                month: "Month 3",
                title: "Spreadsheet Skills",
                topics: ["Excel basics", "Formulas & functions", "Charts & graphs", "Data analysis"]
              },
              {
                month: "Month 4",
                title: "Presentation Tools",
                topics: ["PowerPoint creation", "Slide design", "Animation effects", "Professional presentations"]
              },
              {
                month: "Month 5",
                title: "Internet & Communication",
                topics: ["Internet navigation", "Email management", "Online forms", "Digital safety"]
              },
              {
                month: "Month 6",
                title: "Advanced Applications",
                topics: ["Cloud services", "Basic troubleshooting", "Software installation", "Career preparation"]
              }
            ].map((month, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg border border-purple-200"
              >
                <div className="text-purple-600 text-sm font-semibold mb-2">{month.month}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-4">{month.title}</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {month.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
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
              <div className="text-center bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-8 border border-purple-200">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Office Assistant</h3>
                <p className="text-gray-600">Support roles in administration, data entry, and document management</p>
              </div>
              
              <div className="text-center bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-8 border border-purple-200">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Data Operator</h3>
                <p className="text-gray-600">Handle data entry, processing, and basic analysis in various industries</p>
              </div>
              
              <div className="text-center bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-8 border border-purple-200">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Digital Services</h3>
                <p className="text-gray-600">Provide computer services, online assistance, and digital literacy training</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
