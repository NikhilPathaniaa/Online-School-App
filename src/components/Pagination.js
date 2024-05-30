// src/components/Pagination.js
import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-between items-center mt-3">
      <h1 className="text-white">_</h1>
      <div>
        <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} className="  bg-[#6754b3] mr-4  text-white w-20 text-2xl rounded-2xl ">
          <IoIosArrowBack className="items-center" />
        </button>

        <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} className="bg-[#6754b3] text-white w-20 text-2xl rounded-2xl">
          <IoIosArrowForward />
        </button>
      </div>

      <span className="text-[#6754b3] border-[#6754b3] ">
        <span className=" border border-[#6754b3] rounded-2xl ">{currentPage} </span> of {totalPages}
      </span>
    </div>
  );
};

export default Pagination;
