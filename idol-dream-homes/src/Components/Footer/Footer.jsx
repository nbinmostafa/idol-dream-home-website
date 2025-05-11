import { Link } from 'react-router-dom';


function Footer() {
    return (
      <footer className="bg-[#1B1B1B] text-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
  
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-[#C2B4A3] mb-4">Idol Dream Homes Ltd.</h3>
            <p className="text-[#CCCCCC]">
              Elevating modern living through smart, sustainable, and luxurious real estate. Live the dream today.
            </p>
          </div>
  
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-[#CCCCCC]">
              <li><Link to="/" className="hover:text-[#C2B4A3] transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#C2B4A3] transition">About</Link></li>
              <li><Link to="/projects" className="hover:text-[#C2B4A3] transition">Projects</Link></li>
              <li><Link to="/contact" className="hover:text-[#C2B4A3] transition">Contact</Link></li>
            </ul>
          </div>
  
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-[#CCCCCC]">2697 Madani Road Ave,<br /> Dhaka 1212, Bangladesh</p>
            <p className="mt-2 text-[#CCCCCC]">Phone: 01976601666</p>
            <p className="text-[#CCCCCC]">Email: info@idhbd.com</p>
          </div>
  
          {/* Socials */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#C2B4A3] transition">Facebook</a>
              <a href="#" className="hover:text-[#C2B4A3] transition">Instagram</a>
              <a href="#" className="hover:text-[#C2B4A3] transition">LinkedIn</a>
            </div>
          </div>
  
        </div>
        <div className="mt-10 text-center text-[#888] text-xs border-t border-[#444] pt-6">
          &copy; {new Date().getFullYear()} Idol Dream Homes. All rights reserved.
        </div>
      </footer>
    );
  }
  
  export default Footer;
  