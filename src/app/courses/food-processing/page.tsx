'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function FoodProcessing() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-16 pb-16 lg:pt-24 lg:pb-24 overflow-hidden -mt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-red-100 via-orange-50 to-white opacity-90"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
          style={{
            backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJmb29kLXBhdHRlcm4iIHg9IjAiIHk9IjAiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxyZWN0IHg9IjEwIiB5PSIxMCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiByeD0iNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjREMzNjI2IiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9IjAuMyIvPgogICAgICA8Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSI0IiBmaWxsPSIjREMzNjI2IiBvcGFjaXR5PSIwLjIiLz4KICAgIDwvcGF0dGVybj4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNmb29kLXBhdHRlcm4pIi8+Cjwvc3ZnPg==')"
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
              Food Processing Technology Course
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed"
            >
              Master modern food processing techniques for industry success
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/admissions"
                className="inline-flex items-center px-8 py-4 bg-red-600 text-white text-lg font-semibold rounded-xl hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors duration-200"
              >
                Apply Now
              </Link>
              <Link
                href="/courses"
                className="inline-flex items-center px-8 py-4 border-2 border-red-600 text-red-600 text-lg font-semibold rounded-xl hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors duration-200"
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
                  Enter the thriving food industry through our comprehensive 6-month Food Processing 
                  Technology program. This course covers modern food processing techniques, preservation 
                  methods, quality control, and food safety standards required for commercial food 
                  production.
                </p>
                <p className="mb-6">
                  Students will gain hands-on experience with food processing equipment, packaging 
                  techniques, and regulatory compliance. Our inclusive training approach ensures that 
                  all students can develop technical skills for employment in food manufacturing, 
                  quality assurance, or starting their own food business.
                </p>
                <p>
                  The program emphasizes hygiene standards, nutritional science, and entrepreneurial 
                  skills, preparing graduates for diverse career opportunities in the expanding food 
                  processing sector.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border border-red-200"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Course Highlights</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-red-100 text-red-600 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Food preservation and processing techniques</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-red-100 text-red-600 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Quality control and food safety standards</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-red-100 text-red-600 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Modern packaging and labeling methods</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-red-100 text-red-600 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Food chemistry and nutritional analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-red-100 text-red-600 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Regulatory compliance and certification</span>
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
              Our structured curriculum ensures comprehensive learning from food basics to advanced processing technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {[
              {
                month: "Month 1",
                title: "Food Science Basics",
                topics: ["Food chemistry", "Microbiology", "Nutrition principles", "Safety standards"]
              },
              {
                month: "Month 2", 
                title: "Processing Techniques",
                topics: ["Thermal processing", "Dehydration methods", "Fermentation", "Freezing technology"]
              },
              {
                month: "Month 3",
                title: "Quality Control",
                topics: ["Testing procedures", "Standards compliance", "HACCP principles", "Documentation"]
              },
              {
                month: "Month 4",
                title: "Packaging & Storage",
                topics: ["Packaging materials", "Labeling requirements", "Storage systems", "Shelf life analysis"]
              },
              {
                month: "Month 5",
                title: "Advanced Processing",
                topics: ["Industrial equipment", "Automation systems", "Process optimization", "Troubleshooting"]
              },
              {
                month: "Month 6",
                title: "Business & Internship",
                topics: ["Market analysis", "Cost calculation", "Business planning", "Industry internship"]
              }
            ].map((month, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg border border-red-200"
              >
                <div className="text-red-600 text-sm font-semibold mb-2">{month.month}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-4">{month.title}</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {month.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
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
              <div className="text-center bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8 border border-red-200">
                <div className="text-4xl mb-4">🏭</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Food Manufacturer</h3>
                <p className="text-gray-600">Work in food processing plants, quality control, and production management</p>
              </div>
              
              <div className="text-center bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8 border border-red-200">
                <div className="text-4xl mb-4">🍯</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Food Entrepreneur</h3>
                <p className="text-gray-600">Start your own food processing business or specialty food products</p>
              </div>
              
              <div className="text-center bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8 border border-red-200">
                <div className="text-4xl mb-4">🔬</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Quality Analyst</h3>
                <p className="text-gray-600">Ensure food safety and quality in laboratories and inspection agencies</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
