// src/components/Pagination.js
import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-between items-center mt-4">
      <div>_</div>
      <div>
        <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} className="bg-[#6754b3] text-white rounded px-4 py-2">
          &larr;
        </button>
        <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} className="bg-[#6754b3] text-white rounded px-4 py-2">
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
