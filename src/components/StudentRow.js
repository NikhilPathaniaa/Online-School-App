// src/components/StudentRow.js
import React from "react";

const StudentRow = ({ student }) => {
  return (
    <tr className="border-t">
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
