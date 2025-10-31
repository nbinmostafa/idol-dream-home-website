import { motion, AnimatePresence } from "framer-motion";

export default function ProjectModal({ open, onClose, project }) {
  return (
    <AnimatePresence>
      {open && project && (
        <motion.div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-modal
          role="dialog"
        >
          <motion.div
            className="relative bg-white rounded-3xl shadow-2xl max-w-3xl w-[92vw] overflow-hidden"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 160, damping: 20 }}
          >
            <button onClick={onClose} className="absolute top-3 right-4 text-[#6f6152] hover:text-[#1B1B1B] text-xl" aria-label="Close">×</button>
            <div className="grid md:grid-cols-2">
              <img src={project.image || '/about-hero.jpg'} alt={project.name} className="w-full h-64 md:h-full object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#1B1B1B]">{project.name}</h3>
                <p className="text-[#7a7267] mt-1">{project.location}</p>
                <span className="inline-block mt-2 text-xs bg-[#C2B4A3]/20 text-[#6f6152] px-2 py-[2px] rounded-full">{project.status}</span>
                <p className="mt-4 text-[#444038] leading-relaxed">{project.description}</p>
                <div className="mt-5">
                  <p className="font-semibold text-[#1B1B1B]">Amenities</p>
                  <ul className="mt-2 grid grid-cols-2 gap-2 text-sm text-[#5a5652]">
                    {['Roof Garden','Gym','Community Lounge','24/7 Security','Solar Backup','EV Charging'].map(a => (
                      <li key={a} className="before:content-['•'] before:text-[#C2B4A3] before:mr-2">{a}</li>
                    ))}
                  </ul>
                </div>
                <a href="/contact#form" className="inline-block mt-6 px-5 py-2 rounded-full bg-[#C2B4A3] text-[#1B1B1B] font-medium hover:bg-[#bba894]">Enquire Now</a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

