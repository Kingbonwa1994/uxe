"use client"
import React, { useState, useEffect } from 'react';

const RoleAndPermissionsManagement = () => {
  const [roles, setRoles] = useState([]); // State to hold role data
  const [permissions, setPermissions] = useState([]); // State to hold permission data
  const [selectedRole, setSelectedRole] = useState(null);

  // Mock role and permission data for demonstration purposes (replace with MongoDB data)
  const mockRoles = [
    { id: 1, name: 'Admin', description: 'Admin role with full access' },
    { id: 2, name: 'Editor', description: 'Editor role with limited access' },
    // Add more roles as needed
  ];

  const mockPermissions = [
    { id: 1, name: 'View Users', description: 'Permission to view user data' },
    { id: 2, name: 'Edit Users', description: 'Permission to edit user data' },
    // Add more permissions as needed
  ];

  // Fetch role and permission data from MongoDB or your API
  useEffect(() => {
    // Replace with actual API calls to get role and permission data from MongoDB
    setRoles(mockRoles);
    setPermissions(mockPermissions);
  }, );

  // Handle selecting a role
  const handleSelectRole = (role) => {
    setSelectedRole(role);
  };

  return (
    <div>
      <h2>Role and Permissions Management</h2>
      <div className="flex space-x-4">
        <div className="w-1/2">
          <h3>Roles</h3>
          <ul>
            {roles.map((role) => (
              <li
                key={role.id}
                onClick={() => handleSelectRole(role)}
                className={`cursor-pointer ${
                  selectedRole === role ? 'bg-blue-200' : ''
                } p-2 rounded`}
              >
                {role.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/2">
          <h3>Role Details</h3>
          {selectedRole && (
            <div>
              <h4 className="text-lg font-semibold">{selectedRole.name}</h4>
              <p>{selectedRole.description}</p>
            </div>
          )}
        </div>
      </div>
      <div className="mt-4">
        <h3>Permissions</h3>
        <ul>
          {permissions.map((permission) => (
            <li key={permission.id} className="p-2">
              {permission.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RoleAndPermissionsManagement;
