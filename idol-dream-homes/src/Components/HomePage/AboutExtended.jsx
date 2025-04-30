import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom"; 


export default function AboutExtended() {
    return(
        <section className="relative bg-[#F5F0E6] text-[#1B1B1B] py-24 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="md:w-1/2 space-y-6"
          >
            <h2 className="text-4xl sm:text-5xl font-bold border-l-8 border-[#C2B4A3] pl-4">
              More Than Homes — A Lifestyle
            </h2>
            <p className="text-lg text-[#666] leading-relaxed">
              At <span className="text-[#C2B4A3] font-semibold">Idol Dream Homes</span>, we craft more than luxurious properties; 
              we create transformative environments that shape lives, inspire dreams, and define prestige. 
              Every residence we build reflects a seamless fusion of innovation, elegance, and timeless design.
            </p>
            <p className="text-lg text-[#666] leading-relaxed">
              For those who seek more than the ordinary, we offer a gateway to sophistication, comfort, and distinction — 
              where every detail is meticulously curated to elevate modern living into an art form.
            </p>

            <Link to='/about#letter-from-founder'>
                <button className="mt-4 px-6 py-3 bg-[#F5F0E6] text-black border-2 border-[#C2B4A3] rounded-full text-lg font-semibold hover:bg-[#C2B4A3] hover:text-white transition">
                Learn More About Our Vision
                </button>
            </Link>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="md:w-1/2"
          >
            <img
              src="../Interior.png" 
              alt="Elegant Living"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </motion.div>

        </div>
      </section>
    );
}