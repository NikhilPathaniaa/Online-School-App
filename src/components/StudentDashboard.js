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
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <br />
        <TableHeader />
        <StudentTable />
      </div>
    </div>
  );
};

export default StudentDashboard;
