'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface AutoScrollCarouselProps {
  images: string[]
  speed?: number
}

export default function AutoScrollCarousel({ images, speed = 30 }: AutoScrollCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollPosition = 0
    const scroll = () => {
      scrollPosition += 1
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }
      scrollContainer.scrollLeft = scrollPosition
    }

    const intervalId = setInterval(scroll, speed)
    return () => clearInterval(intervalId)
  }, [speed])

  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images, ...images]

  // Extract filename without extension
  const getImageName = (imagePath: string) => {
    const filename = imagePath.split('/').pop() || ''
    return filename.replace(/\.[^/.]+$/, '') // Remove extension
  }

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-2xl">
      {/* Gradient Overlays for smooth edge fade */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-100 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-200 to-transparent z-10 pointer-events-none"></div>

      {/* Scrolling Container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden py-8 px-4"
        style={{ scrollBehavior: 'auto' }}
      >
        {duplicatedImages.map((image, index) => {
          const originalIndex = index % images.length
          const imageName = getImageName(images[originalIndex])
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="flex-shrink-0 w-80 h-60 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 relative group cursor-pointer"
            >
              <img
                src={image}
                alt={imageName}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f0f0f0" width="400" height="300"/%3E%3Ctext fill="%23999" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EImage%3C/text%3E%3C/svg%3E';
                }}
              />
              {/* Overlay with filename on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <div className="text-white text-center px-4">
                  <p className="font-semibold text-lg capitalize leading-tight drop-shadow-lg">
                    {imageName}
                  </p>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

    </div>
  )
}
