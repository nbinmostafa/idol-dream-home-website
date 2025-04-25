import { useState, useEffect } from "react";
import './Navbar.css';
import logo from "./Project.png";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sections = ["home", "about", "projects", "contact"];

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollY >= offsetTop - 100 && scrollY < offsetTop + offsetHeight - 100) {
            setActiveLink(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-transparent z-50 relative">
      <img src={logo} alt="Logo" className="size-36 m-2 md:size-20" />

      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-12 text-amber-50 font-mono text-lg font-semibold">
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`transition duration-300 hover:text-[#C2B4A3] ${activeLink === item.id ? 'text-[#C2B4A3]' : ''}`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Icon */}
      <div className="md:hidden z-50 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} className="text-white" /> : <Menu size={28} className="text-white" />}
      </div>

      {/* Mobile Nav Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-[#1B1B1B] text-white flex flex-col items-center py-6 space-y-4 shadow-lg md:hidden z-40"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-semibold transition duration-300 hover:text-[#C2B4A3] ${activeLink === item.id ? 'text-[#C2B4A3]' : ''}`}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;