// src/components/MainHeader.js
import React from "react";
import { CiBellOn, CiViewList, CiUser } from "react-icons/ci";

const MainHeader = () => {
  return (
    <div className="flex justify-between items-center mb-4">
      <div className="flex items-center space-x-2">
        <h1 className="text-2xl font-bold">Students</h1>
        <span className="text-gray-500 bg-gray-200 rounded-full px-2 py-1 text-sm">82</span>
      </div>
      <div className="flex items-center space-x-4">
        <label for="table-search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="text" id="table-search-users" className="block pt-2 ps-10 text-sm border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" />
        </div>
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
