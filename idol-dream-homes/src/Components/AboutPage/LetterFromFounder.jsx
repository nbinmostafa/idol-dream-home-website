import { motion } from "framer-motion";

export default function LetterFromFounder() {
    return (
      <section id="letter-from-founder" className="relative py-20 px-6 bg-[#F5F0E6] text-[#1B1B1B]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <motion.div
            className="group w-80 h-auto bg-white rounded-3xl shadow-2xl border border-[#EADBC8] p-4 transition-transform duration-300 hover:scale-105 hover:shadow-amber-100"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
        >
            <img
                src="/public/chairman1.jpg"
                alt="Mostafa Kamal"
                className="rounded-xl object-cover w-full h-[400px] mb-4 transition-all duration-300 group-hover:scale-[1.03]"
            />
            <p className="text-center text-sm text-[#888] italic">Mostafa Kamal, Chairman</p>
        </motion.div>
          <motion.div
            className="md:w-2/3 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl font-bold border-l-8 border-[#C2B4A3] pl-4">
              A Letter from Our Chairman
            </h2>
            <p className="text-lg leading-relaxed font-light text-[#444] italic">
                “When we started Idol Dream Homes, we weren’t just thinking about concrete and steel—we were thinking about people. Families. Dreams. That moment when someone opens the door to their first home and whispers, ‘This is ours.’

                <br /><br />
                I come from a family that always believed in building not just structures, but legacies. This dream began not with me, but with my late brother — a visionary soul who laid the foundation for this journey under a different name, long before Idol Dream Homes was born. 

                <br /><br />
                Bangladesh is changing. Our people deserve more than ordinary. We deserve homes that inspire, that are built with care, and that stand as a testament to our hopes. That's why we founded Idol Dream Homes—not just to meet expectations, but to elevate them.

                <br /><br />
                Every project we take on is deeply personal to me. From the selection of tiles to the layout of sunlight in a bedroom, we obsess over the little things because we know how much they matter. Our mission is simple: to build a future where beauty, functionality, and affordability can live in the same space.

                <br /><br />
                Thank you for allowing us to be a small part of your journey. It’s an honor we don’t take lightly.

                <br /><br />
                From our family to yours—welcome home.”
            </p>
            <div className="mt-6">
                <p className="text-3xl text-[#101010] font-[Great_Vibes] tracking-wide mt-1">Mostafa Kamal</p>
                <p className="text-lg text-[#888] italic">Chairman, Idol Dream Homes.</p>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }
