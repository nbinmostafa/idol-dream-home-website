import Navbar from "../Components/Navbar/Navbar.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import ContactForm from "../Components/ContactForm/ContactForm.jsx";
import { useNavigate } from "react-router-dom";

function Contact() {

  return(
    <div className="bg-[#1B1B1B] text-white min-h-screen">
    <Navbar/>
    <ContactForm/>
    <Footer/>
    </div>
  )


}

export default Contact;
