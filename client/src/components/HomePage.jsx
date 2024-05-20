import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import '../App.css';

function HomePage() {
  return (
    <div className="bg-white h-screen flex flex-col items-center justify-center text-center pt-[8vh]">
      <div className="mb-8">
        <h1 className="text-5xl font-bold text-blue-700 mb-4">Welcome to MedScan</h1>
        <p className="text-lg text-gray-700">
          Your trusted partner in medical diagnostics
        </p>
      </div>
      <ScrollLink
        to="services"
        smooth={true}
        offset={-58}
        duration={500} className="bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-semibold transform transition-transform duration-300 hover:scale-105">
            Get Started
      </ScrollLink>
    </div>
  );
}

export default HomePage;
