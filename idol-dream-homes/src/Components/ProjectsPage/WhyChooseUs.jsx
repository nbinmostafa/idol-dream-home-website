import React from "react";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  return (
    <section className="bg-[#f8f5f0] py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-4xl sm:text-5xl font-light text-[#1B1B1B] leading-tight">
            Why Homeowners Choose Idol Dream Homes
          </h2>

          <p className="text-[#5f564c] text-lg max-w-xl">
            It’s not just about square footage — it’s about soul. Every detail, every material, every floorplan is chosen to create homes that feel effortless, timeless, and truly yours.
          </p>

          <div className="space-y-5 mt-6">
            <div>
              <h4 className="text-lg font-semibold text-[#1B1B1B] mb-1">
                Architectural intention
              </h4>
              <p className="text-[#444038] text-base">
                We design around light, movement, and meaningful use of space.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-[#1B1B1B] mb-1">
                Elevated materials
              </h4>
              <p className="text-[#444038] text-base">
                From natural finishes to eco-conscious systems, quality is never compromised.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-[#1B1B1B] mb-1">
                Transparency from blueprint to handover
              </h4>
              <p className="text-[#444038] text-base">
                You’re not just informed — you’re involved.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-[#1B1B1B] mb-1">
                Crafted for longevity
              </h4>
              <p className="text-[#444038] text-base">
                Our spaces are designed to stand the test of time — in both structure and style.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Visual Side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl overflow-hidden shadow-xl border border-[#e0d7cb]"
        >
          <img
            src="/Interior3.png"
            alt="Elegant Living Space"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;