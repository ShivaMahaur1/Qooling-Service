import React from 'react';
import { FaRupeeSign, FaHandPointRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div className="flex flex-wrap justify-center bg-gray-100 p-4 gap-6">
      {/* Card 1 */}
      <div className="bg-white flex flex-col items-center justify-around h-auto w-full sm:w-[48%] lg:w-[30%] rounded-lg shadow-md p-4">
        <img className="h-auto w-full rounded-lg shadow-md" src="/4.png" alt="img" />
        <div className="flex items-center justify-between w-full mt-3.5">
          <p className="text-xl text-blue-700 font-bold">Window Ac Service</p>
          <div className="flex items-center">
            <FaRupeeSign color='blue' className="text-lg" />
            <p className="text-xl ml-1">399</p>
          </div>
        </div>

        <div className="mt-4">
          {[
            'Urban Clap Charger Same AC Service 650',
            'No Broker Charge Same AC Service 600',
            'Final Checks & Clean-Up',
            'Jet Cleaning',
            '2x Cooling with Jet-Pump Technology',
            'Advanced foam jet removes dust & dirt',
            'Reduced power consumption',
            'Improves airflow and enhances cooling',
            '45 days warranty on service',
          ].map((text, index) => (
            <div key={index} className="flex items-center mt-2">
              <FaHandPointRight className="text-lg mr-2" />
              <p className="text-sm">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <Link to='/PopForm'>
          <button className="px-6 py-3 bg-[#0002A1] text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg transition duration-300">
            Book Now
          </button>
          </Link>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white flex flex-col items-center justify-around h-auto w-full sm:w-[48%] lg:w-[30%] rounded-lg shadow-md p-4">
        <img className="h-auto w-full rounded-lg shadow-md" src="/1.png" alt="img" />
        <div className="flex items-center justify-between w-full mt-3.5">
          <p className="text-xl text-blue-700 font-bold">Split Ac Service</p>
          <div className="flex items-center">
            <FaRupeeSign color='blue' className="text-lg" />
            <p className="text-xl ml-1">499</p>
          </div>
        </div>

        <div className="mt-4">
          {[
            'Urban Clap Charger Same Ac Service 650',
            'No Broker Charger Same Ac Service 650',
            'Final Checks & Clean-Up',
            'Jet Cleaning',
            '2X Cooling with Jet-Pump Technology',
            'Advanced foam jet removes dust & dirt',
            'Reduced power consumption',
            'Improves airflow and enhances cooling',
            'Advance Foam-jet Cleaning of Indoor Unit',
            'Jacket For Mess-Free Service',
            'Complete Servicing of Filter, Cooling Coil & Drain Tray',
          ].map((text, index) => (
            <div key={index} className="flex items-center mt-2">
              <FaHandPointRight className="text-lg mr-2" />
              <p className="text-sm">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
        <Link to='/PopForm'>
          <button className="px-6 py-3 bg-[#0002A1] text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg transition duration-300">
            Book Now
          </button>
          </Link>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white flex flex-col items-center justify-around h-auto w-full sm:w-[48%] lg:w-[30%] rounded-lg shadow-md p-4">
        <img className="h-auto w-full rounded-lg shadow-md" src="/3.png" alt="img" />
        <div className="flex items-center justify-between w-full mt-3.5">
          <p className="text-xl text-blue-700 font-bold">Split Ac Gas Filling</p>
          <div className="flex items-center">
            <FaRupeeSign color='blue' className="text-lg" />
            <p className="text-xl ml-1">2399</p>
          </div>
        </div>

        <div className="mt-4">
          {[
            'First Check The Compressor',
            'Check Leakage After Refill Gas',
            'Leakage Testing & Repair',
            'Fill Gas According To Air Conditioner',
            'Improves airflow and enhances cooling',
            'Additional spare part cost not included',
            'Improves airflow and enhances cooling',
            'Note : Service Not Included',
            '45 days warranty on gas charging',
          ].map((text, index) => (
            <div key={index} className="flex items-center mt-2">
              <FaHandPointRight className="text-lg mr-2" />
              <p className="text-sm">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
        <Link to='/PopForm'>
          <button className="px-6 py-3 bg-[#0002A1] text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg transition duration-300">
            Book Now
          </button>
          </Link>
        </div>
      </div>

       {/* Card 4 */}
       <div className="bg-white flex flex-col items-center justify-around h-auto w-full sm:w-[48%] lg:w-[30%] rounded-lg shadow-md p-4">
        <img className="h-auto w-full rounded-lg shadow-md" src="/6.png" alt="img" />
        <div className="flex items-center justify-between w-full mt-3.5">
          <p className="text-xl text-blue-700 font-bold">Window Ac Gas Leak Refill</p>
          <div className="flex items-center">
            <FaRupeeSign color='blue' className="text-lg" />
            <p className="text-xl ml-1">2399</p>
          </div>
        </div>

        <div className="mt-4">
          {[
            'First Check The Compressor',
            'Leakage Testing & Repair',
            'Check Leackage After Refill Gas',
            'Fill Gas According To Air Conditioner',
            'Improves airflow and enhances cooling',
            'Additional spare part cost not included',
            'Improves airflow and enhances cooling',
            'Note : Service Not Included',
            '45 days warranty on gas charging',
          ].map((text, index) => (
            <div key={index} className="flex items-center mt-2">
              <FaHandPointRight className="text-lg mr-2" />
              <p className="text-sm">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
        <Link to='/PopForm'>
          <button className="px-6 py-3 bg-[#0002A1] text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg transition duration-300">
            Book Now
          </button>
          </Link>
        </div>
      </div>


      {/* Card 5 */}
      <div className="bg-white flex flex-col items-center justify-around h-auto w-full sm:w-[48%] lg:w-[30%] rounded-lg shadow-md p-4">
        <img className="h-auto w-full rounded-lg shadow-md" src="/7.png" alt="img" />
        <div className="flex items-center justify-between w-full mt-3.5">
          <p className="text-xl text-blue-700 font-bold">Window Ac Installation</p>
          <div className="flex items-center">
            <FaRupeeSign color='blue' className="text-lg" />
            <p className="text-xl ml-1">499</p>
          </div>
        </div>

        <div className="mt-4">
          {[
            'Gas Check To Prevent Leakages',
            'Pre- service inspection',
            'Gas check, cooling efficiency, other functionality checked.',
            'Drilling Wiring Connecations Installation Of The Unit',
            'Cooling Rate & Device Checks Followed by Cleanup Of Service Area',
            'Improves airflow and enhances cooling',
            'Pre- service inspection Check & Installation Of Unit',
            'Material To Be Provided By The Customer',
          ].map((text, index) => (
            <div key={index} className="flex items-center mt-2">
              <FaHandPointRight className="text-lg mr-2" />
              <p className="text-sm">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
        <Link to='/PopForm'>
          <button className="px-6 py-3 bg-[#0002A1] text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg transition duration-300">
            Book Now
          </button>
          </Link>
        </div>
      </div>


      {/* Card 6 */}
      <div className="bg-white flex flex-col items-center justify-around h-auto w-full sm:w-[48%] lg:w-[30%] rounded-lg shadow-md p-4">
        <img className="h-auto w-full rounded-lg shadow-md" src="/2.png" alt="img" />
        <div className="flex items-center justify-between w-full mt-3.5">
          <p className="text-xl text-blue-700 font-bold">Split Ac Installation</p>
          <div className="flex items-center">
            <FaRupeeSign color='blue' className="text-lg" />
            <p className="text-xl ml-1">499</p>
          </div>
        </div>

        <div className="mt-4">
          {[
            'Gas Check To Prevent Leakages',
            'Pre- service inspection',
            'Gas check, cooling efficiency, other functionality checked.',
           ' Drilling Wiring Connecations Installation Of The Unita ( Indoor & Outdoor ) and Pipe Fixes',
            'Cooling Rate & Device Checks Followed by Cleanup Of Service Area',
            'Improves airflow and enhances cooling',
            'Pre- service inspection Check & Installation Of Unit',
            'Material To Be Provided By The Customer',
            'Note Spares Parts Pipe Wire & Copper Extra Charges',
          ].map((text, index) => (
            <div key={index} className="flex items-center mt-2">
              <FaHandPointRight className="text-lg mr-2" />
              <p className="text-sm">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
        <Link to='/PopForm'>
          <button className="px-6 py-3 bg-[#0002A1] text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg transition duration-300">
            Book Now
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;