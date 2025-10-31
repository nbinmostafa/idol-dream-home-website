import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { HomeIcon, Building2, Ruler, Leaf } from "lucide-react";

function ScrollCount({ end, duration = 1.6, suffix = "" }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.6 });
  return <span ref={ref}>{inView ? <CountUp end={end} duration={duration} suffix={suffix} /> : 0}</span>;
}

export default function Metrics() {
  const metrics = [
    { icon: <HomeIcon className="w-9 h-9 text-[#C2B4A3]" />, count: 40, suffix: "+", label: "Luxury Units" },
    { icon: <Building2 className="w-9 h-9 text-[#C2B4A3]" />, count: 5, suffix: "", label: "Buildings in Development" },
    { icon: <Ruler className="w-9 h-9 text-[#C2B4A3]" />, count: 2500, suffix: "+", label: "Avg. Sq Ft Per Unit" },
    { icon: <Leaf className="w-9 h-9 text-[#C2B4A3]" />, count: 100, suffix: "%", label: "Eco‑Certified Materials" },
  ];

  return (
    <section id="metrics" className="relative overflow-hidden py-24 px-6 bg-[#F5F0E6]">
      <div className="relative max-w-7xl mx-auto text-center z-10">
        <motion.p
          className="uppercase tracking-[0.25em] text-[#C2B4A3] text-sm mb-3"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          By the Numbers
        </motion.p>
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-[#1B1B1B] mb-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          A Legacy Measured in Living
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white/80 backdrop-blur border border-[#E7E2D8] rounded-3xl p-8 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex flex-col items-center">
                <div className="mb-3">{m.icon}</div>
                <div className="font-serif text-5xl font-bold text-[#1B1B1B]">
                  <ScrollCount end={m.count} suffix={m.suffix} />
                </div>
                <p className="mt-2 text-sm sm:text-base text-[#6a6257] max-w-[220px]">{m.label}</p>
                <div className="mt-6 h-[2px] w-12 bg-gradient-to-r from-transparent via-[#C2B4A3] to-transparent group-hover:w-20 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
