import Navbar from "../Components/Navbar/Navbar.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import AboutIntro  from '../Components/AboutPage/AboutIntro.jsx';
import LetterFromFounder from '../Components/AboutPage/LetterFromFounder.jsx';
import { CompanyIntro } from "../Components/AboutPage/CompanyIntro.jsx";
import { CompanyValues } from "../Components/AboutPage/CompanyValues.jsx";
import BrochureDownload from "../Components/AboutPage/BrochureDownload.jsx";
import MeetTheTeam from "../Components/AboutPage/MeetTheTeam.jsx";

function About() {
    return (
    <div className="bg-[#1b1b1b00] text-white min-h-screen">
        <div className="absolute top-0 left-0 w-full z-50">
          <Navbar/>
        </div>
       
        <AboutIntro />
        <CompanyIntro/>
        <CompanyValues/>
        <MeetTheTeam/>
        <LetterFromFounder/>
        <BrochureDownload/>
        
        {/* Add more sections as needed */}
        

        {/* Footer */}
        <Footer />
    </div>
    );
  }
  
  export default About;
  