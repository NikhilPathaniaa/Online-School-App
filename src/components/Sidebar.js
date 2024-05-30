import React from "react";
import { IoHome, IoPeople, IoSchool, IoCalendar, IoSettings, IoLogOut } from "react-icons/io5";
import { FaPlane } from "react-icons/fa"; // Assuming the logo looks like a plane icon

const Sidebar = () => {
  return (
    <div className="h-screen w-20 bg-purple-700 text-white flex flex-col items-center py-4 space-y-6">
      {/* Logo at the top */}
      <div className="flex items-center justify-center w-full mb-4">
        <FaPlane size={28} />
      </div>

      {/* Icons */}
      <IoHome size={24} />
      <IoPeople size={24} />
      <IoSchool size={24} />
      <IoCalendar size={24} />
      <IoSettings size={24} />

      {/* Spacer to push logout icon to the bottom */}
      <div className="flex-1"></div>

      {/* Logout icon */}
      <div className="mb-4">
        <IoLogOut size={24} />
      </div>
    </div>
  );
};

export default Sidebar;
