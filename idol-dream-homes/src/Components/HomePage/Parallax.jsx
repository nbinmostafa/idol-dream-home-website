import React, { useEffect, useRef } from "react";
import Rellax from "rellax";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function ParallaxHero() {
  useEffect(() => {
    new Rellax(".rellax", { center: true });
  }, []);

  const containerRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const offsetX = (e.clientX - rect.left) / rect.width - 0.5;
    const offsetY = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(offsetX);
    y.set(offsetY);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="overflow-hidden bg-black text-white relative"
    >
      {/* Hero Section */}
      <section className="relative h-[240vh] flex items-center justify-center overflow-hidden">
        {/* Background Skyline Layer */}
        <div
          className="rellax absolute inset-0 bg-cover bg-center scale-125"
          data-rellax-speed="-9"
          style={{ backgroundImage: "url('skyline.jpg')" }}
        />

        {/* Animated Clouds Layer */}
        <div
          className="rellax absolute inset-0 bg-[url('/Interior.png')] bg-repeat opacity-40 animate-[cloudMove_60s_linear_infinite]"
          data-rellax-speed="-6"
        />

        {/* Subtle Grid Texture Layer */}
        <div
          className="rellax absolute inset-0 bg-[url('/Interior2.png')] bg-repeat opacity-5"
          data-rellax-speed="-5"
        />

        {/* Abstract Glow Shapes */}
        <div
          className="rellax absolute top-0 left-0 w-[1000px] h-[1000px] bg-[#C2B4A3]/20 rounded-full blur-[250px] animate-[pulse_20s_ease-in-out_infinite]"
          data-rellax-speed="-4"
        />
        <div
          className="rellax absolute bottom-0 right-0 w-[800px] h-[800px] bg-[#F5F0E6]/20 rounded-full blur-[200px] animate-[spin_60s_linear_infinite]"
          data-rellax-speed="-2"
        />

        {/* Gigantic Text for Depth */}
        <div
          className="rellax absolute top-1/3 left-1/2 -translate-x-1/2 text-[30rem] font-black text-[#ffffff0a] pointer-events-none select-none"
          data-rellax-speed="-10"
        >
          IDOL
        </div>

        {/* Central Cinematic Text */}
        <motion.div
          style={{ rotateX, rotateY }}
          className="relative z-20 text-center px-4 drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)]"
        >
          <motion.h1
            className="text-7xl md:text-8xl font-bold text-[#C2B4A3] tracking-tight"
            initial={{ opacity: 0, y: 120 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            Idol Dream Homes
          </motion.h1>
          <motion.p
            className="mt-10 text-3xl md:text-4xl text-[#F5F0E6]/90"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8, delay: 0.5 }}
          >
            Crafting dreams into extraordinary realities
          </motion.p>
        </motion.div>

        {/* Floating Accent Line */}
        <div
          className="rellax absolute top-[85%] left-1/2 -translate-x-1/2 w-[60vw] h-[2px] bg-gradient-to-r from-transparent via-[#C2B4A3]/50 to-transparent"
          data-rellax-speed="3"
        />
      </section>

      {/* Sticky Narrative Section */}
      <section className="sticky top-0 h-screen bg-[#F5F0E6] text-black flex items-center justify-center text-center px-4">
        <div className="max-w-3xl">
          <motion.h2
            className="text-6xl font-bold"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          >
            Redefining Luxury Living
          </motion.h2>
          <motion.p
            className="mt-6 text-2xl"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Every home we build narrates a legacy of elegance, innovation, and timeless craftsmanship.
          </motion.p>
        </div>
      </section>
    </div>
  );
}