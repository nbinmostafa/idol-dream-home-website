import Footer from "../Components/Footer/Footer.jsx";
import ContactForm from "../Components/ContactPage/ContactForm.jsx";
import Hero from "../Components/HomePage/Hero.jsx";
import Metrics from "../Components/HomePage/Metrics.jsx";
import About from "../Components/HomePage/About.jsx";
import AboutExtended from "../Components/HomePage/AboutExtended.jsx";
import GetInTouch from "../Components/HomePage/GetInTouch.jsx";

function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <Hero />
      </section>

      <section className="metrics-section container fade-in">
        <Metrics />
      </section>

      <section className="about-section container fade-in">
        <About />
      </section>
      
      <section className="about-extended-section container fade-in">
        <AboutExtended />
      </section>

      <section className="contact-section container fade-in">
        <GetInTouch />
      </section>

      <Footer />
    </div>
  );
}

export default Home;
