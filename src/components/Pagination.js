// src/components/Pagination.js
import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-between items-center mt-3">
      <h1 className="text-white">_</h1>
      <div>
        <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} className="bg-[#6754b3] mr-4 text-white w-14 rounded-2xl px-4 py-2">
          &larr;
        </button>

        <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} className="bg-[#6754b3] text-white w-14 rounded-2xl px-4 py-2">
          &rarr;
        </button>
      </div>

      <span className="text-[#6754b3]">
        <span className=" pl-3  pr-1 mr-2 border border-[#6754b3] rounded-2xl ">{currentPage} </span> of {totalPages}
      </span>
    </div>
  );
};

export default Pagination;
