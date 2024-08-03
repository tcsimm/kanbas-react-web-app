import axios from "axios";

const BASE_URL = process.env.REACT_APP_REMOTE_SERVER || "http://localhost:4000";
const COURSES_API = `${BASE_URL}/api/courses`;

export const createAssignment = async (courseId: string, assignment: any) => {
  const response = await axios.post(`${COURSES_API}/${courseId}/assignments`, assignment);
  return response.data;
};

export const getAssignmentsForCourse = async (courseId: string) => {
  const response = await axios.get(`${COURSES_API}/${courseId}/assignments`);
  return response.data;
};

export const updateAssignment = async (assignment: any) => {
  const response = await axios.put(`${BASE_URL}/api/assignments/${assignment._id}`, assignment);
  return response.data;
};

export const deleteAssignment = async (id: string) => {
  const response = await axios.delete(`${BASE_URL}/api/assignments/${id}`);
  return response.data;
};
