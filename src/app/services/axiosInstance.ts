import axios from "axios";
import { getAuthToken, useAuthStore } from "../store/autStore";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = getAuthToken();
  if (token) {
    config.headers!["Authorization"] = `Bearer ${token}`;
  }
  console.log("➡️ Sending request:", config.method?.toUpperCase(), config.url, "Body:", config.data);
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    console.log("✅ Response:", response.status, response.config.url, response.data);
    return response;
  },
  (error) => {
    console.error("❌ Axios error:", error.response?.status, error.response?.data || error.message);

    if (error.response?.status === 401) {
      console.warn("Unauthorized, clearing auth...");
      useAuthStore.getState().clearAuth();
      window.location.href = "/signin";
    }

    return Promise.reject(error);
  }
);
