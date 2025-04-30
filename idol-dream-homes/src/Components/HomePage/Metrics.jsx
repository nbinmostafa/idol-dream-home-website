import { HomeIcon, Building2, Ruler, Leaf } from "lucide-react";
import CountUp from 'react-countup';
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

function ScrollCount({ end, duration = 2, suffix = "" }) {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.9, // Adjust how far in the screen it needs to be
    });
  
    return (
      <div ref={ref}>
        {inView && (
          <CountUp end={end} duration={duration} suffix={suffix} />
        )}
      </div>
    );
  }


export default function Metrics() {
    return (
        <section
            className="relative bg-[#f6f0f0de] text-black py-20 px-4"
            style={{
            backgroundImage: `url('/Interior2.png')`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundBlendMode: 'overlay',
            }}
        >
            <div className="max-w-6xl mx-auto text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold">Our Impact in Numbers</h2>
            <p className="text-lg text-[#666] mt-4">Delivering excellence in every square foot.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
            {[
                {
                icon: <HomeIcon className="w-10 h-10 text-[#C2B4A3] mb-4" />,
                count: 40,
                label: "Luxury Units",
                suffix: "+"
                },
                {
                icon: <Building2 className="w-10 h-10 text-[#C2B4A3] mb-4" />,
                count: 5,
                label: "Buildings in Development",
                suffix: ""
                },
                {
                icon: <Ruler className="w-10 h-10 text-[#C2B4A3] mb-4" />,
                count: 2500,
                label: "Sq. Ft Average Unit",
                suffix: "+"
                },
                {
                icon: <Leaf className="w-10 h-10 text-[#C2B4A3] mb-4" />,
                count: 100,
                label: "Eco-certified Materials",
                suffix: "%"
                }
            ].map((item, index) => (
                <motion.div
                key={index}
                className="w-full p-6 bg-white/60 backdrop-blur-md border-4 border-[#C2B4A3]/40 rounded-2xl shadow-lg hover:shadow-[#D5C7A3] transition hover:scale-105 flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.3, type: "spring", stiffness: 80, damping: 20 }}
                viewport={{ once: true }}
                >
                {item.icon}
                <h2 className="text-5xl font-bold text-[#1B1B1B]">
                    <ScrollCount end={item.count} suffix={item.suffix} />
                </h2>
                <p className="mt-2 text-lg text-[#666] leading-snug max-w-[180px]">
                    {item.label}
                </p>
                </motion.div>
            ))}
            </div>
        </section>
    );
};