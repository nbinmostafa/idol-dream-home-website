import { Phone, Mail, MapPin } from "lucide-react";

const ContactInfo = () => (
  <section className="py-20 px-6 bg-[#F5F0E6]">
    <div className="max-w-5xl mx-auto text-center">
      {/* Header */}
      <div className="relative z-10 bg-[#F5F0E6] text-[#1B1B1B] py-24 px-6">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <h2 className="text-5xl font-bold tracking-tight">Get In Touch With Us</h2>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto text-[#3A3A3A]">
            We are here to assist you with any inquiries or concerns you may have. Please feel free to reach out to us using the contact information provided below.
          </p>
        </div>
      </div>

      {/* Contact Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Address */}
        <div className="flex items-center justify-center space-x-6 p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <MapPin className="w-10 h-10 text-[#C2B4A3]" />
          <div>
            <p className="text-lg font-medium text-[#444]">Visit Us</p>
            <p className="text-sm text-[#666] mt-2">
              2697 Madani Road Avenue, Dhaka, Bangladesh
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center justify-center space-x-6 p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <Phone className="w-10 h-10 text-[#C2B4A3]" />
          <div>
            <p className="text-lg font-medium text-[#444]">Call Us</p>
            <p className="text-sm text-[#666] mt-2">+880 177 665 5444</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center justify-center space-x-6 p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <Mail className="w-10 h-10 text-[#C2B4A3]" />
          <div>
            <p className="text-lg font-medium text-[#444]">Email Us</p>
            <p className="text-sm text-[#666] mt-2">info@idolgroup.com</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactInfo;
