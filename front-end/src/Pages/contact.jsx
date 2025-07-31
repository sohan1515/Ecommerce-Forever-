import React from 'react';
import { assets } from '../assets/assets';

const Contact = () => {
  return (
    <div className="px-6 md:px-16 py-10 bg-white">
      {/* Title */}
      <h2 className="text-center text-3xl md:text-4xl font-semibold text-gray-800 mb-10">
        CONTACT <span className="text-black font-bold">US</span>
        <hr className="w-16 border-t-2 border-gray-400 mx-auto mt-2" />
      </h2>

      {/* Image & Info */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 mb-12">
        {/* Left image */}
        <div className="w-full md:w-[50%]">
          <img
            src={assets.contact_img}
            alt="Contact"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Right info */}
        <div className="w-full md:w-[45%] space-y-8">
          {/* Store Info */}
          <div>
            <h3 className="text-lg font-bold text-gray-800">Our Store</h3>
            <p className="text-sm mt-2 text-gray-600">
              54709 Willms Station<br />
              Suite 350, Washington, USA
            </p>
            <p className="text-sm mt-2 text-gray-600">
              Tel: (415) 555-0132
            </p>
            <p className="text-sm mt-1 text-gray-600">
              Email: admin@forever.com
            </p>
          </div>

          {/* Careers */}
          <div>
            <h3 className="text-lg font-bold text-gray-800">Careers at Forever</h3>
            <p className="text-sm text-gray-600 mt-2">
              Learn more about our teams and job openings.
            </p>
            <button className="mt-3 px-6 py-2 border border-black text-black font-medium hover:bg-black hover:text-white transition duration-300">
              Explore Jobs
            </button>
          </div>
        </div>
      </div>

      {/* Subscribe */}
      <div className="bg-gray-50 py-12 border-t border-gray-200 text-center rounded-lg">
        <h3 className="text-2xl font-semibold mb-3">Subscribe now & get 20% off</h3>
        <p className="text-sm text-gray-600 mb-6">
          Join our newsletter for updates, exclusive deals & more.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-gray-400 px-4 py-2 w-72 rounded-md text-sm focus:outline-none"
          />
          <button className="bg-black text-white px-6 py-2 rounded-md text-sm hover:bg-gray-800 transition duration-300">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
