import React, { useState } from 'react';
import { PencilLine } from 'lucide-react';

const PendingUsers = () => {
   const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'Paranitharan Mari',
      email: 'paranitharanmari@gmail.com',
      status: 'pending'
    }
  ]);

  const [searchQuery, setSearchQuery] = useState('');


  // Filter users based on search query
  const filteredUsers = users.filter(user => 
    user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle enable user
  const handleEnable = (userId) => {
    setUsers(users.map(user => 
      user.id === userId 
        ? { ...user, status: 'enabled' }
        : user
    ));
  };

  // Handle edit user
  const handleEdit = (userId) => {
    // Implement edit functionality
    console.log('Edit user:', userId);
  };

  return (
    <div className="container-fluid p-4">
      <div>
        <div>
          <h5 className="card-title mb-4">Manage Pending Users</h5>
          
          {/* Search Bar */}
          <div className="mb-4 d-flex justify-content-end">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Search Users"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ boxShadow: 'none' }}
        />
      </div>

          {/* Users Table */}
          <div className="table-responsive">
            <table className="table table-bordered table-hover align-middle">
              <thead className='table-light text-center'>
                <tr >
                  <th scope="col">#</th>
                  <th scope="col">Username</th>
                  <th scope="col">Email</th>
                  <th scope="col">Edit</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {filteredUsers.map((user, index) => (
                  <tr key={user.id}>
                    <td>{index + 1}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>
                    <button
                        className="btn btn-primary btn-sm"
                        style={{ width: '40px', padding: '4px' }}
                        onClick={() => handleEdit(user.id)}
                      >
                        <PencilLine />
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => handleEnable(user.id)}
                        disabled={user.status === 'enabled'}
                      >
                        {user.status === 'enabled' ? 'Enabled' : 'Enable'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredUsers.length === 0 && (
            <div className="text-center py-3">
              <p className="text-muted">No users found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PendingUsers;