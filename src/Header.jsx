import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded={menuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {menuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-between sm:items-stretch sm:justify-between">
            <div className="flex-shrink-0">
              <h1 className="text-white text-3xl font-bold">InspireMemeVault</h1>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link to="/" className="text-white hover:bg-purple-600 hover:text-gray-200 px-3 py-2 rounded-md text-lg font-semibold">Home</Link>
                <Link to="/pass-manager" className="text-white hover:bg-purple-600 hover:text-gray-200 px-3 py-2 rounded-md text-lg font-semibold">Pass Manager</Link>
                <Link to="/quote-gen" className="text-white hover:bg-purple-600 hover:text-gray-200 px-3 py-2 rounded-md text-lg font-semibold">Quote Gen</Link>
                <Link to="/meme-gen" className="text-white hover:bg-purple-600 hover:text-gray-200 px-3 py-2 rounded-md text-lg font-semibold">Meme Gen</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="text-white hover:bg-purple-600 hover:text-gray-200 block px-3 py-2 rounded-md text-lg font-semibold">Home</Link>
            <Link to="/pass-manager" className="text-white hover:bg-purple-600 hover:text-gray-200 block px-3 py-2 rounded-md text-lg font-semibold">Pass Manager</Link>
            <Link to="/quote-gen" className="text-white hover:bg-purple-600 hover:text-gray-200 block px-3 py-2 rounded-md text-lg font-semibold">Quote Gen</Link>
            <Link to="/meme-gen" className="text-white hover:bg-purple-600 hover:text-gray-200 block px-3 py-2 rounded-md text-lg font-semibold">Meme Gen</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
