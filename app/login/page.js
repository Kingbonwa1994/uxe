import Link from 'next/link';
import React from 'react';

const LoginForm = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-700">
      <Link href="/" className="absolute top-0 left-0 m-4 font-bold text-black text-lg hover:text-blue-800">
          &#8592; Home
        </Link>
      <form className="bg-green-400 shadow-md rounded px-8 py-8 mb-4 w-64 flex flex-col items-center">
        <div className="mb-4 w-full">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Email"
          />
        </div>
        <div className="mb-6 w-full">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          type="button"
        >
          Log In
        </button>
      </form>
      <a
        className="block text-center text-blue-500 text-sm hover:text-blue-800"
        href="#"
      >
        Forgot Password?
      </a>
    </div>
  );
};

export default LoginForm;
