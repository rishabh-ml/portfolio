// Projects.jsx
"use client";
import React from "react";
import SpotlightCard from "../components/SpotlightCard"; 
// ^ Adjust the import path if needed
import { FaGithub } from "react-icons/fa"; 

export default function Projects() {
  // A sample array of project data. You can fill in actual links later.
  const projectsData = [
    {
      title: "Professional Website for SRTechnicals",
      description: "Improved client conversions by 30%.",
      githubLink: "https://github.com/yourusername/srtechnicals-website",
    },
    {
      title: "Task Management System (MERN Stack)",
      description: "A full-fledged task management system for productivity.",
      githubLink: "https://github.com/yourusername/task-manager-mern",
    },
    {
      title: "Weather Wise (Android App)",
      description: "Weather forecast app with API integrations.",
      githubLink: "https://github.com/yourusername/weather-wise",
    },
    {
      title: "Voice Assistant Android App",
      description:
        "AI-powered Voice Assistant using Java, XML & integrated OpenAI API.",
      githubLink: "https://github.com/yourusername/voice-assistant",
    },
    {
      title: "HealthEase - Doctor Consultation App",
      description: "React Native, Firestore, and React Paper UI-based solution.",
      githubLink: "https://github.com/yourusername/healthease",
    },
    {
      title: "Professional Website for Inccept ai",
      description: "Developed using React, showcasing AI services.",
      githubLink: "https://github.com/yourusername/inccept-ai-site",
    },
  ];

  return (
    <section id="projects" className="py-16 bg-black text-white px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
          Projects
        </h2>

        {/* Grid to display your spotlight cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <SpotlightCard
              key={index}
              className="
                flex flex-col 
                h-full 
                rounded-3xl 
                border-neutral-800 
                bg-neutral-900 
                p-6
              "
              spotlightColor="rgba(255, 255, 255, 0.2)" 
              // Adjust spotlightColor if you want a subtler or stronger effect
            >
              {/* Project Title */}
              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="text-sm text-gray-300 mb-4 flex-1">
                {project.description}
              </p>

              {/* "View Now" button (with GitHub icon) */}
              <div className="mt-auto">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex 
                    items-center 
                    gap-2 
                    bg-indigo-600 
                    hover:bg-indigo-700 
                    text-white 
                    px-4 
                    py-2 
                    rounded-md 
                    transition-colors 
                    duration-200
                  "
                >
                  <FaGithub />
                  View Now
                </a>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
