import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function BrochureDownload() {
  return (
    <section className="py-24 px-6 bg-white text-[#1B1B1B] text-center">
      <motion.div
        className="max-w-3xl mx-auto space-y-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold">Project Brochure</h2>
        <p className="text-lg text-[#555] font-light">
          Get a detailed look at our current developments, design philosophy, floor plans, and vision for the future.
        </p>
        <a
          href="/CompanyProfile.pdf"
          download
          className="inline-flex items-center gap-2 bg-[#C2B4A3] text-white px-6 py-3 rounded-full shadow-md hover:bg-[#a18975] transition"
        >
          <Download size={20} /> Download Brochure
        </a>
      </motion.div>
    </section>
  );
}