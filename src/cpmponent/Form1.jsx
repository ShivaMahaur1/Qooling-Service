import React from 'react';

const Form1 = () => {

  return (
    <div className="flex flex-col justify-between h-auto bg-[#0002A1]">
      
      <div className="flex justify-center p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
        <form className="bg-[#0002A1] p-6 rounded-lg w-full max-w-sm">
          
          <div className="mb-4">
            <label htmlFor="name" className="block text-white font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          
          <div className="mb-4">
            <label htmlFor="file" className="block text-white font-semibold mb-2">
              Upload File
            </label>
            <input
              type="file"
              id="file"
              name="file"
              className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>

      
      <div className="w-full h-px max-w-6xl mx-auto my-20 bg-gradient-to-r from-transparent via-[rgba(149,131,198,0.6)] to-transparent"></div>

      
      <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-10 pb-10">
        <img
          className="h-auto   w-25"
          src="/cooling-logo.png"
          alt="Cooling Logo"
        />
        <p className="text-white text-center sm:text-right text-sm sm:text-base">
          Copyright 2025 © All rights Reserved. Design by Qooling
        </p>
      </div>
    </div>
  );
};

export default Form1;