import React from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

function ContactUs() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-16 justify-center">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-16">Contact Us</h1>
      <div className="w-11/12 md:w-3/4 grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center">
        <a href={`tel:+91-${import.meta.env.VITE_PHONE}`} target='_blank'>
          <div className="bg-white p-6 md:p-10 shadow-md rounded-lg text-center flex flex-col items-center transform transition-transform duration-300 hover:scale-105">
            <FaPhoneAlt className="text-blue-700 text-5xl md:text-6xl mb-6" />
            <h2 className="text-xl md:text-2xl font-semibold mb-2">Phone</h2>
            <p className="text-lg font-medium text-blue-700 mb-2">+91 {import.meta.env.VITE_PHONE}</p>
            <p>Call us for any inquiries</p>
          </div>
        </a>
        <a href={`mailto:${import.meta.env.VITE_EMAIL}`} target='_blank'>
          <div className="bg-white p-6 md:p-10 shadow-md rounded-lg text-center flex flex-col items-center transform transition-transform duration-300 hover:scale-105">
            <FaEnvelope className="text-blue-700 text-5xl md:text-6xl mb-6" />
            <h2 className="text-xl md:text-2xl font-semibold mb-2">Email</h2>
            <p className="text-lg font-medium text-blue-700 mb-2">{import.meta.env.VITE_EMAIL}</p>
            <p>Reach us via email for support</p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default ContactUs;