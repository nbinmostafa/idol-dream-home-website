import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const quotes = [
  {
    name: "Naznin Rahman",
    quote: "Our experience with Idol Dream Homes was extraordinary. True modern luxury.",
  },
  {
    name: "Faisal Chowdhury",
    quote: "From first meeting to handover, professionalism and transparency were unmatched.",
  },
  {
    name: "The Alam Family",
    quote: "Quality, location and vision — they build not just residences, but legacies.",
  },
];

export default function TestimonialsPreview() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % quotes.length), 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative bg-white py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#1B1B1B] mb-8">What Our Clients Say</h2>

        <div className="relative h-40 sm:h-36">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="px-4"
            >
              <p className="text-xl sm:text-2xl italic text-[#4a453f] leading-relaxed">“{quotes[index].quote}”</p>
              <p className="mt-4 text-[#8c7d6a] font-semibold">— {quotes[index].name}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

