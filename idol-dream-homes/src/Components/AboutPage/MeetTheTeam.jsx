import { motion } from "framer-motion";

const team = [

    {
        name: "Ferdous Hauque",
        role: "Managing Director",
        quote: "Every brick we lay is a promise to the families we serve.",
        image: "/public/ferdous.png",
    }
    ,
    {
        name: "Mostafa Kamal",
        role: "Chairman & Visionary",
        quote: "Committed to shaping a better tomorrow through meaningful spaces.",
        image: "/public/chairman1.jpg",
    },
  
  // Add more members as needed
];

export default function MeetTheTeam() {
  return (
    <section className="py-24 px-6 bg-[#F5F0E6] text-[#1B1B1B] text-center">
      <div className="max-w-6xl mx-auto space-y-12">
        <h2 className="text-4xl font-bold">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10">
          {team.map((person, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-xl shadow-lg p-6 space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <img
                src={person.image}
                alt={person.name}
                className="w-40 h-45 rounded-2xl object-cover mx-auto"
              />
              <h3 className="text-xl font-semibold">{person.name}</h3>
              <p className="text-sm text-[#888]">{person.role}</p>
              <p className="text-sm text-[#555] italic">“{person.quote}”</p>
            </motion.div>
          ))}
           
        </div>
      </div>
    </section>
  );
}