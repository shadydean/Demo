import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserList from '../components/UserList';
import AddUser from '../components/AddUser';

function Admin() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:4321/api/admin/user', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          
          }
          ,

        });
        setUsers(response.data);
        console.log(localStorage.getItem('token'));

      } catch (error) {
        setError('Failed to fetch users')
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const addUser = async (user) => {
    try {
      const response = await axios.post('http://localhost:4321/api/admin/user', user, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setUsers([...users, response.data]);
    } catch (error) {
      setError('Failed to add user');
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:4321/api/admin/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setUsers(users.filter(user => user._id !== id));
    } catch (error) {
      setError('Failed to delete user');
    }
  };

  const approveUser = async (id) => {
    try {
      const response = await axios.post(`http://localhost:4321/api/admin/approveUser/${id}`, {}, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setUsers(users.map(user => user._id === id ? response.data.user : user));
    } catch (error) {
      setError('Failed to approve user');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      <AddUser addUser={addUser} />
      <UserList users={users} deleteUser={deleteUser} approveUser={approveUser} />
    </div>
  );
}

export default Admin;
