import { motion } from "framer-motion";
import Navbar from "../Components/Navbar/Navbar.jsx";
import interiorImage from "../assets/Interior3.png";
import CountUp from 'react-countup';
import { useInView } from "react-intersection-observer";
import AboutImage from "../assets/about-image.jpg"; // replace with your actual image path
import { HomeIcon, Building2, Ruler, Leaf } from "lucide-react";
import Hero from "../Components/Hero/GuidedJourneyHero.jsx"; 
import Footer from "../Components/Footer/Footer.jsx"; // Import your Footer component

function ScrollCount({ end, duration = 2, suffix = "" }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.9, // Adjust how far in the screen it needs to be
  });

  return (
    <div ref={ref}>
      {inView && (
        <CountUp end={end} duration={duration} suffix={suffix} />
      )}
    </div>
  );
}

function Home() {
  return (
    <div>
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
            <button className="mt-8 px-6 py-3 bg-[#F5F0E6] text-black rounded-full text-lg font-semibold hover:bg-[#C2B4A3] transition">
              Explore Listings
            </button>
          </motion.div>
        </div>
      </section>
      {/* Stats Section */}

      <section className="relative bg-[#F6F0F0] text-black py-20 px-4">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold">Our Impact in Numbers</h2>
          <p className="text-lg text-[#666] mt-4">Delivering excellence in every square foot</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {[
            {
              icon: <HomeIcon className="w-10 h-10 text-[#C2B4A3] mb-4" />, 
              count: 40, label: "Luxury Units", suffix: "+"
            },
            {
              icon: <Building2 className="w-10 h-10 text-[#C2B4A3] mb-4" />, 
              count: 5, label: "Buildings in Development", suffix: "+"
            },
            {
              icon: <Ruler className="w-10 h-10 text-[#C2B4A3] mb-4" />, 
              count: 2500, label: "Sq. Ft Average Unit", suffix: "+"
            },
            {
              icon: <Leaf className="w-10 h-10 text-[#C2B4A3] mb-4" />, 
              count: 100, label: "Eco-certified Materials", suffix: "%"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="w-full p-6 bg-white/60 backdrop-blur-md border-4 border-[#C2B4A3]/40 rounded-2xl shadow-lg hover:shadow-[#D5C7A3] transition hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, type: "spring", stiffness: 80, damping: 20 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-center">
                {item.icon}
                <h2 className="text-5xl font-bold text-[#1B1B1B]">
                  <ScrollCount end={item.count} suffix={item.suffix} />
                </h2>
                <p className="mt-2 text-lg text-[#666]">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      {/* About Section */}
      <section
        className="relative bg-[#F5F0E6] text-[#1B1B1B] py-24 px-6 overflow-hidden"
        style={{
          backgroundImage: `url('/src/assets/bg-texture.png')`, // subtle overlay pattern or image
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundBlendMode: 'overlay',
        }}
      >
        <div className="absolute inset-0 bg-white opacity-70 z-0" /> {/* subtle overlay */}
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

          {/* Left: Vision & Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="md:w-1/2 space-y-6"
          >
            <h2 className="text-4xl sm:text-5xl font-bold border-l-8 border-[#C2B4A3] pl-4">
              Building More Than Homes
            </h2>
            <p className="text-lg text-[#666] leading-relaxed">
              At Idol Dream Homes, we blend elegance with accessibility — crafting future-ready, eco-conscious living spaces that empower families to live their dream.
            </p>
            <div className="italic text-[#C2B4A3] font-medium text-xl border-l-4 border-[#C2B4A3] pl-4">
              “A home should be more than walls — it should be where dreams begin.”
            </div>
            <ul className="mt-6 space-y-3">
              {["Smart Home Integration", "Eco-Certified Builds", "Luxury with Affordability", "Designed for Families"].map((item, i) => (
                <motion.li
                  key={i}
                  className="text-lg flex items-center gap-3 text-[#1B1B1B]"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.2 }}
                >
                  <span className="text-[#C2B4A3] text-xl">✓</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Real Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="md:w-1/2"
          >
            <img
              src={AboutImage}
              alt="Our Vision"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </motion.div>
        </div>
      </section>
      <Footer/>

      

    </div>
  );
}

export default Home;
