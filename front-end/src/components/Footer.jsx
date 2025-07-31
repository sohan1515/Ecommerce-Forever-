// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white py-10 px-6 md:px-20">
      <div className="flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Logo & Description */}
        <div className="max-w-md">
          <h2 className="text-2xl font-bold text-black mb-4">
           <img src={assets.logo} alt="logo" className='w-36' />
          </h2>
          <p className="text-sm leading-relaxed text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-bold text-black mb-2">COMPANY</h3>
          <ul className="space-y-1 text-sm">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/about" className="hover:underline">About us</Link></li>
            <li><Link to="/delivery" className="hover:underline">Delivery</Link></li>
            <li><Link to="/privacy-policy" className="hover:underline">Privacy policy</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-bold text-black mb-2">GET IN TOUCH</h3>
          <ul className="text-sm space-y-1">
            <li>+1-000-000-0000</li>
            <li>gsm@gmail.com</li>
            <li><a href="#" className="hover:underline">Instagram</a></li>
          </ul>
        </div>
      </div>

      <hr className="my-6 border-gray-200" />
      <p className="text-center text-sm text-gray-500">
        Copyright 2024© smck.dev – All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;
