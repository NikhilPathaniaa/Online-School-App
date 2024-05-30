// src/components/StudentDashboard.js
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import MainHeader from "./MainHeader";
import TableHeader from "./TableHeader";
import StudentTable from "./StudentTable";
import FilterDropdown from "./FilterDropdown";

const StudentDashboard = () => {
  const [selectedFields, setSelectedFields] = useState(["firstName", "lastName", "gender", "dob", "bloodGroup", "parentContactNo", "parentEmailId"]);

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-purple-700 text-white">
      <Sidebar />
      <div className="flex-1 p-6 bg-purple-100 rounded-l-lg lg:rounded-l-none lg:rounded-r-lg">
        <MainHeader />
        <div className="bg-white text-black rounded-lg">
          <div className="flex justify-between items-center p-4">
            <TableHeader />
            <div className="w-4/6"></div>
            <FilterDropdown selectedFields={selectedFields} setSelectedFields={setSelectedFields} />
            <div className="flex items-center space-x-2">
              <button className="bg-purple-500 text-white rounded px-4 py-2">+ Add a student</button>
            </div>
          </div>
          <StudentTable selectedFields={selectedFields} />
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
