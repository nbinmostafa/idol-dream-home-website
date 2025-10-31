import { motion } from "framer-motion";

const team = [
  {
    name: "Ferdous Hauque",
    role: "Managing Director",
    img: "/Ferdous.png",
    bio: "Design-forward strategist driving innovation and quality across every detail and delivery.",
  },
  {
    name: "Mostafa Kamal",
    role: "Founder & Chairman",
    img: "/chairman1.jpg",
    bio: "Visionary leader with a passion for crafting dignified, modern living at accessible value.",
  },
];

export default function TeamSection() {
  return (
    <section className="relative bg-[#FAF7F2] text-[#1B1B1B] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold">The People Behind the Dream</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-8">
          {team.map((p, i) => (
            <motion.div key={p.name} className="rounded-3xl bg-white border border-[#E7E2D8] overflow-hidden shadow-sm" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <div className="relative">
                <img src={p.img} alt={p.name} className="w-full h-72 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="p-6">
                <p className="text-xl font-semibold">{p.name}</p>
                <p className="text-[#7a7267]">{p.role}</p>
                <p className="mt-3 text-[#4a4743]">{p.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
