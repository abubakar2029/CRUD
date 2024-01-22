import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">Home</Link>
        <div className="flex space-x-4">
          <Link to="/about" className="text-white">About</Link>
          <Link to="/dashboard" className="text-white">Dashboard</Link>
          <Link to="/signup" className="text-white">Signup</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
