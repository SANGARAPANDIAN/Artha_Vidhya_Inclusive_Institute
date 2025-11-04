'use client'

import { motion } from 'framer-motion'
import CourseCard from '@/components/CourseCard'

const courses = [
  {
    title: "Basic Level Automobile Technician Course",
    description: "Comprehensive training in automobile repair and maintenance, focusing on practical skills for independent employment in the automotive industry. Learn engine diagnostics, brake systems, electrical components, and general automotive maintenance.",
    duration: "6 months",
    slug: "automobile-technician",
    highlights: ["Engine diagnostics", "Brake and suspension systems", "Electrical troubleshooting", "Preventive maintenance"]
  },
  {
    title: "Herbal Cosmetic Preparation Course", 
    description: "Learn to create natural, herbal cosmetic products using traditional and modern techniques for sustainable livelihood opportunities. Master the art of natural skincare, haircare, and wellness product creation.",
    duration: "6 months",
    slug: "herbal-cosmetic",
    highlights: ["Natural ingredient sourcing", "Product formulation", "Quality testing", "Packaging and marketing"]
  },
  {
    title: "Hand Block Printing on Fabrics Course",
    description: "Master the traditional art of hand block printing on various fabrics, developing skills for textile industry employment. Learn traditional techniques, design creation, and modern applications.",
    duration: "6 months", 
    slug: "hand-block-printing",
    highlights: ["Block carving techniques", "Color mixing and dyes", "Pattern design", "Fabric selection and preparation"]
  },
  {
    title: "Food Processing Technology Course",
    description: "Gain expertise in food processing techniques, preservation methods, and quality control for food industry careers. Learn modern food processing, packaging, and safety standards.",
    duration: "6 months",
    slug: "food-processing",
    highlights: ["Food preservation techniques", "Quality control systems", "Packaging technology", "Food safety standards"]
  },
  {
    title: "Clay Modeling & Sculpture Course",
    description: "Master the ancient art of clay modeling and sculpture creation, developing skills for artistic expression and commercial pottery work. Learn traditional pottery techniques, sculpting methods, and modern ceramic applications.",
    duration: "6 months",
    slug: "clay-modeling",
    highlights: ["Traditional pottery techniques", "Sculpture design and creation", "Glazing and firing methods", "Commercial pottery applications"]
  },
  {
    title: "Computer Skills Development Course",
    description: "Comprehensive computer training covering essential digital literacy, office applications, and modern workplace technology skills. Perfect foundation for various career opportunities in the digital age.",
    duration: "6 months",
    slug: "computer-skills",
    highlights: ["Digital literacy fundamentals", "Office productivity software", "Internet and email skills", "troubleshooting and maintenance"]
  }
]

export default function Courses() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-16 pb-12 lg:pt-20 lg:pb-16 overflow-hidden -mt-24">
        {/* Enhanced gradient background with decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-200 via-pink-200 to-blue-200"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-primary-300/50 via-pink-300/30 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-400/60 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-400/50 via-transparent to-transparent"></div>
        
        {/* Decorative circles */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary-300/50 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-300/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-300/40 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 leading-tight"
            >
              Our Courses
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg lg:text-xl text-gray-600 mb-6 max-w-4xl mx-auto leading-relaxed"
            >
              Comprehensive skill development programs designed for inclusive learning 
              and sustainable employment opportunities
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 max-w-3xl mx-auto shadow-sm border border-primary-200"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                All courses are specifically designed to be inclusive and accessible, 
                with adaptive learning approaches for physically and mentally disabled students.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Course Grid Section */}
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
              Choose Your Path
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Each course is carefully crafted to provide practical skills, industry knowledge, 
              and the confidence needed for successful employment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {courses.map((course, index) => (
              <motion.div
                key={course.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CourseCard
                  title={course.title}
                  description={course.description}
                  duration={course.duration}
                  slug={course.slug}
                  index={index}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Features Section */}
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
              What Makes Our Courses Special
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our inclusive approach ensures that every student receives the support 
              and accommodations they need to succeed.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Adaptive Teaching",
                description: "Teaching methods adapted to different learning styles and abilities",
                icon: "🎯"
              },
              {
                title: "Hands-On Training",
                description: "Practical experience with real tools and equipment",
                icon: "🛠️"
              },
              {
                title: "Small Classes",
                description: "Personalized attention with low student-to-instructor ratios",
                icon: "👥"
              },
              {
                title: "Job Placement",
                description: "Active assistance in finding employment after course completion",
                icon: "💼"
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

      {/* Admission Information */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              Ready to Begin Your Learning Journey?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              All courses are open to physically and mentally disabled students. 
              We provide the necessary accommodations and support to ensure your success.
            </p>
            
            <div className="bg-primary-50 rounded-2xl p-8 mb-8 border border-primary-200">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Admission Requirements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Who Can Apply:</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Physically disabled individuals</li>
                    <li>• Mentally disabled individuals</li>
                    <li>: motivated to learn</li>
                    <li>• Basic literacy preferred but not required</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">What We Provide:</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Accessible learning materials</li>
                    <li>• Specialized equipment</li>
                    <li>• Individual support plans</li>
                    <li>• Job placement assistance</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/admissions"
                className="inline-flex items-center px-8 py-4 bg-primary-600 text-white text-lg font-semibold rounded-xl hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors duration-200"
              >
                Apply for Admission
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="/about"
                className="inline-flex items-center px-8 py-4 border-2 border-primary-600 text-primary-600 text-lg font-semibold rounded-xl hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors duration-200"
              >
                Learn More About Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
