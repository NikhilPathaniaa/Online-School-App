// src/components/Pagination.js
import React from "react";

const Pagination = () => {
  return (
    <div className="flex justify-between items-center p-4 border-t">
      <h1 className="text-white">H</h1>
      <div className="flex items-center space-x-2">
        <button className="text-gray-600 hover:text-gray-900">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="text-gray-600 hover:text-gray-900">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="flex items-center space-x-2">
        <span className="text-gray-600">1</span>
        <span className="text-gray-400">of</span>
        <span className="text-gray-600">10</span>
      </div>
    </div>
  );
};

export default Pagination;
