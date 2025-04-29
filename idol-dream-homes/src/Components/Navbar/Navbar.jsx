import { useState } from "react";
import './Navbar.css';
import logo from "./project.png";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom"; // ✅ useLocation to track active route

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // ✅ get current path

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" }
  ];

  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-transparent z-50 relative">
      <img src={logo} alt="Logo" className="size-20 m-2 md:size-25 lg:size-36 md:m-0.5" />

      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-12 text-amber-50 font-mono text-lg font-semibold">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={`transition duration-300 hover:text-[#C2B4A3] ${
                location.pathname === item.path ? 'text-[#C2B4A3]' : ''
              }`}
            >
              {item.label}
            </Link>
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
            className="absolute top-full left-0 w-full bg-[#1B1B1B] text-white flex flex-col items-center py-6 space-y-4 shadow-lg md:hidden z-40 border border-[#C2B4A3] rounded-lg"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-semibold transition duration-300 hover:text-[#C2B4A3] ${
                  location.pathname === item.path ? 'text-[#C2B4A3]' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
