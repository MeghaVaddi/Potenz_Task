// src/pages/MainDashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Products from './Products'; // Import Products component

const MainDashboard = () => {
  const { logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <div className="flex justify-between items-center px-6 py-4 bg-white shadow">
        
        <Link to="/profile" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Profile
        </Link>
        <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
          Logout
        </button>
      </div>

      {/*Products*/}
      <h1 className="text-3xl font-bold text-center text-blue-700 mt-10 mb-4 underline underline-offset-8 decoration-blue-400">
        Products
      </h1>

      {/* Products List */}
      <Products /> 
    </div>
  );
};

export default MainDashboard;
