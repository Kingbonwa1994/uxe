// components/LogsAndActivity.js
'use client'
import React, { useState } from 'react';

const LogsAndActivity = () => {
  // Mocked log and activity data for demonstration purposes
  const [logs] = useState([
    { id: 1, timestamp: '2023-09-01 10:15 AM', message: 'User John Doe logged in.' },
    { id: 2, timestamp: '2023-09-01 11:30 AM', message: 'Service added by Admin.' },
    // Add more log entries as needed
  ]);

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-2">Logs and Activity</h2>
      <ul>
        {logs.map((log) => (
          <li key={log.id} className="mb-2">
            <span className="text-gray-500">{log.timestamp}</span>
            <p className="text-sm">{log.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LogsAndActivity;
