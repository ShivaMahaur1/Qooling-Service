
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { IoMdCloseCircle } from "react-icons/io";
import { FaRegCalendarAlt } from "react-icons/fa";


function PopForm() {

  const navigate=useNavigate()

   const [showForm, setShowForm] = useState(true);

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      acType: {
        ...prevData.acType,
        [name]: checked,
      },
    }));
  };

  const handleAcCountChange = (e) => {
    const { value, checked } = e.target;
    const countValue = parseInt(value, 10);
    
    setFormData((prevData) => ({
      ...prevData,
       acCount: checked ? countValue : (prevData.acCount === countValue ? null : prevData.acCount),
    }));
  };


  

  if (!showForm) {
    return null;
  }

  const acCounts = [1, 2, 3, 4, 5, 6, 7];

  
  const checkboxBaseStyle = "appearance-none h-4 w-4 border border-white rounded-sm bg-transparent focus:outline-none focus:ring-0 focus:ring-offset-0 cursor-pointer";
  const checkboxCheckedStyle = "bg-white"; 

  return (
   
    <div className=" inset-0 bg-[#0002A1] flex justify-center items-center p-4 font-sans">
      <div className="bg-transparent w-full max-w-2xl relative text-white px-4">
       
        <button
          onClick={() => {
            setShowForm(false)
            navigate('/')
          }}
          className="absolute bg-gray-400 rounded   md:top-0 md:right-0 text-white hover:text-gray-300 "
          aria-label="Close "
        >
          <IoMdCloseCircle size={27}  />
        </button>

        
        <div className="flex justify-center mb-8">
          
          <span className="text-4xl font-bold tracking-wider"><img src='/cooling-logo.png' alt='logo'/></span>
        </div>

        <h2 className="text-4xl font-semibold mb-10 text-left"> 
          Schedule Appointment
        </h2>

        <form  className="space-y-7">
          
        <div>
            <label htmlFor="fullName" className="block text-2xl font-medium mb-2 tracking-wide"> {/* Smaller label */}
              Full Name 
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Name"
              required
              className="w-full bg-transparent border-0 border-b border-gray-400 focus:border-white py-2 px-1 focus:outline-none focus:ring-0 placeholder-gray-500 text-sm"
              
            />
          </div>

          
          <div>
            <label htmlFor="phone" className="block text-2xl font-medium mb-2 tracking-wide">
              Phone 
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone"
              required
              className="w-full bg-transparent border-0 border-b border-gray-400 focus:border-white py-2 px-1 focus:outline-none focus:ring-0 placeholder-gray-500 text-sm"
              
            />
          </div>

          
          <div>
            <label htmlFor="email" className="block text-2xl font-medium mb-2 tracking-wide">
              Email 
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
              className="w-full bg-transparent border-0 border-b border-gray-400 focus:border-white py-2 px-1 focus:outline-none focus:ring-0 placeholder-gray-500 text-sm"
              
            />
          </div>

          
          <div>
            <label htmlFor="date" className="block text-2xl font-medium mb-2 tracking-wide">
              Select Your Date 
            </label>
             <div className="relative">
                 <input
                  
                  type="text"
                  name="date"
                  placeholder="mm/dd/yyyy"
                  required
                  className="w-full bg-transparent border-0 border-b border-gray-400 focus:border-white py-2 px-1 pr-8 focus:outline-none focus:ring-0 placeholder-gray-500 text-sm"
                  
                 />
                <span className="absolute right-1 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <FaRegCalendarAlt />
                </span>
             </div>
          </div>

          
          <div>
            <label htmlFor="time" className="block text-2xl font-medium mb-2 tracking-wide">
              Select Your Time 
            </label>
            <input
              type="text" 
              name="time"
              placeholder="Select Your Time"
              required
              className="w-full bg-transparent border-0 border-b border-gray-400 focus:border-white py-2 px-1 focus:outline-none focus:ring-0 placeholder-gray-500 text-sm"
              
            />
          </div>

          
          <div>
            <label htmlFor="address" className="block text-2xl font-medium mb-2 tracking-wide">
              Address 
            </label>
            <input
              type="text"
              name="address"
              placeholder="House No./Building No."
              required
              className="w-full bg-transparent border-0 border-b border-gray-400 focus:border-white py-2 px-1 focus:outline-none focus:ring-0 placeholder-gray-500 text-sm"
              
            />
          </div>

          
          <div>
            <span className="block text-2xl font-medium mb-3 tracking-wide">Select Your Ac</span>
            <div className="flex items-center space-x-6">
              <label htmlFor="window" className="flex items-center space-x-2 cursor-pointer text-sm">
                <input
                  type="checkbox"
                  name="window"
                  
                  onChange={handleCheckboxChange}
                  
                />
                <span>Window Ac</span>
              </label>
              <label htmlFor="split" className="flex items-center space-x-2 cursor-pointer text-sm">
                <input
                  type="checkbox"
                  name="split"
                  
                  onChange={handleCheckboxChange}
                 
                />
                <span>Split Ac</span>
              </label>
            </div>
          </div>

          <div>
            <span className="block text-2xl font-medium mb-3 tracking-wide">How Many Ac you Have</span> {/* Increased margin bottom */}
            <div className="flex items-center space-x-4 flex-wrap gap-y-2">
              {acCounts.map((count) => (
                <label key={count} htmlFor={`acCount-${count}`} className="flex items-center space-x-2 cursor-pointer text-sm">
                  <input
                    type="checkbox" // Visually checkboxes, logic ensures single selection
                    id={`acCount-${count}`}
                    name="acCount"
                    value={count}
                    
                    onChange={handleAcCountChange}
                     
                  />
                  <span>{count}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end pt-6"> {/* Increased padding top */}
           
            <button
              type="submit"
              // Use the dark background color for the text
              className="bg-white text-[#060628] px-7 py-2 rounded-sm text-sm font-semibold hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#060628] focus:ring-white transition-colors"
            >
              SEND
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PopForm;