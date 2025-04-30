import { motion } from "framer-motion";
import { Lightbulb, Leaf, ShieldCheck, Accessibility } from "lucide-react";




export function CompanyValues() {
    const values = [
      { icon: <Lightbulb size={32} className="text-[#C2B4A3]" />, title: "Innovation", desc: "Designing smarter, future-forward spaces for modern living." },
      { icon: <Leaf size={32} className="text-[#C2B4A3]" />, title: "Sustainability", desc: "Eco-conscious planning to protect tomorrow's environment." },
      { icon: <ShieldCheck size={32} className="text-[#C2B4A3]" />, title: "Integrity", desc: "Building with honesty, transparency, and trust." },
      { icon: <Accessibility size={32} className="text-[#C2B4A3]" />, title: "Accessibility", desc: "Creating homes and communities for everyone." },
    ];
  
    return (
      <section className="py-20 px-6 bg-white text-[#1B1B1B]">
        {/* Faded background word */}
        
        <div className="max-w-6xl mx-auto text-center space-y-12">
          <h2 className="text-3xl font-bold">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {values.map((val, i) => (
              <motion.div
                key={i}
                className="bg-[#F5F0E6] shadow-lg rounded-2xl p-6 space-y-3"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
              >
                <div>{val.icon}</div>
                <h3 className="text-xl font-semibold mb-1 text-[#1B1B1B]">{val.title}</h3>
                <p className="text-sm text-[#555]">{val.desc}</p>
              </motion.div>
            ))}
        
        
          </div>
        </div>
      </section>
    );
  }