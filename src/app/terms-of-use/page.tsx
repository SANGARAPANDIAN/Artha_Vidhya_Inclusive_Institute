'use client'

import { motion } from 'framer-motion'

export default function TermsOfUse() {
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
              Terms of Use
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed"
            >
              Terms and conditions for using our website and services
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg text-gray-500"
            >
              Last updated: October 10, 2025
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
            className="space-y-12"
          >
            {/* Introduction */}
            <div className="bg-primary-50 rounded-2xl p-8 border border-primary-200">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome to Artha Vidhya Institute</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms of Use ("Terms") govern your access to and use of the website and services provided by 
                Artha Vidhya Inclusive Institute for Skill Development and Sustainable Livelihoods ("we," "our," or "us"). 
                By accessing or using our website, you agree to be bound by these Terms.
              </p>
            </div>

            {/* Acceptance of Terms */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Acceptance of Terms</h2>
              
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <p className="text-gray-700 leading-relaxed mb-4">
                  By accessing or using our website, mobile application, or any of our services, you acknowledge that you have read, 
                  understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, 
                  please do not use our services.
                </p>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Notice</h3>
                  <p className="text-yellow-700 text-sm leading-relaxed">
                    These Terms may be updated from time to time. Your continued use of our services after any changes 
                    constitutes acceptance of the updated Terms.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Use of Website */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Use of Our Website</h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-primary-100 to-primary-50 rounded-xl p-6 border border-primary-200">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Permitted Use</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    You may use our website for lawful purposes only, including:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-primary-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Learning about our educational programs and services</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-primary-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Applying for admission to our courses</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-primary-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Contacting us for information or support</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-primary-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Accessing accessibility features and resources</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Prohibited Activities</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    You agree not to use our website for any of the following prohibited activities:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-red-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      <span>Violating any applicable laws or regulations</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-red-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      <span>Attempting to gain unauthorized access to our systems</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-red-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      <span>Transmitting viruses, malware, or other harmful code</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-red-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      <span>Harassing, intimidating, or discriminating against others</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-red-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      <span>Using automated systems to access or scrape our website</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Educational Services */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Educational Services</h2>
              
              <div className="bg-gradient-to-br from-primary-100 to-primary-50 rounded-xl p-8 border border-primary-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Program Enrollment</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Enrollment in our educational programs is subject to:
                </p>
                
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-primary-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Meeting eligibility criteria as outlined on our website</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-primary-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Completion of the application process</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-primary-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Acceptance by our admissions committee</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-primary-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Availability of program spaces</span>
                  </li>
                </ul>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Student Responsibilities</h3>
                <p className="text-gray-700 leading-relaxed">
                  Students enrolled in our programs are expected to maintain respectful behavior, attend classes regularly, 
                  complete assignments, and follow our code of conduct. We provide a supportive and inclusive learning 
                  environment for all students.
                </p>
              </div>
            </motion.section>

            {/* Intellectual Property */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Intellectual Property</h2>
              
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Our Content</h3>
                    <p className="text-gray-700 text-sm leading-relaxed mb-3">
                      All content on this website, including text, graphics, logos, design elements, and software, 
                      is owned by Artha Vidhya Institute or licensed to us.
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      You may view and use this content for personal, non-commercial purposes only. 
                      Reproduction or distribution requires our written permission.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Your Content</h3>
                    <p className="text-gray-700 text-sm leading-relaxed mb-3">
                      When you submit information through our website (such as application materials), 
                      you retain ownership of your content.
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      However, you grant us permission to use this information for the purposes of 
                      providing our educational services and improving our programs.
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Accessibility Commitment */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Accessibility Commitment</h2>
              
              <div className="bg-primary-50 rounded-xl p-6 border border-primary-200">
                <p className="text-gray-700 leading-relaxed mb-4">
                  We are committed to ensuring that our website and services are accessible to people with disabilities. 
                  We continually improve the user experience for everyone and apply relevant accessibility standards.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Accessibility Features</h3>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Keyboard navigation support</li>
                      <li>• Screen reader compatibility</li>
                      <li>• High contrast options</li>
                      <li>• Adjustable text size</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Feedback Welcome</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      If you encounter accessibility barriers, please contact us. 
                      We value your feedback and will work to address any issues.
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Disclaimers */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Disclaimers and Limitations</h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-primary-100 to-primary-50 rounded-xl p-6 border border-primary-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Information Accuracy</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    While we strive to provide accurate and up-to-date information, we cannot guarantee that all 
                    information on our website is complete, accurate, or current. Program details, requirements, 
                    and policies may change without notice.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Service Availability</h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">
                    We provide our website and services "as is" without warranties of any kind. We do not guarantee 
                    uninterrupted access to our website or services.
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    We reserve the right to modify, suspend, or discontinue any part of our website or services 
                    at any time without notice.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Contact Information */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Information</h2>
              
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <p className="text-gray-700 leading-relaxed mb-6">
                  If you have any questions about these Terms of Use, please contact us:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">General Inquiries</h3>
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

                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Legal Matters</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      For legal inquiries related to these Terms of Use, intellectual property, or other legal matters, 
                      please contact our administrative office during business hours or send an email with "Legal Inquiry" 
                      in the subject line.
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Governing Law */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Governing Law</h2>
              
              <div className="bg-primary-50 rounded-xl p-6 border border-primary-200">
                <p className="text-gray-700 leading-relaxed">
                  These Terms of Use are governed by the laws of India. Any disputes arising from or relating to these Terms 
                  or your use of our website and services will be resolved through appropriate legal channels in accordance 
                  with Indian law and jurisdiction.
                </p>
              </div>
            </motion.section>
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
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join our inclusive community and discover opportunities for skill development and sustainable livelihoods.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/admissions"
                className="inline-flex items-center px-8 py-4 bg-primary-600 text-white text-lg font-semibold rounded-xl hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors duration-200"
              >
                Apply Now
              </a>
              <a
                href="/courses"
                className="inline-flex items-center px-8 py-4 border-2 border-primary-600 text-primary-600 text-lg font-semibold rounded-xl hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors duration-200"
              >
                Explore Courses
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
