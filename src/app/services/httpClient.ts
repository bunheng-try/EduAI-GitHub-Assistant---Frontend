import { axiosInstance } from "./axiosInstance";

export const httpClient = {
  get: async <T>(url: string): Promise<T> => {
    try {
      const res = await axiosInstance.get<T>(url);
      console.log("GET success:", url, res.data);
      return res.data;
    } catch (err: any) {
      console.error("GET error:", url, err.response?.data || err.message);
      throw new Error(err.response?.data?.message || err.message || "Network error");
    }
  },

  post: async <T, B>(url: string, body: B): Promise<T> => {
    try {
      const res = await axiosInstance.post<T>(url, body);
      console.log("POST success:", url, res.data);
      return res.data;
    } catch (err: any) {
      console.error("POST error:", url, err.response?.data || err.message);
      throw new Error(err.response?.data?.message || err.message || "Network error");
    }
  },

  patch: async <T, B>(url: string, body: B): Promise<T> => {
    try {
      const res = await axiosInstance.patch<T>(url, body);
      console.log("PATCH success:", url, res.data);
      return res.data;
    } catch (err: any) {
      console.error("PATCH error:", url, err.response?.data || err.message);
      throw new Error(err.response?.data?.message || err.message || "Network error");
    }
  },

  delete: async <T>(url: string): Promise<T> => {
    try {
      const res = await axiosInstance.delete<T>(url);
      console.log("DELETE success:", url, res.data);
      return res.data;
    } catch (err: any) {
      console.error("DELETE error:", url, err.response?.data || err.message);
      throw new Error(err.response?.data?.message || err.message || "Network error");
    }
  },
};
