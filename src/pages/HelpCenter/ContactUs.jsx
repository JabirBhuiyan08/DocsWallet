import React from "react";
import { useTheme } from "../../components/ThemeContext/ThemeContext";

const ContactUs = () => {
  const { isDarkTheme } = useTheme();

  return (
    <div
      className={`min-h-screen p-6 md:p-12 lg:p-20 ${
        isDarkTheme ? "bg-slate-850 text-white" : "bg-white text-black"
      }`}
    >
      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-purple-500 to-violet-500 bg-clip-text text-transparent mb-6">
        Contact Us
      </h1>
      <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
        Have questions? We’d love to hear from you! Reach out through the form or contact details below.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className={`rounded-lg shadow-md p-6 ${isDarkTheme ? "bg-gray-800" : "bg-white"}`}>
          <h2 className="text-2xl font-semibold text-purple-600 dark:text-purple-300 mb-4">
            Our Office
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            1234 Docs Wallet Avenue <br /> City, State, 56789
          </p>
          <h3 className="font-semibold text-gray-700 dark:text-gray-400">Email:</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">support@docswallet.com</p>
          <h3 className="font-semibold text-gray-700 dark:text-gray-400">Phone:</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">+1 (123) 456-7890</p>

          {/* Map Placeholder */}
          <div
            className="h-48 bg-gradient-to-r from-purple-500 to-violet-500 text-white rounded-lg flex items-center justify-center"
          >
            <p className="font-semibold">Map Placeholder</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className={`rounded-lg shadow-md p-6 ${isDarkTheme ? "bg-gray-800" : "bg-white"}`}>
          <h2 className="text-2xl font-semibold text-purple-600 dark:text-purple-300 mb-6 text-center">
            Send a Message
          </h2>
          <form className="space-y-6">
            {/* Name Field */}
            <div>
              <label className={`block font-semibold mb-1 ${isDarkTheme ? "text-purple-300" : "text-purple-600"}`}>
                Name
              </label>
              <input
                type="text"
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  isDarkTheme ? "bg-gray-700 text-white focus:ring-purple-500" : "focus:ring-purple-500"
                }`}
                placeholder="Your Name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className={`block font-semibold mb-1 ${isDarkTheme ? "text-purple-300" : "text-purple-600"}`}>
                Email
              </label>
              <input
                type="email"
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  isDarkTheme ? "bg-gray-700 text-white focus:ring-purple-500" : "focus:ring-purple-500"
                }`}
                placeholder="Your Email"
              />
            </div>

            {/* Message Field */}
            <div>
              <label className={`block font-semibold mb-1 ${isDarkTheme ? "text-purple-300" : "text-purple-600"}`}>
                Message
              </label>
              <textarea
                rows="5"
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  isDarkTheme ? "bg-gray-700 text-white focus:ring-purple-500" : "focus:ring-purple-500"
                }`}
                placeholder="Your Message"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-violet-600 text-white py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-violet-700 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
