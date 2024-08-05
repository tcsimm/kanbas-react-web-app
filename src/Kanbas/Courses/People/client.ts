// src/Kanbas/Courses/People/client.ts
import axios from "axios";

export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export const USERS_API = `${REMOTE_SERVER}/api/users`;

// Function to find all users
export const findAllUsers = async () => {
  try {
    console.log(`Requesting all users from ${USERS_API}`);
    const response = await axios.get(USERS_API);
    console.log('Users data:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching all users:', error);
    throw error;
  }
};

// Function to find a user by ID
export const findUserById = async (id: string) => {
  try {
    console.log(`Requesting user by ID: ${id}`);
    const response = await axios.get(`${USERS_API}/${id}`);
    console.log('User data:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching user by ID:', error);
    throw error;
  }
};

// Function to find users by role
export const findUsersByRole = async (role: string) => {
  try {
    const response = await axios.get(`${USERS_API}?role=${role}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users by role:', error);
    throw error;
  }
};

// Function to find users by partial name
export const findUsersByPartialName = async (name: string) => {
  try {
    const response = await axios.get(`${USERS_API}?name=${name}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users by partial name:', error);
    throw error;
  }
};

// Function to delete a user
export const deleteUser = async (userId: string) => {
  try {
    const response = await axios.delete(`${USERS_API}/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
};

// Function to update a user
export const updateUser = async (user: any) => {
  try {
    console.log(`Updating user with ID: ${user._id}`);
    const response = await axios.put(`${USERS_API}/${user._id}`, user);
    console.log('Update response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
};

export const createUser = async (user: any) => {
    const response = await axios.post(`${USERS_API}`, user);
    return response.data;
  };
  
  
