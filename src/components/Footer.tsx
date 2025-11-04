import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-t-4 border-primary-500 mt-auto relative overflow-hidden">
      {/* Enhanced Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/15 via-transparent to-primary-900/10"></div>
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-primary-500/10 to-primary-600/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/8 to-blue-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Institute Information */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mr-4">
                <span className="text-white font-bold text-xl inline-block">🎓</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Artha Vidhya Inclusive Institute
              </h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              For Skill Development and Sustainable Livelihoods. Empowering individuals through inclusive, 
              practical skill-based training that creates pathways to independent and meaningful careers.
            </p>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center">
                <span className="text-primary-400 mr-3 inline-block">✉️</span>
                <a 
                  href="mailto:info@arthavidhya.org" 
                  className="text-primary-300 hover:text-primary-200 transition-colors duration-200 font-medium focus:outline-none"
                >
                  info@arthavidhya.org
                </a>
              </div>
              <div className="flex items-center">
                <span className="text-primary-400 mr-3 inline-block">🌐</span>
                <span className="text-gray-300 text-sm">Inclusive • Accessible • Empowering</span>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <span className="text-primary-400 mr-2 inline-block">📞</span>
              Contact Us
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-400 mb-2 font-medium">Phone Numbers:</p>
                <div className="flex flex-col space-y-2">
                  <a 
                    href="tel:+918637692101" 
                    className="text-sm text-primary-300 hover:text-primary-200 transition-colors duration-200 flex items-center group focus:outline-none"
                  >
                    <span className="text-primary-500 mr-2 group-hover:scale-110 transition-transform inline-block">📱</span>
                    +91 863 769 2101
                  </a>
                  <a 
                    href="tel:+919629199942" 
                    className="text-sm text-primary-300 hover:text-primary-200 transition-colors duration-200 flex items-center group focus:outline-none"
                  >
                    <span className="text-primary-500 mr-2 group-hover:scale-110 transition-transform inline-block">📱</span>
                    +91 962 919 9942
                  </a>
                  <a 
                    href="tel:+919843333824" 
                    className="text-sm text-primary-300 hover:text-primary-200 transition-colors duration-200 flex items-center group focus:outline-none"
                  >
                    <span className="text-primary-500 mr-2 group-hover:scale-110 transition-transform inline-block">📱</span>
                    +91 984 333 3824
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <span className="text-primary-400 mr-2">🔗</span>
              Quick Links
            </h3>
                        <nav className="flex flex-col space-y-3" aria-label="Footer navigation">
              <a 
                href="#about" 
                className="text-sm text-gray-300 hover:text-primary-300 transition-colors duration-200 flex items-center group"
              >
                <span className="text-primary-500 mr-2 group-hover:scale-110 transition-transform">→</span>
                About Us
              </a>
              <a 
                href="#programs" 
                className="text-sm text-gray-300 hover:text-primary-300 transition-colors duration-200 flex items-center group"
              >
                <span className="text-primary-500 mr-2 group-hover:scale-110 transition-transform">→</span>
                Programs
              </a>
              <a 
                href="#courses" 
                className="text-sm text-gray-300 hover:text-primary-300 transition-colors duration-200 flex items-center group"
              >
                <span className="text-primary-500 mr-2 group-hover:scale-110 transition-transform">→</span>
                Courses
              </a>
              <a 
                href="#contact" 
                className="text-sm text-gray-300 hover:text-primary-300 transition-colors duration-200 flex items-center group"
              >
                <span className="text-primary-500 mr-2 group-hover:scale-110 transition-transform">→</span>
                Contact
              </a>
            </nav>
          </div>
        </div>

  
        {/* Bottom Section */}
        <div className="border-t border-gray-700/50 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center">
              <span className="text-primary-400 mr-2">©</span>
              <p className="text-sm text-gray-300">
                {new Date().getFullYear()} Artha Vidhya Inclusive Institute. Transforming Lives Through Education.
              </p>
            </div>
            <div className="flex space-x-6">
              <a 
                href="#privacy" 
                className="text-sm text-gray-400 hover:text-primary-300 transition-colors duration-200 flex items-center group"
              >
                <span className="text-primary-500 mr-1 group-hover:scale-110 transition-transform">🔒</span>
                Privacy Policy
              </a>
              <a 
                href="#terms" 
                className="text-sm text-gray-400 hover:text-primary-300 transition-colors duration-200 flex items-center group"
              >
                <span className="text-primary-500 mr-1 group-hover:scale-110 transition-transform">📋</span>
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
