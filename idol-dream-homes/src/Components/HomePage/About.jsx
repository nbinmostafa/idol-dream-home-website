import { motion } from "framer-motion";

export default function About(){
    return(
      <section
      className="relative bg-[#f0f0f0ab] text-[#1B1B1B] py-24 px-6 overflow-hidden"
      style={{
        backgroundImage: `url('/src/assets/Interior2.png')`, // subtle overlay pattern or image
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className="absolute inset-0 bg-white opacity-70 z-0" /> {/* subtle overlay */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* Left: Vision & Philosophy */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 space-y-6"
        >
          <h2 className="text-4xl sm:text-5xl font-bold border-l-8 border-[#C2B4A3] pl-4">
            Building More Than Homes
          </h2>
          <p className="text-lg text-[#666] leading-relaxed">
            At Idol Dream Homes, we blend elegance with accessibility — crafting future-ready, eco-conscious living spaces that empower families to live their dream.
          </p>
          <div className="italic text-[#ad987e] font-medium text-xl border-l-4 border-[#C2B4A3] pl-4">
            “A home should be more than walls — it should be where dreams begin.”
          </div>
          <ul className="mt-6 space-y-3">
            {["Smart Home Integration", "Eco-Certified Builds", "Luxury with Affordability", "Designed for Families"].map((item, i) => (
              <motion.li
                key={i}
                className="text-lg flex items-center gap-3 text-[#1B1B1B]"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.2 }}
              >
                <span className="text-[#C2B4A3] text-xl">✓</span>
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2"
        >
          <img
            src="../about-image.jpg" 
            alt="Our Vision"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
    );
}