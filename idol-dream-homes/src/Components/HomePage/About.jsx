import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative bg-[#F5F0E6] text-[#1B1B1B] py-24 px-6 overflow-hidden" aria-label="About Idol Dream Homes">
      <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "url('/about-hero.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="md:w-1/2 space-y-6">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold border-l-8 border-[#C2B4A3] pl-4">Building More Than Homes</h2>
          <p className="text-lg text-[#5a5957] leading-relaxed">At Idol Dream Homes, we blend elegance with accessibility — crafting future-ready, eco-conscious living spaces that empower families to live their dream.</p>
          <div className="italic text-[#ad987e] font-medium text-xl border-l-4 border-[#C2B4A3] pl-4">“A home should be more than walls — it should be where dreams begin.”</div>
          <ul className="mt-6 space-y-3">
            {["Smart Home Integration", "Eco-Certified Builds", "Luxury with Affordability", "Designed for Families"].map((item, i) => (
              <motion.li key={i} className="text-lg flex items-center gap-3 text-[#1B1B1B]" initial={{ opacity: 0, x: -14 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.1 }}>
                <span className="text-[#C2B4A3] text-xl">•</span>
                {item}
              </motion.li>
            ))}
          </ul>
          <motion.div className="mt-8 grid grid-cols-2 gap-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            {[
              { t: 'Quality', d: 'Precision craftsmanship.' },
              { t: 'Integrity', d: 'Transparent, dependable.' },
              { t: 'Innovation', d: 'Smart modern living.' },
              { t: 'Sustainability', d: 'Eco-conscious materials.' },
            ].map((v) => (
              <div key={v.t} className="rounded-2xl border border-[#E7E2D8] bg-white/80 p-4">
                <p className="text-[#C2B4A3] font-semibold">{v.t}</p>
                <p className="text-[#666] text-sm">{v.d}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="md:w-1/2">
          <img src="/about-image.jpg" alt="Our Vision" className="rounded-2xl shadow-lg w-full object-cover" />
        </motion.div>
      </div>
    </section>
  );
}

