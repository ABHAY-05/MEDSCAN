import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import '../App.css';

function HomePage() {
  return (
    <div className="bg-white h-screen flex flex-col items-center justify-center text-center pt-[8vh] px-4 md:px-0">
      <div className="mb-8">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-blue-700 mb-4">Welcome to MedScan</h1>
        <p className="text-base md:text-lg lg:text-xl text-gray-700">
          Your trusted partner in medical diagnostics
        </p>
      </div>
      <ScrollLink
        to="services"
        smooth={true}
        offset={-58}
        duration={500}
        className="bg-blue-700 text-white px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-full text-base md:text-lg lg:text-xl font-semibold transform transition-transform duration-300 hover:scale-105 cursor-pointer"
      >
        Get Started
      </ScrollLink>
    </div>
  );
}

export default HomePage;