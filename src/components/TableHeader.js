// src/components/TableHeader.js
import React from "react";
import { CiFilter } from "react-icons/ci";

const TableHeader = () => {
  return (
    <div className="flex justify-between items-center mb-4">
      <select className="border rounded p-2">
        <option>Big Ben</option>
      </select>
      <div className="flex items-center space-x-2">
        <button className=" p-2 rounded-full">
          <CiFilter />
        </button>
        <button className="bg-purple-500  text-white rounded px-4 py-2">+ Add a student</button>
      </div>
    </div>
  );
};

export default TableHeader;
