// src/components/StudentTable.js
import React from "react";
import StudentRow from "./StudentRow";
import Pagination from "./Pagination";

const students = [
  { id: 12289, firstName: "Daisy", lastName: "Scott", email: "daisy22@gmail.com", phone: "+442146886341", yearGroup: "Grade 10" },
  { id: 12288, firstName: "Isabel", lastName: "Harris", email: "isabel887@gmail.com", phone: "+442251886322", yearGroup: "Grade 12" },
  { id: 12287, firstName: "Dan", lastName: "Thomas", email: "dan87675@gmail.com", phone: "+442445823555", yearGroup: "Grade 12" },
  { id: 12286, firstName: "Debra", lastName: "Nelson", email: "debral212@gmail.com", phone: "+442342293243", yearGroup: "Grade 11" },
  { id: 12285, firstName: "Vera", lastName: "Cooper", email: "vera8888@gmail.com", phone: "+442118925444", yearGroup: "Grade 12" },
  { id: 12284, firstName: "Brian", lastName: "Miller", email: "brian5564@gmail.com", phone: "+442243236311", yearGroup: "Grade 12" },
  { id: 12283, firstName: "Lauren", lastName: "Martin", email: "lauren7712@gmail.com", phone: "+442898235622", yearGroup: "Grade 10" },
  { id: 12282, firstName: "Milton", lastName: "Smith", email: "milton2244@gmail.com", phone: "+442044975177", yearGroup: "Grade 12" },
  { id: 12281, firstName: "Molly", lastName: "White", email: "molly4747@gmail.com", phone: "+442041996398", yearGroup: "Grade 12" },
];

const StudentTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="text-left">
            <th className="py-3 px-4">Photo</th>
            <th className="py-3 px-4">ID</th>
            <th className="py-3 px-4">First name</th>
            <th className="py-3 px-4">Last name</th>
            <th className="py-3 px-4">Email</th>
            <th className="py-3 px-4">Phone</th>
            <th className="py-3 px-4">Year group</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <StudentRow key={index} student={student} />
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default StudentTable;
