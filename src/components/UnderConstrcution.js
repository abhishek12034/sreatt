// src/components/UnderConstruction.js
import React from 'react';

const UnderConstruction = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-blue-600 via-indigo-700 to-pink-600 text-white font-sans">
      <div className="text-center p-8 space-y-6 max-w-xl mx-auto">
        <h1 className="text-6xl font-extrabold text-shadow-md animate__animated animate__fadeIn animate__delay-0.5s">
          🚧 Page Under Construction 🚧
        </h1>
        <p className="text-xl font-medium animate__animated animate__fadeIn animate__delay-1s">
          We're working hard to bring this page to life. Stay tuned for something amazing!
        </p>
        <div className="mt-10">
          <img
            src="https://cdn.pixabay.com/photo/2017/10/26/17/51/under-construction-2891888_1280.jpg"
            alt="Under Construction"
            className="w-56 h-56 mx-auto rounded-full border-4 border-white shadow-xl animate__animated animate__bounceIn animate__delay-2s"
          />
        </div>
        <div className="mt-6 text-lg text-gray-100">
          <p>Thanks for your patience. We'll be back shortly!</p>
        </div>
      </div>
      <footer className="absolute bottom-8 w-full text-center text-sm font-medium text-gray-300">
        <p>© 2024 Your Company. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default UnderConstruction;
