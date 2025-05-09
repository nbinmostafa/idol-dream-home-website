import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const child = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function AboutIntro() {
  return (
    <section
      className="h-screen flex flex-col justify-center items-center bg-[#ac9e82] text-[#1B1B1B] px-6 text-center relative"
      style={{
        backgroundImage: `url('/about-hero.jpg')`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
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
          “We don’t just build homes—<br className="hidden sm:block" /> we craft dreams into reality.”
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
          Welcome to Idol Dream Homes — where luxury, warmth, and vision come together to redefine urban living.
        </motion.p>
      </motion.div>

      {/* Scroll Cue */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-[#C2B4A3] text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        ↓ Scroll to Learn More
      </motion.div>
    </section>
  );
}
