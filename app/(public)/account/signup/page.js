'use client'
import React, { useState } from 'react';
import Link from 'next/link'; // Import Link from Next.js to handle navigation

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    servicesOffered: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddService = () => {
    if (formData.servicesOffered.length < 5) {
      // Limit to 5 services, you can adjust this as needed
      setFormData({
        ...formData,
        servicesOffered: [...formData.servicesOffered, ''],
      });
    }
  };

  const handleServiceChange = (e, index) => {
    const newServices = [...formData.servicesOffered];
    newServices[index] = e.target.value;
    setFormData({
      ...formData,
      servicesOffered: newServices,
    });
  };

  const handleRemoveService = (index) => {
    const newServices = [...formData.servicesOffered];
    newServices.splice(index, 1);
    setFormData({
      ...formData,
      servicesOffered: newServices,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here, e.g., sending data to the server
    console.log('Form Data:', formData);
  };

  return (
    <div className="bg-green-500 my-auto h-screen">
    <div className="container mx-auto p-4 bg-green-500">
        <Link href="/" className="absolute top-0 left-0 m-4 font-bold text-black-500 text-lg hover:text-blue-800">
          &#8592; Home
        </Link>
        <div className="lg:w-1/2 bg-green-400 shadow-md rounded px-8 py-8 mb-4 mx-auto">
      <h1 className="text-2xl text-center font-bold mb-4">Signup As A Service Provider</h1>
      <form onSubmit={handleSubmit} className=' bg-green-400'>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border rounded w-full py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border rounded w-full py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block text-gray-700 font-bold">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="border rounded w-full py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="servicesOffered" className="block text-gray-700 font-bold">
            Services Offered
          </label>
          <div className="flex flex-wrap justify-center">
            {formData.servicesOffered.map((service, index) => (
              <div key={index} className="w-1/2 pr-2 mb-2">
                <input
                  type="text"
                  name="service"
                  value={service}
                  required
                  onChange={(e) => handleServiceChange(e, index)}
                  className="border rounded w-full py-2 px-3"
                  placeholder="Service"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveService(index)}
                  className="text-red-500 mt-1 cursor-pointer"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          {formData.servicesOffered.length < 5 && (
           <div className="text-center"> 
            <button
              type="button"
              onClick={handleAddService}
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-2"
            >
              Add Service
            </button>
            </div>
          )}
        </div>
        <div className="text-center"> 
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Sign Up
        </button>
        </div>
      </form>
      </div>
      <p className="mt-4 text-center">
        Already have an account?{' '}
        <Link href="/login" className="text-white font-extrabold">Log in
        </Link>
      </p>
      </div>
      </div>
  );
};

export default Signup;