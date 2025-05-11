import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; // optional, install lucide-react if using

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer residential and luxury housing development, property management, and construction services.",
  },
  {
    question: "How can I get in touch with you?",
    answer:
      "You can contact us via the form below or reach out to us via email at info@idhbd.com.",
  },
  {
    question: "What types of properties do you specialize in?",
    answer:
      "We specialize in residential, luxury, and sustainable properties in prime locations across Dhaka.",
  },
  {
    question: "Can I schedule a site visit?",
    answer:
      "Yes, simply fill out the contact form or call us to schedule your personalized property tour.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "Most projects take 12-18 months depending on size, complexity, and approval timelines.",
  },
  {
    question: "Do you offer post-purchase support?",
    answer:
      "Yes, we provide full post-purchase assistance including maintenance, concierge, and property management.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-[#F5F0E6] py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="relative z-10 bg-[#F5F0E6] text-[#1B1B1B] py-24 px-6">
          <div className="max-w-6xl mx-auto text-center space-y-8">
            <h2 className="text-5xl font-bold tracking-tight">Frequently Asked Questions</h2>
            <p className="text-xl leading-relaxed max-w-3xl mx-auto text-[#3A3A3A]">
              Have questions? We have answers! Check out our FAQ section below for more information.
            </p>
          </div>
        </div>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-70 backdrop-blur-md border border-[#ddd] rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <button
                onClick={() => toggleAnswer(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left text-[#1B1B1B] text-lg font-medium hover:text-[#C2B4A3] transition-colors duration-200"
              >
                <span>{faq.question}</span>
                {activeIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-[#C2B4A3]" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-[#C2B4A3]" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out px-6 ${
                  activeIndex === index ? "max-h-40 pb-6" : "max-h-0"
                }`}
              >
                <p className="text-[#1B1B1B] text-md leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
