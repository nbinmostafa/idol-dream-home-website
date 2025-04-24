import Navbar from "../Components/Navbar/Navbar.jsx";
import interiorImage from "../assets/Interior3.png"; // ✅ import your image directly

function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center text-white top-0"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.0)), url(${interiorImage})`,
      }}
    >
      <Navbar />
      <div className="flex flex-col items-center justify-center text-center min-h-screen px-6 ">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight drop-shadow-xl">
          Find Your Dream Home
        </h1>
        <p className="mt-6 text-lg sm:text-xl max-w-2xl text-gray-200">
          Discover luxurious apartments tailored to your lifestyle, in the heart of the city.
        </p>
        <button className="mt-8 px-6 py-3 bg-[#F5F0E6] text-black rounded-full text-lg font-semibold hover:bg-[#C2B4A3] transition">
          Explore Listings
        </button>
      </div>
    </div>
  );
}

export default Home;
