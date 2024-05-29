// src/components/StudentDashboard.js
import React from "react";
import MainHeader from "./MainHeader";
import TableHeader from "./TableHeader";
import StudentTable from "./StudentTable";

const StudentDashboard = () => {
  return (
    <div className="min-h-screen bg-purple-100 p-6">
      <div className="bg-white rounded-lg shadow-md p-4">
        <MainHeader />
        <TableHeader />
        <StudentTable />
      </div>
    </div>
  );
};

export default StudentDashboard;
