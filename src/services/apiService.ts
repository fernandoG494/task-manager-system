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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const loginUser = async (userData: any) => {
  try {
    const response = await api.post("/user/login", userData);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const validToken = async (token: string | null | undefined) => {
  let cleanedToken = cleanToken(token);

  const config = {
    headers: { Authorization: `Bearer ${cleanedToken}` },
  };

  let tokenInfo;
  if (token) {
    tokenInfo = await api.get("/user/check-token", config);
  }

  if (tokenInfo && tokenInfo.status === 200) {
    return true;
  } else {
    return false;
  }
};

export const retriveUsersInfo = async (token: string | null | undefined) => {
  let cleanedToken = cleanToken(token);

  const config = {
    headers: { Authorization: `Bearer ${cleanedToken}` },
  };

  let userInfo;
  if (token) {
    userInfo = await api.get("/user/me", config);
  }

  return userInfo;
};

function cleanToken(token: string | null | undefined) {
  if (token && token.charAt(0) === '"') {
    return token.replace(/"/g, "");
  } else {
    return token;
  }
}

export default api;
