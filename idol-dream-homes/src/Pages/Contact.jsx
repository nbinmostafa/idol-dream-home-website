import Navbar from "../Components/Navbar/Navbar.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import ContactForm from "../Components/ContactPage/ContactForm.jsx";
import { useNavigate } from "react-router-dom";
import FAQSection from "../Components/ContactPage/FAQSection.jsx";
import ContactHero from "../Components/ContactPage/ContactHero.jsx";

function Contact() {

  return(
    <div className="bg-[#20201e] text-white min-h-screen">
      <Navbar/>
      <ContactHero/>
      <ContactForm/>
      <FAQSection/>
    
    
    <Footer/>
    </div>
  )


}

export default Contact;
