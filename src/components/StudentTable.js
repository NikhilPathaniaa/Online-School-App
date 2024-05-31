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

  if (loading)
    return (
      <div class="text-center">
        <div role="status">
          <svg aria-hidden="true" class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    );
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
          {studentsToDisplay.length === 0 ? (
            <tr>
              <td colSpan={selectedFields.length + 1} className="text-center py-3 px-4">
                No data found
              </td>
            </tr>
          ) : (
            studentsToDisplay.map((student, index) => (
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
            ))
          )}
        </tbody>
      </table>
      {!searchQuery && <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />}
    </div>
  );
};

export default StudentTable;
