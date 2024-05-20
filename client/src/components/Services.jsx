import React from 'react';
import { Link } from 'react-router-dom';

function Services() {
  return (
    <div className="bg-gray-100 h-[92vh] flex flex-col items-center">
      <h1 className="text-5xl font-bold text-blue-700 mb-28 mt-28">Our Services</h1>
      <div className="w-3/4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-7 shadow-md rounded-lg text-center transform transition-transform duration-300 hover:scale-105 hover:-translate-y-2">
          <h2 className="text-2xl font-semibold mb-4">Pneumonia Detection</h2>
          <p className="mb-6">Utilize advanced AI models to detect pneumonia from chest X-rays.</p>
          <Link to="/pneumonia" className="bg-blue-700 text-white px-4 py-2 rounded-full text-lg font-semibold transform transition-transform duration-300 hover:scale-105 hover:-translate-y-1">
            Learn More
          </Link>
        </div>
        <div className="bg-white p-7 shadow-md rounded-lg text-center transform transition-transform duration-300 hover:scale-105 hover:-translate-y-2">
          <h2 className="text-2xl font-semibold mb-4">Eye Disease Detection</h2>
          <p className="mb-6">Accurately diagnose various eye diseases using state-of-the-art technology.</p>
          <Link to="/eyeDisease" className="bg-blue-700 text-white px-4 py-2 rounded-full text-lg font-semibold transform transition-transform duration-300 hover:scale-105 hover:-translate-y-1">
            Learn More
          </Link>
        </div>
        <div className="bg-white p-7 shadow-md rounded-lg text-center transform transition-transform duration-300 hover:scale-105 hover:-translate-y-2">
          <h2 className="text-2xl font-semibold mb-4">Skin Disease Detection</h2>
          <p className="mb-6">Identify skin diseases quickly and accurately through AI analysis.</p>
          <Link to="/skinDisease" className="bg-blue-700 text-white px-4 py-2 rounded-full text-lg font-semibold transform transition-transform duration-300 hover:scale-105 hover:-translate-y-1">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Services;
