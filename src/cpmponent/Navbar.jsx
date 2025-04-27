import React, { useState } from 'react';
import { FiAlignJustify } from "react-icons/fi";
import {Link} from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className=" h-25 w-full bg-[#0002A1] flex items-center justify-between px-6">
      <div className="flex items-center">
        <img src="/cooling-logo.png" alt="Logo" className="h-20 w-auto" />
      </div>

    
      <div className="hidden md:flex justify-center text-center space-x-6 text-white font-extrabold">
        <Link to='/' className="hover:text-green-300 cursor-pointer ml-2.5">Home</Link>
        <Link to='/about' className="hover:text-green-300 cursor-pointer">About </Link>
        <Link to='/contactUs' className="hover:text-green-300 cursor-pointer">Contact Us</Link>
        <Link to='/privacy' className="hover:text-green-300 cursor-pointer mr-2.5">Privacy & Policy</Link>
      </div>

      
      <div className="md:hidden text-white cursor-pointer" onClick={toggleMenu}>
        <FiAlignJustify className="text-2xl" />
      </div>

      
      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-[#0002A1] text-white flex flex-col pl-5 space-y-4 py-4 md:hidden">
          <Link to='/' className="hover:text-green-300 cursor-pointer text-2xl">Home</Link>
          <div className='h-4 mb-3'><p className=''>---------------------------------</p></div>
          <Link to='/about' className="hover:text-green-300 cursor-pointer text-2xl">About</Link>
          <div className='h-4 mb-3'><p className=''>---------------------------------</p></div>
          <Link to='/contactUs' className="hover:text-green-300 cursor-pointer text-2xl">Contact Us</Link>
          <div className='h-4 mb-3'><p className=''>---------------------------------</p></div>
          <Link to='/privacy' className="hover:text-green-300 cursor-pointer text-2xl">Privacy & Policy</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;