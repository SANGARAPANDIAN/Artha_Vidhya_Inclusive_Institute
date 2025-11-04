'use client'

import { motion } from 'framer-motion'
import Form from '@/components/Form'

const admissionFields = [
  {
    name: 'fullName',
    label: 'Full Name',
    type: 'text' as const,
    required: true,
    placeholder: 'Enter your full name'
  },
  {
    name: 'email',
    label: 'Email Address',
    type: 'email' as const,
    required: true,
    placeholder: 'Enter your email address'
  },
  {
    name: 'phone',
    label: 'Phone Number',
    type: 'tel' as const,
    required: true,
    placeholder: 'Enter your phone number'
  },
  {
    name: 'age',
    label: 'Age',
    type: 'text' as const,
    required: true,
    placeholder: 'Enter your age'
  },
  {
    name: 'address',
    label: 'Address',
    type: 'textarea' as const,
    required: true,
    placeholder: 'Enter your complete address'
  },
  {
    name: 'course',
    label: 'Preferred Course',
    type: 'select' as const,
    required: true,
    options: [
      'Basic Level Automobile Technician Course',
      'Herbal Cosmetic Preparation Course',
      'Hand Block Printing on Fabrics Course',
      'Food Processing Technology Course',
      'Clay Modeling & Sculpture Course',
      'Computer Skills Development Course'
    ]
  },
  {
    name: 'disability',
    label: 'Type of Disability (if applicable)',
    type: 'text' as const,
    required: false,
    placeholder: 'Please specify any disabilities that may require accommodation'
  },
  {
    name: 'previousEducation',
    label: 'Previous Education/Experience',
    type: 'textarea' as const,
    required: false,
    placeholder: 'Describe your educational background or relevant experience'
  },
  {
    name: 'motivation',
    label: 'Why do you want to join this course?',
    type: 'textarea' as const,
    required: true,
    placeholder: 'Tell us about your motivation and career goals'
  },
  {
    name: 'accommodation',
    label: 'Special Accommodations Needed',
    type: 'textarea' as const,
    required: false,
    placeholder: 'Describe any special accommodations you may need during the course'
  }
]

export default function Admissions() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 overflow-hidden -mt-24">
        {/* Enhanced gradient background with decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-200 via-primary-200 to-blue-200"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-green-300/60 via-primary-300/40 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-400/50 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-400/40 via-transparent to-transparent"></div>
        
        {/* Decorative circles */}
        <div className="absolute top-10 right-20 w-80 h-80 bg-green-300/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-20 w-72 h-72 bg-primary-400/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight"
            >
              Admissions
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed"
            >
              Begin your journey towards skill development and sustainable livelihood
            </motion.p>
          </div>
        </div>
      </section>

      {/* Admission Overview Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Inclusive Community</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              We welcome students of all abilities to our comprehensive skill development programs. 
              Our admission process is designed to understand your unique needs and match you with 
              the perfect course for your career aspirations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-3">Personalized Learning</h3>
                <p className="text-primary-100">Tailored programs to meet individual learning needs and career goals</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold mb-3">Inclusive Environment</h3>
                <p className="text-primary-100">Supportive community that celebrates diversity and promotes inclusion</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-xl font-semibold mb-3">Career Support</h3>
                <p className="text-primary-100">Comprehensive job placement assistance and entrepreneurship guidance</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Eligibility Section */}
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
              Who Can Apply
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our inclusive programs are specifically designed for individuals with physical and mental disabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Physically Disabled Individuals",
                description: "Students with mobility impairments, limb differences, or other physical disabilities who are seeking skill development opportunities.",
                icon: "♿"
              },
              {
                title: "Mentally Disabled Individuals",
                description: "Students with intellectual disabilities, learning disabilities, or developmental disabilities who can benefit from vocational training.",
                icon: "🧠"
              },
              {
                title: "Commitment to Training",
                description: "Willingness to attend regular classes and complete the 6-month training program with dedication and consistency.",
                icon: "⏱️"
              },
              {
                title: "Educational Background",
                description: "Basic literacy is preferred but not required. We assess each student individually and provide necessary support.",
                icon: "📚"
              },
              {
                title: "Motivation to Learn",
                description: "A genuine interest in developing skills for employment or self-employment in the chosen field of study.",
                icon: "💡"
              },
              {
                title: "Support System",
                description: "Access to family or caregiver support for transportation and any personal care needs during training.",
                icon: "🤝"
              }
            ].map((criterion, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-primary-50 rounded-xl p-6 border border-primary-200 text-center"
              >
                <div className="text-4xl mb-4">{criterion.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{criterion.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{criterion.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              Application Process
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our admission process is designed to be simple and accessible for all applicants.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                step: "1",
                title: "Submit Application",
                description: "Complete the online application form below or contact us directly."
              },
              {
                step: "2",
                title: "Initial Assessment",
                description: "We will conduct a brief assessment to understand your needs and interests."
              },
              {
                step: "3",
                title: "Course Selection",
                description: "Together, we will select the most suitable course based on your abilities and goals."
              },
              {
                step: "4",
                title: "Enrollment",
                description: "Complete enrollment and begin your journey toward skill development and employment."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-600 text-white rounded-full text-xl font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <Form
              title="Application Form"
              description="Please fill out this form completely. All information will be kept confidential and used only for admission purposes."
              fields={admissionFields}
              submitText="Submit Application"
              formspreeEndpoint="https://formspree.io/f/your-admission-form-id"
            />
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              Need Help with Your Application?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Our admissions team is here to assist you throughout the application process.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-sm border border-primary-200"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
              <div className="space-y-4">
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
              className="bg-white rounded-xl p-8 shadow-sm border border-primary-200"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Office Hours</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-800">Monday - Friday</p>
                  <p className="text-gray-600">9:00 AM - 5:00 PM</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Saturday</p>
                  <p className="text-gray-600">9:00 AM - 1:00 PM</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Sunday</p>
                  <p className="text-gray-600">Closed</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-2">Alternative Application Methods</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  If you prefer, you can also apply by phone or visit our office in person. 
                  Our staff can assist you with completing the application form and answer 
                  any questions you may have about our programs.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-primary-200">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                We're Here to Support You
              </h3>
              <p className="text-gray-600 leading-relaxed">
                At Artha Vidhya Inclusive Institute, we believe that everyone deserves the opportunity 
                to learn and grow. Our admission process is designed to be welcoming and supportive, 
                ensuring that all potential students feel comfortable and confident in taking the next 
                step toward their educational and career goals.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
