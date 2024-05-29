import React from "react";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold">Students</h1>
          <span className="text-gray-500 bg-gray-200 rounded-full px-2 py-1 text-sm">82</span>
        </div>
        <div className="flex items-center space-x-2">
          <img src="https://via.placeholder.com/32" alt="User Profile" className="rounded-full" />
        </div>
      </div>
      <div className="flex justify-between items-center mb-4">
        <select className="border rounded p-2">
          <option>Big Ben</option>
        </select>
        <button className="bg-purple-500 text-white rounded px-4 py-2">Add a student</button>
      </div>
    </div>
  );
};

export default Header;
