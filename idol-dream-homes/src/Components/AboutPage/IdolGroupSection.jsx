import React from "react";
import { motion } from "framer-motion";
import { HeartPulse, Users, Plane, MonitorSmartphone } from "lucide-react";

export default function IdolGroupSection() {
  return (
    <section id="company" className="relative bg-white py-20 px-6 text-[#1B1B1B]">
        <div className="max-w-6xl mx-auto flex justify-center">
        <img
            src="/IdolGroup.jpg"
            alt="Idol Group Logo"
            className="w-32 h-32 object-contain"
        />
        </div>
       
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-16 text-center">
        {/* Black Banner with Logo */}
        

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 max-w-3xl"
        >
          <p className="text-sm uppercase tracking-[0.15em] text-[#C2B4A3] font-bold">Our Parent Company</p>
          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            Powering People, Places, and Possibilities—Globally.
          </h2>
          <p className="text-lg md:text-xl text-[#444] leading-relaxed">
            Idol Group is a multi-industry powerhouse dedicated to advancing care, connection, and innovation. From healthcare and staffing to hospitality, tourism, and IT, we provide solutions that empower people and elevate organizations across Bangladesh and beyond.
          </p>
        </motion.div>

        {/* Animated Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
          {[{
            icon: <HeartPulse className="w-8 h-8 text-[#1B1B1B]" />,
            title: "Healthcare & Wellness",
            text: "Professionals for hospitals, clinics, and care homes."
          },
          {
            icon: <Users className="w-8 h-8 text-[#1B1B1B]" />,
            title: "Hospitality & Staffing",
            text: "Human capital for hotels, teams, and guest service excellence."
          },
          {
            icon: <Plane className="w-8 h-8 text-[#1B1B1B]" />,
            title: "Tourism & Travel",
            text: "Operational support for global experiences and leisure."
          },
          {
            icon: <MonitorSmartphone className="w-8 h-8 text-[#1B1B1B]" />,
            title: "IT & Tech Solutions",
            text: "Smart talent for digital transformation and growth."
          }].map((card, index) => (
            <motion.div
              key={index}
              className="bg-[#F5F0E6] p-8 rounded-2xl shadow-md space-y-3 text-left"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {card.icon}
              <h4 className="text-lg font-semibold">{card.title}</h4>
              <p className="text-sm text-[#555]">{card.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Quote and CTA */}
        <motion.blockquote
          className="text-base italic text-[#666] pt-2 border-l-4 pl-4 border-[#C2B4A3] max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          “We don’t just fill positions—we empower people to thrive.”
        </motion.blockquote>

        <motion.a
          href="https://www.idolgroup.com.bd/"
          target="_blank"
          className="inline-block px-10 py-4 mt-6 rounded-full bg-[#C2B4A3] text-[#1B1B1B] text-base font-semibold hover:bg-[#B5A28E] transition"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Explore Our Vision
        </motion.a>

      </div>
    </section>
  );
}

