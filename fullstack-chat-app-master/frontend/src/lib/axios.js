import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:"https://chat-app-29x5.onrender.com/api",
  withCredentials: true,
});
