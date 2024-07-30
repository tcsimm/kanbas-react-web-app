// src/Labs/Lab5/client.ts
import axios from "axios";

// Update the base URL as per your server configuration
const BASE_URL = process.env.REACT_APP_REMOTE_SERVER || "http://localhost:4000";

// Lab5 APIs
const TODOS_API = `${BASE_URL}/api/todos`;
const WELCOME_API = `${BASE_URL}/api/welcome`;
const ASSIGNMENTS_API = `${BASE_URL}/api/assignments`;

// Fetch welcome message
export const fetchWelcomeMessage = async () => {
  const response = await axios.get(WELCOME_API);
  return response.data;
};

// Fetch all todos
export const fetchTodos = async () => {
  const response = await axios.get(TODOS_API);
  return response.data;
};

// Create a new todo
export const createTodo = async (todo: any) => {
  const response = await axios.post(TODOS_API, todo);
  return response.data;
};

// Post a new todo
export const postTodo = async (todo: any) => {
  const response = await axios.post(TODOS_API, todo);
  return response.data;
};

// Remove a todo
export const removeTodo = async (todo: any) => {
  const response = await axios.get(`${TODOS_API}/${todo.id}/delete`);
  return response.data;
};

// Delete a todo
export const deleteTodo = async (todo: any) => {
  const response = await axios.delete(`${TODOS_API}/${todo.id}`);
  return response.data;
};

// Update a todo
export const updateTodo = async (todo: any) => {
  const response = await axios.put(`${TODOS_API}/${todo.id}`, todo);
  return response.data;
};

// Fetch an assignment
export const fetchAssignment = async () => {
  const response = await axios.get(ASSIGNMENTS_API);
  return response.data;
};

// Update assignment title
export const updateTitle = async (title: string) => {
  const response = await axios.put(ASSIGNMENTS_API, { title });
  return response.data;
};

// Kanbas APIs
const COURSES_API = `${BASE_URL}/api/courses`;

// Fetch all courses
export const fetchAllCourses = async () => {
  const { data } = await axios.get(COURSES_API);
  return data;
};

// Create a new course
export const createCourse = async (course: any) => {
  const response = await axios.post(COURSES_API, course);
  return response.data;
};

// Delete a course
export const deleteCourse = async (id: string) => {
  const response = await axios.delete(`${COURSES_API}/${id}`);
  return response.data;
};

// Update a course
export const updateCourse = async (course: any) => {
  const response = await axios.put(`${COURSES_API}/${course._id}`, course);
  return response.data;
};
