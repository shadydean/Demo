import React from 'react';

function UserList({ users, deleteUser, approveUser }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mt-4">
      <h3 className="text-xl font-bold mb-4">User List</h3>
      <ul className="space-y-4">
        {users.map(user => (
          <li key={user._id} className="flex justify-between items-center p-4 bg-gray-100 rounded">
            <div>
              <p className="font-semibold">{user.name}</p>
              <p className="text-gray-600">{user.email}</p>
            </div>
            <div className="flex space-x-4">
              {!user.approved && (
                <button
                  onClick={() => approveUser(user._id)}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  Approve
                </button>
              )}
              <button
                onClick={() => deleteUser(user._id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
