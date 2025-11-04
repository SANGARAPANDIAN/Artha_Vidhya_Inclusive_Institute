'use client'

import { motion } from 'framer-motion'

export default function PrivacyPolicy() {
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
              Privacy Policy
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed"
            >
              How we collect, use, and protect your personal information
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
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                Artha Vidhya Inclusive Institute for Skill Development and Sustainable Livelihoods ("we," "our," or "us") 
                is committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, 
                use, disclose, and safeguard your information when you visit our website, apply for our programs, or interact 
                with our services.
              </p>
            </div>

            {/* Information We Collect */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Information We Collect</h2>
              
              <div className="space-y-6">
                <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Personal Information</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    When you apply for admission or contact us, we may collect the following personal information:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-primary-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Name, age, and contact information (phone number, email address, mailing address)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-primary-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Educational background and qualifications</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-primary-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Information about disabilities or special accommodation needs</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-primary-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Emergency contact information</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-primary-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Course preferences and career goals</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Technical Information</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    When you visit our website, we may automatically collect certain technical information:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-primary-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>IP address and browser information</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-primary-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Pages visited and time spent on our website</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-primary-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Device and operating system information</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-primary-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Accessibility preferences (high contrast, large text settings)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* How We Use Information */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">How We Use Your Information</h2>
              
              <div className="bg-gradient-to-br from-primary-100 to-primary-50 rounded-xl p-8 border border-primary-200">
                <p className="text-gray-700 leading-relaxed mb-6">
                  We use the information we collect for the following purposes:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Educational Services</h3>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Process admission applications</li>
                      <li>• Provide appropriate accommodations</li>
                      <li>• Deliver educational programs</li>
                      <li>• Track academic progress</li>
                      <li>• Provide student support services</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Communication</h3>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Respond to inquiries and requests</li>
                      <li>• Send program updates and announcements</li>
                      <li>• Provide important notifications</li>
                      <li>• Emergency communications</li>
                      <li>• Alumni relations</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Legal and Safety</h3>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Comply with legal requirements</li>
                      <li>• Maintain campus safety and security</li>
                      <li>• Investigate incidents or complaints</li>
                      <li>• Protect our rights and property</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Improvement</h3>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Improve our programs and services</li>
                      <li>• Enhance website functionality</li>
                      <li>• Conduct research and analysis</li>
                      <li>• Develop new accessibility features</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Information Sharing */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Information Sharing and Disclosure</h2>
              
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <p className="text-gray-700 leading-relaxed mb-6">
                  We do not sell, trade, or rent your personal information to third parties. We may share your 
                  information only in the following limited circumstances:
                </p>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-primary-500 pl-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">With Your Consent</h3>
                    <p className="text-gray-700 text-sm">When you explicitly agree to share your information with specific third parties.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Service Providers</h3>
                    <p className="text-gray-700 text-sm">With trusted third-party service providers who assist in operating our website, conducting business, or serving our students, provided they agree to keep information confidential.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Legal Requirements</h3>
                    <p className="text-gray-700 text-sm">When required by law, court order, or government regulations, or to protect our rights, property, or safety.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary-500 pl-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Emergency Situations</h3>
                    <p className="text-gray-700 text-sm">To protect the health, safety, or rights of our students, staff, or the public in emergency situations.</p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Data Security */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Data Security</h2>
              
              <div className="bg-primary-50 rounded-xl p-6 border border-primary-200">
                <p className="text-gray-700 leading-relaxed mb-4">
                  We implement appropriate technical and organizational security measures to protect your personal 
                  information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-primary-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Secure data encryption for sensitive information</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-primary-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Access controls and user authentication</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-primary-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Regular security audits and updates</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-primary-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Staff training on data protection practices</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-primary-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Secure physical storage of paper documents</span>
                  </li>
                </ul>
              </div>
            </motion.section>

            {/* Your Rights */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Your Privacy Rights</h2>
              
              <div className="bg-gradient-to-br from-primary-100 to-primary-50 rounded-xl p-8 border border-primary-200">
                <p className="text-gray-700 leading-relaxed mb-6">
                  You have certain rights regarding your personal information:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-4 border border-primary-200">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Access</h3>
                    <p className="text-gray-700 text-sm">Request access to your personal information we hold.</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border border-primary-200">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Correction</h3>
                    <p className="text-gray-700 text-sm">Request correction of inaccurate or incomplete information.</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border border-primary-200">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Deletion</h3>
                    <p className="text-gray-700 text-sm">Request deletion of your personal information, subject to legal requirements.</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border border-primary-200">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Opt-out</h3>
                    <p className="text-gray-700 text-sm">Opt-out of non-essential communications at any time.</p>
                  </div>
                </div>
                
                <p className="text-gray-700 text-sm leading-relaxed mt-6">
                  To exercise these rights, please contact us using the information provided at the end of this policy. 
                  We will respond to your request within a reasonable timeframe.
                </p>
              </div>
            </motion.section>

            {/* Contact Information */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h2>
              
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <p className="text-gray-700 leading-relaxed mb-6">
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us:
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

                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Privacy Officer</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      For privacy-specific inquiries, you may also contact our designated Privacy Officer who handles 
                      all data protection matters and can assist with privacy-related requests and concerns.
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Policy Updates */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Changes to This Policy</h2>
              
              <div className="bg-primary-50 rounded-xl p-6 border border-primary-200">
                <p className="text-gray-700 leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. 
                  We will notify you of any material changes by posting the updated policy on our website and updating the 
                  "Last updated" date. We encourage you to review this policy periodically to stay informed about how we 
                  protect your privacy.
                </p>
              </div>
            </motion.section>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
