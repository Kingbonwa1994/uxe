// components/DashboardOverview.js
import React from 'react';

const DashboardOverview = ({ userCount, serviceCount }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-2">Dashboard Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-blue-200 p-4 rounded">
          <h3 className="text-xl font-semibold mb-2">Users</h3>
          <p className="text-3xl font-bold">{userCount}</p>
        </div>
        <div className="bg-green-200 p-4 rounded">
          <h3 className="text-xl font-semibold mb-2">Services</h3>
          <p className="text-3xl font-bold">{serviceCount}</p>
        </div>
        {/* Add more insights as needed */}
      </div>
    </div>
  );
};

export default DashboardOverview;
