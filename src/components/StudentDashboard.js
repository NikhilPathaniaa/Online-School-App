// src/components/StudentDashboard.js
import React from "react";
// import Sidebar from "./Sidebar";
import MainHeader from "./MainHeader";
import TableHeader from "./TableHeader";
import StudentTable from "./StudentTable";

const StudentDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* <Sidebar /> */}
      <div className="flex-1 p-4">
        <MainHeader />
        <hr />
        <TableHeader />
        <StudentTable />
      </div>
    </div>
  );
};

export default StudentDashboard;
