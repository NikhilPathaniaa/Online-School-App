// src/components/StudentTable.js
import React, { useEffect, useState } from "react";
import { fetchStudents } from "../api";
import Pagination from "./Pagination";

const StudentTable = ({ selectedFields }) => {
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

  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = students.slice(indexOfFirstStudent, indexOfLastStudent);
  const totalPages = Math.ceil(students.length / studentsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching students: {error.message}</div>;

  return (
    <div className="bg-white rounded-b-lg p-4">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th scope="col" class="p-4">
              <div class="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="checkbox-all-search" class="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            {selectedFields.map((field) => (
              <th key={field} className="py-3 px-4 border border-gray-300 text-left">
                {field}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentStudents.map((student, index) => (
            <tr key={index} className="border-b">
              <td class="w-4 p-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-table-search-2"
                    type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-table-search-2" class="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              {selectedFields.map((field) => (
                <td key={field} className="py-3 px-4 border border-gray-300">
                  {student.attributes[field]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default StudentTable;
