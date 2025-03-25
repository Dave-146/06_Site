'use client'

import { motion } from 'framer-motion'
import { FaPaw } from 'react-icons/fa'

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="text-primary-600"
      >
        <FaPaw className="w-12 h-12" />
      </motion.div>
    </div>
  )
} 