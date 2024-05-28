import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faStethoscope, faInfoCircle, faEnvelope, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link as ScrollLink } from 'react-scroll';
import { Link, useLocation } from 'react-router-dom';
import '../App.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuAnimation, setMenuAnimation] = useState('');
  const location = useLocation();

  const isPredictPage = location.pathname === '/pneumonia' || location.pathname === '/eyeDisease' || location.pathname === '/skinDisease';

  const toggleMenu = () => {
    if (isOpen) {
      setMenuAnimation('menu-exit');
      setTimeout(() => {
        setIsOpen(false);
        setMenuAnimation('');
      }, 300);
    } else {
      setIsOpen(true);
      setMenuAnimation('menu-enter');
    }
  };

  return (
    <div className="bg-blue-700 flex text-white h-[8vh] poetsen-one-regular shadow-md fixed w-full z-10">
      <Link to='/' className="flex items-center">
        <div className="p-[2vh] text-[24px] font-bold flex items-center z-10">
          MedScan
        </div>
      </Link>
      <div className="flex-1 flex justify-end items-center">
        <div className="hidden md:flex gap-[3vw] text-[20px] mr-[2vw] items-center">
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
                offset={-58}
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
              <Link to="/" className='hover:text-yellow-400 flex items-center transform transition-transform duration-300 hover:translate-y-[-2px] cursor-pointer'>
                <FontAwesomeIcon icon={faStethoscope} className="mr-1" />
                Services
              </Link>
              <Link to="/" className='hover:text-yellow-400 flex items-center transform transition-transform duration-300 hover:translate-y-[-2px] cursor-pointer'>
                <FontAwesomeIcon icon={faInfoCircle} className="mr-1" />
                About
              </Link>
              <Link to="/" className='hover:text-yellow-400 flex items-center transform transition-transform duration-300 hover:translate-y-[-2px] cursor-pointer'>
                <FontAwesomeIcon icon={faEnvelope} className="mr-1" />
                Contact Us
              </Link>
            </>
          )}
        </div>
        <div className="md:hidden flex items-center pr-4">
          <button onClick={toggleMenu} className="text-white">
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className={`absolute top-[8vh] left-0 w-full bg-blue-700 md:hidden flex flex-col items-center gap-4 p-4 ${menuAnimation}`}>
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
                onClick={toggleMenu}
              >
                <FontAwesomeIcon icon={faHome} className="mr-1" />
                Home
              </ScrollLink>
              <ScrollLink
                activeClass='active'
                to="services"
                spy={true}
                smooth={true}
                offset={-59}
                duration={500}
                className='hover:text-yellow-400 flex items-center transform transition-transform duration-300 hover:translate-y-[-2px] cursor-pointer'
                onClick={toggleMenu}
              >
                <FontAwesomeIcon icon={faStethoscope} className="mr-1" />
                Services
              </ScrollLink>
              <ScrollLink
                activeClass='active'
                to="about"
                spy={true}
                smooth={true}
                offset={-58}
                duration={500}
                className='hover:text-yellow-400 flex items-center transform transition-transform duration-300 hover:translate-y-[-2px] cursor-pointer'
                onClick={toggleMenu}
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
                onClick={toggleMenu}
              >
                <FontAwesomeIcon icon={faEnvelope} className="mr-1" />
                Contact Us
              </ScrollLink>
            </>
          ) : (
            <>
              <Link to="/" className='hover:text-yellow-400 flex items-center transform transition-transform duration-300 hover:translate-y-[-2px] cursor-pointer' onClick={toggleMenu}>
                <FontAwesomeIcon icon={faHome} className="mr-1" />
                Home
              </Link>
              <Link to="/" className='hover:text-yellow-400 flex items-center transform transition-transform duration-300 hover:translate-y-[-2px] cursor-pointer' onClick={toggleMenu}>
                <FontAwesomeIcon icon={faStethoscope} className="mr-1" />
                Services
              </Link>
              <Link to="/" className='hover:text-yellow-400 flex items-center transform transition-transform duration-300 hover:translate-y-[-2px] cursor-pointer' onClick={toggleMenu}>
                <FontAwesomeIcon icon={faInfoCircle} className="mr-1" />
                About
              </Link>
              <Link to="/" className='hover:text-yellow-400 flex items-center transform transition-transform duration-300 hover:translate-y-[-2px] cursor-pointer' onClick={toggleMenu}>
                <FontAwesomeIcon icon={faEnvelope} className="mr-1" />
                Contact Us
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Navbar;