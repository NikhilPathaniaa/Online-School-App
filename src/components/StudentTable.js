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
            {selectedFields.map((field) => (
              <th key={field} className="py-3 px-4">
                {field}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentStudents.map((student, index) => (
            <tr key={index} className="border-b">
              {selectedFields.map((field) => (
                <td key={field} className="py-3 px-4">
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
