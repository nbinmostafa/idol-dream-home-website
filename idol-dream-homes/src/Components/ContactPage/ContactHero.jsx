import React from "react";
import { motion } from "framer-motion";

const ContactHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#f7f3ed] via-[#f0eae0] to-[#e9e1d6] text-[#1B1B1B] py-24 overflow-hidden">
      {/* Soft glowing background shapes (optional aesthetic touch) */}
      <div className="absolute -top-24 -left-20 w-96 h-96 bg-[#d7c8b6] opacity-20 rounded-full blur-3xl z-0" />
      <div className="absolute -bottom-32 right-10 w-80 h-80 bg-[#c2b4a3] opacity-20 rounded-full blur-2xl z-0" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-4xl sm:text-5xl font-semibold leading-tight tracking-tight mb-6 text-[#3b3a36]"
        >
          Let’s Build Something Beautiful Together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-xl sm:text-2xl italic text-[#5a5143] max-w-2xl mx-auto"
        >
          “Every great relationship begins with a conversation. We’re here to
          listen, understand, and guide you home.”
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-6 text-base sm:text-lg text-[#a49382] font-medium"
        >
          — The Idol Dream Homes Team
        </motion.p>
      </motion.div>
    </section>
  );
};

export default ContactHero;