
import { Helmet } from "react-helmet-async";
import { useTheme } from "../../components/ThemeContext/ThemeContext";
import { Link } from "react-router-dom";
import SocialMediaIcons from "../../hooks/socialMediaIcon";

const HelpCenter = () => {
  const { isDarkTheme } = useTheme();

  return (
    <> 
    <Helmet><title>Help Center - Docs Wallet</title></Helmet>
    <div
      className={`min-h-screen p-4 md:p-8 lg:p-16 ${
        isDarkTheme ? "bg-slate-850 text-white" : "bg-white text-black"
      }`}
    >
      {/* Header */}
      <h1 className="text-3xl mt-10 md:text-4xl font-bold text-center bg-gradient-to-r from-purple-500 to-violet-500 bg-clip-text text-transparent mb-6">
        Help Center
      </h1>
      <p className={`text-center ${isDarkTheme ? "text-gray-300" : "text-gray-600"} max-w-2xl mx-auto mb-8`}>
        Find answers to frequently asked questions, contact support, and get the help you need.
      </p>

      {/* Search Bar */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search for help topics..."
          className={`w-full md:w-1/2 lg:w-1/3 p-2 border rounded-lg focus:outline-none focus:ring-2 ${
            isDarkTheme ? "bg-gray-700 text-white focus:ring-purple-500" : "focus:ring-purple-500"
          }`}
        />
      </div>

      {/* Help Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* FAQs */}
        <div
          className={`p-6 rounded-lg shadow-md ${isDarkTheme ? "bg-gray-800" : "bg-white"}`}
        >
          <h2 className={`text-2xl font-semibold mb-4 ${isDarkTheme ? "text-purple-300" : "text-purple-600"}`}>
            Frequently Asked Questions
          </h2>
          <ul className="space-y-2">
            <li className={`${isDarkTheme ? "text-gray-300" : "text-gray-600"}`}>
              <a href="#" className="hover:underline">
                How do I reset my password?
              </a>
            </li>
            <li className={`${isDarkTheme ? "text-gray-300" : "text-gray-600"}`}>
              <a href="#" className="hover:underline">
                How do I update my profile information?
              </a>
            </li>
            <li className={`${isDarkTheme ? "text-gray-300" : "text-gray-600"}`}>
              <a href="#" className="hover:underline">
                How do I delete my account?
              </a>
            </li>
            <li className={`${isDarkTheme ? "text-gray-300" : "text-gray-600"}`}>
              <a href="#" className="hover:underline">
                How do I contact support?
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Support */}
        <div
          className={`p-6 rounded-lg shadow-md ${isDarkTheme ? "bg-gray-800" : "bg-white"}`}
        >
          <h2 className={`text-2xl font-semibold mb-4 ${isDarkTheme ? "text-purple-300" : "text-purple-600"}`}>
            Contact Support
          </h2>
          <p className={`${isDarkTheme ? "text-gray-300" : "text-gray-600"} mb-4`}>
            Need assistance? Our support team is here to help!
          </p>
          <Link to={"/contact-us"}>
            <button className="w-full bg-gradient-to-r from-purple-600 to-violet-600 text-white py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-violet-700 transition duration-300">
              Contact Us
            </button>
          </Link>
        </div>

        {/* Getting Started Guide */}
        <div
          className={`p-6 rounded-lg shadow-md ${isDarkTheme ? "bg-gray-800" : "bg-white"}`}
        >
          <h2 className={`text-2xl font-semibold mb-4 ${isDarkTheme ? "text-purple-300" : "text-purple-600"}`}>
            Getting Started
          </h2>
          <p className={`${isDarkTheme ? "text-gray-300" : "text-gray-600"}`}>
            New to Docs Wallet? Start here to learn the basics.
          </p>
          <button className="mt-4 w-full bg-gradient-to-r from-purple-600 to-violet-600 text-white py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-violet-700 transition duration-300">
            Learn More
          </button>
        </div>
      </div>

      {/* Additional Resources */}
      <div className="mt-12">
        <h2 className={`text-2xl font-bold text-center ${isDarkTheme ? "text-purple-300" : "text-purple-600"} mb-6`}>
          Additional Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className={`p-6 rounded-lg shadow-md ${isDarkTheme ? "bg-gray-800" : "bg-white"}`}
          >
            <h3 className={`text-xl font-semibold ${isDarkTheme ? "text-purple-300" : "text-purple-600"}`}>
              Video Tutorials
            </h3>
            <p className={`${isDarkTheme ? "text-gray-300" : "text-gray-600"}`}>
              Watch step-by-step videos to get familiar with our platform.
            </p>
          </div>
          <div
            className={`p-6 rounded-lg shadow-md ${isDarkTheme ? "bg-gray-800" : "bg-white"}`}
          >
            <h3 className={`text-xl font-semibold ${isDarkTheme ? "text-purple-300" : "text-purple-600"}`}>
              User Guides
            </h3>
            <p className={`${isDarkTheme ? "text-gray-300" : "text-gray-600"}`}>
              Access in-depth guides for advanced features and tips.
            </p>
          </div>
        </div>
      </div>
      <SocialMediaIcons></SocialMediaIcons>
    </div>
     </>
  );
};

export default HelpCenter;
