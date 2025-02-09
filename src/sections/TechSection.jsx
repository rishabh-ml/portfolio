"use client";
import React from "react";
import { motion } from "framer-motion";
import PixelCard from "../components/PixelCard";

export default function TechSection() {
  // 1. Define the container and item animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        // This staggers each child tile's animation by 0.1 seconds
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // 2. List of skills (example array)
  const skills = [
    // Group 1: Basic Frontend Fundamentals
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap",
    "Tailwind CSS",
    "Figma",
  
    // Group 2: Programming Languages and Advanced Frameworks
    "C",
    "Python",
    "Java",
    "React",
    "React Native",
    "Node.js",
    "Express",
    "Daisy UI",
    "Material-UI",
  
    // Group 3: Databases, Version Control, and Deployment Tools
    "SQL",
    "MongoDB",
    "Firebase",
    "Git",
    "GitHub",
    "Heroku",
    "Netlify",
    "Vercel"
  ];
  
  return (
    // 3. Animate the entire section on scroll
    <motion.section
      id="technologies"
      className="py-10 bg-black text-white"
      // Set up scroll-based triggers
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
        Technologies
      </h2>

      {/* 4. The container that holds all tiles also uses containerVariants 
            to stagger each child’s animation */}
      <motion.div
        className="flex flex-wrap gap-4 justify-center items-center"
        variants={containerVariants}
      >
        {/* 5. Map over each skill and wrap the PixelCard in a motion.div 
              that uses our itemVariants */}
        {skills.map((skill) => (
          <motion.div key={skill} variants={itemVariants}>
            <PixelCard variant="blue"
              // Make sure you removed or commented out the default sizing 
              // (w-[300px], h-[400px], aspect-[4/5]) in PixelCard.jsx 
              // or override with !important if needed.
              className="
                !w-[200px]
                !h-[80px]
                !border border-gray-600
                rounded-md
                overflow-hidden
                relative
              "
            >
              {/* 6. Skill label inside the card */}
              <div className="absolute inset-0 flex items-center justify-center text-white font-medium">
                {skill}
              </div>
            </PixelCard>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
