import Navbar from "../Components/Navbar/Navbar.jsx";
import Footer from "../Components/Footer/Footer.jsx";
function About() {
    return (
    <div className="bg-[#1B1B1B] text-white min-h-screen">
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
            <h1 className="text-5xl font-bold">About Us</h1>
        </div>
        <Footer />
    </div>
    );
  }
  
  export default About;
  