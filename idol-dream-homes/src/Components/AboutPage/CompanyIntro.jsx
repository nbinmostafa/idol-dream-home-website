import { motion } from "framer-motion";

export function CompanyIntro() {
  return (
    <section className="relative py-24 px-6 bg-[#F5F0E6] overflow-hidden">
      {/* Faded background word */}
      <h1 className="absolute text-[120px] sm:text-[180px] lg:text-[220px] font-bold text-[#b9ad9d] opacity-20 -top-8 left-1/2 -translate-x-1/2 z-0 pointer-events-none select-none">
        Vision
      </h1>

      <motion.div
        className="relative z-10 max-w-5xl mx-auto text-center space-y-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#1B1B1B]">
          Who We Are
        </h2>

        <p className="text-lg sm:text-xl leading-8 text-[#444] font-light max-w-3xl mx-auto">
          <span className="font-semibold bg-gradient-to-r from-[#C2B4A3] to-[#A18975] text-transparent bg-clip-text">
            We don’t just build properties—
          </span>{" "}
          we build the future of living in Bangladesh. Rooted in legacy and led
          by vision, Idol Dream Homes is a family-run real estate development
          company redefining urban living. With a deep commitment to
          sustainability, elegance, and people-first design, we create
          thoughtful spaces where dreams find a place to grow.
        </p>
      </motion.div>
    </section>
  );
}
