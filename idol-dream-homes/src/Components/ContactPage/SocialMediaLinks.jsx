import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const SocialMediaLinks = () => (
  <div className="flex gap-8 justify-center py-8">
    <a
      href="https://facebook.com/yourprofile"
      target="_blank"
      rel="noopener noreferrer"
      className="transition-all duration-300 transform hover:scale-110 hover:text-[#1B1B1B]"
    >
      <FaFacebook className="text-[#C2B4A3] text-3xl" />
    </a>
    <a
      href="https://twitter.com/yourprofile"
      target="_blank"
      rel="noopener noreferrer"
      className="transition-all duration-300 transform hover:scale-110 hover:text-[#1B1B1B]"
    >
      <FaTwitter className="text-[#C2B4A3] text-3xl" />
    </a>
    <a
      href="https://instagram.com/yourprofile"
      target="_blank"
      rel="noopener noreferrer"
      className="transition-all duration-300 transform hover:scale-110 hover:text-[#1B1B1B]"
    >
      <FaInstagram className="text-[#C2B4A3] text-3xl" />
    </a>
    <a
      href="https://linkedin.com/yourprofile"
      target="_blank"
      rel="noopener noreferrer"
      className="transition-all duration-300 transform hover:scale-110 hover:text-[#1B1B1B]"
    >
      <FaLinkedin className="text-[#C2B4A3] text-3xl" />
    </a>
  </div>
);

export default SocialMediaLinks;
