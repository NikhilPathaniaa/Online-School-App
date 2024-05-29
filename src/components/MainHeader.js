// src/components/MainHeader.js
import React from "react";

const MainHeader = () => {
  return (
    <div className="flex justify-between items-center mb-4">
      <div className="flex items-center space-x-2">
        <h1 className="text-2xl font-bold">Students</h1>
        <span className="text-gray-500 bg-gray-200 rounded-full px-2 py-1 text-sm">82</span>
      </div>
      <div className="flex items-center space-x-4">
        <input type="text" placeholder="Search" className="border rounded p-2" />
        <button className="bg-gray-200 p-2 rounded-full">
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8h18M3 12h18M3 16h18"></path>
          </svg>
        </button>
        <button className="bg-gray-200 p-2 rounded-full">
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 15.158V14a2 2 0 00-1.72-1.977 4 4 0 00-7.263-1.347A4 4 0 003 14v1.159c0 .414-.152.82-.427 1.139L1 17h5m4 0v2m0 0a2 2 0 11-4 0v-2a2 2 0 014 0z"></path>
          </svg>
        </button>
        <img src="https://via.placeholder.com/32" alt="User Profile" className="rounded-full" />
      </div>
    </div>
  );
};

export default MainHeader;
