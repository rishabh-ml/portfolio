import React from "react";
import Orb from "../components/Orb";
import SplitText from "../components/SplitText";

export default function Hero() {
  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden bg-black">
      {/* 
        Orb Background 
        - Positioned absolutely and allowed to capture pointer events for hover-based interactions.
        - z-0 so it's beneath the text container.
      */}
      <div className="absolute inset-0 z-0">
        <Orb
          hue={0}               // Adjust the hue for different color schemes
          hoverIntensity={0.2}  // Amount of distortion/hover effect
          rotateOnHover={true}  // Enable/disable rotation on hover
          forceHoverState={false}
        />
      </div>

      {/* 
        Text Container 
        - Positioned above the Orb (z-10).
        - pointer-events-none ensures mouse events pass through to the Orb. 
          If you need to interact with the text (e.g., links, buttons), 
          remove 'pointer-events-none' and see the note below.
      */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full pointer-events-none">
        {/* 
          Main Heading 
          - SplitText splits and animates each letter into view on scroll intersection.
        */}
        <SplitText
          text="Hi, I'm Rishabh Shukla"
          className="text-4xl sm:text-6xl font-bold text-white mb-4"
          textAlign="center"
          delay={50}
        />

        {/* 
          Subheading 
          - Smaller text with a bit of styling for clarity.
        */}
        <SplitText
          text="A passionate Full-Stack Developer building impactful solutions."
          className="text-base sm:text-lg text-gray-200 max-w-xl px-4"
          textAlign="center"
          delay={30}
        />
        <a
          href="/resume.pdf"
          download
          className="inline-block px-5 py-3 text-sm sm:text-base font-semibold bg-indigo-600 hover:bg-indigo-700 rounded-md transition-colors duration-200"
        >Download Resume</a>
      </div>
    </section>
  );
}
