// src/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
      <div className="max-w-4xl p-8 bg-white rounded-lg shadow-lg">
        <h1 className="mb-4 text-4xl font-bold text-center text-gray-800">Welcome to My App</h1>
        <p className="mb-8 text-lg text-center text-gray-700">
          Discover our tools: a Password Manager to keep your passwords secure, a Quote Generator for daily inspiration, and a Meme Generator for a dose of humor.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          <Link to="/pass-manager" className="block p-6 text-center transition-transform transform bg-blue-500 rounded-lg shadow-lg hover:scale-105">
            <h2 className="mb-2 text-2xl font-bold text-white">Password Manager</h2>
            <p className="text-white">Keep your passwords secure and easily accessible.</p>
          </Link>
          <Link to="/quote-gen" className="block p-6 text-center transition-transform transform bg-green-500 rounded-lg shadow-lg hover:scale-105">
            <h2 className="mb-2 text-2xl font-bold text-white">Quote Generator</h2>
            <p className="text-white">Get daily inspiration with our quote generator.</p>
          </Link>
          <Link to="/meme-gen" className="block p-6 text-center transition-transform transform bg-purple-500 rounded-lg shadow-lg hover:scale-105">
            <h2 className="mb-2 text-2xl font-bold text-white">Meme Generator</h2>
            <p className="text-white">Enjoy a daily dose of humor with technical memes.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
