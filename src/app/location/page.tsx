'use client'

import { motion } from 'framer-motion'
import GoogleMap from '@/components/GoogleMap'

export default function Location() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-12 pb-12 lg:pt-16 lg:pb-16 overflow-hidden -mt-24">
        {/* Enhanced gradient background with decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-200 via-primary-200 to-indigo-200"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-teal-300/60 via-primary-300/40 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,_var(--tw-gradient-stops))] from-teal-400/50 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_center,_var(--tw-gradient-stops))] from-indigo-400/40 via-transparent to-transparent"></div>
        
        {/* Decorative circles */}
        <div className="absolute top-5 right-10 w-64 h-64 bg-teal-300/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-5 left-10 w-72 h-72 bg-indigo-300/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary-300/30 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight"
            >
              Our Location
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed"
            >
              Visit our accessible campus designed for inclusive education
            </motion.p>
          </div>
        </div>
      </section>

      {/* Address Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                Find Us
              </h2>
              <div className="bg-primary-50 rounded-2xl p-8 border border-primary-200 mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <svg className="w-6 h-6 text-primary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Campus Address
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Artha Vidhya Inclusive Institute<br />
                  For Skill Development and Sustainable Livelihoods<br />
                  <span className="text-gray-600">[Complete address to be provided]</span><br />
                  <span className="text-gray-600">[City, State, PIN Code]</span><br />
                  <span className="text-gray-600">India</span>
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-primary-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-800">Phone Numbers</p>
                    <div className="text-gray-600">
                      <p>+91 863 769 2101</p>
                      <p>+91 962 919 9942</p>
                      <p>+91 984 333 3824</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <svg className="w-6 h-6 text-primary-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-800">Email</p>
                    <p className="text-gray-600">info@arthavidhya.org</p>
                  </div>
                </div>


              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-100 to-primary-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                Campus Hours
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-primary-200">
                  <span className="font-semibold text-gray-800">Monday - Friday</span>
                  <span className="text-gray-600">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-primary-200">
                  <span className="font-semibold text-gray-800">Saturday</span>
                  <span className="text-gray-600">9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-semibold text-gray-800">Sunday</span>
                  <span className="text-gray-600">Closed</span>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-primary-200">
                <h4 className="font-semibold text-gray-800 mb-3">Office Hours</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Administrative office is open Monday to Friday, 9:00 AM to 5:00 PM. 
                  For appointments outside these hours, please call in advance.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <GoogleMap />
        </div>
      </section>

      {/* Accessibility Features */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              Accessible Campus Features
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our campus is designed with accessibility in mind, ensuring that all students 
              can navigate and use our facilities comfortably and safely.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Accessible Entrances",
                description: "Wide doorways and ramps at all building entrances to accommodate students with mobility needs.",
                icon: "🚪"
              },
              {
                title: "Comfortable Seating",
                description: "Ergonomic chairs and flexible seating arrangements in all classrooms and common areas.",
                icon: "🪑"
              },
              {
                title: "Well-lit Spaces",
                description: "Bright, natural lighting throughout the campus to create a welcoming learning environment.",
                icon: "💡"
              },
              {
                title: "Safety Features",
                description: "Emergency communication systems and clearly marked exits throughout the facility.",
                icon: "🚨"
              },
              {
                title: "Flexible Workstations",
                description: "Adjustable work surfaces and equipment to accommodate different learning preferences.",
                icon: "⚙️"
              },
              {
                title: "Training Equipment",
                description: "Modern, accessible training equipment and tools for hands-on skill development.",
                icon: "🛠️"
              },
              {
                title: "Support Services",
                description: "Dedicated spaces for counseling, academic support, and student services.",
                icon: "🤝"
              },
              {
                title: "Assistive Technology",
                description: "Modern assistive devices and software to support students with various learning needs.",
                icon: "💻"
              },
              {
                title: "Quiet Study Areas",
                description: "Peaceful, distraction-free zones for focused learning and individual study sessions.",
                icon: "📚"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm border border-primary-200 text-center"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              Plan Your Visit
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We welcome you to visit our campus and see our facilities firsthand. 
              Schedule a tour to learn more about our programs and meet our inclusive community.
            </p>
            
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 shadow-sm border border-primary-200 mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Campus Tours Available</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                We offer guided tours of our accessible facilities, classrooms, and laboratories. 
                Tours can be arranged to accommodate your specific needs and schedule preferences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+918637692101"
                  className="inline-flex items-center px-8 py-4 bg-primary-600 text-white text-lg font-semibold rounded-xl hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors duration-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call to Schedule
                </a>
                <a
                  href="/admissions"
                  className="inline-flex items-center px-8 py-4 border-2 border-primary-600 text-primary-600 text-lg font-semibold rounded-xl hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors duration-200"
                >
                  Apply for Admission
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
