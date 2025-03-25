'use client'

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  images: { src: string; alt: string }[];
  mainImage: string;
}

export default function ServiceCard({
  title,
  price,
  period,
  description,
  features,
  images,
  mainImage,
}: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleBookNow = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsExpanded(false);
    // Small delay to allow the modal to close before scrolling
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <>
      <motion.div
        layout
        className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
        onClick={() => !isExpanded && setIsExpanded(true)}
      >
        <div className="relative h-48">
          <Image
            src={mainImage}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-display mb-2">{title}</h3>
          <div className="flex items-baseline mb-4">
            <span className="text-3xl font-bold text-primary">{price}</span>
            <span className="text-gray-600 ml-2">{period}</span>
          </div>
          <ul className="space-y-2 mb-6">
            {features.slice(0, 3).map((feature, idx) => (
              <li key={idx} className="flex items-center text-gray-600">
                <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
          <button 
            className="btn-secondary w-full text-center block"
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(true);
            }}
          >
            View Details
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setIsExpanded(false)}
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
                onClick={() => setIsExpanded(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-primary transition-colors z-10"
              >
                <FaTimes className="w-6 h-6" />
              </button>

              {/* Image Carousel */}
              <div className="relative h-64 md:h-96 bg-gray-100">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={images[currentImageIndex].src}
                      alt={images[currentImageIndex].alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1200px) 100vw, 1200px"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Carousel Controls */}
                <div className="absolute inset-0 flex items-center justify-between p-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                    className="bg-black/50 hover:bg-primary text-white p-2 rounded-full transition-colors"
                  >
                    <FaChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                    className="bg-black/50 hover:bg-primary text-white p-2 rounded-full transition-colors"
                  >
                    <FaChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Carousel Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex(idx);
                      }}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        idx === currentImageIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-baseline mb-4">
                  <h2 className="text-3xl font-display text-primary">{title}</h2>
                  <div className="ml-4">
                    <span className="text-2xl font-bold text-primary">{price}</span>
                    <span className="text-gray-600 ml-1">{period}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{description}</p>
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-xl font-display mb-4">Features</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <button 
                  className="btn-primary w-full mt-8 block text-center"
                  onClick={handleBookNow}
                >
                  Book Now
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 