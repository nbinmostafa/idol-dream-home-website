import React, { useState } from "react";
import { motion } from "framer-motion";

const ProjectMap = () => {
  const [overlayVisible, setOverlayVisible] = useState(true);

  return (
    <section className="bg-[#f5f0e6] py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-semibold text-[#1B1B1B] mb-6"
        >
          Where We Build
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-[#6e655b] text-lg max-w-2xl mx-auto mb-10"
        >
          Explore our project locations across Dhaka — from Jolshiri to Bashundhara.
        </motion.p>

        <div
          className="relative rounded-xl overflow-hidden shadow-lg border border-[#e0d7cb] max-w-5xl mx-auto"
          onClick={() => setOverlayVisible(false)}
        >
          {overlayVisible && (
            <div className="absolute inset-0 bg-black/10 z-10 flex items-center justify-center text-white text-sm sm:text-base backdrop-blur-sm cursor-pointer">
              Tap to explore
            </div>
          )}

          <iframe
            title="Idol Dream Homes Map"
            src="https://www.google.com/maps/d/u/0/embed?mid=18wMevlk8hkFF0uLc25hGMy618yVH_3g&ehbc=2E312F"
            width="100%"
            height="480"
            loading="lazy"
            className="relative z-0 w-full"
            style={{ border: 0 }}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ProjectMap;