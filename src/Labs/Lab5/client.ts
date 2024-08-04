import axios from "axios";

const BASE_URL = process.env.REACT_APP_REMOTE_SERVER || "http://localhost:4000";

const TODOS_API = `${BASE_URL}/lab5/todos`;
const WELCOME_API = `${BASE_URL}/api/welcome`;
const ASSIGNMENTS_API = `${BASE_URL}/api/assignments`;
const COURSES_API = `${BASE_URL}/api/courses`;

// Todos APIs
export const fetchTodos = async () => {
  const response = await axios.get(TODOS_API);
  return response.data;
};

export const createTodo = async (todo: any) => {
  const response = await axios.post(TODOS_API, todo);
  return response.data;
};

export const removeTodo = async (todo: any) => {
  const response = await axios.get(`${TODOS_API}/${todo.id}/delete`);
  return response.data;
};

export const deleteTodo = async (todo: any) => {
  const response = await axios.delete(`${TODOS_API}/${todo.id}`);
  return response.data;
};

export const updateTodo = async (todo: any) => {
  const response = await axios.put(`${TODOS_API}/${todo.id}`, todo);
  return response.data;
};

export const postTodo = async (todo: any) => {
  const response = await axios.post(TODOS_API, todo);
  return response.data;
};

// Welcome API
export const fetchWelcomeMessage = async () => {
  const response = await axios.get(WELCOME_API);
  return response.data;
};

// Assignments APIs
export const fetchAssignment = async () => {
  const response = await axios.get(ASSIGNMENTS_API);
  return response.data;
};

export const updateTitle = async (title: string) => {
  const response = await axios.put(ASSIGNMENTS_API, { title });
  return response.data;
};

// Courses APIs
export const fetchAllCourses = async () => {
  const { data } = await axios.get(COURSES_API);
  return data;
};

export const createCourse = async (course: any) => {
  const response = await axios.post(COURSES_API, course);
  return response.data;
};

export const deleteCourse = async (id: string) => {
  const response = await axios.delete(`${COURSES_API}/${id}`);
  return response.data;
};

export const updateCourse = async (course: any) => {
  const response = await axios.put(`${COURSES_API}/${course._id}`, course);
  return response.data;
};
