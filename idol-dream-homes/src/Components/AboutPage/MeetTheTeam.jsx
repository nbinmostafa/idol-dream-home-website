import { motion } from "framer-motion";

const team = [
  {
    name: "Ferdous Hauque",
    role: "Managing Director",
    quote: "Every brick we lay is a promise to the families we serve.",
    image: "/Ferdous.png",
  },
  {
    name: "Mostafa Kamal",
    role: "Founder & Chairman",
    quote: "Committed to shaping a better tomorrow through meaningful spaces.",
    image: "/chairman1.jpg",
  },
];

export default function MeetTheTeam() {
  return (
    <section className="py-24 px-6 bg-[#F5F0E6] text-[#1B1B1B] text-center">
      <div className="max-w-6xl mx-auto space-y-12">
        <h2 className="font-serif text-4xl sm:text-5xl font-bold">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {team.map((person, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl border border-[#E7E2D8] shadow p-6 space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img src={person.image} alt={person.name} className="w-40 h-40 rounded-xl object-cover mx-auto" />
              <h3 className="text-xl font-semibold">{person.name}</h3>
              <p className="text-sm text-[#7a7267]">{person.role}</p>
              <p className="text-sm text-[#4a4743] italic">“{person.quote}”</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
