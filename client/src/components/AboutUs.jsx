import React from 'react';

function AboutUs() {
  return (
    <div className="bg-blue-100 min-h-screen flex flex-col items-center justify-center py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-16">About Us</h1>
      <div className="w-11/12 md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 justify-center">
        <a href={import.meta.env.VITE_ANSH} target='_blank'>
          <div className="bg-white py-8 px-4 md:py-10 md:px-4 shadow-md rounded-lg text-center transform transition-transform duration-300 hover:scale-105">
            <h2 className="text-xl md:text-2xl font-semibold mb-2">Ansh Pratap Singh</h2>
            <p className="text-lg font-medium text-blue-700 mb-2">Team Leader</p>
            <p>Developed the web UI</p>
          </div>
        </a>
        <a href={import.meta.env.VITE_ABHAY} target='_blank'>
          <div className="bg-white py-8 px-4 md:py-10 md:px-4 shadow-md rounded-lg text-center transform transition-transform duration-300 hover:scale-105">
            <h2 className="text-xl md:text-2xl font-semibold mb-2">Abhay Verma</h2>
            <p className="text-lg font-medium text-blue-700 mb-2">Team Member</p>
            <p>Handled Model Development and Training</p>
          </div>
        </a>
        <a href={import.meta.env.VITE_ABHISHEK} target='_blank'>
          <div className="bg-white py-8 px-4 md:py-10 md:px-4 shadow-md rounded-lg text-center transform transition-transform duration-300 hover:scale-105">
            <h2 className="text-xl md:text-2xl font-semibold mb-2">Abhishek Yadav</h2>
            <p className="text-lg font-medium text-blue-700 mb-2">Team Member</p>
            <p>Handled Dataset Procurement and Documentation</p>
          </div>
        </a>
        <a href={import.meta.env.VITE_ANUSHKA} target='_blank'>
          <div className="bg-white py-8 px-4 md:py-10 md:px-4 shadow-md rounded-lg text-center transform transition-transform duration-300 hover:scale-105">
            <h2 className="text-xl md:text-2xl font-semibold mb-2">Anushka Mishra</h2>
            <p className="text-lg font-medium text-blue-700 mb-2">Team Member</p>
            <p>Handled Server Side operations</p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default AboutUs;