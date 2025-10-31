import { ShieldCheck, Sparkles, Leaf, Building2 } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  {
    icon: ShieldCheck,
    title: "Built With Integrity",
    text: "Transparent process, premium materials, and warranty-backed delivery.",
  },
  {
    icon: Sparkles,
    title: "Refined Aesthetics",
    text: "Thoughtful interiors where minimalism meets timeless luxury.",
  },
  { icon: Leaf, title: "Sustainable By Design", text: "Eco-conscious choices reduce footprint and running costs." },
  { icon: Building2, title: "Prime Locations", text: "Connected addresses that enhance lifestyle and value." },
];

export default function FeaturedHighlights() {
  return (
    <section className="relative bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="uppercase tracking-[0.25em] text-[#C2B4A3] text-sm">What Sets Us Apart</p>
          <h2 className="mt-2 text-4xl sm:text-5xl font-bold text-[#1B1B1B]">Elevated Living, Thoughtfully Delivered</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-3xl border border-[#e8e2d8] bg-[#faf8f5] p-7 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#C2B4A3]/15 text-[#C2B4A3] grid place-items-center">
                <it.icon className="w-6 h-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-[#1B1B1B]">{it.title}</h3>
              <p className="mt-2 text-[#5c5a57] text-[15px] leading-relaxed">{it.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

