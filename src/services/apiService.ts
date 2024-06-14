/* eslint-disable no-useless-catch */
import axios from "axios";

const API_BASE_URL = `${import.meta.env.VITE_API_URI}:${
  import.meta.env.VITE_API_PORT
}`;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const registerUser = async (userData: any) => {
  try {
    const response = await api.post("/user", userData);
    return response.data;
  } catch (error) {
    return error;
  }
};

export default api;
