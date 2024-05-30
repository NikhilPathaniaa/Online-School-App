// src/components/StudentRow.js
import React from "react";

const StudentRow = ({ student, selectedFields }) => {
  return (
    <>
      <tr className="border-b">
        {selectedFields.map((field) => (
          <td key={field} className="py-3 px-4">
            {student[field]}
          </td>
        ))}
      </tr>
    </>
  );
};

export default StudentRow;
