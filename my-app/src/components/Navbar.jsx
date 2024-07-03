import React from 'react';
import { useNavigate } from 'react-router-dom';
import sgLogo from '../assets/sgLogo.jpg';
import { useAuth } from '../context/Auth';

function Navbar() {
  const navigate = useNavigate();
  const { user, dispatch } = useAuth();

  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch({ type: 'LOGOUT' });
    navigate('/'); 
  };

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-blue-700 text-white shadow-md sticky top-0 z-10">
      <div className="flex items-center gap-x-2">
        <img src={sgLogo} alt="logo" className="w-8 h-8 rounded-full" />
        <a href='/' className="text-xl font-bold">SecureGuard</a>
      </div>
      <div>
        {user ? (
          <>

          <button onClick={()=>{navigate('/dashboard')}} className="mx-4">Dashboard</button>
          <button onClick={() => handleScroll('contact')} className="mx-4 hover:text-gray-300">Support</button>

            <span className="mx-4">Welcome, {user.role}</span>
            <button 
              onClick={handleLogout} 
              className="mx-4 px-4 py-2 bg-red-600 rounded hover:bg-red-500"
            >
              Logout
            </button>
          </>
        ) : (
          <>
          <button onClick={() => handleScroll('about')} className="mx-4 hover:text-gray-300">About Us</button>
          <button onClick={() => handleScroll('contact')} className="mx-4 hover:text-gray-300">Contact Us</button>
          <button onClick={() => handleScroll('login')} className="mx-4 px-4 py-2 bg-blue-600 rounded hover:bg-blue-500">Login</button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
