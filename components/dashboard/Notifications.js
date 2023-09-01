"use client"
import React, { useState, useEffect } from 'react';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]); // State to hold notification data
  const [selectedNotification, setSelectedNotification] = useState(null);

  // Mock notification data for demonstration purposes (replace with MongoDB data)
  const mockNotifications = [
    {
      id: 1,
      title: 'New User Registration',
      content: 'A new user has registered on your platform.',
      date: '2023-09-01',
    },
    {
      id: 2,
      title: 'Service Update',
      content: 'There is an important update regarding the service.',
      date: '2023-08-30',
    },
    // Add more notifications as needed
  ];

  // Fetch notification data from MongoDB or your API
  useEffect(() => {
    // Replace with actual API call to get notification data from MongoDB
    setNotifications(mockNotifications);
  }, []);

  // Handle selecting a notification
  const handleSelectNotification = (notification) => {
    setSelectedNotification(notification);
  };

  return (
    <div>
      <h2>Notifications</h2>
      <div className="flex space-x-4">
        <div className="w-1/2">
          <h3>Notification List</h3>
          <ul>
            {notifications.map((notification) => (
              <li
                key={notification.id}
                onClick={() => handleSelectNotification(notification)}
                className={`cursor-pointer ${
                  selectedNotification === notification ? 'bg-blue-200' : ''
                } p-2 rounded`}
              >
                {notification.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/2">
          <h3>Notification Details</h3>
          {selectedNotification && (
            <div>
              <h4 className="text-lg font-semibold">{selectedNotification.title}</h4>
              <p className="text-gray-600">{selectedNotification.date}</p>
              <p>{selectedNotification.content}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
