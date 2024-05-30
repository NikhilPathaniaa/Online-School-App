// src/components/MainHeader.js
import React from "react";
import { CiSearch, CiBellOn, CiViewList, CiUser } from "react-icons/ci";

const MainHeader = () => {
  return (
    <div className="flex justify-between items-center mb-4">
      <div className="flex items-center space-x-2">
        <h1 className="text-2xl font-bold">Students</h1>
        <span className="text-gray-500 bg-gray-200 rounded-full px-2 py-1 text-sm">82</span>
      </div>
      <div className="flex items-center space-x-4">
        <CiSearch />
        <input type="text" placeholder="Search" className="border rounded p-2"></input>
        <button className="bg-gray-200 p-2 rounded-full">
          <CiViewList />
        </button>
        <button className="bg-gray-200 p-2 rounded-full">
          <CiBellOn />
        </button>
        <CiUser />
      </div>
    </div>
  );
};

export default MainHeader;
