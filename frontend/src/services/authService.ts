import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/auth",
});

export const registerUser = async (
  data: {
    name: string;
    email: string;
    password: string;
  }
) => {
  const response = await API.post(
    "/register",
    data
  );

  return response.data;
};

export const loginUser = async (
  data: {
    email: string;
    password: string;
  }
) => {
  const response = await API.post(
    "/login",
    data
  );

  return response.data;
};