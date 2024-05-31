// src/components/Pagination.js
import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-between items-center my-5">
      <div className="m-auto">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={(currentPage === 1 ? "border-[#999] text-slate-700 cursor-not-allowed" : "border-[#6754b3] text-white bg-[#6754b3]") + " mr-4 text-white w-14 rounded-2xl px-4 border"}>
          &lt;
        </button>

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={(currentPage === totalPages ? "border-[#999] text-slate-700 cursor-not-allowed" : "border-[#6754b3] text-white bg-[#6754b3]") + " mr-4 text-white w-14 rounded-2xl px-4 border"}>
          &gt;
        </button>
      </div>

      <span className="text-[#6754b3] flex gap-x-2.5 text-sm">
        <span className="rounded-3xl px-3.5 border border-[#6754b3]">{currentPage} </span>
        <span>of</span>
        <span>{totalPages} </span>
      </span>
    </div>
  );
};

export default Pagination;
