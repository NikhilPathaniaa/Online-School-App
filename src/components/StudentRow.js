// src/components/StudentRow.js
import React from "react";

const StudentRow = ({ student }) => {
  return (
    <tr className="border-t">
      <td class="w-4 p-4">
        <div class="flex items-center">
          <input
            id="checkbox-table-search-1"
            type="checkbox"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label for="checkbox-table-search-1" class="sr-only">
            checkbox
          </label>
        </div>
      </td>
      <td className="py-3 px-4">
        <img src={`https://via.placeholder.com/40?text=${student.firstName[0]}`} alt="Profile" className="rounded-full" />
      </td>
      <td className="py-3 px-4">{student.id}</td>
      <td className="py-3 px-4">{student.firstName}</td>
      <td className="py-3 px-4">{student.lastName}</td>
      <td className="py-3 px-4">{student.email}</td>
      <td className="py-3 px-4">{student.phone}</td>
      <td className="py-3 px-4">{student.yearGroup}</td>
    </tr>
  );
};

export default StudentRow;
