'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import CourseCard from '@/components/CourseCard'
import VideoHero from '@/components/VideoHero'
import AutoScrollCarousel from '@/components/AutoScrollCarousel'

const courses = [
  {
    title: "Basic Level Automobile Technician Course",
    description: "Comprehensive training in automobile repair and maintenance, focusing on practical skills for independent employment in the automotive industry.",
    duration: "6 months",
    slug: "automobile-technician"
  },
  {
    title: "Herbal Cosmetic Preparation Course", 
    description: "Learn to create natural, herbal cosmetic products using traditional and modern techniques for sustainable livelihood opportunities.",
    duration: "6 months",
    slug: "herbal-cosmetic"
  },
  {
    title: "Hand Block Printing on Fabrics Course",
    description: "Master the traditional art of hand block printing on various fabrics, developing skills for textile industry employment.",
    duration: "6 months", 
    slug: "hand-block-printing"
  },
  {
    title: "Food Processing Technology Course",
    description: "Gain expertise in food processing techniques, preservation methods, and quality control for food industry careers.",
    duration: "6 months",
    slug: "food-processing"
  },
  {
    title: "Clay Modeling & Sculpture Course",
    description: "Master the ancient art of clay modeling and sculpture creation, developing skills for artistic expression and commercial pottery work.",
    duration: "6 months",
    slug: "clay-modeling"
  },
  {
    title: "Computer Skills Development Course",
    description: "Comprehensive computer training covering essential digital literacy, office applications, and modern workplace technology skills.",
    duration: "6 months",
    slug: "computer-skills"
  }
]

export default function Home() {
  return (
    <div>
      {/* Video Hero Section - Full Screen */}
      <VideoHero />

      {/* Mission Section */}
      <section className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-primary-50 via-white to-blue-50 relative overflow-hidden">
        {/* Enhanced Background decorations */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-primary-300 to-primary-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-56 h-56 bg-gradient-to-br from-blue-300 to-blue-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-primary-200/50 relative">
              
                <div className="flex items-center mb-8">
                  <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-6 rounded-2xl shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent mb-4">
                  Our Mission
                </h2>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                  Empowering lives through inclusive skill-based training, creating pathways to 
                  independence and sustainable livelihoods for students with diverse abilities through 
                  comprehensive vocational education and holistic empowerment programs.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <Link
                    href="/admissions"
                    className="inline-flex items-center px-6 py-3 bg-primary-600 text-white text-base font-semibold rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Apply for Admission
                  </Link>
                  <Link
                    href="/courses" 
                    className="inline-flex items-center px-6 py-3 border-2 border-primary-600 text-primary-600 text-base font-semibold rounded-lg hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-200 transform hover:-translate-y-1"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
                    </svg>
                    Explore Courses
                  </Link>
                </div>
              </div>
            </motion.div>
            
            {/* Right Visual Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-primary-200/50">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-2xl">🎓</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-primary-800 text-lg">Inclusive Education</h3>
                      <p className="text-sm text-primary-600">Accessible learning for all abilities</p>
                    </div>
                  </div>
                  <div className="w-full bg-primary-100 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full w-4/5"></div>
                  </div>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-blue-200/50">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-2xl">🛠️</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-blue-800 text-lg">Practical Skills</h3>
                      <p className="text-sm text-blue-600">Real-world applications</p>
                    </div>
                  </div>
                  <div className="w-full bg-blue-100 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full w-5/6"></div>
                  </div>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-green-200/50">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-2xl">🚀</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-green-800 text-lg">Career Success</h3>
                      <p className="text-sm text-green-600">Sustainable livelihoods</p>
                    </div>
                  </div>
                  <div className="w-full bg-green-100 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full w-full"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-white via-gray-50 to-primary-50 relative overflow-hidden" id="courses">
        {/* Enhanced Decorative elements */}
        <div className="absolute inset-0 overflow-hidden opacity-40">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary-200 to-primary-300 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute bottom-20 left-1/3 w-36 h-36 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '3s' }}></div>
          <div className="absolute top-1/4 left-1/2 w-24 h-24 bg-gradient-to-br from-green-200 to-emerald-200 rounded-full blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <div className="flex items-center justify-center mb-4">
              <div className="bg-gradient-to-br from-primary-500 to-blue-600 p-4 rounded-xl shadow-lg relative">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
                </svg>
                {/* Floating badge */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">6</span>
                </div>
              </div>
            </div>
                        <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-800 to-primary-600 bg-clip-text text-transparent mb-4">
              Our Comprehensive Programs
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-6">
              Empowering individuals with disabilities through skill development and inclusive education
            </p>
            
            {/* Program highlights */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <span className="px-6 py-3 bg-gradient-to-r from-primary-100 to-blue-100 text-primary-700 rounded-full font-semibold border border-primary-200">
                6 Month Duration
              </span>
              <span className="px-6 py-3 bg-gradient-to-r from-green-100 to-teal-100 text-green-700 rounded-full font-semibold border border-green-200">
                Industry Certified
              </span>
              <span className="px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full font-semibold border border-purple-200">
                Job Placement Support
              </span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8 auto-rows-fr">
            {courses.map((course, index) => (
              <motion.div
                key={course.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="w-full h-full"
              >
                <CourseCard {...course} index={index} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              href="/courses"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white text-lg font-semibold rounded-xl hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              View All Courses
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="min-h-screen flex items-center justify-center py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-primary-50 relative overflow-hidden">
        {/* Background patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{backgroundImage: 'radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px), radial-gradient(circle at 75% 75%, #8b5cf6 2px, transparent 2px)', backgroundSize: '60px 60px'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <div className="bg-gradient-to-br from-primary-500 to-blue-600 p-4 rounded-xl shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-800 to-primary-600 bg-clip-text text-transparent mb-4">
              Why Choose Artha Vidhya?
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Experience comprehensive support in an inclusive learning environment 
              specifically designed for students with diverse abilities and aspirations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {[
              {
                icon: "🎯",
                title: "Personalized Learning",
                description: "Tailored training programs adapted to individual learning styles and abilities.",
                gradient: "from-red-500 to-pink-500",
                bg: "from-red-50 to-pink-50"
              },
              {
                icon: "👩‍🏫",
                title: "Expert Instructors",
                description: "Experienced professionals trained in inclusive education methodologies.",
                gradient: "from-blue-500 to-indigo-500",
                bg: "from-blue-50 to-indigo-50"
              },
              {
                icon: "🔧",
                title: "Hands-on Training",
                description: "Practical skill development through real-world projects and applications.",
                gradient: "from-green-500 to-teal-500",
                bg: "from-green-50 to-teal-50"
              },
              {
                icon: "📋",
                title: "Certification Programs",
                description: "Industry-recognized certifications to enhance employment opportunities.",
                gradient: "from-purple-500 to-violet-500",
                bg: "from-purple-50 to-violet-50"
              },
              {
                icon: "💼",
                title: "Job Placement Support",
                description: "Career guidance and placement assistance for sustainable livelihoods.",
                gradient: "from-orange-500 to-amber-500",
                bg: "from-orange-50 to-amber-50"
              },
              {
                icon: "🏠",
                title: "Inclusive Environment",
                description: "Accessible facilities designed for students with diverse physical and mental abilities.",
                gradient: "from-primary-500 to-blue-500",
                bg: "from-primary-50 to-blue-50"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true }}
                className={`bg-gradient-to-br ${feature.bg} rounded-2xl p-8 shadow-xl border border-white/50 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group relative overflow-hidden`}
              >
                {/* Background glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <div className={`relative bg-gradient-to-br ${feature.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-3xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-primary-600 via-blue-600 to-purple-700 relative overflow-hidden">
        {/* Background animations */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-yellow-300/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/20 shadow-2xl"
          >
            {/* Floating elements */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 w-8 h-8 rounded-xl flex items-center justify-center shadow-lg animate-bounce">
                <span className="text-white text-sm">🌟</span>
              </div>
            </div>
            
            <div className="flex items-center justify-center mb-4">
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
              Ready to Transform 
              <span className="block text-yellow-300">Your Future?</span>
            </h2>
            
            <p className="text-lg lg:text-xl text-white/90 mb-6 leading-relaxed max-w-2xl mx-auto">
              Join our inclusive community of learners and unlock your potential through 
              skill development, personal growth, and sustainable career opportunities.
            </p>
            
           
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link
                href="/admissions"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 text-lg font-bold rounded-xl hover:from-yellow-300 hover:to-orange-400 focus:outline-none focus:ring-4 focus:ring-yellow-300/50 transition-all duration-300 shadow-xl hover:shadow-yellow-500/25 transform hover:-translate-y-1"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Apply Now - Start Today
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center px-6 py-3 border-2 border-white/60 text-white text-lg font-bold rounded-xl hover:bg-white/10 hover:border-white focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-300 backdrop-blur-sm transform hover:-translate-y-1"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Learn More About Us
              </Link>
            </div>
            
            <div className="text-center">
              <p className="text-base text-white/80 mb-2">Questions? We're here to help!</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
                <a href="tel:+918637692101" className="text-yellow-300 hover:text-yellow-200 transition-colors flex items-center justify-center">
                  <span className="mr-2">📞</span> +91 863-769-2101
                </a>
                <a href="mailto:info@arthavidhya.org" className="text-yellow-300 hover:text-yellow-200 transition-colors flex items-center justify-center">
                  <span className="mr-2">✉️</span> info@arthavidhya.org
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

            {/* Success Stories and Impact Section */}
      <section className="min-h-screen flex items-center py-8 bg-white">
        <div className="w-full">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforming lives through inclusive education and sustainable skill development programs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8"
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">Learning Support</div>
              <p className="text-gray-600">Continuous guidance and assistance available</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8"
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">85%</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">Employment Rate</div>
              <p className="text-gray-600">Graduates successfully placed in jobs or self-employment</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8"
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">6</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">Specialized Courses</div>
              <p className="text-gray-600">Comprehensive skill development programs available</p>
            </motion.div>
          </div>

          {/* Skills Development Focus */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-8 md:p-12 text-white text-center"
          >
            <div className="text-6xl mb-6">🎯</div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Comprehensive Skills Development</h3>
            <p className="text-xl text-primary-100 mb-8">
              Our programs focus on building practical skills, fostering independence, and creating sustainable career pathways for all students through hands-on training and personalized guidance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl mb-2">💪</div>
                <h4 className="font-semibold mb-1">Practical Training</h4>
                <p className="text-primary-200 text-sm">Real-world skills development</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl mb-2">🚀</div>
                <h4 className="font-semibold mb-1">Career Ready</h4>
                <p className="text-primary-200 text-sm">Industry-focused preparation</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl mb-2">🤝</div>
                <h4 className="font-semibold mb-1">Inclusive Support</h4>
                <p className="text-primary-200 text-sm">Accessible learning environment</p>
              </div>
            </div>
          </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Showcase Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Skills in Action</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the diverse practical skills our students develop through hands-on training and real-world application
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 border border-primary-200 shadow-lg"
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Technical Mastery</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Students develop hands-on expertise in automobile maintenance, repair techniques, and diagnostic skills through practical workshop training.
              </p>
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-4">
                <p className="text-sm text-primary-700 font-medium">Real-world problem solving abilities</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 border border-green-200 shadow-lg"
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">🌿</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Creative Innovation</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Learn to create natural herbal products, combining traditional knowledge with modern techniques for sustainable entrepreneurship.
              </p>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4">
                <p className="text-sm text-green-700 font-medium">Sustainable product development skills</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border border-blue-200 shadow-lg"
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">💻</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Digital Proficiency</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Master essential computer skills, digital communication, and workplace technology through accessible and adaptive learning methods.
              </p>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4">
                <p className="text-sm text-blue-700 font-medium">Modern workplace readiness</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Teaching Philosophy Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Teaching Philosophy</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Fostering an inclusive learning environment where every student can develop practical skills and achieve their potential
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Core Teaching Principles</h3>
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">🎯 Individual Paced Learning</h4>
                <p className="text-gray-600">Every student learns at their own pace with personalized instruction adapted to their unique abilities and learning style.</p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">🤝 Collaborative Support</h4>
                <p className="text-gray-600">Creating a supportive community where students help each other and learn together through shared experiences.</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6 border border-purple-200">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">⚡ Practical Application</h4>
                <p className="text-gray-600">Focus on hands-on learning and real-world skills that directly translate to employment opportunities and independence.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Learning Approaches</h3>

              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border border-red-200">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">🔄 Adaptive Methods</h4>
                <p className="text-gray-600">Flexible teaching techniques that adjust to different learning needs, abilities, and communication styles.</p>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">🎨 Multi-Sensory Learning</h4>
                <p className="text-gray-600">Engaging multiple senses through visual, auditory, and tactile learning experiences for better comprehension.</p>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6 border border-pink-200">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">🌟 Strength-Based Focus</h4>
                <p className="text-gray-600">Identifying and building upon each student's unique strengths and talents to maximize their potential.</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 md:p-12 text-white text-center"
          >
            <h3 className="text-3xl font-bold mb-4">Student Success Framework</h3>
            <p className="text-xl text-primary-100 mb-8">
              Our comprehensive approach ensures every student receives the support they need to succeed
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl mb-4">📚</div>
                <h4 className="text-lg font-semibold mb-2">Curriculum Design</h4>
                <p className="text-primary-100 text-sm">Structured 6-month programs designed for progressive skill development</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl mb-4">👥</div>
                <h4 className="text-lg font-semibold mb-2">Instructor Support</h4>
                <p className="text-primary-100 text-sm">Dedicated teachers trained in inclusive education and adaptive instruction</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl mb-4">💼</div>
                <h4 className="text-lg font-semibold mb-2">Career Preparation</h4>
                <p className="text-primary-100 text-sm">Job readiness training and placement support for sustainable employment</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Campus Gallery Carousel Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-primary-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Explore Our Campus
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Take a virtual tour of our inclusive and accessible training facilities
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <AutoScrollCarousel 
              images={[
                '/assets/gallery/Campus entrance.jpg',
                '/assets/gallery/Campus office.jpg',
                '/assets/gallery/Classrooms.jpg',
                '/assets/gallery/Digital learning area.jpg',
                '/assets/gallery/Food processing area.jpg',
                '/assets/gallery/Food processing tools.jpg',
                '/assets/gallery/Hand printed garments.jpg',
                '/assets/gallery/Hand printing tools.jpg',
                '/assets/gallery/Clay moulding tools.jpg',
                '/assets/gallery/Handcrafted sculptures.jpg',
                '/assets/gallery/Handcrafted toys and idols.jpg'
              ]}
              speed={25}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
           
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section - Enhanced */}
      <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8">Transform Your Future Today</h2>
            <p className="text-2xl text-primary-100 mb-12 max-w-4xl mx-auto">
              Join thousands of successful graduates who have built independent, fulfilling careers through our inclusive skill development programs
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold mb-3">Start Your Journey</h3>
                <p className="text-primary-100">Begin with a consultation to explore the best course for your goals</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-3">Achieve Independence</h3>
                <p className="text-primary-100">Gain practical skills that lead to sustainable employment and self-reliance</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <div className="text-5xl mb-4">🌟</div>
                <h3 className="text-xl font-semibold mb-3">Make an Impact</h3>
                <p className="text-primary-100">Become part of a community that's changing lives and building better futures</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/admissions"
                className="inline-flex items-center px-10 py-5 bg-white text-primary-600 text-xl font-bold rounded-2xl hover:bg-primary-50 focus:outline-none focus:ring-4 focus:ring-white/50 transition-all duration-200 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
              >
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Apply Now - Get Started
              </Link>
              <Link
                href="/courses"
                className="inline-flex items-center px-10 py-5 border-3 border-white text-white text-xl font-bold rounded-2xl hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-white/50 transition-all duration-200 transform hover:-translate-y-1"
              >
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
                </svg>
                Explore All Courses
              </Link>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-primary-200 mb-4">Questions? We're here to help!</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center text-lg">
                <a href="tel:+918637692101" className="text-primary-100 hover:text-white transition-colors">
                  <span className="inline-block">📞</span> +91 863 769 2101
                </a>
                <a href="mailto:info@arthavidhya.org" className="text-primary-100 hover:text-white transition-colors">
                  <span className="inline-block">✉️</span> info@arthavidhya.org
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
