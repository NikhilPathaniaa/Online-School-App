// src/components/MainHeader.js
import React from "react";
import { CiSearch, CiBellOn, CiViewList, CiUser } from "react-icons/ci";

const MainHeader = () => {
  return (
    <div className="flex justify-between items-center mb-4">
      <div className="flex items-center space-x-2">
        <h1 className="text-2xl font-bold">Students</h1>
        <span className="text-[#6754b3] bg-gray-200 rounded-full px-2 py-1 text-sm">82</span>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
            <CiSearch size={24} className="text-[#6754b3]" />
          </div>
          <input
            type="text"
            id="table-search-users"
            className="block pt-2 ps-10  border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 text-lg align-text-top"
            placeholder="Search"
          />
        </div>
        <button className="bg-gray-200 p-2 rounded-full">
          <CiViewList size={24} className="text-[#6754b3]" />
        </button>
        <button className="bg-gray-200 p-2 rounded-full">
          <CiBellOn size={24} className="text-[#6754b3]" />
        </button>
        <CiUser size={24} className="text-[#6754b3]" />
      </div>
    </div>
  );
};

export default MainHeader;
