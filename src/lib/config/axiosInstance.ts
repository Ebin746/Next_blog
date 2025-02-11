// lib/axiosInstance.ts
import axios from "axios";

const axiosInstance = axios.create({
  // Set your base URL here (e.g., your API endpoint)
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000",
  // You can set default headers here
  headers: {
    "Content-Type": "multipart/form-data", // For formData posts; adjust if necessary
  },
});

// Optional: Add interceptors for request/response if needed
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // You can handle errors globally here
    return Promise.reject(error);
  }
);

export default axiosInstance;
