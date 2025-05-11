
import Footer from "../Components/Footer/Footer.jsx"; 
import ContactForm from "../Components/ContactPage/ContactForm.jsx";
import Hero from "../Components/HomePage/Hero.jsx";
import Metrics from "../Components/HomePage/Metrics.jsx";
import About from "../Components/HomePage/About.jsx";
import AboutExtended from "../Components/HomePage/AboutExtended.jsx";
import GetInTouch from "../Components/HomePage/GetInTouch.jsx";



function Home() {
  return (
    <div>
      <Hero/>

      {/* Stats Section */}
      <Metrics/>

      {/* About Section */}
      <About/>
      
      <AboutExtended/> 

      {/* Contact Form Section */}
      <GetInTouch/>

      {/* Footer */}
      <Footer/>

      

    </div>
  );
}

export default Home;
