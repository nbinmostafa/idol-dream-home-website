import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const child = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function AboutIntro() {
  const [showScrollHint, setShowScrollHint] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollHint(window.scrollY < 100); // Hide after scrolling 100px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="h-screen flex flex-col justify-center items-center bg-[#ac9e82] text-[#1B1B1B] px-6 text-center relative"
      style={{
        backgroundImage: `url('/about-hero.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#030303ba] z-0" />

      {/* Content */}
      <motion.div
        className="relative z-10 space-y-6 max-w-3xl mx-auto"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Gradient Quote */}
        <motion.h1
          className="text-4xl sm:text-5xl font-bold leading-tight bg-gradient-to-r from-[#C2B4A3] to-[#A18975] text-transparent bg-clip-text"
          variants={child}
        >
          “We don’t just build homes—
          <br className="hidden sm:block" /> we craft dreams into reality.”
        </motion.h1>

        {/* Glowing Divider */}
        <motion.div
          className="w-24 h-1 bg-[#C2B4A3] mx-auto rounded-full mt-2"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1 }}
        />

        {/* Subheadline */}
        <motion.p
          className="text-lg sm:text-xl text-[#c1bdbd] font-light px-4"
          variants={child}
        >
          Welcome to Idol Dream Homes — where luxury, warmth, and vision come
          together to redefine urban living.
        </motion.p>
      </motion.div>

      {/* Scroll Cue */}
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
            href="#company"
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
}
