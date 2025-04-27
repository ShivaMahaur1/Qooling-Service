import React from 'react';
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { GiWashingMachine } from "react-icons/gi";
import { GiBrainFreeze } from "react-icons/gi";
import { GiCooler } from "react-icons/gi";
import { TbAirConditioning } from "react-icons/tb";
import { IoIosHome } from "react-icons/io";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { IoMdContact } from "react-icons/io";

import {Link} from 'react-router-dom'

const Bottom = () => {
  return (
    <div>
      <div className="w-full h-1 bg-black"></div>

      <div className="h-auto w-full bg-[#0002A1]">
      <div className="flex flex-wrap justify-around text-amber-50 text-lg font-bold p-4">
          
        </div>
        
        <div className="flex flex-wrap justify-between mt-5 gap-6 px-4">

          <div className="text-white font-semibold text-center sm:text-left w-full sm:w-[48%] md:w-[22%] flex flex-col justify-between">
            <h3 className="text-2xl text-gray-300 mb-3 underline">Services</h3>
            
              <li className="mb-2">Window Ac Service</li>
              <li className="mb-2">Split Ac Service</li>
              <li className="mb-2">Window Ac Install</li>
              <li className="mb-2">Split Ac Installation</li>
            
          </div>


          <div className="text-white font-semibold text-center sm:text-left w-full sm:w-[48%] md:w-[22%] flex flex-col justify-between">
            <h3 className="text-2xl text-gray-300 mb-3 underline">Quick Links</h3>
            <ul>
              <div className="flex items-center mb-2">
                <Link to='/'><IoIosHome className="text-2xl" /></Link>
                <Link to='/' className="ml-2.5">Home</Link>
              </div>
              <div className="flex items-center mb-2">
                <Link to='/privacy'><MdOutlinePrivacyTip className="text-2xl" /></Link>
                <Link to='/privacy'><li className="ml-2.5">Privacy & Policy</li></Link>
              </div>
              <div className="flex items-center mb-2">
                <Link to='/about'><FcAbout className="text-2xl" /></Link>
               <Link to='/about'><li className="ml-2.5">About</li></Link> 
              </div>
              <div className="flex items-center mb-2">
                <Link to='/contactUs'><IoMdContact className="text-2xl" /></Link>
               <Link to='/contactUs'><li className="ml-2.5">Contact Us</li></Link> 
              </div>
            </ul>
          </div>

          
          <div className="text-white font-semibold text-center sm:text-left w-full sm:w-[48%] md:w-[22%] flex flex-col justify-between">
            <h3 className="text-2xl text-gray-300 mb-3 underline">Products</h3>
            <ul>
              <div className="flex items-center mb-2">
                <GiWashingMachine className="text-2xl" />
                <li className="ml-2.5">Washing Machine</li>
              </div>
              <div className="flex items-center mb-2">
                <GiBrainFreeze className="text-2xl" />
                <li className="ml-2.5">Freeze</li>
              </div>
              <div className="flex items-center mb-2">
                <GiCooler className="text-2xl" />
                <li className="ml-2.5">Cooler</li>
              </div>
              <div className="flex items-center mb-2">
                <TbAirConditioning className="text-2xl" />
                <li className="ml-2.5">Cassette Ac</li>
              </div>
            </ul>
          </div>

          
          <div className="text-white font-semibold text-center sm:text-left w-full sm:w-[48%] md:w-[22%] flex flex-col justify-between">
            <h3 className="text-2xl text-gray-300 mb-3 underline">Social Media</h3>
            <ul>
              <div className="flex items-center mb-2">
                <FaSquareFacebook className="text-2xl" />
                <li className="ml-2.5">Facebook</li>
              </div>
              <div className="flex items-center mb-2">
                <FaSquareXTwitter className="text-2xl" />
                <li className="ml-2.5">Twitter</li>
              </div>
              <div className="flex items-center mb-2">
                <FaYoutube className="text-2xl" />
                <li className="ml-2.5">YouTube</li>
              </div>
              <div className="flex items-center mb-2">
                <FaInstagram className="text-2xl" />
                <li className="ml-2.5">Instagram</li>
              </div>
            </ul>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Bottom;