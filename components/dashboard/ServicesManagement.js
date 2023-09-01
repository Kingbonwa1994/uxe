"use client"
import React, { useState, useEffect } from 'react';

const ServicesManagement = () => {
  const [services, setServices] = useState([]); // State to hold service data
  const [newService, setNewService] = useState({ name: '', description: '' });
  const [editingServiceId, setEditingServiceId] = useState(null);

  // Mock service data for demonstration purposes (replace with MongoDB data)
  const mockServices = [
    { id: 1, name: 'Service 1', description: 'Description for Service 1' },
    { id: 2, name: 'Service 2', description: 'Description for Service 2' },
    // Add more services as needed
  ];

  // Fetch service data from MongoDB or your API
  useEffect(() => {
    // Replace with actual API call to get service data from MongoDB
    setServices(mockServices);
  }, );

  // Handle service creation
  const handleCreateService = () => {
    // Implement logic to create a new service in MongoDB
    // Example: fetch('/api/services', { method: 'POST', body: JSON.stringify(newService) }).then(() => fetchServices());
    // After creation, clear the newService state
    setNewService({ name: '', description: '' });
  };

  // Handle service editing
  const handleEditService = (serviceId) => {
    setEditingServiceId(serviceId);
  };

  // Handle service deletion
  const handleDeleteService = (serviceId) => {
    // Implement logic to delete the service from MongoDB
    // After deletion, refresh the service data
    // Example: fetch(`/api/services/${serviceId}`, { method: 'DELETE' }).then(() => fetchServices());
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold">Services Management</h2>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Add New Service</h3>
        <div className="flex space-x-4 mt-2">
          <input
            type="text"
            placeholder="Service Name"
            value={newService.name}
            onChange={(e) => setNewService({ ...newService, name: e.target.value })}
            className="border rounded px-2 py-1 w-1/2"
          />
          <input
            type="text"
            placeholder="Service Description"
            value={newService.description}
            onChange={(e) => setNewService({ ...newService, description: e.target.value })}
            className="border rounded px-2 py-1 w-1/2"
          />
          <button
            onClick={handleCreateService}
            className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600"
          >
            Add
          </button>
        </div>
      </div>
      <table className="mt-4 w-full">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-gray-100">Name</th>
            <th className="py-2 px-4 bg-gray-100">Description</th>
            <th className="py-2 px-4 bg-gray-100">Action</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service.id}>
              <td>
                {editingServiceId === service.id ? (
                  <input
                    value={service.name}
                    className="border rounded px-2 py-1 w-full"
                  />
                ) : (
                  service.name
                )}
              </td>
              <td>
                {editingServiceId === service.id ? (
                  <input
                    value={service.description}
                    className="border rounded px-2 py-1 w-full"
                  />
                ) : (
                  service.description
                )}
              </td>
              <td>
                {editingServiceId === service.id ? (
                  <button className="bg-blue-500 text-white font-semibold px-2 py-1 rounded hover:bg-blue-600">
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => handleEditService(service.id)}
                    className="bg-green-500 text-white font-semibold px-2 py-1 rounded hover:bg-green-600"
                  >
                    Edit
                  </button>
                )}
                <button
                  onClick={() => handleDeleteService(service.id)}
                  className="bg-red-500 text-white font-semibold px-2 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServicesManagement;
