import { motion } from "framer-motion";
import Navbar from "../Navbar/Navbar.jsx";
import { Link, useNavigate } from "react-router-dom"; 





function Hero(){
    return(
        <section
        className="h-screen w-full bg-cover bg-center text-white snap-start relative"
        style={{ backgroundImage: `url('/Interior3.png')` }}
      >
        {/* Black overlay on top of background */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-black/40 z-0" />

        {/* Navbar */}
        <div className="absolute top-0 left-0 w-full z-50">
          <Navbar/>
        </div>
          
        

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6">
          <motion.div
            className="text-center max-w-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold drop-shadow-lg">Find Your Dream Home</h1>
            <p className="mt-4 text-lg sm:text-xl text-white/80">
              Step into your new space — a home that’s ready when you are, built for the life you want.
            </p>
            <Link to="/Projects#listings" smooth={true} duration={500}>
              <button className="mt-8 px-6 py-3 bg-[#C2B4A3] text-black rounded-full text-lg font-semibold hover:bg-[#F5F0E6] transition">
                Explore Listings
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
      
    );
}


export default Hero;