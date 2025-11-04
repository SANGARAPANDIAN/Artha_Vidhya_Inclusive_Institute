'use client'

import { motion } from 'framer-motion'

export default function AccessibilityStatement() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-100 via-primary-50 to-white"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight"
            >
              Accessibility Statement
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed"
            >
              Our commitment to creating an inclusive and accessible learning environment for all
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <div className="bg-primary-50 rounded-2xl p-8 border border-primary-200 mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Commitment</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                Artha Vidhya Inclusive Institute for Skill Development and Sustainable Livelihoods is committed to 
                ensuring digital accessibility and inclusive learning for people with disabilities. We believe that 
                everyone deserves equal access to education, employment opportunities, and digital resources.
              </p>
            </div>

            <div className="space-y-12">
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Web Accessibility Standards</h2>
                <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Our website is designed to be accessible to the widest range of people with disabilities, 
                    including those who rely on assistive technologies. We strive to adhere to the 
                    <strong> Web Content Accessibility Guidelines (WCAG) 2.1 Level AA</strong> standards.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Accessibility Features Include:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Keyboard-only navigation support</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Screen reader compatibility with ARIA labels and roles</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>High contrast color options</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Adjustable text size options</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Alternative text for all meaningful images</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Consistent and predictable navigation</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Form labels and error messages</span>
                    </li>
                  </ul>
                </div>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Campus Accessibility</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-primary-50 rounded-xl p-6 border border-primary-200">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Physical Infrastructure</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Wheelchair accessible entrances and pathways</li>
                      <li>• Accessible restrooms with proper grab bars</li>
                      <li>• Elevators where multi-story access is needed</li>
                      <li>• Reserved accessible parking spaces</li>
                      <li>• Wide corridors and doorways</li>
                      <li>• Accessible drinking fountains</li>
                    </ul>
                  </div>
                  
                  <div className="bg-primary-50 rounded-xl p-6 border border-primary-200">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Learning Environment</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Adjustable height tables and workstations</li>
                      <li>• Assistive technology integration</li>
                      <li>• Visual aids and large print materials</li>
                      <li>• Audio enhancement systems</li>
                      <li>• Quiet spaces for concentration</li>
                      <li>• Flexible seating arrangements</li>
                    </ul>
                  </div>
                </div>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Educational Support Services</h2>
                <div className="bg-gradient-to-br from-primary-100 to-primary-50 rounded-xl p-8 border border-primary-200">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    We provide comprehensive support services to ensure that all students can fully participate 
                    in their educational programs regardless of their disability or individual needs.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">Academic Accommodations</h3>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Extended time for assignments and assessments</li>
                        <li>• Alternative format materials</li>
                        <li>• Note-taking assistance</li>
                        <li>• Assistive technology support</li>
                        <li>• Modified course requirements when appropriate</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">Personal Support</h3>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Individual counseling and guidance</li>
                        <li>• Career planning assistance</li>
                        <li>• Peer support programs</li>
                        <li>• Transportation coordination</li>
                        <li>• Communication support services</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Ongoing Improvement</h2>
                <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We are continuously working to improve the accessibility of our website, facilities, and services. 
                    We regularly:
                  </p>
                  
                  <ul className="space-y-2 text-gray-700 mb-6">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Conduct accessibility audits of our website and facilities</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Train our staff on accessibility best practices</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Seek feedback from students and users with disabilities</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Update our accessibility policies and procedures</span>
                    </li>
                  </ul>
                  
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Last updated:</strong> This accessibility statement was last reviewed and updated in [Current Month, Year].
                  </p>
                </div>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Feedback and Contact</h2>
                <div className="bg-gradient-to-br from-primary-100 to-primary-50 rounded-xl p-8 border border-primary-200">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    We welcome your feedback on the accessibility of our website and facilities. If you encounter 
                    any accessibility barriers or have suggestions for improvement, please don't hesitate to contact us.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">Contact Information</h3>
                      <div className="space-y-2 text-gray-700">
                        <p className="flex items-center">
                          <svg className="w-4 h-4 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          info@arthavidhya.org
                        </p>
                        <p className="flex items-center">
                          <svg className="w-4 h-4 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          +91 863 769 2101
                        </p>
                        <p className="flex items-center">
                          <svg className="w-4 h-4 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          +91 962 919 9942
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">Response Time</h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        We aim to respond to accessibility-related inquiries within 2-3 business days. 
                        For urgent accessibility needs, please call us directly during business hours.
                      </p>
                      
                      <h3 className="text-lg font-semibold text-gray-800 mb-3 mt-4">Alternative Formats</h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        This accessibility statement is available in alternative formats upon request, 
                        including large print, audio, and accessible electronic formats.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.section>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              Join Our Inclusive Community
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We're committed to creating an educational environment where everyone can thrive. 
              Learn more about our programs and how we can support your educational journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/admissions"
                className="inline-flex items-center px-8 py-4 bg-primary-600 text-white text-lg font-semibold rounded-xl hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors duration-200"
              >
                Apply for Admission
              </a>
              <a
                href="/location"
                className="inline-flex items-center px-8 py-4 border-2 border-primary-600 text-primary-600 text-lg font-semibold rounded-xl hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors duration-200"
              >
                Visit Our Campus
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
