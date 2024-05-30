// src/components/TableHeader.js
import React from "react";

const TableHeader = () => {
  return (
    <div className=" mb-4 pt-0 pb-0 p-4">
      <h1>Select school</h1>
      <select className="border rounded p-2 text-black">
        <option>Big Ben</option>
      </select>
    </div>
  );
};

export default TableHeader;
