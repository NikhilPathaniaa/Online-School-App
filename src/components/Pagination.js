// src/components/Pagination.js
import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-between items-center mt-4">
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} className="bg-purple-500 text-white rounded px-4 py-2">
        &larr;
      </button>
      <span>
        {currentPage} of {totalPages}
      </span>
      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} className="bg-purple-500 text-white rounded px-4 py-2">
        &rarr;
      </button>
    </div>
  );
};

export default Pagination;
