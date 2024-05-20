import React from 'react';

function AboutUs() {
  return (
    <div className="bg-blue-100 h-[92vh] flex flex-col items-center">
      <h1 className="text-5xl font-bold text-blue-700 mb-20 mt-20">About Us</h1>
      <div className="w-3/4 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-white p-10 shadow-md rounded-lg text-center transform transition-transform duration-300 hover:scale-105">
          <h2 className="text-2xl font-semibold mb-2">Ansh Pratap Singh</h2>
          <p className="text-lg font-medium text-blue-700 mb-2">Team Leader</p>
          <p>Developed the web UI</p>
        </div>
        <div className="bg-white p-10 shadow-md rounded-lg text-center transform transition-transform duration-300 hover:scale-105">
          <h2 className="text-2xl font-semibold mb-2">Abhay Verma</h2>
          <p className="text-lg font-medium text-blue-700 mb-2">Team Member</p>
          <p>Handled Model Development and Training</p>
        </div>
        <div className="bg-white p-10 shadow-md rounded-lg text-center transform transition-transform duration-300 hover:scale-105">
          <h2 className="text-2xl font-semibold mb-2">Abhishek Yadav</h2>
          <p className="text-lg font-medium text-blue-700 mb-2">Team Member</p>
          <p>Handled Dataset Procurement and Documentation</p>
        </div>
        <div className="bg-white p-10 shadow-md rounded-lg text-center transform transition-transform duration-300 hover:scale-105">
          <h2 className="text-2xl font-semibold mb-2">Anushka Mishra</h2>
          <p className="text-lg font-medium text-blue-700 mb-2">Team Member</p>
          <p>Handled Server Side operations</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
