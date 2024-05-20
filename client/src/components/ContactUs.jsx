import React from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

function ContactUs() {
  return (
    <div className="bg-gray-100 h-screen flex flex-col items-center">
      <h1 className="text-5xl font-bold text-blue-700 mb-20 mt-20">Contact Us</h1>
      <div className="w-3/4 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-white p-10 shadow-md rounded-lg text-center flex flex-col items-center transform transition-transform duration-300 hover:scale-105">
          <FaPhoneAlt className="text-blue-700 text-6xl mb-6" />
          <h2 className="text-2xl font-semibold mb-2">Phone</h2>
          <p className="text-lg font-medium text-blue-700 mb-2">+91 8756782835</p>
          <p>Call us for any inquiries</p>
        </div>
        <div className="bg-white p-10 shadow-md rounded-lg text-center flex flex-col items-center transform transition-transform duration-300 hover:scale-105">
          <FaEnvelope className="text-blue-700 text-6xl mb-6" />
          <h2 className="text-2xl font-semibold mb-2">Email</h2>
          <p className="text-lg font-medium text-blue-700 mb-2">abhayvermajune5@gmail.com</p>
          <p>Reach us via email for support</p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
