'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 overflow-hidden -mt-24">
        {/* Enhanced gradient background with decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-primary-200 to-purple-200"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-300/60 via-primary-300/40 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-400/50 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-400/40 via-transparent to-transparent"></div>
        
        {/* Decorative circles */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-primary-400/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight"
            >
              About Us
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed"
            >
              Empowering lives through inclusive education and sustainable skill development
            </motion.p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-primary-100 p-3 rounded-full mr-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
                  Our Vision
                </h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                To create an inclusive society where physically and mentally disabled individuals 
                have equal opportunities to develop skills, gain employment, and achieve sustainable 
                livelihoods through comprehensive vocational training and support.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We envision a world where disability is not a barrier to success, but rather 
                a unique perspective that contributes to the diversity and strength of our communities.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-100 to-primary-50 rounded-2xl p-8"
            >
              <div className="text-center">
                <div className="text-6xl mb-6">🎯</div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Goal-Oriented Approach
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Every program is designed with clear objectives: skill mastery, 
                  employment readiness, and long-term sustainability.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Inclusivity Focus Section */}
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
              Our Commitment to Inclusivity
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Artha Vidhya Inclusive Institute is built on the fundamental belief that 
              every individual, regardless of their physical or mental abilities, 
              deserves access to quality education and meaningful employment opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Adaptive Learning",
                description: "Our curriculum and teaching methods are adapted to meet the unique learning needs and capabilities of each student, ensuring no one is left behind.",
                icon: "🧠"
              },
              {
                title: "Accessible Infrastructure",
                description: "Our facilities are designed with accessibility in mind, featuring ramps, accessible restrooms, and equipment adapted for various disabilities.",
                icon: "♿"
              },
              {
                title: "Specialized Support",
                description: "Dedicated support staff including counselors, occupational therapists, and specialized educators work closely with students.",
                icon: "🤝"
              },
              {
                title: "Individual Assessment",
                description: "Each student undergoes comprehensive assessment to identify their strengths, interests, and areas for development before course selection.",
                icon: "📋"
              },
              {
                title: "Flexible Scheduling",
                description: "Course schedules are flexible to accommodate medical appointments, therapy sessions, and individual learning paces.",
                icon: "⏰"
              },
              {
                title: "Employment Support",
                description: "Active job placement assistance, employer education, and ongoing support to ensure successful transition to employment.",
                icon: "💼"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm border border-primary-200"
              >
                <div className="text-4xl mb-4 text-center">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-center">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Approach Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              Our Training Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We believe in hands-on, practical training that prepares students for real-world 
              employment while building confidence and independence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-primary-50 rounded-xl p-6 border border-primary-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="text-2xl mr-3">🎯</span>
                  Practical Learning
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  All courses emphasize practical, hands-on learning with real-world applications. 
                  Students work with actual equipment and materials they will encounter in their careers.
                </p>
              </div>

              <div className="bg-primary-50 rounded-xl p-6 border border-primary-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="text-2xl mr-3">👥</span>
                  Small Class Sizes
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We maintain small class sizes to ensure personalized attention and support 
                  for each student, allowing instructors to adapt to individual learning needs.
                </p>
              </div>

              <div className="bg-primary-50 rounded-xl p-6 border border-primary-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="text-2xl mr-3">🔄</span>
                  Continuous Assessment
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Regular assessment and feedback help track progress and adjust learning 
                  strategies to ensure each student achieves their maximum potential.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-primary-50 rounded-xl p-6 border border-primary-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="text-2xl mr-3">🏭</span>
                  Industry Partnerships
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We collaborate with local businesses and industries to ensure our training 
                  meets current market demands and provides direct pathways to employment.
                </p>
              </div>

              <div className="bg-primary-50 rounded-xl p-6 border border-primary-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="text-2xl mr-3">🌱</span>
                  Holistic Development
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Beyond technical skills, we focus on communication, teamwork, problem-solving, 
                  and life skills essential for workplace success and personal growth.
                </p>
              </div>

              <div className="bg-primary-50 rounded-xl p-6 border border-primary-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="text-2xl mr-3">📈</span>
                  Follow-up Support
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Our commitment doesn't end at graduation. We provide ongoing support, 
                  mentorship, and career guidance to ensure long-term success.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              Creating Lasting Impact
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Our success is measured not just by the skills our students learn, 
              but by the independence, confidence, and sustainable livelihoods they achieve. 
              Every graduate represents a step toward a more inclusive society.
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-primary-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="text-4xl font-bold text-primary-600 mb-2">100%</div>
                  <p className="text-gray-700 font-medium">Commitment to Inclusion</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary-600 mb-2">6</div>
                  <p className="text-gray-700 font-medium">Specialized Courses</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary-600 mb-2">24/7</div>
                  <p className="text-gray-700 font-medium">Student Support</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
