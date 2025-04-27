import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { FcGlobe } from "react-icons/fc";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-6 py-12">
      
      <div className="txet-center mb-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">About Us</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Welcome to our cooling solutions platform! We specialize in providing top-notch air conditioning services, 
          including installation, maintenance, and repair. Our team of experts is dedicated to ensuring your comfort 
          and satisfaction. With years of experience in the industry, we pride ourselves on delivering reliable and 
          efficient cooling solutions tailored to your needs.
        </p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full mb-12">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Our Mission</h2>
        <p className="text-gray-600">
          Our mission is to provide high-quality cooling services that enhance the comfort and well-being of our customers. 
          We aim to deliver innovative and energy-efficient solutions that meet the unique needs of every client.
        </p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>Experienced and certified technicians</li>
          <li>Reliable and timely service</li>
          <li>Affordable pricing with no hidden costs</li>
          <li>Commitment to customer satisfaction</li>
          <li>Energy-efficient and eco-friendly solutions</li>
        </ul>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full">
        <div className='flex'>
        <FaLocationDot color='red' size={20}/>
        <p className='text-blue-600 pl-1 font-serif'> Location-</p>
        <p className='text-blue-700'>Wz 435, Sri Nagar, Rani Bagh, Delhi</p>
        </div>

        <div className='flex pt-2'>
            <MdCall  color='green' size={20}/>
            <p className='font-semibold pl-1 text-blue-600'>Contact Us-9639753716 |</p>
        </div>

        <div className='flex pt-2'>
        <MdOutlineAlternateEmail color='black' size={20}/>
        <p className='font-semibold pl-1 text-blue-600'>Email-shivamahaur@gmail.com</p>
        </div>

        <div className='flex pt-2'>
            <FcGlobe size={20}/>
            <p className='font-semibold text-blue-600'>Website-</p>
            <p className='text-blue-700'>coolong.com</p>
        </div>
      </div>
    </div>
  );
};

export default About;