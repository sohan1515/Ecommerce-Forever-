import React from 'react'
import { assets } from '../assets/assets';

const Hero = () => {
  return (
    <div className="w-full bg-white px-6 py-12 font-serif">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center border border-gray-300">

        {/* Left: Text */}
        <div className="w-full md:w-1/2 p-10">
          <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
          <p className="text-2xl uppercase tracking-widest text-gray-500 font-medium mb-2">
            Our Bestsellers
          </p>

          <h1 className="text-5xl font-normal text-gray-800  prata-regular leading-tight mb-6">
            Latest Arrivals
          </h1>

          <a href="#shop" className=" text-2xl inline-block text-gray-800  font-medium relative group">
            Shop Now
            <p className="block w-8 h-1 bg-[#414141] mt-1 group-hover:w-15 transition-all duration-300"></p>
          </a>
        </div>

        {/* Right: Image */}
        <div className="w-full md:w-1/2 bg-[#ffd9d9] p-6 flex justify-center">
          <img
            src={assets.hero_img}
            alt="Hero"
            className="max-h-[500px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
