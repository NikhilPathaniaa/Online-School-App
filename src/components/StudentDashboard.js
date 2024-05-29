// src/components/StudentDashboard.js
import React from "react";
import Header from "./Header";
import StudentTable from "./StudentTable";

const StudentDashboard = () => {
  return (
    <div className="min-h-screen bg-purple-100 p-6">
      <div className="bg-white rounded-lg shadow-md p-4">
        <Header />
        <StudentTable />
      </div>
    </div>
  );
};

export default StudentDashboard;
