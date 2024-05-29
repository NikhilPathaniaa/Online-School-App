// src/components/TableHeader.js
import React from "react";

const TableHeader = () => {
  return (
    <div className="flex justify-between items-center mb-4 p-4 bg-purple-700 text-white rounded-t-lg">
      <select className="border rounded p-2 text-black">
        <option>Big Ben</option>
      </select>
      <div className="flex items-center space-x-2">
        <button className="bg-gray-200 p-2 rounded-full">
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h18M3 12h18M3 19h18"></path>
          </svg>
        </button>
        <button className="bg-purple-500 text-white rounded px-4 py-2">Add a student</button>
      </div>
    </div>
  );
};

export default TableHeader;
