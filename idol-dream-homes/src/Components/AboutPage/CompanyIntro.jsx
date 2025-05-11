import { motion } from "framer-motion";

export function CompanyIntro() {
  return (
    <section id="vision" className="bg-[#F5F0E6] text-[#1B1B1B] overflow-hidden">
      
      {/* Who We Are Section */}
      <div className="relative py-24 px-6">
        <h1 className="absolute text-[120px] sm:text-[180px] lg:text-[220px] font-bold text-[#81776a] opacity-20 top-0 left-1/2 -translate-x-1/2 z-0 pointer-events-none select-none">
          Vision
        </h1>

        <motion.div
          className="relative z-10 max-w-5xl mx-auto text-center space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
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
      </div>

      {/* Our Story Section */}
      <div className="relative py-24 px-6">
        <h1 className="absolute text-[100px] sm:text-[160px] lg:text-[160px] font-bold text-[#81776a] opacity-20 top-0 left-1/2 -translate-x-1/2 z-0 pointer-events-none select-none">
          Our Story
        </h1>

        <motion.div
          className="relative z-10 max-w-5xl mx-auto text-center space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Our Journey: From Dreams to Reality
          </h2>
          <p className="text-lg sm:text-xl leading-8 text-[#444] font-light max-w-3xl mx-auto">
            <span className="font-semibold bg-gradient-to-r from-[#C2B4A3] to-[#A18975] text-transparent bg-clip-text">
              Idol Dream Homes is more than a name—it’s a vision brought to life.
            </span>{" "}
            Founded by a family with deep roots in the real estate industry, we are committed to creating spaces that resonate with the essence of home.
            Our journey began with a simple yet profound belief: that every family deserves a home that reflects their dreams and aspirations.
            Rooted in purpose, our mission is to craft homes that blend aesthetic elegance with everyday practicality.
            What began as an aspiration to redefine Bangladesh’s real estate landscape has grown into a movement grounded in trust,
            innovation, and lifestyle-driven design.
          </p>
        </motion.div>
      </div>

    </section>
  );
}
