import React from "react";
import { motion } from "framer-motion";
import Orb from "../components/Orb";
import SplitText from "../components/SplitText";

export default function Hero() {
  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden bg-black">
      {/* Orb Background */}
      <div className="absolute inset-0 z-0">
        <Orb
          hue={0}
          hoverIntensity={0.2}
          rotateOnHover={true}
          forceHoverState={false}
        />
      </div>

      {/* Text Container */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
        <SplitText
          text="Hi, I'm Rishabh Shukla"
          className="text-4xl sm:text-6xl font-bold text-white mb-4"
          textAlign="center"
          delay={50}
        />

        <SplitText
          text="A passionate Full-Stack Developer building impactful solutions."
          className="text-base sm:text-lg text-gray-200 max-w-xl px-4"
          textAlign="center"
          delay={30}
        />

        {/* 
          Download Button with Framer Motion 
          - initial: starting styles
          - animate: final styles
          - transition: includes delay before animation
        */}
        <motion.a
          href="/resume.pdf"
          download
          className="inline-block mt-6 px-5 py-3 text-sm sm:text-base 
                     font-semibold bg-indigo-600 hover:bg-indigo-700 
                     rounded-md transition-colors duration-200"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          Download Resume
        </motion.a>
      </div>
    </section>
  );
}
