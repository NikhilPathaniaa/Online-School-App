// src/components/TableHeader.js
import React from "react";

const TableHeader = () => {
  return (
    <div className=" mb-4 pt-0 pb-0 p-4">
      <h1>Select school</h1>
      <span className="inline-block border rounded text-black p-1 font-bold my-1">
        <select className="pr-16">
          <option>Big Ben</option>
        </select>
      </span>
    </div>
  );
};

export default TableHeader;
