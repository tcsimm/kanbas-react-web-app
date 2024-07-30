// src/Kanbas/Courses/Modules/client.ts
import axios from "axios";

const BASE_URL = process.env.REACT_APP_REMOTE_SERVER || "http://localhost:4000";
const MODULES_API = `${BASE_URL}/api/courses`;

export const findModulesForCourse = async (courseId: string) => {
  const response = await axios.get(`${MODULES_API}/${courseId}/modules`);
  return response.data;
};

export const createModule = async (courseId: string, module: any) => {
  const response = await axios.post(`${MODULES_API}/${courseId}/modules`, module);
  return response.data;
};

export const deleteModule = async (id: string) => {
  const response = await axios.delete(`${BASE_URL}/api/modules/${id}`);
  return response.data;
};

export const updateModule = async (id: string, module: any) => {
  const response = await axios.put(`${BASE_URL}/api/modules/${id}`, module);
  return response.data;
};
