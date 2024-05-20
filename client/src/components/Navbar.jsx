import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faStethoscope, faInfoCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link as ScrollLink } from 'react-scroll';
import { Link, useLocation } from 'react-router-dom';
import '../App.css';

function Navbar() {
  const location = useLocation();

  const isPredictPage = location.pathname === '/pneumonia' || location.pathname === '/eyeDisease' || location.pathname === '/skinDisease';

  return (
    <div className="bg-blue-700 flex text-white h-[8vh] poetsen-one-regular shadow-md fixed w-full z-10">
      <Link to='/' className="flex items-center">
        <div className="p-[2vh] text-[24px] font-bold flex items-center">
          MedScan
        </div>
      </Link>
      <div className="flex right-[4vw] absolute gap-[3vw] text-[20px] mt-[2vh] items-center">
        {!isPredictPage ? (
          <>
            <ScrollLink
              activeClass='active'
              to="home"
              spy={true}
              smooth={true}
              offset={-78}
              duration={500}
              className='hover:text-yellow-400 flex items-center transform transition-transform duration-300 hover:translate-y-[-2px] cursor-pointer'
            >
              <FontAwesomeIcon icon={faHome} className="mr-1" />
              Home
            </ScrollLink>
            <ScrollLink
              activeClass='active'
              to="services"
              spy={true}
              smooth={true}
              offset={-58}
              duration={500}
              className='hover:text-yellow-400 flex items-center transform transition-transform duration-300 hover:translate-y-[-2px] cursor-pointer'
            >
              <FontAwesomeIcon icon={faStethoscope} className="mr-1" />
              Services
            </ScrollLink>
            <ScrollLink
              activeClass='active'
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className='hover:text-yellow-400 flex items-center transform transition-transform duration-300 hover:translate-y-[-2px] cursor-pointer'
            >
              <FontAwesomeIcon icon={faInfoCircle} className="mr-1" />
              About
            </ScrollLink>
            <ScrollLink
              activeClass='active'
              to="contact"
              spy={true}
              smooth={true}
              offset={-58}
              duration={500}
              className='hover:text-yellow-400 flex items-center transform transition-transform duration-300 hover:translate-y-[-2px] cursor-pointer'
            >
              <FontAwesomeIcon icon={faEnvelope} className="mr-1" />
              Contact Us
            </ScrollLink>
          </>
        ) : (
          <>
            <Link to="/" className='hover:text-yellow-400 flex items-center transform transition-transform duration-300 hover:translate-y-[-2px] cursor-pointer'>
              <FontAwesomeIcon icon={faHome} className="mr-1" />
              Home
            </Link>
            <Link to="/#services" className='hover:text-yellow-400 flex items-center transform transition-transform duration-300 hover:translate-y-[-2px] cursor-pointer'>
              <FontAwesomeIcon icon={faStethoscope} className="mr-1" />
              Services
            </Link>
            <Link to="/#about" className='hover:text-yellow-400 flex items-center transform transition-transform duration-300 hover:translate-y-[-2px] cursor-pointer'>
              <FontAwesomeIcon icon={faInfoCircle} className="mr-1" />
              About
            </Link>
            <Link to="/#contact" className='hover:text-yellow-400 flex items-center transform transition-transform duration-300 hover:translate-y-[-2px] cursor-pointer'>
              <FontAwesomeIcon icon={faEnvelope} className="mr-1" />
              Contact Us
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
