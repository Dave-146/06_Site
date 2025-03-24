'use client'

import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="py-20 bg-gray-50" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display mb-4 text-gray-900">Contact Us</h2>
          <p className="text-xl text-gray-600">
            Get in touch with us for bookings or any questions you may have
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-primary text-white p-3 rounded-full">
                <FaPhone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display text-lg mb-1">Phone</h4>
                <p className="text-gray-600">+353 (053) 937 1234</p>
                <p className="text-gray-600">Available 9am - 7pm daily</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-primary text-white p-3 rounded-full">
                <FaEnvelope className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display text-lg mb-1">Email</h4>
                <p className="text-gray-600">corlicanpetmotel@hotmail.com</p>
                <p className="text-gray-600">We'll respond within 24 hours</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-primary text-white p-3 rounded-full">
                <FaMapMarkerAlt className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display text-lg mb-1">Location</h4>
                <p className="text-gray-600">Killurin, Wexford</p>
                <p className="text-gray-600">Enniscorthy, Wexford</p>
                <p className="text-gray-600">Y21 V6Y9</p>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="h-[300px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2434.822489832767!2d-6.608050723647398!3d52.39176817202779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4842a9d495061627%3A0x14f1f75e2a21c2f!2sCorlican%20Pet%20Motel!5e0!3m2!1sen!2sus!4v1742833726629!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-display mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
} 