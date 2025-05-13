import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";

const ProjectsHero = () => {
  const [showScrollHint, setShowScrollHint] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollHint(window.scrollY < 100); // hides after 100px scroll
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative bg-[#81674cd3] text-[#ebe5e5] min-h-screen overflow-hidden">
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-10 z-0"
        style={{
          backgroundImage: "url('/skyline.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          mixBlendMode: "multiply",
        }}
      />

      {/* Glow accent */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-[#c2b4a3] opacity-20 rounded-full blur-3xl z-0" />

      {/* Hero Content */}
      <div className="flex items-center justify-center min-h-screen px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto"
        >
          <motion.h1
            className="text-5xl sm:text-6xl font-semibold tracking-tight mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Crafted with Purpose,
          </motion.h1>

          <motion.h2
            className="text-5xl sm:text-6xl font-light tracking-wide mb-6 italic text-[#d0d0d0]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Designed for Life
          </motion.h2>

          <motion.div
            className="w-24 h-1 mx-auto bg-[#C2B4A3] rounded-full mb-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            style={{ transformOrigin: "left" }}
          />

          <motion.p
            className="text-lg sm:text-xl text-[#dfd7d7] max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 1 }}
          >
            Explore a selection of spaces that go beyond luxury — built to
            elevate your lifestyle through intelligent design and timeless
            aesthetics.
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll Hint + Label */}
      {showScrollHint && (
        <motion.div
          className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.5,
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <a
            href="#listings"
            className="group flex flex-col items-center text-[#f3f1ee] hover:text-[#e4c27d] transition"
          >
            <span className="text-sm mb-2">Scroll to Explore</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 animate-bounce"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </motion.div>
      )}
    </section>
  );
};

export default ProjectsHero;
