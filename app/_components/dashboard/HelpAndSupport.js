import React from 'react';

const HelpAndSupport = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold">Help and Support</h2>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">How to Use the Admin Dashboard</h3>
        <p>
          Welcome to the admin dashboard! Here are some tips on how to use the dashboard effectively:
        </p>
        <ul className="list-disc ml-6 mt-2">
          <li>Use the navigation links on the sidebar to access different sections of the dashboard.</li>
          <li>For user management, you can edit or delete user accounts from the user list.</li>
          <li>In the services management section, you can add, edit, or delete services offered by users.</li>
          {/* Add more usage tips as needed */}
        </ul>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Contact Support</h3>
        <p>
          If you encounter any issues or have questions that are not addressed here, please don't hesitate to contact our support team.
        </p>
        <button className="bg-blue-500 text-white font-semibold px-4 py-2 mt-2 rounded hover:bg-blue-600">
          Contact Support
        </button>
      </div>
    </div>
  );
};

export default HelpAndSupport;
