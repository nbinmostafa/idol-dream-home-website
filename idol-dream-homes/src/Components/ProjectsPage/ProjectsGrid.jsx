import React, { useState } from "react";
import { MapPin, CalendarDays, ImageOff } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import idolRidimImage from "../../assets/idol-ridim.png";
import ImageWithShimmer from "../Common/ImageWithShimmer.jsx";
import ProjectModal from "./ProjectModal.jsx";

const allProjects = [
  {
    name: "Idol Ridim",
    location: "Jolshiri Abashon, Dhaka",
    status: "Ongoing",
    description: "9-floor luxury residence designed for modern, spacious living.",
    image: idolRidimImage,
    link: "/projects/idol-ridrim",
  },
  {
    name: "The Aster",
    location: "Uttara, Dhaka",
    status: "Pre-launch",
    description: "A cozy, elegant space with rooftop greenery and serene ambiance.",
    image: "",
  },
  {
    name: "Project Aurora",
    location: "Banani, Dhaka",
    status: "Coming Soon",
    description: "A boutique development focused on light, airflow, and quiet luxury.",
    image: "",
  },
  {
    name: "Skyline Nova",
    location: "Bashundhara R/A",
    status: "Ongoing",
    description: "Elevated views and lifestyle in one of Dhaka’s most sought-after communities.",
    image: "",
  },
  {
    name: "Verdant Crest",
    location: "Mohakhali DOHS",
    status: "Upcoming",
    description: "Nature-infused contemporary living, curated with minimalist elegance.",
    image: "",
  },
];

const ProjectsGrid = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState(null);

  const toggleVisibility = () => {
    if (expanded) {
      setVisibleCount(3);
    } else {
      setVisibleCount(allProjects.length);
      setTimeout(() => {
        const section = document.getElementById("projects");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
    setExpanded(!expanded);
  };

  const visibleProjects = allProjects.slice(0, visibleCount);

  return (
    <>
      {/* Teaser Banner */}
      <section className="bg-[#35312c] text-white py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto px-4"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4">IDOL RIDIM — Launching in 2028</h2>
          <p className="text-lg sm:text-xl text-[#f5f0e6]">
            A sanctuary of light and space, nestled in the heart of Jolshiri Abashon.
          </p>
        </motion.div>
      </section>

      <section id="listings" className="bg-[#f8f5f0] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1B1B1B] mb-12">Explore Our Developments</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence>
              {visibleProjects.map((project) => {
                const imageClass = project.link
                  ? "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  : "w-full h-full object-cover";

                const cardContent = (
                  <>
                    <div className="h-52 bg-[#ddd6cc] flex items-center justify-center text-[#7a7267]">
                        {project.image ? (
                          <ImageWithShimmer src={project.image} alt={project.name} className={imageClass} />
                        ) : (
                          <div className="flex flex-col items-center gap-2">
                            <ImageOff className="w-8 h-8" />
                            <span className="italic text-sm">Image Coming Soon</span>
                          </div>
                        )}
                    </div>
                    <div className="p-6 space-y-2 text-[#1B1B1B]">
                      <h3 className="text-xl font-semibold">{project.name}</h3>
                      <div className="flex items-center gap-2 text-sm text-[#6e655b]">
                        <MapPin className="w-4 h-4" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CalendarDays className="w-4 h-4 text-[#978671]" />
                        <span className="bg-[#C2B4A3]/20 text-[#978671] px-2 py-[2px] text-xs rounded-full">{project.status}</span>
                      </div>
                      <p className="text-[15px] mt-2 text-[#444038]">{project.description}</p>
                      {!project.link && (
                        <button onClick={() => setSelected(project)} className="mt-2 inline-block text-sm text-[#6f6152] hover:text-[#1B1B1B] underline underline-offset-4">View Details</button>
                      )}
                    </div>
                  </>
                );

                return (
                  <motion.div
                    key={project.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white/70 backdrop-blur-md rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-[#e0d7cb] h-full"
                  >
                    {project.link ? (
                      <Link to={project.link} className="group flex h-full flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C2B4A3]">
                        {cardContent}
                      </Link>
                    ) : (
                      <button className="flex h-full flex-col text-left" onClick={() => setSelected(project)} aria-label={`View details for ${project.name}`}>{cardContent}</button>
                    )}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Load More / Show Less */}
          <div className="text-center mt-12">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={toggleVisibility}
              className="px-6 py-3 bg-[#C2B4A3] text-white rounded-full font-medium shadow hover:bg-[#b4a28d] transition-colors duration-300"
            >
              {expanded ? "Show Less" : "Load More Projects"}
            </motion.button>
          </div>
        </div>
      </section>
      <ProjectModal open={!!selected} onClose={() => setSelected(null)} project={selected} />
    </>
  );
};

export default ProjectsGrid;
