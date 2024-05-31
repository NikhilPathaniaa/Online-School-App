// src/components/StudentTable.js
import React, { useEffect, useState } from "react";
import { fetchStudents } from "../api";
import Pagination from "./Pagination";

const StudentTable = ({ selectedFields, searchQuery }) => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [studentsPerPage] = useState(9);

  useEffect(() => {
    const getStudents = async () => {
      try {
        const data = await fetchStudents();
        setStudents(data.data); // assuming API response structure is { data: [...] }
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    getStudents();
  }, []);

  const filteredStudents = students.filter((student) => selectedFields.some((field) => student.attributes[field]?.toString().includes(searchQuery)));

  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = students.slice(indexOfFirstStudent, indexOfLastStudent);
  const totalPages = Math.ceil(students.length / studentsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching students: {error.message}</div>;

  const studentsToDisplay = searchQuery ? filteredStudents.slice(0, studentsPerPage) : currentStudents;

  return (
    <div className="bg-white rounded-b-lg p-4 pt-0">
      <table className="min-w-full bg-white border border-gray-300 rounded-3xl">
        <thead>
          <tr>
            <th scope="col" className="py-3 px-4 text-left border-b border-gray-300">
              <div className="flex items-center  ">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className="w-4 h-4 text-[#6754b3] bg-gray-100 border-gray-300 rounded focus:ring-[#6754b3] dark:focus:ring-[#6754b3] dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-all-search" className="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            {selectedFields.map((field) => (
              <th key={field} className="py-3 px-4 text-left border-b border-gray-300">
                {field}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {studentsToDisplay.map((student, index) => (
            <tr key={index} className="border-b border-gray-300">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id={`checkbox-table-search-${index}`}
                    type="checkbox"
                    className="w-4 h-4 text-[#6754b3] bg-gray-100 border-gray-300 rounded focus:ring-[#6754b3] dark:focus:ring-[#6754b3] dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor={`checkbox-table-search-${index}`} className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              {selectedFields.map((field) => (
                <td key={field} className="py-3 px-4 ">
                  {student.attributes[field] === null ? "-" : student.attributes[field]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {!searchQuery && <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />}
    </div>
  );
};

export default StudentTable;
