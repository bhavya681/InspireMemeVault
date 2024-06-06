// src/MemeGenerator.jsx
import React, { useState, useEffect } from 'react';

const memes = [
  { src: 'https://api.memegen.link/images/doge/wow/such-meme.jpg', caption: 'Wow, such meme' },
  { src: 'https://api.memegen.link/images/buzz/memes/everywhere.jpg', caption: 'Memes everywhere' },
  { src: 'https://api.memegen.link/images/awkward-awesome/tech/memes.jpg', caption: 'Tech memes are awesome' },
  { src: 'https://api.memegen.link/images/one-does-not-simply/create/good-meme.jpg', caption: 'One does not simply create a good meme' },
  { src: 'https://api.memegen.link/images/bad-luck-brian/creates-meme/fails.jpg', caption: 'Creates meme, fails' },
];

const getRandomMeme = () => memes[Math.floor(Math.random() * memes.length)];

const MemeGenerator = () => {
  const [meme, setMeme] = useState(getRandomMeme());

  useEffect(() => {
    const interval = setInterval(() => {
      setMeme(getRandomMeme());
    }, 86400000); // Change meme every 24 hours
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-500">
      <div className="max-w-lg p-6 bg-white rounded-lg shadow-lg">
        <h1 className="mb-4 text-2xl font-bold text-center text-gray-800">Daily Meme</h1>
        <div className="flex justify-center mb-4">
          <img src={meme.src} alt={meme.caption} className="max-w-full rounded" />
        </div>
        <p className="text-lg text-center text-gray-700">{meme.caption}</p>
        <button
          className="block px-4 py-2 mx-auto mt-6 font-semibold text-white bg-blue-500 rounded hover:bg-blue-700"
          onClick={() => setMeme(getRandomMeme())}
        >
          New Meme
        </button>
      </div>
    </div>
  );
};

export default MemeGenerator;
