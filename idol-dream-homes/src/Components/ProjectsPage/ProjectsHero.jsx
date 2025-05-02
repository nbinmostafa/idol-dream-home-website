import React from "react";
import { motion } from "framer-motion";

const ProjectsHero = () => {
  return (
    <section className="relative bg-[#21201fb6] text-[#979797] py-32 overflow-hidden">
      {/* Subtle architectural overlay */}
      <div
        className="absolute inset-0 opacity-10 z-0"
        style={{
          backgroundImage: "url('/nterior2.png')", // Add a light architectural texture or line grid
          backgroundSize: "contain",
          backgroundRepeat: "repeat",
          mixBlendMode: "multiply",
        }}
      />

      {/* Soft glow accents */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-[#c2b4a3] opacity-20 rounded-full blur-3xl z-0" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-6xl mx-auto px-6 text-center"
      >
        <motion.h1
          className="text-5xl sm:text-6xl font-semibold tracking-tight mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Crafted with Purpose,
        </motion.h1>
        <motion.h1
          className="text-5xl sm:text-6xl font-light tracking-wide mb-6 italic text-[#d0d0d0]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Designed for Life
        </motion.h1>

        {/* Highlight bar */}
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
          Explore a selection of spaces that go beyond luxury — built to elevate your lifestyle through intelligent design and timeless aesthetics.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default ProjectsHero;
