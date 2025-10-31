import { useEffect, useState } from "react";
import './Navbar.css';
// Using the dark logo everywhere for consistent contrast
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/contact#form", label: "Get in Touch" }
  ];

  // Always use dark logo per request (no route-based swap)

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div
        className={`mx-auto max-w-7xl px-4 sm:px-6 ${scrolled ? 'py-2' : 'py-3'} transition-all`}
        role="navigation"
        aria-label="Primary"
      >
        <div
          className={`flex items-center justify-between rounded-2xl border ${
            scrolled ? 'bg-[#F5F0E6]/95 border-[#E7E2D8] shadow-sm backdrop-blur' : 'bg-white/70 border-white/60 shadow-sm backdrop-blur'
          } px-3 sm:px-4 py-2`}
        >
          <a href="/" className="flex items-center min-w-0" aria-label="Idol Dream Homes Home">
            <motion.img
              src={"/logo.png"}
              alt="Idol Dream Homes"
              className="h-10 sm:h-12 md:h-14 w-auto object-contain"
              loading="eager"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            />
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-7 lg:gap-9 text-[15px] font-medium text-[#1B1B1B]">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`relative transition-colors duration-200 hover:text-[#C2B4A3] ${
                    (location.pathname + location.hash) === item.path || (location.pathname === item.path.split('#')[0] && item.path.startsWith(location.pathname))
                      ? 'text-[#C2B4A3]' : ''
                  }`}
                >
                  <span className="pb-1">
                    {item.label}
                    <span className={`absolute left-1/2 -bottom-1 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#C2B4A3] transition-opacity ${
                      (location.pathname + location.hash) === item.path || (location.pathname === item.path.split('#')[0] && item.path.startsWith(location.pathname)) ? 'opacity-100' : 'opacity-0'
                    }`} />
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Icon */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-[#1B1B1B]"
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="mx-1 sm:mx-2 mt-2 rounded-2xl border border-[#E7E2D8] bg-[#F5F0E6] text-[#1B1B1B] flex flex-col items-stretch py-3 shadow-sm md:hidden"
            >
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 text-base font-medium transition-colors hover:text-[#C2B4A3] ${
                    (location.pathname + location.hash) === item.path || (location.pathname === item.path.split('#')[0] && item.path.startsWith(location.pathname))
                      ? 'text-[#C2B4A3]' : ''
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export default Navbar;
