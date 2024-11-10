// src/pages/About/About.jsx
import { Helmet } from "react-helmet-async";
import { useTheme } from "../../components/ThemeContext/ThemeContext";

const About = () => {
  const { isDarkTheme } = useTheme();

  return (
    <> 
    <Helmet><title>About Us - Docs Wallet</title></Helmet> 
    <div className={`max-w-screen-lg mx-auto p-6 ${isDarkTheme ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
    <h1 className="text-4xl font-bold text-center text-purple-700 mb-8">About Us</h1>

    <section className="mb-6">
      <h2 className="text-2xl font-semibold text-violet-700 mb-3">Our Mission</h2>
      <p className={`leading-relaxed ${isDarkTheme ? 'text-gray-300' : 'text-gray-600'}`}>
        At <span className="font-bold text-purple-700">Docs Wallet</span>, we believe that managing and securing
        your important documents should be simple, reliable, and accessible. In a world where
        paperwork can easily get lost or damaged, we set out to build a solution that brings peace
        of mind and efficiency to document management.
      </p>
    </section>

    <section className="mb-6">
      <h2 className="text-2xl font-semibold text-violet-700 mb-3">Why We Started</h2>
      <p className={`leading-relaxed ${isDarkTheme ? 'text-gray-300' : 'text-gray-600'}`}>
        In today’s fast-paced world, traditional paper files often fall short—documents can be lost,
        damaged, or difficult to retrieve. Recognizing a need for a more effective approach, we
        created <span className="font-bold text-purple-700">Docs Wallet</span> to revolutionize how people manage their
        important files, combining security with ease of use.
      </p>
    </section>

    <section className="mb-6">
      <h2 className="text-2xl font-semibold text-violet-700 mb-3">What We Offer</h2>
      <ul className={`list-disc ml-6 ${isDarkTheme ? 'text-gray-300' : 'text-gray-600'}`}>
        <li className="mb-2">
          <span className="text-purple-700 font-semibold">Secure Storage:</span> Our top priority is security. From encryption to secure cloud storage, we ensure your documents remain private and protected.
        </li>
        <li className="mb-2">
          <span className="text-purple-700 font-semibold">Easy Access:</span> Whether you’re at home or on the go, your documents are just a few clicks away, accessible on computers and mobile devices.
        </li>
        <li className="mb-2">
          <span className="text-purple-700 font-semibold">Organized Management:</span> Never lose track of an important document again. Our intuitive interface helps you categorize, search, and retrieve files effortlessly.
        </li>
        <li className="mb-2">
          <span className="text-purple-700 font-semibold">Peace of Mind:</span> Trust that your information is safe, managed by state-of-the-art technology and privacy measures.
        </li>
      </ul>
    </section>

    <section className="mb-6">
      <h2 className="text-2xl font-semibold text-violet-700 mb-3">Our Vision</h2>
      <p className={`leading-relaxed ${isDarkTheme ? 'text-gray-300' : 'text-gray-600'}`}>
        We envision a paperless future where people and businesses no longer face the burden of
        physical documents. Instead, they can securely manage their information digitally, with
        instant access and advanced protection. <span className="font-bold text-purple-700">Docs Wallet</span> is here
        to help create that future.
      </p>
    </section>

    <section className="mb-6">
      <h2 className="text-2xl font-semibold text-violet-700 mb-3">Our Commitment</h2>
      <p className={`leading-relaxed ${isDarkTheme ? 'text-gray-300' : 'text-gray-600'}`}>
        We’re dedicated to continuous innovation, listening to our users, and upholding the highest
        standards of security and usability. Our team is always working to improve and enhance{" "}
        <span className="font-bold text-purple-700">Docs Wallet</span>, striving to exceed your expectations.
      </p>
    </section>

    <footer className={`text-center mt-8 ${isDarkTheme ? 'text-gray-300' : 'text-gray-600'}`}>
      Thank you for choosing <span className="font-bold text-purple-700">Docs Wallet</span> as your trusted document manager.
      We look forward to being your secure companion on the journey to a more organized, digital world.
    </footer>
  </div> 
   </>
  );
};

export default About;
