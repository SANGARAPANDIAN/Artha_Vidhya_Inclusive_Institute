'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Courses', href: '/courses' },
  { name: 'Admissions', href: '/admissions' },
  { name: 'Location', href: '/location' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Check if we're on the home page
  const isHomePage = pathname === '/'

  return (
    <motion.header 
      initial={{ opacity: 1 }}
      animate={{ 
        opacity: 1,
        backgroundColor: isHomePage && !isScrolled ? 'rgba(255, 255, 255, 0)' : 'rgba(255, 255, 255, 0.95)'
      }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHomePage && !isScrolled 
          ? 'shadow-none border-none' 
          : 'backdrop-blur-md shadow-lg border-b border-primary-200'
      }`}>
      <nav className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6" role="navigation" aria-label="Main navigation">
        <div className="flex justify-between items-center py-2">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className={`text-xl sm:text-2xl font-bold transition-colors duration-200 focus:outline-none focus:ring-0 ${
                isHomePage && !isScrolled 
                  ? 'text-white drop-shadow-lg' 
                  : 'text-gray-800'
              }`}
              aria-label="Artha Vidhya Inclusive Institute - Home"
            >
              <span className="block sm:hidden">Artha Vidhya</span>
              <span className="hidden sm:block">Artha Vidhya</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transform hover:scale-105 hover:shadow-lg ${
                      isActive
                        ? (isHomePage && !isScrolled ? 'bg-white/20 text-white' : 'bg-primary-200 text-primary-800')
                        : (isHomePage && !isScrolled 
                          ? 'text-white hover:bg-white/10 hover:text-primary-100 drop-shadow-lg' 
                          : 'text-gray-700 hover:bg-primary-100 hover:text-primary-700')
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="bg-primary-100 inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-700 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {/* Menu icon */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden"
              id="mobile-menu"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-primary-50 rounded-lg mb-4">
                {navigation.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
                        isActive
                          ? 'bg-primary-200 text-primary-800'
                          : 'text-gray-700 hover:bg-primary-100 hover:text-primary-700'
                      }`}
                      aria-current={isActive ? 'page' : undefined}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
