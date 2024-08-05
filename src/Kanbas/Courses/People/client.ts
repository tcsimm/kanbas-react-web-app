// src/Kanbas/Courses/People/client.ts
import axios from "axios";

export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export const USERS_API = `${REMOTE_SERVER}/api/users`;

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
  
export const findUsersByRole = async (role: string) => {
  const response = await axios.get(`${USERS_API}?role=${role}`);
  return response.data;
};

export const findUsersByPartialName = async (name: string) => {
  const response = await axios.get(`${USERS_API}?name=${name}`);
  return response.data;
};

export const deleteUser = async (userId: string) => {
    const response = await axios.delete( `${USERS_API}/${userId}` );
    return response.data;
  };
  
