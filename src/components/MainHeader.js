// src/components/MainHeader.js
import React from "react";
import { CiSearch, CiBellOn, CiViewList, CiUser } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
const MainHeader = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="flex justify-between items-center mb-4 pt-3 p-6 pl-8 pb-0">
      <div className="flex">
        <h1 className="text-2xl font-bold">Students</h1>
        <span className="text-[#6754b3] rounded-3xl self-center ml-2.5 font-bold px-2 border border-[#6754b3]">82</span>
      </div>
      <div className="flex items-center space-x-4">
        {/* search start */}
        <div className="relative">
          <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
            <CiSearch size={24} className="text-[#6754b3]" />
          </div>
          <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="block ps-10 w-80 border-b-2 py-1.5 focus:outline-none" placeholder="Search" />
        </div>
        {/* search end */}
        <button className="p-2 rounded-full">
          <CiViewList size={30} className="text-[#6754b3]" />
        </button>
        <button className="p-2 rounded-full">
          <CiBellOn size={30} className="text-[#6754b3]" />
        </button>
        <button className="p-2 bg-gray-200 rounded-full">
          <CiUser size={40} className="text-[#6754b3]" />
        </button>
        <IoIosArrowDown className="text-[#6754b3]" />
      </div>
    </div>
  );
};

export default MainHeader;
