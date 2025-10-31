import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../Navbar/Navbar.jsx";
import { Link } from "react-router-dom";

function Hero() {
  const [showScrollHint, setShowScrollHint] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollHint(window.scrollY < 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening";

  return (
    <section
      className="relative h-[100svh] w-full overflow-hidden text-white snap-start"
      role="banner"
      aria-label="Hero Section"
    >
      {/* Background Video with fallback poster */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          src="/abc.mp4"
          poster="/Interior3.png"
          autoPlay
          muted
          playsInline
          loop
        />
        {/* subtle dark layer for text contrast */}
        <motion.div
          className="absolute inset-0 bg-black/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        />
      </div>

      {/* Soft Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="uppercase tracking-[0.3em] text-xs sm:text-base text-white/70 mb-2">
            {greeting}, welcome to
          </p>

          <motion.h1
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold drop-shadow-[0_0_25px_rgba(0,0,0,0.5)]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Idol Dream Homes
          </motion.h1>

          <motion.p
            className="mt-5 text-base sm:text-xl md:text-2xl text-white/90 leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            Step into your next chapter — a sanctuary built for comfort,
            sophistication, and timeless living.
          </motion.p>

          {/* Decorative shimmer line */}
          <motion.div
            className="mt-6 h-[2px] w-24 mx-auto bg-gradient-to-r from-transparent via-[#C2B4A3] to-transparent"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 1, duration: 1 }}
          />

          {/* Button */}
          <Link to="/projects#listings">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px rgba(194, 180, 163, 0.5)" }}
              whileTap={{ scale: 0.97 }}
              className="mt-10 px-7 py-3 rounded-full bg-gradient-to-r from-[#C2B4A3] to-[#E8DDD0]
                         text-black font-semibold text-base sm:text-lg tracking-wide shadow-lg
                         hover:from-[#E8DDD0] hover:to-[#F5F0E6] transition-all duration-300"
            >
              Explore Listings
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Scroll Hint */}
      {showScrollHint && (
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center z-30"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        >
          <a
            href="#about"
            className="group flex flex-col items-center text-[#f5f3f0] hover:text-[#d8c09c] transition-all duration-300"
          >
            <span className="text-xs sm:text-sm font-light mb-2 tracking-wide">Scroll to Explore</span>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 animate-bounce"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </motion.svg>
          </a>
        </motion.div>
      )}

      {/* Fade to Next Section */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-[#f8f8f8]" />
    </section>
  );
}

export default Hero;

