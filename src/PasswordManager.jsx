import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const PasswordManager = () => {
  const [passwords, setPasswords] = useState([]);

  const generatePassword = () => {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const length = 12;
    let password = '';
    for (let i = 0, n = charset.length; i < length; ++i) {
      password += charset.charAt(Math.floor(Math.random() * n));
    }
    return password;
  };

  const addPassword = () => {
    const password = {
      id: uuidv4(),
      value: generatePassword()
    };
    setPasswords([...passwords, password]);
  };

  const removePassword = (id) => {
    setPasswords(passwords.filter(password => password.id !== id));
  };

  const copyToClipboard = (password) => {
    navigator.clipboard.writeText(password).then(() => {
      alert('Password copied to clipboard!');
    }, (err) => {
      console.error('Could not copy text: ', err);
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 via-green-500 to-teal-500">
      <div className="max-w-lg p-6 bg-white rounded-lg shadow-lg">
        <h1 className="mb-4 text-2xl font-bold text-center text-gray-800">Password Manager</h1>
        <button
          className="block px-4 py-2 mx-auto mb-4 font-semibold text-white bg-blue-500 rounded hover:bg-blue-700"
          onClick={addPassword}
        >
          Generate New Password
        </button>
        <ul>
          {passwords.map(password => (
            <li key={password.id} className="flex items-center justify-between p-2 mb-2 bg-gray-100 rounded">
              <span className="text-gray-800">{password.value}</span>
              <div className="flex space-x-2">
                <button
                  className="px-2 py-1 text-sm font-semibold text-white bg-green-500 rounded hover:bg-green-700"
                  onClick={() => copyToClipboard(password.value)}
                >
                  Copy
                </button>
                <button
                  className="px-2 py-1 text-sm font-semibold text-white bg-red-500 rounded hover:bg-red-700"
                  onClick={() => removePassword(password.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PasswordManager;
