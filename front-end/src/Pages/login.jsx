import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-white px-4'>
      <div className='w-full max-w-sm'>

        {/* Custom Heading */}
        <div className="inline-flex items-center gap-2 mb-6 justify-center">
          <p className="prata-regular text-3xl">Login</p>
          <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className='flex flex-col gap-4'>
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
            <a href='/signup' className='hover:underline'>Create account</a>
          </div>

          <button
            type='submit'
            className='bg-black text-white py-2 text-sm hover:opacity-90 transition duration-200'
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
