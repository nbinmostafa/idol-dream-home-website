import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "../Navbar/Navbar.jsx";

export default function HeroJourney() {
  const { scrollYProgress } = useScroll();
  const glow = useTransform(scrollYProgress, [0, 1], [0.25, 0]);
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();
    setGreeting(hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening");
  }, []);

  return (
    <header className="relative min-h-[250svh] w-full text-[#1B1B1B] overflow-x-hidden">
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Panel 1: Dream */}
      <section className="relative h-screen flex items-center justify-center">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/about-hero.jpg')", opacity: 0.95 }}
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F5F0E6] via-[#F5F0E6]/50 to-transparent" />
        <div className="relative z-10 text-center px-6">
          <motion.p className="uppercase tracking-[0.3em] text-[#6b5f52] text-xs sm:text-sm mb-3" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            {greeting}, welcome to
          </motion.p>
          <motion.h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
            Where Dreams Find Their Address
          </motion.h1>
          <motion.p className="mt-5 text-base sm:text-xl text-[#4a4743] max-w-3xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
            Luxury, Comfort, and Integrity — built into every corner.
          </motion.p>
          <div className="relative mx-auto mt-6 h-[2px] w-24">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C2B4A3] to-transparent" />
          </div>
        </div>
        <motion.div className="absolute top-1/3 left-1/4 w-[18rem] h-[18rem] rounded-full blur-3xl bg-[#C2B4A3]/30" style={{ opacity: glow }} />
      </section>

      {/* Panel 2: Discover */}
      <section className="relative h-screen grid md:grid-cols-2 items-center bg-gradient-to-br from-[#FAF7F2] to-[#F5F0E6]">
        <div className="h-full w-full">
          <motion.div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: "url('/Interior2.png')" }}
            initial={{ opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8 }}
          />
        </div>
        <div className="px-8 md:px-12">
          <motion.h2 className="font-serif text-4xl sm:text-5xl font-bold" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Crafted with innovation and sustainability at heart
          </motion.h2>
          <motion.p className="mt-4 text-[#4a4743] text-lg" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Thoughtful materials, efficient spaces, and timeless design — all composed to elevate daily living.
          </motion.p>
        </div>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-[#C2B4A3]/25 to-transparent" />
        </div>
      </section>

      {/* Panel 3: Move In */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/Interior3.png')" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F5F0E6] via-[#F5F0E6]/60 to-transparent" />
        <div className="relative z-10 text-center px-6">
          <motion.h3 className="font-serif text-5xl sm:text-6xl font-bold" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Move In to Light and Calm
          </motion.h3>
          <motion.p className="mt-4 text-lg text-[#4a4743]" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            Book your visit and experience a new standard of living.
          </motion.p>
          <motion.a
            href="/contact#form"
            className="inline-block mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-[#C2B4A3] to-[#E8DDD0] text-[#1B1B1B] font-semibold shadow hover:shadow-lg transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Book Your Visit
          </motion.a>
        </div>
      </section>
    </header>
  );
}

