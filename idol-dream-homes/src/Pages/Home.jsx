import HeroJourney from "../Components/HomePage/HeroJourney.jsx";
import Metrics from "../Components/HomePage/Metrics.jsx";
import About from "../Components/HomePage/About.jsx";
import FeaturedHighlights from "../Components/HomePage/FeaturedHighlights.jsx";
import GalleryMosaic from "../Components/HomePage/GalleryMosaic.jsx";
import TestimonialsPreview from "../Components/HomePage/TestimonialsPreview.jsx";
import ProjectsGrid from "../Components/ProjectsPage/ProjectsGrid.jsx";
import AboutExtended from "../Components/HomePage/AboutExtended.jsx";
import GetInTouch from "../Components/HomePage/GetInTouch.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import TeamSection from "../Components/AboutPage/TeamSection.jsx";

function Home() {
  return (
    <div className="home-page text-[#1B1B1B] bg-[#f9f9f9] overflow-x-hidden scroll-smooth">
      {/* HERO */}
      <HeroJourney />

      {/* TRANSITION LINE */}
      <div className="h-[2px] w-24 mx-auto my-20 bg-gradient-to-r from-transparent via-[#C2B4A3] to-transparent" />

      {/* METRICS */}
      <Metrics />

      {/* ABOUT */}
      <About />

      {/* HIGHLIGHTS */}
      <FeaturedHighlights />

      {/* GALLERY */}
      <GalleryMosaic />

      {/* PROJECTS */}
      <ProjectsGrid />

      {/* VIDEO / EXTENDED ABOUT */}
      <AboutExtended />

      {/* TEAM */}
      <TeamSection />

      {/* TESTIMONIALS PREVIEW */}
      <TestimonialsPreview />

      {/* CONTACT */}
      <GetInTouch />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default Home;
