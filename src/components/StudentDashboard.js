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
    <div className="flex flex-col lg:flex-row h-screen bg-[#6754b3] text-white">
      <Sidebar />
      {/* <div className="flex-1 p-6 bg-purple-100 rounded-l-lg lg:rounded-l-none lg:rounded-r-lg"> */}
      <div className="bg-white mt-3 ml-5 w-11/12 h-2/4 text-black rounded-lg">
        <MainHeader />
        <hr />
        <div className="flex justify-between items-center pl-4 pr-4">
          <TableHeader />
          <div className="w-8/12"></div>
          <FilterDropdown selectedFields={selectedFields} setSelectedFields={setSelectedFields} />
          <div className="flex items-center space-x-2">
            <button className="bg-[#6754b3] text-white rounded-3xl px-4 py-2">+ Add a student</button>
          </div>
        </div>
        <StudentTable selectedFields={selectedFields} />
      </div>
    </div>
    // </div>
  );
};

export default StudentDashboard;
