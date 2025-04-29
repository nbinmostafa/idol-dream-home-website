import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar.jsx";

function Contact() {
  const navigate = useNavigate();
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <div className="bg-[#1B1B1B] text-white min-h-screen">
      <Navbar />
      <section className="relative bg-[#F5F0E6] text-[#1B1B1B] py-24 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

          {/* Left Side: Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="md:w-1/2 space-y-8"
          >
            <h2 className="text-4xl sm:text-5xl font-bold border-l-8 border-[#C2B4A3] pl-4">
              Get In Touch
            </h2>
            <p className="text-lg text-[#666] leading-relaxed">
              Ready to find your dream home or have questions?  
              Our team is here to help you every step of the way.
              Reach out and let's start your journey today!
            </p>

            <div className="space-y-4 text-[#1B1B1B]">
              <div>
                <p className="font-semibold">Phone:</p>
                <p>+1 (XXX) XXX-XXXX</p>
              </div>
              <div>
                <p className="font-semibold">Email:</p>
                <p>info@idoldreamhomes.com</p>
              </div>
              <div>
                <p className="font-semibold">Office:</p>
                <p>Dhaka, Bangladesh | Toronto, Canada</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.form
            action="https://formspree.io/f/mgvkovrl"
            method="POST"
            onSubmit={() => {
              setFormSubmitted(true);
              setTimeout(() => navigate("/"), 3000);
            }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="md:w-1/2 bg-white/70 p-8 rounded-2xl shadow-lg backdrop-blur-md space-y-6"
          >
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[#1B1B1B]">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="p-3 rounded-lg border border-[#C2B4A3] focus:ring-2 focus:ring-[#C2B4A3] outline-none"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[#1B1B1B]">Email</label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                className="p-3 rounded-lg border border-[#C2B4A3] focus:ring-2 focus:ring-[#C2B4A3] outline-none"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[#1B1B1B]">Message</label>
              <textarea
                name="message"
                placeholder="How can we help you?"
                rows="4"
                className="p-3 rounded-lg border border-[#C2B4A3] focus:ring-2 focus:ring-[#C2B4A3] outline-none resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full mt-4 bg-[#C2B4A3] text-white font-semibold py-3 rounded-full hover:bg-[#B09575] transition"
            >
              Send Message
            </button>
          </motion.form>

          {/* Thank You Popup */}
          {formSubmitted && (
            <div className="fixed top-10 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg transition">
              Thank you! Your message has been sent 🎉
            </div>
          )}

        </div>
      </section>
    </div>
  );
}

export default Contact;
