import React, { useState } from 'react';
import axios from 'axios';

function LoginComponent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
  
    try {
      const response = await axios.post('http://localhost:4321/api/login', { email, password });
      console.log('Login successful', response.data);
      // Store the token in local storage or session storage for future use
      localStorage.setItem('token', response.data.token);
      // Redirect or perform any other action after successful login
    } catch (error) {
      setError('Login failed. Please check your email and password.');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="flex items-center justify-center  bg-gray-100">
      <div className="bg-white bg-opacity-90 px-8 py-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 neon-text">Welcome Back!</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded focus:outline-none focus:bg-white" 
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded focus:outline-none focus:bg-white" 
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600 transition duration-300 neon-text"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <p className="mt-4 text-center text-gray-800">Forgot password? <a href="#" className="text-blue-500 hover:underline">Click here</a></p>
      </div>
    </div>
  );
}
export default LoginComponent;