'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface CourseCardProps {
  title: string
  description: string
  duration?: string
  slug: string
  index?: number
}

export default function CourseCard({ title, description, duration, slug, index = 0 }: CourseCardProps) {
  // Function to get appropriate icon based on course slug
  const getCourseIcon = (courseSlug: string) => {
    switch (courseSlug) {
      case 'automobile-technician':
        return (
          <svg className="w-6 h-6 text-primary-700" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
          </svg>
        );
      case 'clay-modeling':
        return (
          <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C8.5 2 6 4.5 6 8v2c0 1 0.5 2 1.5 2.5C8.5 13 9 14 9 15v6c0 0.5 0.5 1 1 1h4c0.5 0 1-0.5 1-1v-6c0-1 0.5-2 1.5-2.5C17.5 12 18 11 18 10V8c0-3.5-2.5-6-6-6z" />
            <ellipse cx="12" cy="18" rx="3" ry="1" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3"/>
          </svg>
        );
      case 'computer-skills':
        return (
          <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      case 'food-processing':
        return (
          <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" />
            <circle cx="12" cy="13" r="2" stroke="currentColor" strokeWidth={2} fill="none"/>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 11h6M9 15h6"/>
          </svg>
        );
      case 'hand-block-printing':
        return (
          <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <rect x="4" y="4" width="6" height="6" rx="1" stroke="currentColor" strokeWidth={2} fill="none"/>
            <rect x="14" y="4" width="6" height="6" rx="1" stroke="currentColor" strokeWidth={2} fill="none"/>
            <rect x="4" y="14" width="6" height="6" rx="1" stroke="currentColor" strokeWidth={2} fill="none"/>
            <rect x="14" y="14" width="6" height="6" rx="1" stroke="currentColor" strokeWidth={2} fill="none"/>
            <circle cx="7" cy="7" r="1.5" fill="currentColor"/>
            <circle cx="17" cy="17" r="1.5" fill="currentColor"/>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16v1M17 6v1"/>
          </svg>
        );
      case 'herbal-cosmetic':
        return (
          <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
          </svg>
        );
      default:
        return (
          <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-sm border border-primary-200 hover:shadow-md transition-all duration-300 overflow-hidden group h-full flex flex-col relative z-0"
    >
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-primary-700 transition-colors duration-200 min-h-[3.5rem] line-clamp-2">
              {title}
            </h3>
            {duration && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                {duration}
              </span>
            )}
          </div>
          <div className="ml-4 flex-shrink-0">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-200 to-primary-300 rounded-lg flex items-center justify-center group-hover:from-primary-300 group-hover:to-primary-400 transition-all duration-300">
              {getCourseIcon(slug)}
            </div>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
          {description}
        </p>
        
        <div className="flex items-center justify-between mt-auto pt-4">
          <Link
            href={`/courses/${slug}`}
            className="inline-flex items-center px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors duration-200 group"
            aria-label={`Learn more about ${title}`}
          >
            Learn More
            <svg 
              className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          
          <div className="flex items-center text-xs text-gray-500">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Inclusive Training
          </div>
        </div>
      </div>
      
      {/* Decorative gradient border */}
      <div className="h-1 bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 group-hover:from-primary-500 group-hover:via-primary-600 group-hover:to-primary-700 transition-all duration-300" />
    </motion.div>
  )
}
