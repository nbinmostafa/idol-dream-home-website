import Navbar from "../Components/Navbar/Navbar.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import ContactForm from "../Components/ContactPage/ContactForm.jsx";
import FAQSection from "../Components/ContactPage/FAQSection.jsx";
import ContactHero from "../Components/ContactPage/ContactHero.jsx";
import ContactInfo from "../Components/ContactPage/ContactInfo.jsx";
import SocialMediaLinks from "../Components/ContactPage/SocialMediaLinks.jsx";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Contact() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100); // wait for DOM to render
      }
    }
  }, [location]);


  return(
    <div className="bg-[#20201e] text-white min-h-screen">
      <Navbar/>
      
      
      <ContactInfo/>

      
      <ContactForm/>

      <ContactHero/>
      
      <FAQSection/>
    
      <SocialMediaLinks/>
      <Footer/>
    </div>
  )


}

export default Contact;
