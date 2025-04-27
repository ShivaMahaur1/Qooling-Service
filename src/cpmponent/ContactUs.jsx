import React, { useState } from 'react';
import emailjs from 'emailjs-com'


import { IoIosPhonePortrait } from "react-icons/io";


function ConatctUs() {


  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_qet7ht6','template_u4rbm9w',e.target,'U1YtXLk5sSgXcd7PQ').then(res=>{console.log(res)}).catch(err=>console.log(err))
  }

  return (
    <div className="max-h-screen bg-[#0002A1] text-white p-8 md:p-16 font-sans">
      <div className="max-w-7xl mx-auto">

        <div className="mb-12">
          <button className="border border-white px-6 py-2 text-sm font-medium text-white hover:bg-white hover:text-blue-900 transition duration-300 ease-in-out">
            Claim Your Warranty
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

          
          <form onSubmit={sendEmail}  className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="name" className="block text-sm font-light mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-transparent border-b border-white/50 focus:border-white outline-none py-2 transition duration-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-light mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-transparent border-b border-white/50 focus:border-white outline-none py-2 transition duration-300"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
               <div>
                <label htmlFor="phone" className="block text-sm font-light mb-2">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full bg-transparent border-b border-white/50 focus:border-white outline-none py-2 transition duration-300"
                  required
                />
              </div>
               
              <div>
                 
                 <input
                    type="file"
                    id="invoice"
                    name="invoice"
                    className="w-full text-sm text-gray-400
                               file:mr-4 file:py-2 file:px-4
                               file:rounded-md file:border-0
                               file:text-sm file:font-semibold
                               file:bg-gray-200 file:text-blue-900
                               hover:file:bg-gray-300 cursor-pointer"
                  />
                   
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-light mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full bg-transparent border-b border-white/50 focus:border-white outline-none py-2 transition duration-300 resize-none"
                required
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="bg-black text-white px-8 py-3 font-semibold hover:bg-gray-800 transition duration-300 ease-in-out w-full md:w-auto"
              >
                SUBMIT YOUR WARRANTY
              </button>
            </div>
          </form>

          
          <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg flex flex-col justify-center">
             <div className="text-center mb-6">
               <IoIosPhonePortrait className="w-12 h-12 mx-auto text-gray-400 mb-4" />
               <p className="text-3xl font-bold tracking-tight">+91 9639753716</p>
               <p className="text-sm text-gray-500 mt-1">available from 10:00 - 19:00</p>
             </div>

             <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="font-semibold mb-1">Address</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                   2nd Floor, Aggarwal Plaza, H-5/206, near N.S.P, Netaji Subhash Place, Pitampura, New Delhi, Delhi, 110034
                </p>
             </div>

             <div className="mt-4">
                <p className="font-semibold mb-1">Email</p>
                <a href="mailto:support@qooling.in" className="text-gray-600 text-sm hover:text-blue-600 transition duration-300">
                   support@qooling.in
                </a>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ConatctUs;