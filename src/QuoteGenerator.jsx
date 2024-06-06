// src/QuoteGenerator.jsx
import React, { useState, useEffect } from 'react';

const quotes = [
  "The best way to predict the future is to invent it. – Alan Kay",
  "Life is 10% what happens to us and 90% how we react to it. – Charles R. Swindoll",
  "The only way to do great work is to love what you do. – Steve Jobs",
  "If you can dream it, you can achieve it. – Zig Ziglar",
  "Don't watch the clock; do what it does. Keep going. – Sam Levenson"
];

const getRandomQuote = () => quotes[Math.floor(Math.random() * quotes.length)];

const QuoteGenerator = () => {
  const [quote, setQuote] = useState(getRandomQuote());

  useEffect(() => {
    const interval = setInterval(() => {
      setQuote(getRandomQuote());
    }, 86400000); // Change quote every 24 hours
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="max-w-lg p-6 bg-white rounded-lg shadow-lg">
        <h1 className="mb-4 text-2xl font-bold text-center text-gray-800">Daily Inspiration</h1>
        <p className="text-lg text-center text-gray-700">{quote}</p>
        <button
          className="block px-4 py-2 mx-auto mt-6 font-semibold text-white bg-blue-500 rounded hover:bg-blue-700"
          onClick={() => setQuote(getRandomQuote())}
        >
          New Quote
        </button>
      </div>
    </div>
  );
};

export default QuoteGenerator;
