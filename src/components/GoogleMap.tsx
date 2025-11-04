'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function GoogleMap() {
  const [isGettingDirections, setIsGettingDirections] = useState(false)
  
  const getDirections = () => {
    setIsGettingDirections(true)
    // Get user's current location and open directions
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          // Destination coordinates from your embed: 11°08'22.6"N 76°56'11.9"E
          const destLat = "11.139624"
          const destLng = "76.936639"
          const directionsUrl = `https://www.google.com/maps/dir/${latitude},${longitude}/${destLat},${destLng}`
          window.open(directionsUrl, '_blank')
          setIsGettingDirections(false)
        },
        (error) => {
          console.error('Error getting location:', error)
          // Fallback: Open directions without current location
          window.open(`https://www.google.com/maps/dir//11.139624,76.936639`, '_blank')
          setIsGettingDirections(false)
        }
      )
    } else {
      // Fallback if geolocation is not supported
      window.open(`https://www.google.com/maps/dir//11.139624,76.936639`, '_blank')
      setIsGettingDirections(false)
    }
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-2xl border border-primary-200 overflow-hidden relative"
    >
      {/* Floating Dynamic Elements */}
      <div className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg animate-bounce">
        <p className="text-sm font-bold text-primary-600 flex items-center">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
          </svg>
          We're Here!
        </p>
      </div>

      <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-2 rounded-xl shadow-lg animate-pulse">
        <p className="text-sm font-semibold">📍 Artha Vidhya Institute</p>
      </div>

      {/* Embedded Google Map */}
      <div className="relative h-96 lg:h-[500px]">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d661.8652766402935!2d76.93639131505212!3d11.139457902872579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDA4JzIyLjYiTiA3NsKwNTYnMTEuOSJF!5e1!3m2!1sen!2sin!4v1762232886316!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        ></iframe>
        
        {/* Overlay Gradient for better button visibility */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
      </div>

      {/* Action Buttons */}
      <div className="p-6 bg-gradient-to-br from-primary-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary-200/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-200/20 rounded-full blur-2xl"></div>
        
        <div className="relative flex flex-col sm:flex-row gap-4 items-center justify-center">
          <button
            onClick={getDirections}
            disabled={isGettingDirections}
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white text-lg font-semibold rounded-xl hover:from-primary-700 hover:to-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isGettingDirections ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Getting Directions...
              </>
            ) : (
              <>
                <svg className="w-6 h-6 mr-2 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Get Directions from My Location
              </>
            )}
          </button>
          
          <a
            href="https://www.google.com/maps/place/11%C2%B008'22.6%22N+76%C2%B056'11.9%22E/@11.139458,76.936391,20z"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center px-8 py-4 bg-white text-primary-600 text-lg font-semibold rounded-xl border-2 border-primary-600 hover:bg-primary-50 focus:outline-none focus:ring-4 focus:ring-primary-300 transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1"
          >
            <svg className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Open in Google Maps
          </a>
        </div>

        {/* Info Text */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 flex items-center justify-center gap-2 flex-wrap">
            <span className="inline-flex items-center">
              <svg className="w-4 h-4 mr-1 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
              </svg>
              Real-time traffic
            </span>
            <span>•</span>
            <span className="inline-flex items-center">
              <svg className="w-4 h-4 mr-1 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
              </svg>
              Turn-by-turn navigation
            </span>
            <span>•</span>
            <span className="inline-flex items-center">
              <svg className="w-4 h-4 mr-1 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/>
              </svg>
              Nearby landmarks
            </span>
          </p>
        </div>
      </div>
    </motion.div>
  )
}
