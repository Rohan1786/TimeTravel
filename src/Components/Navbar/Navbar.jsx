import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo or Brand Name */}
        <div className="text-white text-2xl font-bold">
          <Link to="/">Timing Machine</Link>
        </div>

        {/* Menu Items (Desktop) */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="text-gray-300 hover:text-white text-lg transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/About"
            className="text-gray-300 hover:text-white text-lg transition-colors duration-200"
          >
            About
          </Link>
          <Link
            to="/Services"
            className="text-gray-300 hover:text-white text-lg transition-colors duration-200"
          >
            Services
          </Link>
          <Link
            to="/Contact"
            className="text-gray-300 hover:text-white text-lg transition-colors duration-200"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            type="button"
            className="text-white focus:outline-none"
            aria-label="Menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-4">
          <Link
            to="/"
            className="block text-gray-300 hover:text-white py-2 text-lg"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/About"
            className="block text-gray-300 hover:text-white py-2 text-lg"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/Services"
            className="block text-gray-300 hover:text-white py-2 text-lg"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/Contact"
            className="block text-gray-300 hover:text-white py-2 text-lg"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
