import { FaFacebook, FaWhatsapp } from "react-icons/fa";

const SocialMediaIcons = () => {
  return (
    <>
      <div className="max-w-screen-lg mx-auto p-6 text-center">
        <div className="flex justify-center gap-8">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 text-3xl hover:text-blue-800 transition-colors"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          {/* X (Twitter) logo */}
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black text-3xl font-bold hover:text-gray-700 transition-colors"
            aria-label="X (Twitter)"
          >
            X
          </a>
          <a
            href="https://wa.me"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 text-3xl hover:text-green-700 transition-colors"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </>
  );
};

export default SocialMediaIcons;
