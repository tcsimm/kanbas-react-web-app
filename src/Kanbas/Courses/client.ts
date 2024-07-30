import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER || "http://localhost:4000";
const COURSES_API = `${REMOTE_SERVER}/api/courses`;

export const fetchAllCourses = async () => {
  const { data } = await axios.get(COURSES_API);
  return data;
};

export const createCourse = async (course: any) => {
  const { data } = await axios.post(COURSES_API, course);
  return data;
};

export const deleteCourse = async (courseId: any) => {
  await axios.delete(`${COURSES_API}/${courseId}`);
};

export const updateCourse = async (course: any) => {
  await axios.put(`${COURSES_API}/${course._id}`, course);
};
