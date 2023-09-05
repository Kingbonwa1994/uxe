"use client"
import React, { useState, useEffect } from 'react';

const UserManagement = () => {
  const [users, setUsers] = useState([]); // State to hold user data
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [editingUserId, setEditingUserId] = useState(null);

  // Mock user data for demonstration purposes (replace with MongoDB data)
  const mockUsers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', location: 'New York' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', location: 'Los Angeles' },
    // Add more users as needed
  ];

  // Fetch user data from MongoDB or your API
  useEffect(() => {
    // Replace with actual API call to get user data from MongoDB
    setUsers(mockUsers);
  }, );

  // Handle user search
  useEffect(() => {
    if (searchTerm === '') {
      setFilteredUsers(users);
    } else {
      const filtered = users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredUsers(filtered);
    }
  }, [searchTerm, users]);

  // Handle user editing
  const handleEditUser = (userId) => {
    setEditingUserId(userId);
  };

  // Handle user deletion
  const handleDeleteUser = (userId) => {
    // Implement logic to delete the user from MongoDB
    // After deletion, refresh the user data
    // Example: fetch(`/api/users/${userId}`, { method: 'DELETE' }).then(() => fetchUsers());
  };

  return (
    <div>
      <h2>User Management</h2>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Location</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{editingUserId === user.id ? <input value={user.name} /> : user.name}</td>
              <td>{user.email}</td>
              <td>{user.location}</td>
              <td>
                {editingUserId === user.id ? (
                  <button>Save</button>
                ) : (
                  <button onClick={() => handleEditUser(user.id)}>Edit</button>
                )}
                <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
