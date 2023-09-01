"use client"
import React, { useState, useEffect } from 'react';

const ReportsAndAnalytics = () => {
  const [reports, setReports] = useState([]); // State to hold report data
  const [selectedReport, setSelectedReport] = useState(null);

  // Mock report data for demonstration purposes (replace with MongoDB data)
  const mockReports = [
    {
      id: 1,
      title: 'User Registration Trends',
      description: 'Analyze user registration trends over the past month.',
      date: '2023-09-01',
    },
    {
      id: 2,
      title: 'Service Usage Report',
      description: 'Detailed report on service usage and user interactions.',
      date: '2023-08-30',
    },
    // Add more reports as needed
  ];

  // Fetch report data from MongoDB or your API
  useEffect(() => {
    // Replace with actual API call to get report data from MongoDB
    setReports(mockReports);
  }, []);

  // Handle selecting a report
  const handleSelectReport = (report) => {
    setSelectedReport(report);
  };

  return (
    <div>
      <h2>Reports and Analytics</h2>
      <div className="flex space-x-4">
        <div className="w-1/2">
          <h3>Report List</h3>
          <ul>
            {reports.map((report) => (
              <li
                key={report.id}
                onClick={() => handleSelectReport(report)}
                className={`cursor-pointer ${
                  selectedReport === report ? 'bg-blue-200' : ''
                } p-2 rounded`}
              >
                {report.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/2">
          <h3>Report Details</h3>
          {selectedReport && (
            <div>
              <h4 className="text-lg font-semibold">{selectedReport.title}</h4>
              <p className="text-gray-600">{selectedReport.date}</p>
              <p>{selectedReport.description}</p>
              {/* Add chart or analytics visualization here */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReportsAndAnalytics;
