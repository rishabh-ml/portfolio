"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const formItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      type: "spring",
      stiffness: 120,
    },
  }),
};

export default function Contact() {
  // Container variant that staggers the appearance of its children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  return (
    <>
      <motion.section
        id="contact"
        className="py-16 bg-black text-white px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
          {/* Left Column - Contact Info */}
          <motion.div
            className="w-full md:w-1/2"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { type: "spring", stiffness: 100 },
              },
            }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-300 mb-6">
              Feel free to reach out! I’m open to discussing projects,
              freelance opportunities, or just chatting about tech.
            </p>
            <div className="space-y-4">
              {/* Phone */}
              <div className="flex items-center gap-3">
                <FiPhone className="text-indigo-400" size={20} />
                <span className="text-gray-200 text-sm sm:text-base">
                  +91 8738060587
                </span>
              </div>
              {/* Email */}
              <div className="flex items-center gap-3">
                <FiMail className="text-indigo-400" size={20} />
                <span className="text-gray-200 text-sm sm:text-base">
                  rsalambaghlko@gmail.com
                </span>
              </div>
              {/* Location */}
              <div className="flex items-center gap-3">
                <FiMapPin className="text-indigo-400" size={20} />
                <span className="text-gray-200 text-sm sm:text-base">
                  Lucknow, Uttar Pradesh, India
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.form
            className="w-full md:w-1/2 bg-neutral-900 rounded-lg p-6 shadow-lg space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Form submitted!");
            }}
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 150,
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {/* Name Field */}
            <motion.div variants={formItemVariants} custom={0}>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-200 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full rounded-md border border-gray-700 bg-black text-white px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                placeholder="Enter your name"
                required
              />
            </motion.div>

            {/* Email Field */}
            <motion.div variants={formItemVariants} custom={1}>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-200 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full rounded-md border border-gray-700 bg-black text-white px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                placeholder="Enter your email"
                required
              />
            </motion.div>

            {/* Message Field */}
            <motion.div variants={formItemVariants} custom={2}>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-200 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full rounded-md border border-gray-700 bg-black text-white px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                placeholder="Enter your message"
                required
              />
            </motion.div>

            {/* Submit Button */}
            <motion.div variants={formItemVariants} custom={3}>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300 w-full"
              >
                Submit
              </motion.button>
            </motion.div>
          </motion.form>
        </motion.div>
      </motion.section>

      {/* Footer Section */}
      <motion.footer
        className="bg-neutral-900 text-gray-400 py-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="max-w-6xl mx-auto px-4 flex flex-col items-center justify-between gap-2">
          <p className="text-sm">
            © {new Date().getFullYear()} Rishabh Shukla. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Powered by React, Tailwind CSS, and ♥
          </p>
        </div>
      </motion.footer>
    </>
  );
}
