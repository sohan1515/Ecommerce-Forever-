import React, { useState } from 'react';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    // Handle signup logic
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-white px-4'>
      <div className='w-full max-w-sm'>

        {/* Heading */}
        <div className="inline-flex items-center gap-2 mb-6 justify-center mt-10">
          <p className="prata-regular text-3xl">Sign Up</p>
          <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
        </div>

        {/* Sign Up Form */}
        <form onSubmit={handleSignUp} className='flex flex-col gap-4'>
          <input
            type='text'
            placeholder='Name'
            className='border border-black px-4 py-2 focus:outline-none focus:ring-0 text-sm'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type='email'
            placeholder='Email'
            className='border border-black px-4 py-2 focus:outline-none focus:ring-0 text-sm'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type='password'
            placeholder='Password'
            className='border border-black px-4 py-2 focus:outline-none focus:ring-0 text-sm'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className='flex justify-between text-sm text-gray-500 px-1'>
            <a href='/forgot-password' className='hover:underline'>Forgot your password?</a>
            <a href='/login' className='hover:underline'>Login Here</a>
          </div>

          <button
            type='submit'
            className='bg-black text-white py-2 text-sm hover:opacity-90 transition duration-200'
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
