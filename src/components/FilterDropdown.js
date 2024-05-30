// src/components/FilterDropdown.js
import React, { useState } from "react";
import { CiFilter } from "react-icons/ci";
const fields = ["firstName", "lastName", "middleName", "gender", "dob", "handicapped", "bloodGroup", "parentContactNo", "parentEmailId", "currentAddress", "createdAt", "updatedAt", "city", "state", "publishedAt", "apartmentName"];

const FilterDropdown = ({ selectedFields, setSelectedFields }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCheckboxChange = (field) => {
    setSelectedFields((prevFields) => (prevFields.includes(field) ? prevFields.filter((item) => item !== field) : [...prevFields, field]));
  };

  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)}>
        <CiFilter />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
          {fields.map((field) => (
            <label key={field} className="block px-4 py-2">
              <input type="checkbox" checked={selectedFields.includes(field)} onChange={() => handleCheckboxChange(field)} className="mr-2" />
              {field}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
