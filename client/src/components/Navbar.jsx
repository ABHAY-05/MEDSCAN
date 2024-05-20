import React from 'react';
import '../App.css';

function Navbar() {
  return (
    <div className='bg-red-500 flex text-white h-[8vh] poetsen-one-regular'>
        <a href='#'>
          <div className='p-[2vh] text-[20px]'>MedScan</div>
        </a>
        <div className='flex right-[4vw] absolute gap-[2vw] text-[20px] mt-[2vh]'>
          <div>Home</div>
          <div>Services</div>
          <div>About</div>
          <div>Contact us</div>
        </div>
    </div>
  )
}

export default Navbar;