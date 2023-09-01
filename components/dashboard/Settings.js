"use client"
// components/Settings.js
import React, { useState } from 'react';

const Settings = () => {
  // Define settings state variables
  const [siteName, setSiteName] = useState('Your App Name');
  const [siteLogo, setSiteLogo] = useState('URL-to-your-logo.png');
  const [adminEmail, setAdminEmail] = useState('admin@example.com');
  // Add more settings state variables as needed

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Implement logic to save settings to your backend or other storage
    // Example: Send a POST request to /api/settings with updated settings data
    // You should also add validation and error handling here
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-2">Settings</h2>
      <form onSubmit={handleFormSubmit}>
        {/* Site Name */}
        <div className="mb-4">
          <label htmlFor="siteName" className="block text-sm font-medium text-gray-700">
            Site Name
          </label>
          <input
            type="text"
            id="siteName"
            className="mt-1 p-2 w-full border rounded-md"
            value={siteName}
            onChange={(e) => setSiteName(e.target.value)}
          />
        </div>

        {/* Site Logo */}
        <div className="mb-4">
          <label htmlFor="siteLogo" className="block text-sm font-medium text-gray-700">
            Site Logo URL
          </label>
          <input
            type="text"
            id="siteLogo"
            className="mt-1 p-2 w-full border rounded-md"
            value={siteLogo}
            onChange={(e) => setSiteLogo(e.target.value)}
          />
        </div>

        {/* Admin Email */}
        <div className="mb-4">
          <label htmlFor="adminEmail" className="block text-sm font-medium text-gray-700">
            Admin Email
          </label>
          <input
            type="email"
            id="adminEmail"
            className="mt-1 p-2 w-full border rounded-md"
            value={adminEmail}
            onChange={(e) => setAdminEmail(e.target.value)}
          />
        </div>

        {/* Add more settings fields as needed */}

        <div className="mt-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          >
            Save Settings
          </button>
        </div>
      </form>
    </div>
  );
};

export default Settings;
