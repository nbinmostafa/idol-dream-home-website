import Navbar from "../Components/Navbar/Navbar.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import ProjectsHero from "../Components/ProjectsPage/ProjectsHero.jsx";
import ProjectsGrid from "../Components/ProjectsPage/ProjectsGrid.jsx";
import WhyChooseUs from "../Components/ProjectsPage/WhyChooseUs.jsx";
import ProjectMap from "../Components/ProjectsPage/ProjectMap.jsx";
import Testimonials from "../Components/ProjectsPage/Testimonials.jsx";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Projects() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
        const element = document.querySelector(location.hash);
        if (element) {
            setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" });
            }, 100); // wait a tick for DOM to fully render
        }
        }
    }, [location]);


    return (
        <>
            
            
            <ProjectsHero/>
            <WhyChooseUs/>
            <ProjectsGrid/>
            <Testimonials/>
            <Footer />
        </>
    );
  }
  
  export default Projects;
