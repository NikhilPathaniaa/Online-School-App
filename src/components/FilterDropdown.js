// src/components/FilterDropdown.js
import React, { useState } from "react";
import { CiFilter } from "react-icons/ci";

const fields = ["firstName", "lastName", "middleName", "gender", "dob", "handicapped", "bloodGroup", "parentContactNo", "parentEmailId", "currentAddress", "createdAt", "updatedAt", "city", "state", "publishedAt", "apartmentName"];

const FilterDropdown = ({ selectedFields, setSelectedFields }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCheckboxChange = (field) => {
    if (selectedFields.includes(field)) {
      setSelectedFields((prevFields) => prevFields.filter((item) => item !== field));
    } else if (selectedFields.length < 7) {
      setSelectedFields((prevFields) => [...prevFields, field]);
    }
  };

  return (
    <div className="relative">
      <button className=" text-white px-2 py-2 border border-[#6754b3] rounded-full" onClick={() => setIsOpen(!isOpen)}>
        <CiFilter size={24} className="text-[#6754b3]" />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white border rounded shadow-lg">
          {fields.map((field) => (
            <label key={field} className="block px-4 py-2">
              <input type="checkbox" checked={selectedFields.includes(field)} onChange={() => handleCheckboxChange(field)} disabled={!selectedFields.includes(field) && selectedFields.length >= 7} className="mr-2" />
              {field}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
