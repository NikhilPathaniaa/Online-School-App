// src/components/SearchBar.js
import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
        <CiSearch size={24} className="text-[#6754b3]" />
      </div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="block pt-2 ps-10  border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 text-lg align-text-top"
        placeholder="Search"
      />
    </div>
  );
};

export default SearchBar;
