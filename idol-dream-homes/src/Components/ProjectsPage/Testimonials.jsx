import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Mrs. Naznin Rahman",
    quote:
      "Our family’s experience with Idol Dream Homes has been nothing short of extraordinary. The team truly understands modern luxury.",
  },
  {
    name: "Mr. Faisal Chowdhury",
    quote:
      "From the first meeting to handover, the professionalism and transparency were unmatched. It feels like more than just a house—it’s home.",
  },
  {
    name: "The Alam Family",
    quote:
      "We were impressed by the quality, location, and vision. Idol Dream Homes builds not just residences, but legacies.",
  },
  {
    name: "Sarah Karim",
    quote:
      "The moment we walked into our new home, we felt it. This wasn’t just well-built — it was built with heart."
  },
  {
    name: "Dr. Anisur Rahman",
    quote:
      "The level of care and attention to detail from Idol Dream Homes rivals anything I've seen internationally. A class above."
  }
];

const Testimonials = () => {
  return (
    <section className="relative bg-[#f8f5f0] py-36 px-6 overflow-hidden">
      {/* Decorative quote background */}
      <div className="absolute top-10 left-10 text-[#e0d7cb] text-[8rem] sm:text-[10rem] font-serif opacity-10 select-none z-0">“</div>
      <div className="absolute bottom-10 right-10 text-[#e0d7cb] text-[8rem] sm:text-[10rem] font-serif opacity-10 select-none z-0">”</div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-5xl sm:text-6xl font-bold tracking-tight text-[#1B1B1B] mb-12">
          Words from Our Clients
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={40}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="max-w-3xl"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white rounded-3xl p-10 shadow-xl border border-[#e0d7cb] mx-4">
                <p className="text-2xl sm:text-3xl italic text-[#444038] leading-relaxed mb-6">
                  “{t.quote}”
                </p>
                <p className="text-[#978671] text-lg font-semibold tracking-wide">
                  — {t.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;