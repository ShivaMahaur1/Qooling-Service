import React from 'react';

const Services = () => {
  return (
    <div>
      <div className="flex gap-4 justify-around mt-4 flex-wrap">
        <div className="text-center">
          <img className="h-24 w-24 object-contain mx-auto" src="/1.png" alt="img" />
          <p className="text-lg font-extrabold text-gray-700 mt-2">Split AC Service</p>
        </div>
        <div className="text-center">
          <img className="h-24 w-24 object-contain mx-auto" src="/2.png" alt="img" />
          <p className="text-lg font-extrabold text-gray-700 mt-2">Split AC Installation</p>
        </div>
        <div className="text-center">
          <img className="h-24 w-24 object-contain mx-auto" src="/3.png" alt="img" />
          <p className="text-lg font-extrabold text-gray-700 mt-2">Split Gas Filling</p>
        </div>
        <div className="text-center">
          <img className="h-24 w-24 object-contain mx-auto" src="/4.png" alt="img" />
          <p className="text-lg font-extrabold text-gray-700 mt-2">Window AC Service</p>
        </div>
        <div className="text-center">
          <img className="h-24 w-24 object-contain mx-auto" src="/5.png" alt="img" />
          <p className="text-lg font-extrabold text-gray-700 mt-2">Window AC Install</p>
        </div>
        <div className="text-center">
          <img className="h-24 w-24 object-contain mx-auto" src="/6.png" alt="img" />
          <p className="text-lg font-extrabold text-gray-700 mt-2">Window Gas Filling</p>
        </div>
      </div>
    </div>
  );
};

export default Services;