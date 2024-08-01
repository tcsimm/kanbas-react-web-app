import axios from "axios";

const BASE_URL = process.env.REACT_APP_REMOTE_SERVER || "http://localhost:4000";
const COURSES_API = `${BASE_URL}/api/courses`;
const MODULES_API = `${BASE_URL}/api/modules`;

export const findModulesForCourse = async (courseId: string) => {
  console.log(`Fetching modules for course ID: ${courseId}`);
  const response = await axios.get(`${COURSES_API}/${courseId}/modules`);
  console.log(`Modules fetched: ${JSON.stringify(response.data)}`); 
  return response.data;
};

export const createModule = async (courseId: string, module: any) => {
  const response = await axios.post(`${COURSES_API}/${courseId}/modules`, module);
  return response.data;
};

export const deleteModule = async (id: string) => {
  const response = await axios.delete(`${MODULES_API}/${id}`);
  return response.data;
};

export const updateModule = async (id: string, module: any) => {
  const response = await axios.put(`${MODULES_API}/${id}`, module);
  return response.data;
};
