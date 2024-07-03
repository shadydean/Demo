// src/components/Navbar.jsx
import React from 'react';
import sgLogo from '../assets/sgLogo.jpg';
import { useAuth } from '../context/Auth';

function Navbar() {
  const { user, dispatch } = useAuth();

  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-blue-700 text-white shadow-md sticky top-0 z-10">
      <div className="flex items-center gap-x-2">
        <img src={sgLogo} alt="logo" className="w-8 h-8 rounded-full" />
        <span className="text-xl font-bold">SecureGuard</span>
      </div>
      <div>
        <a href="#about" className="mx-4 hover:text-gray-300">About Us</a>
        <a href="#contact" className="mx-4 hover:text-gray-300">Contact Us</a>
        {user ? (
          <>
            <span className="mx-4">Welcome, {user.name}</span>
            <button 
              onClick={handleLogout} 
              className="mx-4 px-4 py-2 bg-red-600 rounded hover:bg-red-500"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <a href="#login" className="mx-4 px-4 py-2 bg-blue-600 rounded hover:bg-blue-500">Login</a>
            <a href="#register" className="mx-4 px-4 py-2 bg-blue-600 rounded hover:bg-blue-500">Register</a>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
