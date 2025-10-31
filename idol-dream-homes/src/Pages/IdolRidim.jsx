import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import idolRidimImage from "../assets/idol-ridim.png";
import {
  MapPin,
  CalendarDays,
  Ruler,
  Building2,
  Trees,
  ShieldCheck,
  Sparkles,
  Waves,
  Lightbulb,
  Users,
} from "lucide-react";

function IdolRidim() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const specs = [
    {
      label: "Location",
      value: "Jolshiri Abashon, Dhaka",
      icon: MapPin,
    },
    {
      label: "Status",
      value: "Ongoing Development",
      icon: CalendarDays,
    },
    {
      label: "Total Floors",
      value: "Ground + 9",
      icon: Building2,
    },
    {
      label: "Unit Sizes",
      value: "2,250 – 2,600 sq ft",
      icon: Ruler,
    },
  ];

  const highlights = [
    {
      title: "Architectural Statement",
      description:
        "A bold, contemporary façade with warm brick accents, wraparound balconies, and vertical greenery for a timeless city presence.",
      icon: Building2,
    },
    {
      title: "Lifestyle Amenities",
      description:
        "Sky lounge, fitness studio, landscaped roof deck, children’s play den, and 24/7 concierge-inspired services for residents.",
      icon: Trees,
    },
    {
      title: "Safety & Assurance",
      description:
        "Advanced structural engineering, intelligent surveillance, and secure access management tailored for peaceful urban living.",
      icon: ShieldCheck,
    },
  ];

  const gallery = [
    {
      image: idolRidimImage,
      title: "Sunset Silhouette",
      description: "Warm evening light washes over the layered terraces and glass balconies.",
    },
    {
      image: idolRidimImage,
      title: "Garden Terraces",
      description: "Vertical greenery softens the structure while creating private outdoor rooms.",
    },
    {
      image: idolRidimImage,
      title: "Arrival Lobby",
      description: "A double-height lobby imagined with bespoke stonework and sculptural lighting.",
    },
    {
      image: idolRidimImage,
      title: "Sky Lounge",
      description: "Intimate social spaces overlooking the city with artisanal detailing throughout.",
    },
  ];

  return (
    <div className="bg-[#f7f3ed] text-[#1A1816] min-h-screen">
      <div className="relative bg-[#1B1B1B] text-white">
        <div className="absolute top-0 left-0 w-full z-50">
          <Navbar />
        </div>

        <section className="relative pt-32 pb-28 overflow-hidden">
          <img
            src={idolRidimImage}
            alt="Idol Ridim"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#11100f]/90 via-[#2b2622]/65 to-[#1B1B1B]/40" />

          <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-0">
            <div className="flex flex-wrap items-center gap-4 text-xs tracking-[0.3em] uppercase text-[#C2B4A3]">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur">
                Skyline Signature
              </span>
              <span className="hidden sm:inline-block w-px h-4 bg-white/30" />
              <span>Residences Curated by Idol Dream Homes</span>
            </div>
            <h1 className="mt-8 text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              Idol Ridim
            </h1>
            <p className="mt-6 text-lg md:text-xl text-[#f5f0e6]/90 max-w-3xl leading-relaxed">
              Rising gracefully over Jolshiri Abashon, Idol Ridim introduces a sanctuary of
              light-filled homes where serenity, craftsmanship, and cosmopolitan energy converge.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#C2B4A3] text-[#1B1B1B] font-medium shadow-lg shadow-black/10 hover:bg-[#b9a995] transition-colors"
              >
                Book a Presentation
              </Link>
              <a
                href="#gallery"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/40 text-white font-medium hover:bg-white/10 transition-colors"
              >
                View Gallery
              </a>
            </div>
          </div>
        </section>
      </div>

      <main className="relative z-10 -mt-16 lg:-mt-24 space-y-24 pb-24">
        <section className="max-w-6xl mx-auto px-6 lg:px-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specs.map(({ label, value, icon: Icon }) => (
              <div
                key={label}
                className="bg-white rounded-2xl shadow-sm border border-[#e0d7cb] p-6 flex flex-col gap-3 hover:-translate-y-1 transition-transform"
              >
                <div className="inline-flex size-12 items-center justify-center rounded-full bg-[#C2B4A3]/20 text-[#8c7a66]">
                  <Icon className="size-6" />
                </div>
                <p className="text-sm uppercase tracking-[0.2em] text-[#6e655b]">
                  {label}
                </p>
                <p className="text-lg font-semibold text-[#1B1B1B]">{value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 lg:px-0 space-y-16">
          <div className="bg-white rounded-3xl shadow-lg shadow-[#cfc5b8]/30 border border-[#e4dbd0] p-10 md:p-14">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold text-[#1B1B1B]">
                  A Vertical Community with Soul
                </h2>
                <p className="mt-4 text-[#4a453d] leading-relaxed text-[17px]">
                  Each residence at Idol Ridim is conceived to welcome natural light, cross
                  ventilation, and expansive views of Jolshiri Abashon’s serene avenues. Private
                  wrap-around terraces extend living spaces outdoors, while double-height lobby
                  volumes create a bespoke arrival sequence for residents and guests alike.
                </p>
                <p className="mt-6 text-[#4a453d] leading-relaxed text-[17px]">
                  With only a handful of homes per floor, privacy is woven into daily life. Smart
                  home readiness, discrete service corridors, and imported finishes anticipate the
                  rhythms of modern families and discerning investors.
                </p>
              </div>
              <div className="bg-[#f0e8dc] rounded-3xl p-8 flex flex-col gap-6">
                <h3 className="text-xl font-semibold text-[#1B1B1B]">Signature Touchpoints</h3>
                <div className="space-y-5 text-[#5c544b] text-sm leading-relaxed">
                  <p className="flex items-start gap-3">
                    <Sparkles className="mt-1 size-4 text-[#9c8a74]" />
                    Bespoke lighting concept curated to shift seamlessly from day to dusk entertaining.
                  </p>
                  <p className="flex items-start gap-3">
                    <Waves className="mt-1 size-4 text-[#9c8a74]" />
                    Acoustic glazing and climate-responsive façades ensure tranquility in every room.
                  </p>
                  <p className="flex items-start gap-3">
                    <Lightbulb className="mt-1 size-4 text-[#9c8a74]" />
                    Smart-ready infrastructure with concealed technology hubs for seamless integration.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map(({ title, description, icon: Icon }) => (
              <div
                key={title}
                className="bg-white/80 backdrop-blur-sm border border-[#e4dbd0] rounded-3xl p-8 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="size-12 rounded-full bg-[#1B1B1B] text-white flex items-center justify-center">
                  <Icon className="size-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#1B1B1B]">{title}</h3>
                <p className="text-[#4a453d] leading-relaxed text-[15px]">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-[#1B1B1B] text-white rounded-[40px] overflow-hidden">
            <div className="p-10 md:p-14 space-y-6">
              <p className="uppercase text-xs tracking-[0.4em] text-[#c8baaa]">Residences</p>
              <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
                Crafted for modern life without compromising warmth
              </h2>
              <ul className="space-y-4 text-[#d9cfc1] text-[15px] leading-relaxed">
                <li className="flex items-start gap-3">
                  <Users className="mt-1 size-4 text-[#c8baaa]" />
                  Private lift lobbies opening to expansive living and dining suites for intimate hosting.
                </li>
                <li className="flex items-start gap-3">
                  <Ruler className="mt-1 size-4 text-[#c8baaa]" />
                  Flexible floor plans offering convertible studies, family lounges, and dedicated wellness corners.
                </li>
                <li className="flex items-start gap-3">
                  <Trees className="mt-1 size-4 text-[#c8baaa]" />
                  Verdant balconies with integrated planters for herb gardens and seasonal blooms.
                </li>
              </ul>
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-5 py-2.5 rounded-full bg-white text-[#1B1B1B] font-medium hover:bg-[#f0e8dc] transition-colors"
                >
                  Request Floor Plans
                </Link>
              </div>
            </div>
            <div className="relative h-full min-h-[320px]">
              <img
                src={idolRidimImage}
                alt="Idol Ridim residences"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B1B1B]/60 via-transparent to-transparent" />
            </div>
          </div>
        </section>

        <section id="gallery" className="max-w-6xl mx-auto px-6 lg:px-0 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="uppercase text-xs tracking-[0.4em] text-[#7f7467]">Gallery</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-[#1B1B1B]">
                Moments within Idol Ridim
              </h2>
              <p className="mt-4 text-[#4a453d] max-w-2xl leading-relaxed">
                Explore the visual story of the residence—from the interplay of brick and glass to
                the quiet intimacy of communal lounges envisioned for residents.
              </p>
            </div>
            <Link
              to="/contact"
              className="self-start inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#c9bfb1] text-sm text-[#5c544b] hover:bg-[#f0e8dc] transition-colors"
            >
              Download Brochure
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {gallery.map(({ image, title, description }) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-3xl bg-[#d9cfc1] shadow-sm hover:shadow-lg transition-shadow"
              >
                <img
                  src={image}
                  alt={title}
                  className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1b1b1b]/80 via-[#1b1b1b]/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white space-y-2">
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="text-sm text-white/80 leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 lg:px-0">
          <div className="bg-white rounded-3xl border border-[#e4dbd0] p-10 md:p-14 flex flex-col md:flex-row gap-10 md:items-center md:justify-between">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-3xl font-semibold text-[#1B1B1B]">Schedule a Private Presentation</h2>
              <p className="text-[#4a453d] leading-relaxed">
                Our advisors would love to walk you through floor plans, interior finishes, and investment opportunities at
                Idol Ridim. Allow us to curate a bespoke tour attuned to your aspirations.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#C2B4A3] text-[#1B1B1B] font-medium shadow hover:bg-[#b4a28d] transition-colors"
            >
              Connect with Us
            </Link>
          </div>
        </section>
      </main>

      <div className="mt-24">
        <Footer />
      </div>
    </div>
  );
}

export default IdolRidim;
