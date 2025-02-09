"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Timeline() {
  // 1. Define your timeline data in an array of objects.
  //    Each item has an icon, title, date/range, etc.
  const timelineData = [
    {
      icon: "🎓",
      title: "Passed High School (10th Standard)",
      date: "2022 - ICSE Board, St. Mary's School, Mirzapur",
    },
    {
      icon: "📘",
      title: "Started Diploma in Computer Science",
      date: "2022 - 2025, Government Polytechnic Mohammadi (BTEUP)",
    },
    {
      icon: "💼",
      title: "Joined DatamanUSA as Business Development Executive",
      date: "2023 - 2024",
    },
    {
      icon: "🖋️",
      title: "Promoted to Proposal Writer",
      date: "2024 - Present, DatamanUSA",
    },
    {
      icon: "📜",
      title: "Certified in Android Development",
      date: "2024 - DigiCoder Technologies",
    },
    {
      icon: "🖥️",
      title: "Certified in React JS",
      date: "2025 - Udemy",
    },
  ];

  // 2. Motion variants for container and items (staggered fade-in)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="timeline" className="py-16 bg-black text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
          Education &amp; Experience
        </h2>

        {/* Container that staggers each timeline item */}
        <motion.div
          className="relative border-l border-gray-700 pl-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {timelineData.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="mb-10 ml-4 last:mb-0 relative"
            >
              {/* Icon bullet */}
              <span className="
                absolute
                -left-[11px]
                flex
                items-center
                justify-center
                w-6
                h-6
                bg-indigo-600
                rounded-full
                text-center
                text-sm
              ">
                {item.icon}
              </span>

              {/* Title & Date */}
              <div className="bg-neutral-900 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.date}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
