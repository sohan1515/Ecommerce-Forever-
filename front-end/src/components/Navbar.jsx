import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { BsSearch } from "react-icons/bs";



const Navbar = () => {

  const [visible, setVisible] = React.useState(false);

  return (

    <div className='flex items-center justify-between bg-white p-4 text-white'>
      <img src={assets.logo} alt="logo" className='w-36' />

      <ul className='hidden sm:flex gap-5 text-sm text-black'>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 ${isActive ? 'font-bold' : ''}`
            }
          >
            <p>HOME</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-white hidden' />
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/collection"
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 ${isActive ? 'font-bold' : ''}`
            }
          >
            <p>COLLECTION</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-white hidden' />
          </NavLink>


        </li>

        <li>
    <NavLink
      to="/about"
      className={({ isActive }) =>
        `flex flex-col items-center gap-1 ${isActive ? 'font-bold' : ''}`
      }
    >
      <p>ABOUT</p>
      <hr className='w-2/4 border-none h-[1.5px] bg-white hidden' />
    </NavLink>
  </li>

  <div className="hidden sm:flex items-center justify-center gap-4 text-sm text-black">
  {/* CONTACT link */}
  <li>
    <NavLink
      to="/contact"
      className={({ isActive }) =>
        `flex flex-col items-center gap-1 ${isActive ? 'font-bold' : ''}`
      }
    >
      <p>CONTACT</p>
      <hr className="w-2/4 border-none h-[1.5px] bg-white hidden" />
    </NavLink>
  </li>

  {/* Admin Panel button */}
  <li>
  <a
    href="https://admin.foreverbuy.in/"
    target="_blank"
    rel="noopener noreferrer"
    className="px-4 py-[6px] rounded-full border border-gray-300 text-sm font-medium hover:shadow-sm transition duration-200"
  >
    Admin Panel
  </a>
</li>

</div>

</ul>


     <div className='flex items-center gap-6'>
  {/* Search Icon */}


// inside return
<BsSearch onClick={() => setSearchVisible(!searchVisible)} className="cursor-pointer text-xl" />

  {/* Profile Dropdown */}
<div className='relative group'>
  <img
    src={assets.profile_icon}
    alt="profile"
    className='w-5 cursor-pointer'
  />

  {/* Dropdown Menu */}
  <div className='absolute top-6 right-0 z-10 hidden group-hover:flex hover:flex'>
    <div className='flex flex-col gap-2 w-36 px-5 py-2 bg-slate-100 text-gray-800 rounded shadow-lg'>
      <p className='cursor-pointer hover:text-black font-bold'>My Profile</p>
      <p className='cursor-pointer hover:text-black font-bold'>Orders</p>
      <p className='cursor-pointer hover:text-black font-bold' onClick={() => window.location.href = '/login'}>Log Out</p>
    </div>
  </div>
</div>

{/* Cart Icon with Badge */}
<Link to='/cart' className='relative w-6 h-6 inline-block'>
  <img
    src={assets.cart_icon}
    alt='cart'
    className='w-full h-full object-contain cursor-pointer'
  />
  <span className='absolute -top-1 -right-1 bg-red-500 text-white text-xs font-semibold rounded-full px-1 leading-none'>
    0
  </span>
</Link>
<img onClick ={()=>setVisible(true)} src={assets.menu_icon} alt="menu" className='w-5 cursor-pointer sm:hidden' />


  </div>

  {/* Mobile Menu */}
<div
  className={`fixed top-0 left-0 h-full w-full z-50 transition-all duration-300 bg-black bg-opacity-50 ${
    visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
  }`}
  onClick={() => setVisible(false)}
>
  <div
    className={`bg-white w-72 h-full transform transition-transform duration-300 ${
      visible ? 'translate-x-0' : '-translate-x-full'
    }`}
    onClick={(e) => e.stopPropagation()}
  >
    <div className='flex items-center px-4 py-4 border-b border-gray-200'>
      <button
        onClick={() => setVisible(false)}
        className='text-sm text-blue-600 font-semibold'
      >
        ← Back
      </button>
    </div>

    <div className='flex flex-col'>
      <Link
        to='/'
        onClick={() => setVisible(false)}
        className={`px-4 py-3 text-sm font-medium border-b border-gray-200 ${
          location.pathname === '/' ? 'bg-black text-white' : 'text-black hover:bg-gray-100'
        }`}
      >
        HOME
      </Link>
      <Link
        to='/collection'
        onClick={() => setVisible(false)}
        className={`px-4 py-3 text-sm font-medium border-b border-gray-200 ${
          location.pathname === '/collection' ? 'bg-black text-white' : 'text-black hover:bg-gray-100'
        }`}
      >
        COLLECTION
      </Link>
      <Link
        to='/about'
        onClick={() => setVisible(false)}
        className={`px-4 py-3 text-sm font-medium border-b border-gray-200 ${
          location.pathname === '/about' ? 'bg-black text-white' : 'text-black hover:bg-gray-100'
        }`}
      >
        ABOUT
      </Link>
      <Link
        to='/contact'
        onClick={() => setVisible(false)}
        className={`px-4 py-3 text-sm font-medium border-b border-gray-200 ${
          location.pathname === '/contact' ? 'bg-black text-white' : 'text-black hover:bg-gray-100'
        }`}
      >
        CONTACT
      </Link>
    </div>
  </div>
</div>




  

</div>



  );

};









export default Navbar;
