import axios from "axios";

const BASE_URL = process.env.REACT_APP_REMOTE_SERVER || "http://localhost:4000";
const COURSES_API = `${BASE_URL}/api/courses`;

export const fetchAllCourses = async () => {
  const { data } = await axios.get(COURSES_API);
  return data;
};

export const createCourse = async (course: any) => {
  const { data } = await axios.post(COURSES_API, course);
  return data;
};

export const deleteCourse = async (id: string) => {
  await axios.delete(`${COURSES_API}/${id}`);
};

export const updateCourse = async (course: any) => {
  const response = await axios.put(`${COURSES_API}/${course._id}`, course);
  return response.data;
};
