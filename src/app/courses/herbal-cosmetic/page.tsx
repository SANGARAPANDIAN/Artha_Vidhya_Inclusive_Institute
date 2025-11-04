'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HerbalCosmetic() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-16 pb-16 lg:pt-24 lg:pb-24 overflow-hidden -mt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-emerald-50 to-white opacity-90"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
          style={{
            backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJoZXJiYWwtcGF0dGVybiIgeD0iMCIgeT0iMCIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgPGNpcmNsZSBjeD0iMjUiIGN5PSIyNSIgcj0iMTIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzA1OUY2OSIgc3Ryb2tlLXdpZHRoPSIyIiBvcGFjaXR5PSIwLjMiLz4KICAgICAgPHBhdGggZD0iTTI1IDEzdjI0TTE3IDIxaDEyIiBzdHJva2U9IiMwNTlGNjkiIHN0cm9rZS13aWR0aD0iMiIgb3BhY2l0eT0iMC4yIi8+CiAgICA8L3BhdHRlcm4+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjaGVyYmFsLXBhdHRlcm4pIi8+Cjwvc3ZnPg==')"
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
              Herbal Cosmetic Preparation Course
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed"
            >
              Create natural beauty products using traditional herbal knowledge
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/admissions"
                className="inline-flex items-center px-8 py-4 bg-green-600 text-white text-lg font-semibold rounded-xl hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-200"
              >
                Apply Now
              </Link>
              <Link
                href="/courses"
                className="inline-flex items-center px-8 py-4 border-2 border-green-600 text-green-600 text-lg font-semibold rounded-xl hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-200"
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
                  Discover the art of creating natural, eco-friendly cosmetic products through our 
                  comprehensive 6-month Herbal Cosmetic Preparation program. This course combines 
                  traditional herbal knowledge with modern cosmetic science to create sustainable 
                  beauty solutions.
                </p>
                <p className="mb-6">
                  Students will learn to formulate creams, lotions, soaps, shampoos, and other 
                  personal care products using natural ingredients. The course emphasizes safety, 
                  quality control, and entrepreneurial skills for starting your own natural 
                  cosmetics business.
                </p>
                <p>
                  Our accessible laboratory and inclusive teaching methods ensure that students 
                  of all abilities can master the techniques of herbal cosmetic preparation and 
                  develop successful careers in the growing natural beauty industry.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Course Highlights</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-600 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Natural ingredient identification and sourcing</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-600 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Formulation of creams, lotions, and serums</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-600 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Soap making and natural cleansing products</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-600 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Quality testing and preservation methods</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-600 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Business planning and marketing strategies</span>
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
              Our structured curriculum ensures comprehensive learning from herbal basics to advanced product formulation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {[
              {
                month: "Month 1",
                title: "Herbal Foundation",
                topics: ["Herbal ingredient study", "Properties & benefits", "Extraction methods", "Safety guidelines"]
              },
              {
                month: "Month 2", 
                title: "Basic Formulations",
                topics: ["Simple creams", "Basic lotions", "Herbal soaps", "Natural scrubs"]
              },
              {
                month: "Month 3",
                title: "Advanced Products",
                topics: ["Specialized serums", "Hair care products", "Anti-aging formulas", "Quality control"]
              },
              {
                month: "Month 4",
                title: "Cosmetic Science",
                topics: ["pH balancing", "Preservative systems", "Stability testing", "Regulatory compliance"]
              },
              {
                month: "Month 5",
                title: "Production & Packaging",
                topics: ["Scaling recipes", "Equipment operation", "Packaging design", "Label requirements"]
              },
              {
                month: "Month 6",
                title: "Business & Marketing",
                topics: ["Product branding", "Marketing strategies", "Cost calculation", "Industry internship"]
              }
            ].map((month, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg border border-green-200"
              >
                <div className="text-green-600 text-sm font-semibold mb-2">{month.month}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-4">{month.title}</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {month.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
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
              <div className="text-center bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border border-green-200">
                <div className="text-4xl mb-4">🧴</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Natural Beauty Brand</h3>
                <p className="text-gray-600">Start your own natural cosmetics brand and sell online or in local markets</p>
              </div>
              
              <div className="text-center bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border border-green-200">
                <div className="text-4xl mb-4">🏪</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Wellness Consultant</h3>
                <p className="text-gray-600">Provide natural beauty solutions and consulting services to clients</p>
              </div>
              
              <div className="text-center bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border border-green-200">
                <div className="text-4xl mb-4">🌿</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Eco-Business Owner</h3>
                <p className="text-gray-600">Supply herbal cosmetics to spas, salons, and eco-conscious retailers</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
