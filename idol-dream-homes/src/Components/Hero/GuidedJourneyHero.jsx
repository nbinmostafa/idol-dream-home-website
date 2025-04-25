import { motion } from "framer-motion";
import Navbar from "../Navbar/Navbar.jsx";
import { useRef } from "react";

function GuidedJourneyHero() {
  const finalSectionRef = useRef(null);

  const scrollToNext = () => {
    if (finalSectionRef.current) {
      finalSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full scroll-smooth">
      {/* Step 1: Dream */}
      <section
        className="h-screen w-full bg-cover bg-center text-white snap-start relative"
        style={{ backgroundImage: `url('/src/assets/Dream.jpg')` }}
      >
        <div className="absolute top-0 left-0 w-full z-10">
          <Navbar />
        </div>

        <div className="flex flex-col items-center justify-center h-full px-6">
          <motion.div
            className="text-center max-w-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold drop-shadow-lg">Dream</h1>
            <p className="mt-4 text-lg sm:text-xl text-white/80">
              Visualize the life you’ve always wanted — serene, smart, and stunningly designed.
            </p>
            <button
              onClick={scrollToNext}
              className="mt-8 px-6 py-3 bg-[#F5F0E6] text-black rounded-full text-lg font-semibold hover:bg-[#C2B4A3] transition"
            >
              Start Your Journey ↓
            </button>
          </motion.div>
        </div>
      </section>

      {/* Step 2: Discover */}
      <section
        className="h-screen w-full bg-cover bg-center text-white snap-start relative"
        style={{ backgroundImage: `url('/src/assets/Interior2.png')` }}
      >
        <div className="absolute top-0 left-0 w-full z-10">
          <Navbar />
        </div>

        <div className="flex flex-col items-center justify-center h-full px-6">
          <motion.div
            className="text-center max-w-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold drop-shadow-lg">Discover</h1>
            <p className="mt-4 text-lg sm:text-xl text-white/80">
              Explore luxury residences, smart integrations, and premium finishes tailored for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Step 3: Move In */}
      <section
        ref={finalSectionRef}
        className="h-screen w-full bg-cover bg-center text-white snap-start relative"
        style={{ backgroundImage: `url('/src/assets/Interior3.png')` }}
      >
        <div className="absolute top-0 left-0 w-full z-10">
          <Navbar />
        </div>

        <div className="flex flex-col items-center justify-center h-full px-6">
          <motion.div
            className="text-center max-w-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold drop-shadow-lg">Move In</h1>
            <p className="mt-4 text-lg sm:text-xl text-white/80">
              Step into your new space — a home that’s ready when you are, built for the life you want.
            </p>
            <button className="mt-8 px-6 py-3 bg-[#F5F0E6] text-black rounded-full text-lg font-semibold hover:bg-[#C2B4A3] transition">
              Explore Listings
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default GuidedJourneyHero;