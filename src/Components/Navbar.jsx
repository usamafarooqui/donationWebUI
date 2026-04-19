import React from 'react'
import logo from "../assets/images/logo.svg";
import Arrow from "../assets/images/arrow.svg?react";
import CallIcon from "../assets/images/call.svg?react"
const Navbar = () => {
  return (
    // koi fazool comment add krod
    <>
      <div className='max-w-navcontainer mt-4 w-95width mx-auto bg-primary py-3.75 px-7.5 rounded-[50px]'>
        <div className=' grid grid-cols-[auto_2fr_auto_auto] gap-6'>
          <div>
            <img src={logo} alt="logo" className="w-29.75" />
          </div>
          <div className='flex items-center justify-end pr-8'>
            <ul className='flex space-x-10.5 items-center justify-center text-white'>
              <li>Home</li>
              <li>About</li>
              <li>Blog</li>
              <li>COntact Us</li>
            </ul>
          </div>
          <div className='flex items-center gap-4 px-4'>
            <div><CallIcon className="w-6 h-6" /></div>
            <div className='text-[20px] text-white font-bold'><p>+91 7710-290176</p></div>
          </div>
          <div>
            <button className="text-primary text-base px-8 py-2.5 rounded-4xl flex items-center gap-2 bg-white">
              Donate Now
              <Arrow className="w-2 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar