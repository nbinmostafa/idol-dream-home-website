import Navbar from "../Components/Navbar/Navbar.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import ProjectsHero from "../Components/ProjectsPage/ProjectsHero.jsx";
import ProjectsGrid from "../Components/ProjectsPage/ProjectsGrid.jsx";
import WhyChooseUs from "../Components/ProjectsPage/WhyChooseUs.jsx";
import ProjectMap from "../Components/ProjectsPage/ProjectMap.jsx";
import Testimonials from "../Components/ProjectsPage/Testimonials.jsx";

function Projects() {
    return (
        <div className="bg-[#20201e] text-white min-h-screen">
            <Navbar/>
            
            <ProjectsHero/>
            <WhyChooseUs/>
            <ProjectsGrid/>
            <ProjectMap/>
            <Testimonials/>
            <Footer />
        </div>
    );
  }
  
  export default Projects;
