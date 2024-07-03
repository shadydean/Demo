import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl mb-8">Dashboard</h1>
      <div className="flex flex-col items-center space-y-4">
        <Link to="/bankvault" className="text-blue-500 hover:underline">
          BankVault
        </Link>
        <Link to="/credentials" className="text-blue-500 hover:underline">
          Credentials
        </Link>
        <Link to="/media" className="text-blue-500 hover:underline">
          Media
        </Link>
        {/* Add more links as needed */}
      </div>
    </div>
  );
};

export default Dashboard;