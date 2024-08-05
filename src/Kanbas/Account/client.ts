import axios from "axios";

export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export const USERS_API = `${REMOTE_SERVER}/api/users`;

export const signup = async (user: any) => {
  try {
    const response = await axios.post(`${USERS_API}/signup`, user);
    return response.data;
  } catch (error) {
    console.error('Error signing up:', error);
    throw error;
  }
};

export const signin = async (credentials: any) => {
  try {
    const response = await axios.post(`${USERS_API}/signin`, credentials);
    return response.data;
  } catch (error) {
    console.error('Error signing in:', error);
    throw error;
  }
};

export const profile = async () => {
  try {
    const response = await axios.post(`${USERS_API}/profile`);
    return response.data;
  } catch (error) {
    console.error('Error fetching profile:', error);
    throw error;
  }
};
