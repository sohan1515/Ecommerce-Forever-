import React from 'react';
import { assets } from '../assets/assets';  
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const About = () => {
  console.log("About Page Loaded");

  return (
    
    <div className="p-8 md:p-16 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <img src={assets.about_img} alt="Contact" className="w-full h-full object-cover rounded-lg shadow-md"/>

        {/* Right Text */}
        <div>
          <h2 className="text-3xl font-semibold mb-4 border-b-2 inline-block border-black">
            ABOUT <span className="text-black font-bold">US</span>
          </h2>
          <p className="mb-4">
            Forever was born out of a passion for innovation and a desire to revolutionize
            the way people shop online. Our journey began with a simple idea: to provide a
            platform where customers can easily discover, explore, and purchase a wide
            range of products from the comfort of their homes.
          </p>
          <p className="mb-6">
            Since our inception, we've worked tirelessly to curate a diverse selection of
            high-quality products that cater to every taste and preference. From fashion
            and beauty to electronics and home essentials, we offer an extensive collection
            sourced from trusted brands and suppliers.
          </p>
          <h3 className="font-semibold text-lg mb-2">Our Mission</h3>
          <p>
            Our mission at Forever is to empower customers with choice, convenience, and
            confidence. We're dedicated to providing a seamless shopping experience that
            exceeds expectations, from browsing and ordering to delivery and beyond.
          </p>
        </div>
      </div>

      {/* WHY CHOOSE US Section */}
      <div className="max-w-6xl mx-auto mt-20">
        <h2 className="text-2xl font-semibold mb-8 border-b-2 inline-block border-black">
          WHY <span className="text-black font-bold">CHOOSE US</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          {/* Card 1 */}
          <div className="p-6 border rounded-lg shadow-sm">
            <h4 className="font-bold mb-2">Quality Assurance:</h4>
            <p>
              We meticulously select and vet each product to ensure it meets our stringent quality standards.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 border rounded-lg shadow-sm">
            <h4 className="font-bold mb-2">Convenience:</h4>
            <p>
              With our user-friendly interface and hassle-free ordering process, shopping has never been easier.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 border rounded-lg shadow-sm">
            <h4 className="font-bold mb-2">Exceptional Customer Service:</h4>
            <p>
              Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.
            </p>
          </div>
        </div>
      </div>
  
   {/* Subscribe Section */}
      <div className="bg-gray-50 py-12 border-t border-gray-200 text-center rounded-lg">
        <h3 className="text-2xl font-semibold mb-3">Subscribe now & get 20% off</h3>
        <p className="text-sm text-gray-600 mb-6">
          Join our newsletter for updates, exclusive deals & more.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 px-4">
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

export default About;
