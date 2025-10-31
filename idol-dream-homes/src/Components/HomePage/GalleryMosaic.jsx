import { motion } from "framer-motion";

const images = [
  { src: "/about-hero.jpg", col: "col-span-2", row: "row-span-2" },
  { src: "/Interior.png" },
  { src: "/Interior2.png" },
  { src: "/Interior3.png" },
  { src: "/project-hero.jpg" },
  { src: "/skyline.jpg" },
];

export default function GalleryMosaic() {
  return (
    <section className="relative bg-[#f8f7f4] py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="uppercase tracking-[0.25em] text-[#C2B4A3] text-sm">Inspiration</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1B1B1B]">Spaces That Tell Stories</h2>
          </div>
          <div className="hidden md:block text-[#6a6257] max-w-md text-sm leading-relaxed">
            We craft warm, modern environments with layered textures, natural light, and enduring materials.
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 auto-rows-[120px] sm:auto-rows-[160px] md:auto-rows-[200px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`relative overflow-hidden rounded-2xl ${img.col || ""} ${img.row || ""}`}
            >
              <img src={img.src} alt="Showcase" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

