'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const VideoHero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [videoPlaying, setVideoPlaying] = useState(false)



  useEffect(() => {
    // Immediate autoplay attempt when component mounts
    const playVideo = async () => {
      const video = videoRef.current
      if (video && video instanceof HTMLVideoElement) {
        // Reset video to start
        video.currentTime = 0
        
        try {
          // Multiple aggressive play attempts
          video.muted = true // Ensure it's muted for autoplay
          await video.play()
          setVideoPlaying(true)
          console.log('Video autoplay successful')
        } catch (error) {
          console.log('Autoplay blocked, will show play button:', error)
          setVideoPlaying(false)
        }
      }
    }

    // Multiple play attempts with different timings
    const timer1 = setTimeout(playVideo, 50)   // Very quick
    const timer2 = setTimeout(playVideo, 200)  // Quick
    const timer3 = setTimeout(playVideo, 500)  // Medium
    const timer4 = setTimeout(playVideo, 1000) // Slow

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2) 
      clearTimeout(timer3)
      clearTimeout(timer4)
    }
  }, [])

  useEffect(() => {
    // Fallback timer to show content
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Intersection Observer to play video when in view
    if (videoRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const video = videoRef.current
            if (entry.isIntersecting && video && video instanceof HTMLVideoElement) {
              video.play().then(() => {
                setVideoPlaying(true)
                console.log('Video started via intersection observer')
              }).catch(console.log)
            }
          })
        },
        { threshold: 0.1 }
      )

      observer.observe(videoRef.current)
      return () => observer.disconnect()
    }
  }, [videoRef])

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Fallback Background - only show if video has error or not loaded */}
      {(hasError || !isLoaded) && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 z-0"></div>
      )}
      
      {/* Video Background */}
      {!hasError && (
        <video
          ref={videoRef}
          autoPlay={true}
          muted={true}
          loop={true}
          playsInline={true}
          preload="auto"
          controls={false}
          disablePictureInPicture={true}
          webkit-playsinline="true"
          x5-playsinline="true"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            visibility: 'visible',
            opacity: 1,
            display: 'block'
          }}
          onLoadStart={() => {
            console.log('Video load started')
          }}
          onLoadedData={() => {
            setIsLoaded(true)
            console.log('Video loaded successfully')
            // Force play immediately when data is loaded
            if (videoRef.current) {
              videoRef.current.play().catch(console.log)
            }
          }}
          onLoadedMetadata={() => {
            console.log('Video metadata loaded')
            // Another play attempt
            if (videoRef.current) {
              videoRef.current.play().catch(console.log)
            }
          }}
          onCanPlay={() => {
            console.log('Video can play')
            // Force play when ready
            if (videoRef.current) {
              videoRef.current.play().then(() => {
                setVideoPlaying(true)
              }).catch(console.log)
            }
          }}
          onPlay={() => {
            setVideoPlaying(true)
            console.log('✅ Video started playing successfully')
          }}
          onPause={() => {
            setVideoPlaying(false)
            console.log('⏸️ Video paused')
          }}
          onSuspend={() => {
            console.log('Video loading suspended')
          }}
          onAbort={() => {
            console.log('Video loading aborted')
          }}
          onError={(e) => {
            console.error('Video loading error:', e)
            console.error('Error details:', (e.target as HTMLVideoElement)?.error)
            setHasError(true)
            setIsLoaded(true)
          }}
        >
          <source src="/assets/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Play Button Overlay - shown when video is loaded but not playing */}
      {isLoaded && !videoPlaying && !hasError && (
        <div 
          className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 cursor-pointer z-20"
          onClick={() => {
            if (videoRef.current) {
              videoRef.current.play().then(() => {
                setVideoPlaying(true)
              }).catch(error => {
                console.log('Play failed:', error)
              })
            }
          }}
        >
          <div className="bg-white/20 backdrop-blur-md rounded-full p-8 hover:bg-white/30 transition-all duration-300 animate-pulse">
            <svg className="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
          <p className="text-white text-xl font-semibold mt-4 animate-pulse">Click to play video</p>
        </div>
      )}

      {/* Light Overlay for text visibility - only when video is playing */}
      {videoPlaying && (
        <div className="absolute inset-0 bg-black/20 z-5"></div>
      )}
      
      {/* Gradient Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-5"></div>

      {/* Content */}
      <div className="relative z-30 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-8"
          >
            {/* Main Title with Enhanced Glow Effect */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span 
                className="block text-white"
                style={{
                  textShadow: `
                    0 0 5px rgba(255, 255, 255, 0.3),
                    0 0 10px rgba(255, 255, 255, 0.2),
                    0 0 15px rgba(255, 255, 255, 0.1),
                    2px 2px 4px rgba(0, 0, 0, 0.8)
                  `
                }}
              >
                Artha Vidhya
              </span>
              <span 
                className="block mt-2 text-white"
                style={{
                  textShadow: `
                    0 0 5px rgba(255, 255, 255, 0.3),
                    0 0 10px rgba(255, 255, 255, 0.2),
                    0 0 15px rgba(255, 255, 255, 0.1),
                    2px 2px 4px rgba(0, 0, 0, 0.8)
                  `
                }}
              >
                Inclusive Institute
              </span>
            </h1>
            
            {/* Subtitle with Strong Visibility */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4"
              style={{
                color: '#ffffff',
                textShadow: `
                  0 0 5px rgba(255, 255, 255, 0.3),
                  0 0 10px rgba(255, 255, 255, 0.2),
                  2px 2px 4px rgba(0, 0, 0, 0.8)
                `
              }}
            >
              For Skill Development and Sustainable Livelihoods
            </motion.p>
          </motion.div>



          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link
              href="/admissions"
              className="group relative inline-flex items-center px-8 py-4 text-lg font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary-300"
              style={{
                background: 'linear-gradient(135deg, #fbbacf 0%, #f8b4cb 25%, #f5aec7 50%, #f2a8c3 75%, #efa2bf 100%)',
                boxShadow: `
                  0 0 20px rgba(251, 182, 206, 0.6),
                  0 10px 30px rgba(0, 0, 0, 0.3),
                  inset 0 1px 0 rgba(255, 255, 255, 0.3)
                `,
                color: '#1f2937'
              }}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Apply for Admission
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))',
                }}
              ></div>
            </Link>
            
            <Link
              href="/courses"
              className="group relative inline-flex items-center px-8 py-4 text-lg font-bold text-white rounded-2xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/30"
              style={{
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(10px)',
                border: '2px solid rgba(251, 182, 206, 0.8)',
                boxShadow: `
                  0 0 20px rgba(251, 182, 206, 0.4),
                  0 10px 30px rgba(0, 0, 0, 0.2),
                  inset 0 1px 0 rgba(255, 255, 255, 0.2)
                `,
                textShadow: '0 0 8px rgba(251, 182, 206, 0.6), 1px 1px 2px rgba(0, 0, 0, 0.8)'
              }}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Explore Courses
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'rgba(251, 182, 206, 0.2)',
                }}
              ></div>
            </Link>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 1, delay: 2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex flex-col items-center">
              <p 
                className="text-white text-sm mb-2 font-medium"
                style={{
                  textShadow: '0 0 6px rgba(251, 182, 206, 0.6), 1px 1px 2px rgba(0, 0, 0, 0.8)'
                }}
              >
                Scroll to explore
              </p>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="p-2 rounded-full"
                style={{
                  background: 'rgba(251, 182, 206, 0.3)',
                  boxShadow: '0 0 15px rgba(251, 182, 206, 0.4)'
                }}
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Loading State */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary-100 via-primary-50 to-white flex items-center justify-center">
          <div className="text-center">
            <div 
              className="w-16 h-16 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin mb-4 mx-auto"
              style={{
                boxShadow: '0 0 20px rgba(251, 182, 206, 0.3)'
              }}
            ></div>
            <p className="text-lg text-gray-600 font-medium">Loading experience...</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default VideoHero
