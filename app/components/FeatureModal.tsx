'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useState } from 'react'

interface FeatureModalProps {
  isOpen: boolean
  onClose: () => void
  feature: string | null
}

const featureDetails = {
  accommodation: {
    title: 'Spacious Accommodation',
    description: 'Our modern, comfortable kennels and catteries provide the perfect home away from home for your pets.',
    images: [
      '/images/kennel-1.jpg',
      '/images/kennel-2.jpg',
      '/images/kennel-3.jpg',
      '/images/kennel-4.jpg',
    ],
  },
  care: {
    title: '24/7 Care',
    description: 'Our dedicated staff provides round-the-clock care and attention to ensure your pets are happy and healthy.',
    images: [
      '/images/care-1.jpg',
      '/images/care-2.jpg',
      '/images/care-3.jpg',
      '/images/care-4.jpg',
    ],
  },
  exercise: {
    title: 'Daily Exercise',
    description: 'Regular exercise and playtime keep your pets active and engaged throughout their stay.',
    images: [
      '/images/exercise-1.jpg',
      '/images/exercise-2.jpg',
      '/images/exercise-3.jpg',
      '/images/exercise-4.jpg',
    ],
  },
  outdoor: {
    title: 'Outdoor Play Areas',
    description: 'Secure, spacious outdoor areas where pets can play, exercise, and socialize safely.',
    images: [
      '/images/outdoor-1.jpg',
      '/images/outdoor-2.jpg',
      '/images/outdoor-3.jpg',
      '/images/outdoor-4.jpg',
    ],
  },
}

export default function FeatureModal({ isOpen, onClose, feature }: FeatureModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    if (!feature) return
    setCurrentImageIndex((prev) =>
      prev === featureDetails[feature as keyof typeof featureDetails].images.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    if (!feature) return
    setCurrentImageIndex((prev) =>
      prev === 0 ? featureDetails[feature as keyof typeof featureDetails].images.length - 1 : prev - 1
    )
  }

  if (!feature) return null

  const details = featureDetails[feature as keyof typeof featureDetails]

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-[#D60D0D] transition-colors duration-200"
            >
              <FaTimes className="w-6 h-6" />
            </button>

            {/* Image Carousel */}
            <div className="relative h-64 md:h-96 bg-gray-100">
              <img
                src={details.images[currentImageIndex]}
                alt={details.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-[#D60D0D] text-white transition-colors duration-200"
              >
                <FaChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-[#D60D0D] text-white transition-colors duration-200"
              >
                <FaChevronRight className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {details.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                      currentImageIndex === index ? 'bg-[#D60D0D]' : 'bg-white/50 hover:bg-[#C0D9DA]'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h2 className="text-3xl font-display mb-4 text-[#D60D0D]">{details.title}</h2>
              <div className="prose max-w-none text-gray-600">
                <p className="border-l-4 border-[#D60D0D] pl-4">{details.description}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 