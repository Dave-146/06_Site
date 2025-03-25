'use client'

import { motion } from 'framer-motion';
import { FaHome, FaUserMd, FaTree, FaWindowMaximize } from 'react-icons/fa';

const features = [
  {
    icon: FaHome,
    title: "Spacious Accommodations",
    description: "Comfortable, climate-controlled rooms designed for your pet's comfort and safety."
  },
  {
    icon: FaUserMd,
    title: "24/7 On-Call Vet",
    description: "Round-the-clock veterinary access ensuring your pet's health and well-being."
  },
  {
    icon: FaTree,
    title: "Indoor & Outdoor Areas",
    description: "Large play areas and exercise zones for daily activities and socialization."
  },
  {
    icon: FaWindowMaximize,
    title: "Rooms with a View",
    description: "Bright, airy spaces with windows offering natural light and outdoor views."
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-display text-center text-primary mb-4"
        >
          Why Choose Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          Experience premium pet care services tailored to your furry friend's needs
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-primary mb-4">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-display mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 