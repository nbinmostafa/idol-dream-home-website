import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function GetInTouch() {
  return (
    <section className="relative bg-[#F5F0E6] text-[#1B1B1B] py-32 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center space-y-10"
      >
        <h3 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight">
          Let's Start Your Journey Home
        </h3>
        <p className="text-lg sm:text-xl text-[#444] max-w-3xl mx-auto">
          Whether you're looking for your dream home or want to know more about our upcoming projects, our team at Idol Dream Homes is here to assist you with warmth, clarity, and care.
        </p>
        <Link
            to="/Contact#form"
            className="inline-block px-10 py-4 rounded-full bg-[#C2B4A3] text-[#1B1B1B] text-lg font-semibold hover:bg-[#b09e8a] transition-all"
            >
            Get In Touch
        </Link>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-10 text-[#333]">
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5" />
            <a href="mailto:info@idhbd.com" className="hover:underline">
              info@idhbd.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5" />
            <a href="tel:+8801234567890" className="hover:underline">
              +880 123 456 7890
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}