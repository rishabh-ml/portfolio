"use client";
import React from "react";
import { motion } from "framer-motion";
import RotatingText from "../components/RotatingText";
import SplashCursor from "../components/SplashCursor";

export default function About() {
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20,
                when: "beforeChildren",
                staggerChildren: 0.1
            },
        },
    };

    const childVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 150,
                damping: 15
            }
        },
    };

    return (
        <>
            <motion.section
                id="about"
                className="relative w-full min-h-screen bg-black text-white py-20 px-4 flex items-center justify-center"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
            >
                <motion.div
                    className="max-w-3xl text-center"
                    variants={containerVariants}
                >
                    <motion.h2
                        className="text-3xl sm:text-4xl font-bold mb-6"
                        variants={childVariants}
                    >
                        About Me
                    </motion.h2>

                    <motion.p
                        className="leading-relaxed text-base sm:text-lg md:text-xl text-gray-200"
                        variants={childVariants}
                    >
                        Hi, I’m Rishabh Shukla – a dedicated and innovative Full-Stack Developer
                        with a multifaceted background in IT proposal writing, business development,
                        and freelance web development. I bring a&nbsp;
                        <motion.span className="inline-block">
                            <RotatingText
                                texts={["Unique", "Innovative", "Strategic", "Creative", "Impactful", "Effective"]}
                                rotationInterval={2000}
                                mainClassName="bg-cyan-300 text-black px-1 rounded"
                                animation={{
                                    initial: { scale: 0.8, opacity: 0 },
                                    animate: { scale: 1, opacity: 1 },
                                    exit: { scale: 0.8, opacity: 0 },
                                    transition: { duration: 0.3 }
                                }}
                            />
                        </motion.span>
                        &nbsp;approach to every project I undertake, delivering Web Solutions that blend
                        technical proficiency, creative problem-solving, and strategic thinking.
                        My journey in the tech world has been fueled by a relentless drive to learn, adapt,
                        and build impactful solutions that make a real difference.
                    </motion.p>
                </motion.div>
            </motion.section>
        </>
    );
}
