import React from 'react';

const Slider = () => {
  return (
    <div>
    <div className="flex justify-center  mt-5">
      <h1 className="ml-3.5 mr-3.5 text-4xl font-semibold text-gray-800 group">
        <span className="relative inline-block">
          All-Brand AC  ||
        <span className="absolute left-0 bottom-0 w-0 h-1 bg-green-400 transition-all duration-300 group-hover:w-54"></span>
        </span>
      </h1>
      <h1 className="font-bold text-blue-500 text-4xl group">
        <span className="relative inline-block">
          Maintenance & Repair
          <span className="absolute left-0 bottom-0 w-0 h-1 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
        </span>
      </h1>
   </div>
   
   </div>
  );
};

export default Slider;