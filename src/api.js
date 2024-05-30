// src/api.js

const API_URL = "http://3.223.98.72:1337/api/students";

export const fetchStudents = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching students:", error);
    throw error;
  }
};
