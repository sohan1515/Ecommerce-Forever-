import React from 'react'
import { assets } from '../assets/assets';

const Ourpolicy = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-20 text-xs sm:text-sm md:text-base text-gray-700'>

      <div className="flex flex-col sm:flex-row gap-10 text-center">
        <div>
          <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="Exchange Icon" />
          <p className='font-semibold'>Easy Exchange Policy</p>
          <p className='text-gray-400'>We offer hassle-free exchange policy</p>
        </div>

        <div>
          <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="Quality Icon" />
          <p className='font-semibold'>7 Days Return Policy</p>
          <p className='text-gray-400'>We provide 7 days return policy</p>
        </div>

        <div>
          <img src={assets.support_img} className='w-12 m-auto mb-5' alt="Support Icon" />
          <p className='font-semibold'>Best Customer Support</p>
          <p className='text-gray-400'>We provide 24/7 customer support</p>
        </div>
      </div>

    </div>
  )
}

export default Ourpolicy;
